import { Button } from "@/components/ui/button";
import heroMeeting from "@/assets/hero-meeting.jpg";
import heroProfessional from "@/assets/hero-professional.jpg";
import heroWorkspace from "@/assets/hero-workspace.jpg";

const HeroSection = () => {
  return (
    <section className="container py-20 lg:py-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground uppercase tracking-wider">
              The modern platform to take your brokerage to the next level.
            </p>
            <Button className="mb-8">Book a Demo</Button>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Build the insurance business of your dreams
            </h1>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src={heroMeeting} 
                alt="Professional team meeting"
                className="rounded-lg object-cover w-full h-48"
              />
              <img 
                src={heroWorkspace} 
                alt="Modern workspace"
                className="rounded-lg object-cover w-full h-32"
              />
            </div>
            <div className="mt-8">
              <img 
                src={heroProfessional} 
                alt="Professional at work"
                className="rounded-lg object-cover w-full h-64"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;