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
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          {/* <div className="absolute top-20 left-10 w-64 h-64 bg-yellow blob-shape-1"></div> */}
          {/* <div className="absolute bottom-20 right-10 w-48 h-48 bg-yellow blob-shape-2"></div> */}
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-black leading-tight">
                Discover <span className="text-yellow">Wrocław</span> as never before
              </h2>
              <p className="text-lg md:text-xl text-black/90 leading-relaxed font-body">
                Explore the hidden gems and rich history of Poland's most beautiful city
              </p>
              <Link
                to="/contact"
                className="inline-block bg-yellow text-black px-8 py-4 rounded-button font-semibold hover:bg-yellow-dark transition-all duration-200  hover:shadow-hover transform hover:-translate-y-1"
              >
                Book Your Tour
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-card overflow-hidden shadow-hover relative z-10">
                <img 
                  src="/src/assets/1.jpg" 
                  alt="Wrocław Cityscape"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-yellow blob-shape-3 -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-yellow">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-12">
            Our Tours
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {featuredTours.map((tour) => (
              <Link
                key={tour.slug}
                to={`/${tour.slug}`}
                className="bg-card rounded-card border border-border overflow-hidden hover:shadow-hover transition-all duration-200 transform hover:-translate-y-1 block"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-foreground mb-3">{tour.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-body">
                    {tour.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* <div className="absolute top-0 right-0 w-96 h-96 bg-yellow blob-shape-1 -translate-y-1/2 translate-x-1/2"></div> */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              {/* <div className="aspect-[4/3] rounded-card overflow-hidden shadow-hover">
                <img 
                  src="/src/assets/2.jpg" 
                  alt="Wrocław Old Town"
                  className="w-full h-full object-cover"
                />
              </div> */}
              <div className="relative">
              <div className="aspect-[4/3] rounded-card overflow-hidden shadow-hover relative z-10">
                <img 
                  src="/src/assets/2.jpg" 
                  alt="Wrocław Cityscape"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-yellow blob-shape-3 -z-0"></div> */}
            </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                About Our Tours
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-body">
                We are passionate about sharing the hidden stories and unique experiences that make Wrocław special. Our local guides combine historical knowledge with insider tips to deliver unforgettable adventures.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-body">
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
