import { Link } from "react-router-dom";
import { allTours } from "@/data/tourDescription";

const Index = () => {
  const featuredTours = [
    allTours.find(t => t.slug === "christmas-tour"),
    allTours.find(t => t.slug === "historical-tour"),
    allTours.find(t => t.slug === "food-culture-tour"),
    allTours.find(t => t.slug === "private-group-tour"),
    allTours.find(t => t.slug === "photography-tour"),
  ].filter((tour): tour is typeof allTours[0] => tour !== undefined);
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-ruby/10 via-background to-sapphire/10 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
                Discover Wrocław as never before
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Explore the hidden gems and rich history of Poland's most beautiful city
              </p>
              <Link
                to="/contact"
                className="inline-block bg-ruby text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-ruby/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Book Your Tour
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/src/assets/1.jpg" 
                  alt="Wrocław Cityscape"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-sapphire/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-12">
            Our Tours
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {featuredTours.map((tour) => (
              <Link
                key={tour.slug}
                to={`/${tour.slug}`}
                className="bg-card rounded-xl shadow-card border border-border/50 overflow-hidden hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 block"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{tour.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {tour.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-emerald/10 to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/src/assets/2.jpg" 
                  alt="Wrocław Old Town"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-ruby/10 rounded-full blur-3xl"></div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                About Our Tours
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are passionate about sharing the hidden stories and unique experiences that make Wrocław special. Our local guides combine historical knowledge with insider tips to deliver unforgettable adventures.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From traditional beer tastings to mysterious ghost walks, we offer authentic experiences that show you the real Wrocław beyond the tourist trails.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
