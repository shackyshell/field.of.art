import { photographyTour } from "@/data/tourDescription";
import TourPath from "@/components/TourPath";
import { CheckCircle2, Camera, Users, Sun, Lightbulb } from "lucide-react";

const PhotographyTour = () => {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-20 w-48 h-48 bg-yellow blob-shape-1"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 order-2 md:order-1">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-black">
                  {photographyTour.title}
                </h1>
                <p className="text-xl md:text-2xl text-yellow font-medium font-body">
                  {photographyTour.subtitle}
                </p>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="aspect-[4/3] rounded-card overflow-hidden shadow-hover relative z-10">
                  <img
                    src={photographyTour.image}
                    alt={photographyTour.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-yellow blob-shape-2 -z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed text-center font-body">
              {photographyTour.description}
            </p>
            <p className="text-foreground leading-relaxed text-center font-body">
              {photographyTour.intro}
            </p>
          </div>
        </div>
      </section>

      <TourPath stops={photographyTour.tourPath} />

      {/* Included Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-12">
              What's Included
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {photographyTour.included.map((item, index) => {
                const getIcon = (item: string) => {
                  if (item.toLowerCase().includes('guide')) return <Users className="w-5 h-5" />;
                  if (item.toLowerCase().includes('photo') || item.toLowerCase().includes('location') || item.toLowerCase().includes('access')) return <Camera className="w-5 h-5" />;
                  if (item.toLowerCase().includes('tip') || item.toLowerCase().includes('technique') || item.toLowerCase().includes('composition') || item.toLowerCase().includes('lighting') || item.toLowerCase().includes('post-processing')) return <Lightbulb className="w-5 h-5" />;
                  if (item.toLowerCase().includes('golden hour') || item.toLowerCase().includes('timing')) return <Sun className="w-5 h-5" />;
                  if (item.toLowerCase().includes('group') || item.toLowerCase().includes('people')) return <Users className="w-5 h-5" />;
                  return <CheckCircle2 className="w-5 h-5" />;
                };
                return (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-cream/50 hover:bg-cream transition-colors">
                    <div className="text-yellow flex-shrink-0 mt-0.5">
                      {getIcon(item)}
                    </div>
                    <p className="text-foreground font-body">{item}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PhotographyTour;

