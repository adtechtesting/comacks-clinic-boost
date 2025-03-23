
import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import AnimatedHeading from '@/components/AnimatedHeading';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-comacks-black">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-9xl font-bold text-comacks-red/20">404</span>
          <AnimatedHeading level={1} className="mt-4 mb-6">
            Page Not Found
          </AnimatedHeading>
          <p className="text-comacks-white/70 mb-8 text-lg">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center bg-comacks-red text-comacks-white px-6 py-3 rounded-full transition-all hover:bg-comacks-red/90"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
