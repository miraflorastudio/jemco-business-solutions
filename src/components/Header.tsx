import { Button } from "@/components/ui/button";
import sparkLogo from "@/assets/spark-logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center space-x-12">
          <div className="flex items-center space-x-3">
            <img src={sparkLogo} alt="Spark" className="h-10 w-10" />
            <span className="text-2xl font-bold text-foreground">Spark</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#platform" className="text-base font-medium text-foreground transition-colors hover:text-primary">
              Platform
            </a>
            <a href="#outcomes" className="text-base font-medium text-foreground transition-colors hover:text-primary">
              Outcomes
            </a>
            <a href="#customer-stories" className="text-base font-medium text-foreground transition-colors hover:text-primary">
              Customer Stories
            </a>
            <a href="#company" className="text-base font-medium text-foreground transition-colors hover:text-primary">
              Company
            </a>
            <a href="#resources" className="text-base font-medium text-foreground transition-colors hover:text-primary">
              Resources
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-base font-medium text-muted-foreground hover:text-foreground">
            Log in
          </Button>
          <Button size="lg" className="text-base font-medium bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-sm px-6">
            Book a Demo
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;