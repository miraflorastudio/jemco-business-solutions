const StatsSection = () => {
  const stats = [
    {
      number: "6,000+",
      description: "Partnerships with brokers since 2021"
    },
    {
      number: "+90%", 
      description: "Growth in enrollments per agent after partnering with Spark"
    },
    {
      number: "+50%",
      description: "Growth in contracted agents for agencies after partnering with Spark"
    }
  ];

  const carriers = [
    "Aetna",
    "Scan Health Plan", 
    "Humana",
    "Molina Healthcare",
    "Blue Cross Blue Shield",
    "UnitedHealthcare",
    "Cigna",
    "Kaiser Permanente",
    "Anthem",
    "WellCare"
  ];

  return (
    <section className="py-24 bg-muted/20">
      <div className="container">
        <h2 className="text-4xl lg:text-5xl font-normal text-center mb-20 max-w-4xl mx-auto leading-tight">
          The fastest-growing brokerage platform in the industry
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-12 mb-24">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-4">
              <p className="text-5xl lg:text-6xl font-bold text-primary">{stat.number}</p>
              <p className="text-base text-muted-foreground max-w-xs mx-auto leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="space-y-12">
          <h3 className="text-xl font-medium text-center text-muted-foreground">Featured Carriers</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {carriers.map((carrier, index) => (
              <div key={index} className="flex items-center justify-center h-20 p-4">
                <div className="text-base font-medium text-muted-foreground text-center opacity-60 hover:opacity-100 transition-opacity">
                  {carrier}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;