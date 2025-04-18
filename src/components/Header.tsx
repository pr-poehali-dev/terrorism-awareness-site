import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Info, HeartHandshake, Home } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground py-4 shadow-md">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <ShieldCheck className="h-6 w-6" />
          <h1 className="text-xl font-bold">БезопасноеБудущее</h1>
        </div>
        
        <nav className="flex gap-4">
          <Button variant="ghost" asChild>
            <Link to="/" className="flex items-center gap-1">
              <Home className="h-4 w-4" />
              <span>Главная</span>
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/about" className="flex items-center gap-1">
              <Info className="h-4 w-4" />
              <span>О проблеме</span>
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/solutions" className="flex items-center gap-1">
              <HeartHandshake className="h-4 w-4" />
              <span>Решения</span>
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;