import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Engage from "./pages/Engage";
import Orchestrate from "./pages/Orchestrate";
import Shield from "./pages/Shield";
import Insight from "./pages/Insight";
import Resilience from "./pages/Resilience";
import Actions from "./pages/Actions";
import Reports from "./pages/Reports";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/engage" element={<Engage />} />
          <Route path="/orchestrate" element={<Orchestrate />} />
          <Route path="/shield" element={<Shield />} />
          <Route path="/insight" element={<Insight />} />
          <Route path="/resilience" element={<Resilience />} />
          <Route path="/actions" element={<Actions />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/admin" element={<Admin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
