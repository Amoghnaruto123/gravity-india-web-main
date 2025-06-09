import React from 'react';
import { X } from 'lucide-react';

const Banner = () => {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bg-blue-600 text-white py-2 px-4 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1 text-center text-sm font-medium">
          <span className="md:inline-block hidden mr-2">🎉</span>
          Special offer: Get a free infrastructure audit when you book a consultation this month!
          <a href="#" className="underline ml-2 font-semibold">
            Learn more
          </a>
        </div>
        <button 
          onClick={() => setIsVisible(false)} 
          className="ml-4 text-white hover:text-blue-100 transition-colors"
          aria-label="Close banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default Banner; 