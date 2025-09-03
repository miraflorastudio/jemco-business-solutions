import { InfiniteSlider } from "@/components/ui/infinite-slider";

const StatsSection = () => {
  const stats = [
    {
      number: "Top Level Talent",
      description: "Our team comprises skilled and talented personnel who can meet deadlines with minimal supervision."
    },
    {
      number: "Top Accounting Software", 
      description: "Thanks to our use of the latest accounting software, we are able to provide our clients with speedy and effective service."
    },
    {
      number: "Affordable Services",
      description: "Our cost-effective and market-oriented services offer our satisfied clients excellent value for their money, allowing them to focus on expanding their businesses."
    }
  ];

  const carriers = [
    "MGH North Support Services Ltd",
    "Haleon Kenya Ltd",
    "Actuarial Society of Kenya",
    "Game Ranching Limited",
    "Biz Baz Events Ltd",
    "Pharmasell Limited",
    "HealthStore East Africa Ltd",
    "Sustainable Healthcare Foundation",
    "Mardee Services Limited",
    "Zamara Fanaka Retirement Fund"
  ];

  return (
    <section className="py-24 bg-muted/20">
      <div className="container">
        <h2 className="text-4xl lg:text-5xl font-normal text-center mb-20 max-w-4xl mx-auto leading-tight">
          JEMCO Business Solutions- A leading solutions provider to SME's in Kenya
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-12 mb-24">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-4">
              <h3 className="text-2xl lg:text-3xl font-bold text-primary">{stat.number}</h3>
              <p className="text-base text-muted-foreground max-w-sm mx-auto leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="space-y-12">
          <h3 className="text-xl font-medium text-center text-muted-foreground">Clients</h3>
          <InfiniteSlider gap={48} duration={30} className="py-8">
            {carriers.map((carrier, index) => (
              <div key={index} className="flex items-center justify-center min-w-[200px] h-20 px-6">
                <div className="text-lg font-medium text-muted-foreground text-center opacity-70 hover:opacity-100 transition-opacity whitespace-nowrap">
                  {carrier}
                </div>
              </div>
            ))}
          </InfiniteSlider>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;