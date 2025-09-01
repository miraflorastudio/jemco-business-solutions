const PartnersSection = () => {
  const partners = [
    "SAB Agent",
    "The Premier Agency", 
    "NHP",
    "Tapestry Insurance Group",
    "My Insurance Solutions",
    "Horizon Partners"
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container">
        <h2 className="text-center text-lg font-medium mb-12 text-muted-foreground">
          We're proud to partner with the best
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center h-20 p-4">
              <div className="text-sm font-medium text-muted-foreground text-center opacity-60 hover:opacity-100 transition-opacity">
                {partner}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;