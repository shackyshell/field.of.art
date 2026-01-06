import { CONTACT_EMAIL } from "@/data/constants";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <main className="bg-background">
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
<div className="flex justify-center items-center gap-4 mt-20">
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

        </div>
      </section>
    </main>
  );
};

export default Contact;

