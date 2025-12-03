import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BrandsPage from "./pages/BrandsPage";
import BrandDetailPage from "./pages/BrandDetailPage";
import NewPhonesPage from "./pages/NewPhonesPage";
import MobileDetailPage from "./pages/MobileDetailPage";
import ComparePage from "./pages/ComparePage";
import SearchPage from "./pages/SearchPage";
import NewsPage from "./pages/NewsPage";
import NewsDetailPage from "./pages/NewsDetailPage";
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
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/brands/:slug" element={<BrandDetailPage />} />
          <Route path="/new-phones" element={<NewPhonesPage />} />
          <Route path="/mobile/:slug" element={<MobileDetailPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:slug" element={<NewsDetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
