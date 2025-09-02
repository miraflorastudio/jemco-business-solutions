import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Management & Annual Accounts",
      description: "Comprehensive financial reporting and annual account preparation to meet statutory requirements and provide valuable business insights.",
      features: ["Annual financial statements", "Management reports", "Statutory compliance", "Financial analysis"],
    },
    {
      title: "Payroll Services",
      description: "Complete payroll management and processing solutions to ensure accurate and timely employee compensation.",
      features: ["Monthly payroll processing", "Tax calculations", "Employee records", "Payroll reporting"],
    },
    {
      title: "Tax Estimates & Returns",
      description: "Professional tax planning and return preparation to minimize tax liability and ensure compliance.",
      features: ["Tax return preparation", "Tax planning strategies", "Quarterly estimates", "Tax compliance"],
    },
    {
      title: "Bookkeeping",
      description: "Accurate record keeping and financial transaction management to maintain organized financial records.",
      features: ["Daily transaction recording", "Bank reconciliation", "Financial statements", "Expense tracking"],
    },
    {
      title: "Track Income & Expenses",
      description: "Monitor and categorize your business financial flows for better financial control and decision-making.",
      features: ["Income tracking", "Expense categorization", "Cash flow monitoring", "Financial reporting"],
    },
    {
      title: "Systems Implementation & Review",
      description: "Optimize your accounting systems and processes to improve efficiency and accuracy.",
      features: ["System setup", "Process optimization", "Training & support", "Ongoing review"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8 text-center">Our Services</h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Comprehensive accounting solutions tailored to your business needs
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Need a Custom Solution?</CardTitle>
                <CardDescription>
                  We understand that every business is unique. Contact us to discuss your specific accounting needs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="lg">
                  Get a Custom Quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;