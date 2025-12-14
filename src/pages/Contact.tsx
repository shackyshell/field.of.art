import { CONTACT_EMAIL } from "@/data/constants";
import { Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative bg-gradient-to-br from-ruby/10 via-background to-sapphire/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-ruby font-medium">
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
                    <div className="bg-ruby/10 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-ruby" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a 
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="text-ruby hover:text-ruby/80 transition-colors"
                      >
                        {CONTACT_EMAIL}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-emerald/10 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-emerald" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Location</h3>
                      <p className="text-muted-foreground">
                        Wrocław, Poland
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-sapphire/10 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-sapphire" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Response Time</h3>
                      <p className="text-muted-foreground">
                        We typically respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-card border border-border/50">
                <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                  Send us a Message
                </h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-ruby focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-ruby focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-ruby focus:border-transparent resize-none"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-ruby text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-ruby/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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

