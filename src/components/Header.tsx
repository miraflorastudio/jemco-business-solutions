import { Button } from "@/components/ui/button";
import sparkLogo from "@/assets/spark-logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <img src={sparkLogo} alt="Spark" className="h-8 w-8" />
            <span className="text-xl font-bold">Spark</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#platform" className="text-sm font-medium transition-colors hover:text-primary">
              Platform
            </a>
            <a href="#outcomes" className="text-sm font-medium transition-colors hover:text-primary">
              Outcomes
            </a>
            <a href="#customer-stories" className="text-sm font-medium transition-colors hover:text-primary">
              Customer Stories
            </a>
            <a href="#company" className="text-sm font-medium transition-colors hover:text-primary">
              Company
            </a>
            <a href="#resources" className="text-sm font-medium transition-colors hover:text-primary">
              Resources
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-sm font-medium">
            Log in
          </Button>
          <Button className="text-sm font-medium">
            Book a Demo
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;