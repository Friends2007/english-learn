import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";
import { Plus, Trash2, Send } from "lucide-react";

interface Creator {
  id: string;
  name: string;
  image_url: string | null;
  telegram_link: string | null;
}

const adminApiCall = async (action: string, data: any = {}) => {
  const response = await fetch(
    `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/admin-creators`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
      },
      body: JSON.stringify({
        password: sessionStorage.getItem("admin_password"),
        action,
        ...data,
      }),
    }
  );
  return response.json();
};

const CreatorManager = () => {
  const [creators, setCreators] = useState<Creator[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [telegramLink, setTelegramLink] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const fetchCreators = async () => {
    const result = await adminApiCall("list");
    if (result.success) {
      setCreators(result.data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCreators();
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Please enter a name");
      return;
    }

    setSaving(true);
    let imageUrl: string | null = null;

    try {
      // Upload image if selected
      if (imageFile) {
        const fileExt = imageFile.name.split(".").pop();
        const fileName = `${Date.now()}.${fileExt}`;
        const { error: uploadError } = await supabase.storage
          .from("creator-images")
          .upload(fileName, imageFile);

        if (uploadError) {
          toast.error("Failed to upload image");
          setSaving(false);
          return;
        }

        const { data: urlData } = supabase.storage
          .from("creator-images")
          .getPublicUrl(fileName);

        imageUrl = urlData.publicUrl;
      }

      // Build telegram link from username
      let fullTelegramLink: string | null = null;
      if (telegramLink.trim()) {
        const username = telegramLink.trim().replace(/^@/, "");
        fullTelegramLink = `https://t.me/${username}`;
      }

      // Insert creator via edge function
      const result = await adminApiCall("create", {
        creatorData: {
          name: name.trim(),
          image_url: imageUrl,
          telegram_link: fullTelegramLink,
        },
      });

      if (!result.success) {
        toast.error(result.error || "Failed to add team member");
        setSaving(false);
        return;
      }

      toast.success("Team member added successfully");
      setName("");
      setTelegramLink("");
      setImageFile(null);
      setImagePreview(null);
      setShowForm(false);
      fetchCreators();
    } catch (error) {
      toast.error("An error occurred");
    }

    setSaving(false);
  };

  const handleDelete = async (id: string) => {
    const result = await adminApiCall("delete", { creatorId: id });
    
    if (!result.success) {
      toast.error(result.error || "Failed to delete team member");
      return;
    }

    toast.success("Team member deleted");
    fetchCreators();
  };

  const resetForm = () => {
    setName("");
    setTelegramLink("");
    setImageFile(null);
    setImagePreview(null);
    setShowForm(false);
  };

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Team Members</h2>
        {!showForm && (
          <Button onClick={() => setShowForm(true)} className="gap-2">
            <Plus className="w-4 h-4" />
            Add Member
          </Button>
        )}
      </div>

      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>Add New Team Member</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="telegram">Telegram Username</Label>
                <Input
                  id="telegram"
                  value={telegramLink}
                  onChange={(e) => setTelegramLink(e.target.value)}
                  placeholder="@username"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">Profile Photo</Label>
                <div className="flex items-center gap-4">
                  {imagePreview && (
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={imagePreview} />
                      <AvatarFallback>{name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  )}
                  <div className="flex-1">
                    <Input
                      id="image"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                <Button type="submit" disabled={saving}>
                  {saving ? "Saving..." : "Add Member"}
                </Button>
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {creators.length === 0 ? (
        <p className="text-muted-foreground text-center py-8">
          No team members added yet
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {creators.map((creator) => (
            <Card key={creator.id}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={creator.image_url || ""} />
                      <AvatarFallback>
                        {creator.name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{creator.name}</p>
                      {creator.telegram_link && (
                        <a
                          href={creator.telegram_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary flex items-center gap-1"
                        >
                          <Send className="w-3 h-3" />
                          Telegram
                        </a>
                      )}
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-destructive hover:text-destructive"
                    onClick={() => handleDelete(creator.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default CreatorManager;
