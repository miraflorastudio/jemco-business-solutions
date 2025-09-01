import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
    <section className="py-20">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <CardContent className="space-y-6 p-0">
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
                
                <blockquote className="text-sm leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <Button variant="outline" size="sm">
                  Read More
                </Button>
                
                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div>
                    <p className="text-2xl font-bold">{testimonial.agents}</p>
                    <p className="text-xs text-muted-foreground">Contracted agents</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">{testimonial.growth}</p>
                    <p className="text-xs text-muted-foreground">Agent growth</p>
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