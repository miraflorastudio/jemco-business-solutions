import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import { Features } from "@/components/ui/features-4";
import ReportingSection from "@/components/ReportingSection";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ExpertiseSection />
        <Features />
        <ReportingSection />
        <StatsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
