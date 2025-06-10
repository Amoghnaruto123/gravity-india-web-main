import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [bannerHeight, setBannerHeight] = useState(0);
  const bannerRef = React.useRef<HTMLDivElement>(null);

  // Measure banner height when mounted and when visibility changes
  useEffect(() => {
    if (bannerRef.current && isVisible) {
      setBannerHeight(bannerRef.current.offsetHeight);
    } else if (!isVisible) {
      setBannerHeight(0);
    }

    // Update measurement on resize
    const handleResize = () => {
      if (bannerRef.current && isVisible) {
        setBannerHeight(bannerRef.current.offsetHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isVisible]);

  // Apply banner height to document
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--banner-height', `${bannerHeight}px`);
    
    return () => {
      root.style.removeProperty('--banner-height');
    };
  }, [bannerHeight]);

  return (
    <>
      {isVisible ? (
        <div 
          ref={bannerRef}
          className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-600 via-blue-500 to-red-500 text-white py-3 px-4 z-50"
        >
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="text-sm md:text-base font-medium text-center w-full">
              <span className="hidden md:inline-block mr-2">🎉</span>
              <span className="md:inline">Special offer:</span> Get a free infrastructure audit when you book a consultation!
              <a href="#" className="ml-2 underline font-semibold hover:text-white transition-colors">
                Learn more
              </a>
            </div>
            <button 
              onClick={() => setIsVisible(false)} 
              className="ml-auto text-white hover:text-blue-100 transition-colors absolute right-4 top-1/2 transform -translate-y-1/2"
              aria-label="Close banner"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Banner; 