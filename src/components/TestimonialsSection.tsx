import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Justin",
      company: "Health Plan Markets",
      location: "Orlando, FL",
      quote: "Spark's technology, data, and strategic partnership has helped us scale faster, more efficiently, and cost-effectively.",
      agents: 578,
      growth: "54%"
    },
    {
      name: "Joanna", 
      company: "Topflight Insurance",
      location: "Atlanta, GA",
      quote: "As someone with a large downline, Spark's platform is saving me over 40 hours a week on contracting alone.",
      agents: 234,
      growth: "56%"
    },
    {
      name: "Gilberto",
      company: "Medilink Consultants", 
      location: "El Paso, TX",
      quote: "Spark is like us: dedicated to the agent. They help our clients. They are focused on our growth, there to take away all the pain points that slow us down.",
      agents: 224,
      growth: "187%"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group relative overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200"></div>
              <CardContent className="relative space-y-8 p-8 pt-56">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  <p className="text-sm font-medium text-muted-foreground">{testimonial.company}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
                
                <blockquote className="text-base leading-relaxed text-foreground">
                  "{testimonial.quote}"
                </blockquote>
                
                <Button variant="ghost" className="group-hover:text-primary transition-colors p-0 h-auto font-medium">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
                  <div>
                    <p className="text-3xl font-bold text-foreground">{testimonial.agents}</p>
                    <p className="text-sm text-muted-foreground">Contracted agents</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary">{testimonial.growth}</p>
                    <p className="text-sm text-muted-foreground">Agent growth</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;