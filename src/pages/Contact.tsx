import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8 text-center">Contact Us</h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Get in touch with our accounting experts. We're here to help your business succeed.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="john@company.com" />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="text-sm font-medium text-foreground">
                      Company
                    </label>
                    <Input id="company" placeholder="Company Name" />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="text-sm font-medium text-foreground">
                      Service Interested In
                    </label>
                    <Input id="service" placeholder="e.g., Bookkeeping, Tax Returns" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your accounting needs..."
                      rows={4}
                    />
                  </div>
                  
                  <Button size="lg" className="w-full">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                  <CardDescription>Reach out to us directly</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground">+254-20-828898</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <div className="space-y-1">
                      <p>
                        <a href="mailto:jmokondo@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                          jmokondo@gmail.com
                        </a>
                      </p>
                      <p>
                        <a href="mailto:shabban@jemco-businessolutions.com" className="text-muted-foreground hover:text-foreground transition-colors">
                          shabban@jemco-businessolutions.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Visit Us at our Offices</h4>
                    <p className="text-muted-foreground">
                      Vison Plaza, Off Mombasa Road,<br />
                      2nd Floor, Unit 32<br />
                      P.O Box 28352-00200<br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Office Hours</CardTitle>
                  <CardDescription>When you can reach us</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-foreground">Monday - Friday</span>
                    <span className="text-muted-foreground">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground">Saturday</span>
                    <span className="text-muted-foreground">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground">Sunday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Emergency Support</CardTitle>
                  <CardDescription>For urgent accounting matters</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">
                    For time-sensitive accounting issues during business hours, call our main line.
                  </p>
                  <p className="text-muted-foreground">
                    After hours emergency support available for existing clients.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;