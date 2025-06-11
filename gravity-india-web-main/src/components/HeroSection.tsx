import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import VideoCarousel from "./VideoCarousel";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  openBookCallDialog: () => void;
}

const HeroSection = ({ openBookCallDialog }: HeroSectionProps) => {
  // Track the banner-height CSS variable for positioning
  const [bannerHeight, setBannerHeight] = useState(0);

  // Monitor the --banner-height CSS variable for changes
  useEffect(() => {
    const updateBannerHeight = () => {
      const height = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--banner-height') || '0');
      setBannerHeight(height);
    };

    // Initial check
    updateBannerHeight();

    // Set up a mutation observer to watch for style changes on document root
    const observer = new MutationObserver(updateBannerHeight);
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['style'] 
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      className="relative overflow-hidden"
      style={{ 
        paddingTop: `calc(96px + ${bannerHeight}px)`, // 24px * 4 = 96px (pt-24) + banner height
        transition: 'padding-top 0.3s ease' // Smooth transition when banner height changes
      }}
    >
      {/* Full-width video background */}
      <div className="absolute inset-0 w-full h-full">
        <VideoCarousel />
      </div>

      {/* Content overlay */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col min-h-[600px] justify-center py-16 lg:py-24">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              IT Solutions for Modern Enterprises
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              30+ Years of Expertise in Power Management, Infrastructure Development, and Auditing Services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-orange-500 hover:bg-orange-600 text-white border-none px-6 py-2 h-11 font-medium w-fit"
                onClick={openBookCallDialog}
              >
                Book a Call
              </Button>
              <Button 
                className="bg-transparent border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-6 py-2 h-11 font-medium w-fit transition-colors"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 