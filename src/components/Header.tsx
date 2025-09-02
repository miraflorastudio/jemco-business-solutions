import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import jemcoLogo from "@/assets/jemco-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center space-x-12">
          <div className="flex items-center space-x-3">
            <img src={jemcoLogo} alt="JEMCO Business Solutions" className="h-12 w-auto" />
            <span className="text-2xl font-bold text-foreground">Business Solutions</span>
          </div>
          <nav className="hidden md:flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base font-medium text-foreground hover:text-primary">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                      <ListItem href="/services/management-accounts" title="Management & Annual Accounts">
                        Comprehensive financial reporting and annual account preparation
                      </ListItem>
                      <ListItem href="/services/payroll" title="Payroll Services">
                        Complete payroll management and processing solutions
                      </ListItem>
                      <ListItem href="/services/tax" title="Tax Estimates & Returns">
                        Professional tax planning and return preparation
                      </ListItem>
                      <ListItem href="/services/bookkeeping" title="Bookkeeping">
                        Accurate record keeping and financial transaction management
                      </ListItem>
                      <ListItem href="/services/income-expenses" title="Track Income & Expenses">
                        Monitor and categorize your business financial flows
                      </ListItem>
                      <ListItem href="/services/systems" title="Systems Implementation & Review">
                        Optimize your accounting systems and processes
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/about">
                    <NavigationMenuLink className={cn("text-base font-medium text-foreground transition-colors hover:text-primary px-4 py-2")}>
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/resources">
                    <NavigationMenuLink className={cn("text-base font-medium text-foreground transition-colors hover:text-primary px-4 py-2")}>
                      Resources
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/contact">
                    <NavigationMenuLink className={cn("text-base font-medium text-foreground transition-colors hover:text-primary px-4 py-2")}>
                      Contact Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-base font-medium text-muted-foreground hover:text-foreground">
            Log in
          </Button>
          <Button size="lg" className="text-base font-medium bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-sm px-6">
            Get a Quote
          </Button>
        </div>
      </div>
    </header>
  );
};

const ListItem = ({ className, title, children, href, ...props }: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export default Header;