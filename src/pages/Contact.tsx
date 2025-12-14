import { CONTACT_EMAIL } from "@/data/constants";
import { Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-20 w-48 h-48 bg-yellow blob-shape-1"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-black">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-yellow font-medium font-body">
              Get in touch to book your tour or ask any questions
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                    Let's Plan Your Adventure
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Ready to explore Wrocław? Contact us to book your tour, ask questions, or customize your experience. We're here to help you discover the magic of our beautiful city.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 font-body">Email</h3>
                      <a 
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="text-black hover:text-blue transition-colors font-body"
                      >
                        {CONTACT_EMAIL}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-green/20 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 font-body">Location</h3>
                      <p className="text-muted-foreground font-body">
                        Wrocław, Poland
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue/20 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 font-body">Response Time</h3>
                      <p className="text-muted-foreground font-body">
                        We typically respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 rounded-card shadow-card border border-border">
                <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                  Send us a Message
                </h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 font-body">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 rounded-input border-2 border-border focus:outline-none focus:ring-2 focus:ring-navy focus:ring-yellow/50 focus:border-navy font-body"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 font-body">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-input border-2 border-border focus:outline-none focus:ring-2 focus:ring-navy focus:ring-yellow/50 focus:border-navy font-body"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 font-body">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-3 rounded-input border-2 border-border focus:outline-none focus:ring-2 focus:ring-navy focus:ring-yellow/50 focus:border-navy resize-none font-body"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-yellow text-black px-8 py-4 rounded-button font-semibold hover:bg-yellow-dark transition-all duration-200 hover:shadow-hover transform hover:-translate-y-1 font-body"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;

