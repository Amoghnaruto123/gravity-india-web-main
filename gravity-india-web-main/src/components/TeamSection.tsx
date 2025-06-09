import { ArrowRight } from "lucide-react";

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row">
          {/* Left column with text */}
          <div className="w-full md:w-1/3 mb-12 md:mb-0 pr-0 md:pr-12">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Meet the brain
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Our diverse team of experts brings decades of experience and innovation to deliver exceptional infrastructure solutions for your enterprise needs.
            </p>
            <a href="#" className="inline-flex items-center text-gray-700 hover:text-gray-900 font-medium">
              See All Members <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          
          {/* Right column with team grid */}
          <div className="w-full md:w-2/3">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-0 overflow-hidden rounded-2xl">
              {/* Row 1 */}
              <div className="relative group overflow-hidden">
                <img 
                  src="/lovable-uploads/509869ea-56d8-4047-bcfa-e1be5fc49dbe.jpg" 
                  alt="Chandler Bing" 
                  className="w-full aspect-square object-cover" 
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                  <h3 className="text-xl font-bold text-white">Chandler Bing</h3>
                  <p className="text-sm text-gray-300">Chief Technology Officer</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden">
                <img 
                  src="/lovable-uploads/ce280b4d-276d-4395-a3f4-fbefb7d1f39b.jpg" 
                  alt="Monica Geller" 
                  className="w-full aspect-square object-cover" 
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                  <h3 className="text-xl font-bold text-white">Monica Geller</h3>
                  <p className="text-sm text-gray-300">Operations Director</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden">
                <img 
                  src="/lovable-uploads/rachel green jennifer aniston friends new york nyc….jpg" 
                  alt="Rachel Green" 
                  className="w-full aspect-square object-cover" 
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                  <h3 className="text-xl font-bold text-white">Rachel Green</h3>
                  <p className="text-sm text-gray-300">Marketing Director</p>
                </div>
              </div>
              
              {/* Row 2 */}
              <div className="relative group overflow-hidden">
                <img 
                  src="/lovable-uploads/ross geller s_8 💕.jpg" 
                  alt="Ross Geller" 
                  className="w-full aspect-square object-cover" 
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                  <h3 className="text-xl font-bold text-white">Ross Geller</h3>
                  <p className="text-sm text-gray-300">Technical Director</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden">
                <img 
                  src="/lovable-uploads/matt lebank - joey from friends.jpg" 
                  alt="Joey Tribbiani" 
                  className="w-full aspect-square object-cover" 
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                  <h3 className="text-xl font-bold text-white">Joey Tribbiani</h3>
                  <p className="text-sm text-gray-300">VP of Sales</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden">
                <img 
                  src="/lovable-uploads/1f35ba17-d33b-47a2-a39e-36480b5cc083.jpg" 
                  alt="Phoebe Buffay" 
                  className="w-full aspect-square object-cover" 
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                  <h3 className="text-xl font-bold text-white">Phoebe Buffay</h3>
                  <p className="text-sm text-gray-300">Customer Relations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 