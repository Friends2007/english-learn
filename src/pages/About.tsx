import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Send, Users, BookOpen, Target } from "lucide-react";

interface Creator {
  id: string;
  name: string;
  image_url: string | null;
  telegram_link: string | null;
}

const About = () => {
  const [creators, setCreators] = useState<Creator[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .order("created_at", { ascending: true });

      if (!error && data) {
        setCreators(data);
      }
      setLoading(false);
    };

    fetchCreators();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About English Learning
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your comprehensive platform for learning English effectively with interactive lessons, 
            vocabulary exercises, and grammar guides.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6">
            <CardContent className="pt-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Interactive Lessons</h3>
              <p className="text-muted-foreground text-sm">
                Learn with engaging vocabulary quizzes and grammar exercises
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="pt-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Practice Tests</h3>
              <p className="text-muted-foreground text-sm">
                Test your knowledge with comprehensive English tests
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="pt-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Expert Content</h3>
              <p className="text-muted-foreground text-sm">
                Content created by experienced language educators
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Creators Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Our Team</h2>
          
          {loading ? (
            <div className="text-center text-muted-foreground">Loading...</div>
          ) : creators.length === 0 ? (
            <div className="text-center text-muted-foreground">
              No team members added yet
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {creators.map((creator) => (
                <Card key={creator.id} className="text-center p-6">
                  <CardContent className="pt-4">
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarImage src={creator.image_url || ""} alt={creator.name} />
                      <AvatarFallback className="text-2xl">
                        {creator.name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold text-lg mb-3">{creator.name}</h3>
                    {creator.telegram_link && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="gap-2"
                      >
                        <a
                          href={creator.telegram_link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Send className="w-4 h-4" />
                          Telegram
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Mission Section */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We believe that learning English should be accessible, enjoyable, and effective. 
              Our platform is designed to help Uzbek speakers master English through practical 
              exercises, real-world vocabulary, and comprehensive grammar guides.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default About;
