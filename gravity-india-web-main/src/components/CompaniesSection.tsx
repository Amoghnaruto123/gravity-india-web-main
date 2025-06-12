import { useEffect, useRef } from 'react';

interface Company {
  name: string;
  logo: string;
}

interface CompaniesSectionProps {
  companies: Company[];
}

// Add global style to hide scrollbars
const scrollbarHideStyles = `
  .logo-scroll-container::-webkit-scrollbar {
    display: none;
  }
  .logo-scroll-container {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

const CompaniesSection = ({ companies }: CompaniesSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  console.log(companies);

  // Optional: implement manual scroll animation for smoother scrolling
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Pixels per frame - adjust for speed
    const totalWidth = scrollContainer.scrollWidth;
    const containerWidth = scrollContainer.clientWidth;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      // Reset position when we've scrolled half the content (since we duplicated the logos)
      if (scrollPosition >= totalWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(scroll);
    };

    // Start the animation
    animationFrameId = requestAnimationFrame(scroll);

    // Pause animation on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationFrameId);
    const handleMouseLeave = () => {
      animationFrameId = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [companies.length]);

  return (
    <section className="py-12 sm:py-16 bg-white border-y border-gray-200">
      {/* Add the styles to the document */}
      <style dangerouslySetInnerHTML={{ __html: scrollbarHideStyles }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-semibold text-gray-900 text-lg sm:text-xl animate-fade-in">
            Partnering with industry leaders across India
          </h2>
        </div>

        {/* Container with the gradient mask effect */}
        <div className="relative">
          {/* Left fade mask */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none" 
            style={{
              background: 'linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0))'
            }}>
          </div>

          {/* Right fade mask */}
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none" 
            style={{
              background: 'linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0))'
            }}>
          </div>

          {/* Scrolling container */}
          <div 
            ref={scrollRef}
            className="overflow-x-auto py-6 relative logo-scroll-container"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <div className="flex gap-6 sm:gap-8 whitespace-nowrap">
              {/* Duplicate logos for continuous scrolling effect */}
              {[...companies, ...companies, ...companies].map((company, index) => (
                <div 
                  key={index} 
                  className="inline-flex flex-shrink-0 w-[180px] h-[100px] items-center justify-center p-2 sm:p-3"
                >
                  <div className="w-full h-full flex items-center justify-center hover:scale-105 transition-transform duration-300">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="h-18 sm:h-20 w-auto object-contain max-w-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
