import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Resources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8 text-center">Resources</h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Access helpful tools, guides, and information for your business financial needs
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Tax Calendar</CardTitle>
                <CardDescription>Important tax deadlines and filing dates</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Stay on top of critical tax deadlines with our comprehensive calendar of important dates.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Financial Templates</CardTitle>
                <CardDescription>Downloadable business financial templates</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Free templates for budgeting, cash flow projections, and financial planning.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Business Guides</CardTitle>
                <CardDescription>Essential guides for business owners</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive guides covering accounting basics, tax planning, and business growth strategies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>FAQ</CardTitle>
                <CardDescription>Frequently asked questions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Find answers to common questions about our services and accounting practices.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Industry Insights</CardTitle>
                <CardDescription>Latest trends and updates</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Stay informed with the latest accounting regulations, tax law changes, and industry trends.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Software Recommendations</CardTitle>
                <CardDescription>Recommended accounting software</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our recommendations for accounting software that best fits different business sizes and industries.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;