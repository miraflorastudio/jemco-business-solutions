import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
            Modern insurance businesses run on Spark
          </p>
          <Button>Book a Demo</Button>
        </div>

        <div className="space-y-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-center max-w-4xl mx-auto">
            Transform the way you do business.
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center">
                <CardContent className="space-y-4 p-0">
                  <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-primary/30 rounded-lg mb-4"></div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <Button variant="outline" size="sm">
                    Learn More
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