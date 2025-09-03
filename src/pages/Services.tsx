import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Management & Annual Accounts",
      description: "Comprehensive financial reporting and annual account preparation to meet statutory requirements and provide valuable business insights.",
      features: ["Profit & Loss, Balance Sheet report generation", "Accounts Receivables", "Accounts Payables", "Expenses Reports vs Budget", "Preparation of Audit Schedules for auditors"],
    },
    {
      title: "Payroll Services",
      description: "Complete payroll management and processing solutions to ensure accurate and timely employee compensation.",
      features: ["Payslip generation", "Statutory returns and subsequent filing(PAYE, NHIF, NSSF)", "Monthly payroll Summary", "Journal Voucher creation for posting to General ledger"],
    },
    {
      title: "Tax Estimates & Returns",
      description: "Professional tax planning and return preparation to minimize tax liability and ensure compliance.",
      features: ["Preparation of Tax Estimates", "File Tax(PAYE, VAT, Company Statutory, etc) returns with KRA using data provided by client"],
    },
    {
      title: "Bookkeeping",
      description: "Accurate record keeping and financial transaction management to maintain organized financial records.",
      features: ["Financial Systems Implementation", "Financial Internal Control Review and Implementation", "IT Systems Review and Implementation", "Business Management - Best Practice"],
    },
    {
      title: "Track Income & Expenses",
      description: "Monitor and categorize your business financial flows for better financial control and decision-making.",
      features: ["Categorize Transactions", "Post Transactions to Business Ledgers", "Generate Ledger Reports", "Prepare P&L, Balance Sheet, Cash flow summaries"],
    },
    {
      title: "Systems Implementation & Review",
      description: "Optimize your accounting systems and processes to improve efficiency and accuracy.",
      features: ["Financial Systems Implementation", "Financial Internal Control Review and Implementation", "IT Systems Review and Implementation", "Business Management - Best Practice"],
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