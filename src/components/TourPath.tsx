import { MapPin } from "lucide-react";

interface PathStop {
  location: string;
  description: string;
}

interface TourPathProps {
  stops: PathStop[];
}

const TourPath = ({ stops }: TourPathProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald/10 via-background to-white">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground text-center mb-4">
          Your Journey Through Wrocław
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Explore the most enchanting corners of the city during the magical Christmas season
        </p>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-ruby via-emerald to-sapphire transform md:-translate-x-0.5" />

          {stops.map((stop, index) => (
            <div
              key={index}
              className={`relative flex items-start gap-6 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"} pl-20 md:pl-0`}>
                <div className="bg-card p-6 rounded-xl shadow-card border border-border/50">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-ruby/10 text-ruby rounded-full mb-3">
                    Stop {index + 1}
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {stop.location}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {stop.description}
                  </p>
                </div>
              </div>

              {/* Timeline marker */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-ruby border-4 border-background shadow-lg flex items-center justify-center">
                <MapPin className="w-4 h-4 text-primary-foreground" />
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourPath;
