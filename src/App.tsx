
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WebsiteHosting from "./pages/WebsiteHosting";
import DomainRegistration from "./pages/DomainRegistration";
import WebDevelopment from "./pages/WebDevelopment";
import SEO from "./pages/SEO";
import Cybersecurity from "./pages/Cybersecurity";
import ITSupport from "./pages/ITSupport";
import ServerSupport from "./pages/ServerSupport";
import AppDevelopment from "./pages/AppDevelopment";
import NetworkDesign from "./pages/NetworkDesign";
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
          <Route path="/website-hosting" element={<WebsiteHosting />} />
          <Route path="/domain-registration" element={<DomainRegistration />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/seo" element={<SEO />} />
          <Route path="/cybersecurity" element={<Cybersecurity />} />
          <Route path="/it-support" element={<ITSupport />} />
          <Route path="/server-support" element={<ServerSupport />} />
          <Route path="/app-development" element={<AppDevelopment />} />
          <Route path="/network-design" element={<NetworkDesign />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
