import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import SolutionsSection from "@/components/SolutionsSection";
import QRCodeSection from "@/components/QRCodeSection";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <SolutionsSection />
        <QRCodeSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;