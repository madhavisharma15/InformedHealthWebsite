import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Workshops from "./pages/Workshops";
import Testimonials from "./pages/Testimonials";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import RefundPolicy from "./pages/RefundPolicy";
import CancellationPolicy from "./pages/CancellationPolicy";
import Grievance from "./pages/Grievance";
import NotFound from "./pages/NotFound";
import BiohackYourGut from "./pages/BiohackYourGut";
import GlucoseBiohacking from "./pages/GlucoseBiohacking";
import BodyTransformation from "./pages/BodyTransformation";
import GlucoseBiohackingMasterclass from "./pages/GlucoseBiohackingMasterclass";
import PaymentCallback from "./pages/PaymentCallback";
import ThankYou from "./pages/ThankYou";

const queryClient = new QueryClient();

const MainLayout = () => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
  </div>
);

const BareLayout = () => (
  <div className="flex flex-col min-h-screen">
    <main className="flex-1">
      <Outlet />
    </main>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* <Route element={<BareLayout />}>
            <Route path="/workshops/glucose-biohacking-masterclass" element={<GlucoseBiohackingMasterclass />} />
          </Route> */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/gut-reset-programme" element={<BiohackYourGut />} />
            <Route path="/services/glucose-biohacking" element={<GlucoseBiohacking />} />
            <Route path="/services/body-transformation" element={<BodyTransformation />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/cancellation-policy" element={<CancellationPolicy />} />
            <Route path="/grievance" element={<Grievance />} />
            <Route path="/payment/callback" element={<PaymentCallback />} />
            <Route path="/:uniqueKey/thank-you" element={<ThankYou />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
