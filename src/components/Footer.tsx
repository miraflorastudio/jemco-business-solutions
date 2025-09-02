import JemcoLogo from "./JemcoLogo";

const Footer = () => {
  return (
    <footer className="border-t bg-white">
      <div className="container py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <JemcoLogo />
              <span className="text-2xl font-bold">Business Solutions</span>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed max-w-sm">
              The modern platform to take your brokerage to the next level.
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-semibold text-lg">Platform</h4>
            <div className="space-y-3 text-base">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Security
              </a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-semibold text-lg">Company</h4>
            <div className="space-y-3 text-base">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Careers
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-semibold text-lg">Resources</h4>
            <div className="space-y-3 text-base">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Documentation
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 text-center text-base text-muted-foreground">
          <p>&copy; 2024 JEMCO Business Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;