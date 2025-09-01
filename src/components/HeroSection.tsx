import { Button } from "@/components/ui/button";
import heroMeeting from "@/assets/hero-meeting.jpg";
import heroProfessional from "@/assets/hero-professional.jpg";
import heroWorkspace from "@/assets/hero-workspace.jpg";

const HeroSection = () => {
  return (
    <section className="container py-12 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-12 pt-8">
          <div className="space-y-6">
            <p className="text-sm text-muted-foreground tracking-wide">
              The modern platform to take your brokerage to the next level.
            </p>
            <Button size="lg" className="rounded-sm px-8 py-3">
              Book a Demo
            </Button>
          </div>
          
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-normal leading-tight tracking-tight">
              <span className="block">Build the insurance</span>
              <span className="block">business of your</span>
              <span className="block">dreams</span>
            </h1>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-12 grid-rows-12 gap-3 h-[600px]">
            {/* Top row - meeting room image */}
            <div className="col-span-7 row-span-5">
              <img 
                src={heroMeeting} 
                alt="Professional team meeting"
                className="rounded-xl object-cover w-full h-full"
              />
            </div>
            
            {/* Top right - professional at work */}
            <div className="col-span-5 row-span-8 row-start-1">
              <img 
                src={heroProfessional} 
                alt="Professional at work"
                className="rounded-xl object-cover w-full h-full"
              />
            </div>
            
            {/* Bottom left - workspace */}
            <div className="col-span-7 row-span-4 row-start-9">
              <img 
                src={heroWorkspace} 
                alt="Modern workspace"
                className="rounded-xl object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
