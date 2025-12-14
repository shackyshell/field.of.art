import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-muted to-background">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-8xl md:text-9xl font-display font-bold text-ruby">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Oops! Page not found</h2>
        <p className="text-lg text-muted-foreground max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="inline-block bg-ruby text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-ruby/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;