import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

// Add a custom event to track mobile menu state
const MOBILE_MENU_EVENT = 'mobileMenuStateChange';

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [bannerHeight, setBannerHeight] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const bannerRef = React.useRef<HTMLDivElement>(null);

  // Listen for mobile menu state changes
  useEffect(() => {
    const handleMobileMenuChange = (e: CustomEvent) => {
      setIsMobileMenuOpen(e.detail.isOpen);
    };

    // TypeScript needs this casting for custom events
    window.addEventListener(MOBILE_MENU_EVENT, handleMobileMenuChange as EventListener);
    
    return () => {
      window.removeEventListener(MOBILE_MENU_EVENT, handleMobileMenuChange as EventListener);
    };
  }, []);

  // Handle dismissal with transition
  const handleDismiss = () => {
    setIsTransitioning(true);
    // Set height to 0 immediately to trigger the transition
    setBannerHeight(0);
    // After transition completes, hide the element
    setTimeout(() => {
      setIsVisible(false);
      setIsTransitioning(false);
    }, 300); // Match the transition duration (300ms)
  };

  // Measure banner height when mounted and when visibility changes
  useEffect(() => {
    if (bannerRef.current && isVisible && !isTransitioning) {
      setBannerHeight(bannerRef.current.offsetHeight);
    }

    // Update measurement on resize
    const handleResize = () => {
      if (bannerRef.current && isVisible && !isTransitioning) {
        setBannerHeight(bannerRef.current.offsetHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isVisible, isTransitioning]);

  // Apply banner height to document
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--banner-height', `${bannerHeight}px`);
    
    return () => {
      root.style.removeProperty('--banner-height');
    };
  }, [bannerHeight]);

  // Don't render the banner when mobile menu is open
  if (isMobileMenuOpen) {
    return null;
  }

  return (
    <>
      {isVisible ? (
        <div 
          ref={bannerRef}
          className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-600 via-blue-500 to-red-500 text-white py-3 px-4 z-50"
          style={{
            height: isTransitioning ? '0px' : 'auto',
            overflow: 'hidden',
            transition: 'height 0.3s ease'
          }}
        >
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="text-sm md:text-base font-medium text-center w-full">
              <span className="hidden md:inline-block mr-2">🎉</span>
              <span className="md:inline">Headline:</span> Join Us for UTKARSH – Customer Meet on 20 June 2025
              <a href="#" className="ml-2 underline font-semibold hover:text-white transition-colors">
                Click here to join
              </a>
            </div>
            <button 
              onClick={handleDismiss} 
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