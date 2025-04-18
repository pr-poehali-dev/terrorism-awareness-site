import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-primary/10 to-background py-16 lg:py-24">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">Образовательный проект</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Противодействие экстремизму среди молодежи в России
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Глобальная проблема XXI века требует осознанного подхода, образования и совместных действий.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link to="/about" className="flex items-center gap-2">
                  Узнать больше
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link to="/solutions">Решения проблемы</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src="/placeholder.svg" 
              alt="Безопасное будущее" 
              className="max-w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;