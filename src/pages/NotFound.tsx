import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-cream to-background">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-8xl md:text-9xl font-display font-bold text-yellow">404</h1>
        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">Oops! Page not found</h2>
        <p className="text-lg text-muted-foreground max-w-md mx-auto font-body">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="inline-block bg-yellow text-black px-6 py-3 rounded-button font-semibold hover:bg-yellow-dark transition-all duration-200 hover:shadow-hover transform hover:-translate-y-1 font-body"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;