import { Calculator, Receipt, Users, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ExpertiseSection = () => {
  const expertiseAreas = [
    {
      title: "Management and Annual Accounts",
      icon: Calculator,
    },
    {
      title: "Tax & VAT",
      icon: Receipt,
    },
    {
      title: "Full Payroll Services", 
      icon: Users,
    },
    {
      title: "Systems Review and Implementation",
      icon: Settings,
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <h2 className="text-3xl lg:text-4xl font-normal text-center mb-12 text-foreground">
          Our Main Areas of Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="flex justify-center">
                    <IconComponent className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium text-foreground leading-tight">
                    {area.title}
                  </h3>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;