import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { AdminProvider } from "./contexts/AdminContext";
import IntroSplash from "./components/IntroSplash";
import Index from "./pages/Index";
import Vocabulary from "./pages/Vocabulary";
import Grammar from "./pages/Grammar";
import Exercises from "./pages/Exercises";
import Listening from "./pages/Listening";
import Reading from "./pages/Reading";
import Tests from "./pages/Tests";
import About from "./pages/About";
import AdminAuth from "./pages/AdminAuth";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [hasSeenIntro, setHasSeenIntro] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("intro_seen");
    if (seen) {
      setShowIntro(false);
      setHasSeenIntro(true);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setHasSeenIntro(true);
    sessionStorage.setItem("intro_seen", "true");
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <AdminProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {showIntro && !hasSeenIntro && (
              <IntroSplash onComplete={handleIntroComplete} />
            )}
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/vocabulary" element={<Vocabulary />} />
                <Route path="/grammar" element={<Grammar />} />
                <Route path="/exercises" element={<Exercises />} />
                <Route path="/listening" element={<Listening />} />
                <Route path="/reading" element={<Reading />} />
                <Route path="/tests" element={<Tests />} />
                <Route path="/about" element={<About />} />
                <Route path="/admin" element={<AdminAuth />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </AdminProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
