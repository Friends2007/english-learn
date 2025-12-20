import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "@/contexts/AdminContext";
import { Header } from "@/components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { LogOut, FileText, Users } from "lucide-react";
import TestManager from "@/components/TestManager";
import CreatorManager from "@/components/CreatorManager";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface Test {
  id: string;
  title: string;
  description: string;
  questions: any[];
  is_published: boolean;
}

const AdminDashboard = () => {
  const { isAdmin, logout } = useAdmin();
  const navigate = useNavigate();
  const [tests, setTests] = useState<Test[]>([]);
  const [editingTest, setEditingTest] = useState<Test | null>(null);
  const [showTestManager, setShowTestManager] = useState(false);

  if (!isAdmin) {
    navigate("/admin");
    return null;
  }

  const fetchTests = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/admin-tests`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({
          password: sessionStorage.getItem("admin_password"),
          action: "list",
        }),
      }
    );
    const data = await response.json();
    if (data.success) {
      setTests(data.data || []);
    }
  };

  const handleDeleteTest = async (testId: string) => {
    const response = await fetch(
      `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/admin-tests`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({
          password: sessionStorage.getItem("admin_password"),
          action: "delete",
          testId,
        }),
      }
    );
    const data = await response.json();
    if (data.success) {
      toast.success("Test deleted");
      fetchTests();
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Button variant="outline" onClick={handleLogout} className="gap-2">
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>

        <Tabs defaultValue="creators" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="creators" className="gap-2">
              <Users className="w-4 h-4" />
              Team Members
            </TabsTrigger>
            <TabsTrigger value="tests" className="gap-2">
              <FileText className="w-4 h-4" />
              Tests
            </TabsTrigger>
          </TabsList>

          <TabsContent value="creators">
            <CreatorManager />
          </TabsContent>

          <TabsContent value="tests">
            {showTestManager || editingTest ? (
              <TestManager
                test={editingTest || undefined}
                onSave={() => {
                  setShowTestManager(false);
                  setEditingTest(null);
                  fetchTests();
                }}
                onCancel={() => {
                  setShowTestManager(false);
                  setEditingTest(null);
                }}
              />
            ) : (
              <TestListView
                tests={tests}
                onFetch={fetchTests}
                onEdit={setEditingTest}
                onDelete={handleDeleteTest}
                onCreate={() => setShowTestManager(true)}
              />
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

interface TestListViewProps {
  tests: Test[];
  onFetch: () => void;
  onEdit: (test: Test) => void;
  onDelete: (id: string) => void;
  onCreate: () => void;
}

const TestListView = ({ tests, onFetch, onEdit, onDelete, onCreate }: TestListViewProps) => {
  const [loading, setLoading] = useState(false);

  const handleFetch = async () => {
    setLoading(true);
    await onFetch();
    setLoading(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-4 mb-6">
        <Button onClick={onCreate}>Create New Test</Button>
        <Button variant="outline" onClick={handleFetch} disabled={loading}>
          {loading ? "Loading..." : "Refresh Tests"}
        </Button>
      </div>

      {tests.length === 0 ? (
        <p className="text-muted-foreground text-center py-8">
          No tests found. Click "Refresh Tests" to load or create a new one.
        </p>
      ) : (
        <div className="grid gap-4">
          {tests.map((test) => (
            <div
              key={test.id}
              className="p-4 border rounded-lg flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold">{test.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {test.questions?.length || 0} questions •{" "}
                  {test.is_published ? "Published" : "Draft"}
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => onEdit(test)}>
                  Edit
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => onDelete(test.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
