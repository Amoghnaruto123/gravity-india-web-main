import { useEffect, useState, useRef } from 'react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to detect when stats are in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="stats" 
      className="py-12 bg-gray-50 border-b border-gray-100 md:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile View (2x2 Grid with minimal styling) */}
        <div className="md:hidden grid grid-cols-2 gap-y-10 gap-x-6 max-w-sm mx-auto">
          {/* First row - left item */}
          <div className="text-center">
            <p className={`text-5xl font-bold mb-1 bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              30+
            </p>
            <p className={`text-gray-700 text-sm transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Years of Experience
            </p>
          </div>
          
          {/* First row - right item */}
          <div className="text-center">
            <p className={`text-5xl font-bold mb-1 bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              500+
            </p>
            <p className={`text-gray-700 text-sm transition-all duration-700 delay-250 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Enterprise Clients
            </p>
          </div>
          
          {/* Second row - left item */}
          <div className="text-center">
            <p className={`text-5xl font-bold mb-1 bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              99.9%
            </p>
            <p className={`text-gray-700 text-sm transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Uptime Guarantee
            </p>
          </div>
          
          {/* Second row - right item */}
          <div className="text-center">
            <p className={`text-5xl font-bold mb-1 bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent transition-all duration-700 delay-450 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              24/7
            </p>
            <p className={`text-gray-700 text-sm transition-all duration-700 delay-550 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Support & Monitoring
            </p>
          </div>
        </div>

        {/* Desktop View (row layout with dividers) */}
        <div className="hidden md:flex md:justify-between md:items-center md:max-w-4xl md:mx-auto lg:max-w-6xl">
          <div className="text-center px-4 relative">
            <p className={`text-5xl lg:text-6xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              30+
            </p>
            <p className={`text-gray-700 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Years of Experience
            </p>
            <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 hidden md:block h-10 w-px bg-gray-200"></div>
          </div>

          <div className="text-center px-4 relative">
            <p className={`text-5xl lg:text-6xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              500+
            </p>
            <p className={`text-gray-700 transition-all duration-700 delay-250 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Enterprise Clients
            </p>
            <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 hidden md:block h-10 w-px bg-gray-200"></div>
          </div>

          <div className="text-center px-4 relative">
            <p className={`text-5xl lg:text-6xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              99.9%
            </p>
            <p className={`text-gray-700 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Uptime Guarantee
            </p>
            <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 hidden md:block h-10 w-px bg-gray-200"></div>
          </div>

          <div className="text-center px-4">
            <p className={`text-5xl lg:text-6xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent transition-all duration-700 delay-450 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              24/7
            </p>
            <p className={`text-gray-700 transition-all duration-700 delay-550 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Support & Monitoring
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 