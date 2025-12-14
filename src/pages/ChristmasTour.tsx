import { christmasTour } from "@/data/tourDescription";
import TourPath from "@/components/TourPath";

const ChristmasTour = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-ruby/10 via-background to-sapphire/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 order-2 md:order-1">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
                  {christmasTour.title}
                </h1>
                <p className="text-xl md:text-2xl text-ruby font-medium">
                  {christmasTour.subtitle}
                </p>
              </div>
              <div className="order-1 md:order-2">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={christmasTour.image}
                    alt={christmasTour.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              {christmasTour.description}
            </p>
            <p className="text-foreground leading-relaxed text-center">
              {christmasTour.intro}
            </p>
          </div>
        </div>
      </section>

      <TourPath stops={christmasTour.tourPath} />
    </main>
  );
};

export default ChristmasTour;
