import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import { Features } from "@/components/ui/features-4";
import TransformSection from "@/components/TransformSection";
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
        <TransformSection />
        <StatsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
