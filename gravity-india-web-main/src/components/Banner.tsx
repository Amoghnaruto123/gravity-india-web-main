import React, { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';

// Add a custom event to track mobile menu state
const MOBILE_MENU_EVENT = 'mobileMenuStateChange';

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [bannerHeight, setBannerHeight] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const bannerRef = React.useRef<HTMLDivElement>(null);
  // For the typewriter effect
  const [displayText, setDisplayText] = useState('Join us at ');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = 'Join us at UTKARSH Customer Meet on 20th June 2025';

  // Measure banner height when mounted
  useEffect(() => {
    const updateHeight = () => {
      if (bannerRef.current && isVisible && !isTransitioning) {
        const height = bannerRef.current.offsetHeight;
        setBannerHeight(height);
        // Update CSS variable immediately after measurement
        document.documentElement.style.setProperty('--banner-height', `${height}px`);
      }
    };
  
    // Run initially
    updateHeight();
  
    // Also run whenever displayText updates
    const resizeObserver = new ResizeObserver(updateHeight);
    if (bannerRef.current) {
      resizeObserver.observe(bannerRef.current);
    }
  
    window.addEventListener('resize', updateHeight);
  
    return () => {
      window.removeEventListener('resize', updateHeight);
      resizeObserver.disconnect();
    };
  }, [isVisible, isTransitioning, displayText]);

  // Handle dismissal with improved transition
  const handleDismiss = () => {
    // First, set transitioning state to trigger height animation
    setIsTransitioning(true);
    
    // Immediately update CSS variable to zero to prevent navigation jumps
    document.documentElement.style.setProperty('--banner-height', '0px');
    
    // After transition completes, hide the element
    setTimeout(() => {
      setIsVisible(false);
      setIsTransitioning(false);
    }, 300); // Match the transition duration (300ms)
  };

  // Typewriter effect - start after the component is mounted
  useEffect(() => {
    let i = 'Join us at '.length;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 50);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

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

  // Don't render the banner when mobile menu is open
  if (isMobileMenuOpen) {
    return null;
  }

  // Helper function to highlight UTKARSH in the text
  const renderHighlightedText = () => {
    const parts = displayText.split('UTKARSH');
    if (parts.length === 1) {
      return <span>{displayText}</span>;
    }
    
    return (
      <>
        {parts[0]}
        <span className="font-bold">UTKARSH</span>
        {parts[1]}
      </>
    );
  };

  return (
    <>
      {isVisible && (
        <div 
          ref={bannerRef}
          className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-600 via-blue-500 to-red-500 text-white py-2 md:py-3 z-50"
          style={{
            height: isTransitioning ? '0' : 'auto',
            opacity: isTransitioning ? 0 : 1,
            overflow: 'hidden',
            transition: 'height 0.3s ease, opacity 0.25s ease',
            transform: 'translate3d(0,0,0)', // Force GPU acceleration to prevent glitches
            willChange: 'height, opacity', // Hint to browser for optimization
          }}
        >
          {/* Close button positioned absolutely to the banner container */}
          <button 
            onClick={handleDismiss} 
            className="absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-100 transition-colors z-10"
            aria-label="Close banner"
          >
            <X className="h-4 w-4 md:h-5 md:w-5" />
          </button>

          {/* Main content container with padding to ensure space for the button */}
          <div className="max-w-7xl mx-auto px-3 pr-10 md:px-4 md:pr-12">
            {/* Desktop view */}
            <div className="hidden md:flex justify-center items-center">
              <div className="inline-flex items-center">
                <div className="text-base font-medium whitespace-nowrap">
                  {renderHighlightedText()}
                  {isTyping && <span className="inline-block w-[4px] h-5 ml-1 bg-white animate-pulse"></span>}
                </div>
                <a href="#" className="ml-4 inline-flex items-center text-white hover:text-blue-100 transition-colors font-medium whitespace-nowrap">
                  Know More <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
            
            {/* Mobile view */}
            <div className="md:hidden flex justify-center items-center">
              <div className="flex flex-wrap justify-center text-center">
                <div className="w-full text-sm font-medium">
                  {renderHighlightedText()}
                  {isTyping && <span className="inline-block w-[3px] h-4 ml-1 bg-white animate-pulse"></span>}
                </div>
                <a href="#" className="mt-1 inline-flex items-center text-white hover:text-blue-100 transition-colors font-medium text-xs">
                  Know More <ArrowRight className="ml-1 h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner; 