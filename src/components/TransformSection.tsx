import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const TransformSection = () => {
  const features = [
    {
      title: "Unlock broker productivity",
      description: "Streamline your workflow and boost efficiency"
    },
    {
      title: "Accelerate broker recruiting", 
      description: "Find and onboard top talent faster"
    },
    {
      title: "Scale your operations effortlessly",
      description: "Grow your business without operational overhead"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container">
        <div className="text-center mb-16 space-y-8">
          <p className="text-lg text-muted-foreground tracking-[0.2em] uppercase">
            Modern insurance businesses run on Spark
          </p>
          <Button size="lg" className="rounded-sm px-8">Book a Demo</Button>
        </div>

        <div className="space-y-20">
          <h2 className="text-5xl lg:text-6xl font-normal text-center max-w-4xl mx-auto leading-tight">
            Transform the way you do business.
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group p-8 border-0 shadow-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="space-y-6 p-0">
                  <div className="w-full h-64 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl mb-6 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20"></div>
                  </div>
                  <h3 className="text-2xl font-medium">{feature.title}</h3>
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformSection;