import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import VideoCarousel from "./VideoCarousel";

interface HeroSectionProps {
  openBookCallDialog: () => void;
}

const HeroSection = ({ openBookCallDialog }: HeroSectionProps) => {
  return (
    <section className="pt-20 relative overflow-hidden">
      {/* Full-width video background */}
      <div className="absolute inset-0 w-full h-full">
        <VideoCarousel />
      </div>

      {/* Content overlay */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col min-h-[600px] justify-center py-16 lg:py-24">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Comprehensive IT Infrastructure & Power Solutions for Enterprise Growth
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
                Explore Solutions <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 