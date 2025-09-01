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
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
          The fastest-growing brokerage platform in the industry
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <p className="text-4xl lg:text-5xl font-bold text-primary">{stat.number}</p>
              <p className="text-sm text-muted-foreground max-w-xs mx-auto">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          <h3 className="text-xl font-semibold text-center">Featured Carriers</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {carriers.map((carrier, index) => (
              <div key={index} className="flex items-center justify-center h-16">
                <div className="text-sm font-medium text-muted-foreground text-center px-4">
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