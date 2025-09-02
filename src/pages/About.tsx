import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8 text-center">About JEMCO Business Solutions</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                JEMCO Business Solutions has been serving businesses with comprehensive accounting and financial services 
                for over a decade. Founded with the mission to simplify financial management for businesses of all sizes, 
                we've grown from a small local practice to a trusted partner for companies across various industries.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide exceptional accounting services that empower businesses to make informed financial decisions, 
                maintain compliance, and achieve sustainable growth. We believe in building long-term relationships 
                through reliable service, expert advice, and innovative solutions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Why Choose JEMCO?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Expert Team</h3>
                  <p className="text-muted-foreground">
                    Certified accountants with extensive experience across multiple industries
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Personalized Service</h3>
                  <p className="text-muted-foreground">
                    Tailored solutions that meet your specific business needs and goals
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Technology Forward</h3>
                  <p className="text-muted-foreground">
                    Modern accounting tools and systems for efficient financial management
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Compliance Focused</h3>
                  <p className="text-muted-foreground">
                    Stay up-to-date with regulations and maintain full compliance
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;