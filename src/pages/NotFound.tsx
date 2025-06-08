
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">404</h1>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8">Oops! The page you're looking for seems to have wandered off the playground.</p>
        <div className="space-y-4">
          <Button asChild className="w-full">
            <a href="/">Return to Home</a>
          </Button>
          <p className="text-sm text-gray-500">
            Let's get you back to where the fun happens!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
