import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200 hover:scale-105 transform transition-transform duration-200">
            <Star className="mr-2 h-4 w-4" />
            Service Excellence
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive testing and commissioning services ensure operational integrity, safety, and performance across all electrical infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* Card 1 */}
          <div className="border border-gray-200 rounded-lg p-8 hover:shadow-md transition-shadow">
            <p className="text-gray-700 mb-8 leading-relaxed">
              "At Gravity India Technologies, our Testing and Commissioning division plays a pivotal role in ensuring operational integrity and safety of electrical infrastructure across commercial, industrial, and healthcare facilities."
            </p>
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/L7.png" 
                alt="T&C Department" 
                className="w-12 h-12 rounded-full object-cover mr-4" 
              />
              <div>
                <h4 className="font-semibold text-gray-900">Department of T&C</h4>
                <p className="text-gray-600 text-sm">30+ Years Experience</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border border-gray-200 rounded-lg p-8 hover:shadow-md transition-shadow">
            <p className="text-gray-700 mb-8 leading-relaxed">
              "We follow a structured, multi-step approach: Requirements Documentation, Design Brief, Project Tagging, On-site Deployment, Testing Execution, and Final Testing with Sign-off."
            </p>
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/L8.png" 
                alt="T&C Process" 
                className="w-12 h-12 rounded-full object-cover mr-4" 
              />
              <div>
                <h4 className="font-semibold text-gray-900">Our T&C Process</h4>
                <p className="text-gray-600 text-sm">Quality-Assured Results</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="border border-gray-200 rounded-lg p-8 hover:shadow-md transition-shadow">
            <p className="text-gray-700 mb-8 leading-relaxed">
              "Our essential services include Power Quality Audit, Thermography Audit, Earth Pit Testing, Socket Testing, Battery Impedance Testing, and Electrical Safety Audits."
            </p>
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/L9.png" 
                alt="Essential Services" 
                className="w-12 h-12 rounded-full object-cover mr-4" 
              />
              <div>
                <h4 className="font-semibold text-gray-900">Essential Services</h4>
                <p className="text-gray-600 text-sm">Comprehensive Solutions</p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="border border-gray-200 rounded-lg p-8 hover:shadow-md transition-shadow">
            <p className="text-gray-700 mb-8 leading-relaxed">
              "Our specialized services include Load Bank Testing up to 2 MW, Primary & Secondary Injection Testing, Arc Flash Analysis, Data Center Commissioning, and ESG Consulting."
            </p>
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/L10.png" 
                alt="Specialized Services" 
                className="w-12 h-12 rounded-full object-cover mr-4" 
              />
              <div>
                <h4 className="font-semibold text-gray-900">Specialized Services</h4>
                <p className="text-gray-600 text-sm">Advanced Solutions</p>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="border border-gray-200 rounded-lg p-8 hover:shadow-md transition-shadow">
            <p className="text-gray-700 mb-8 leading-relaxed">
              "Load Bank Testing with step loads from 3kW to 2MW for power quality, thermography, and data center applications ensures systems perform under real-world conditions."
            </p>
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/L11.png" 
                alt="Load Bank Testing" 
                className="w-12 h-12 rounded-full object-cover mr-4" 
              />
              <div>
                <h4 className="font-semibold text-gray-900">Load Bank Testing</h4>
                <p className="text-gray-600 text-sm">Up to 2 MW Capacity</p>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="border border-gray-200 rounded-lg p-8 hover:shadow-md transition-shadow">
            <p className="text-gray-700 mb-8 leading-relaxed">
              "Our full-stack T&C solutions for mission-critical data centers include performance benchmarking, reporting, and ESG readiness assessments for sustainability compliance."
            </p>
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/L12.png" 
                alt="Data Center Solutions" 
                className="w-12 h-12 rounded-full object-cover mr-4" 
              />
              <div>
                <h4 className="font-semibold text-gray-900">Data Center Solutions</h4>
                <p className="text-gray-600 text-sm">Mission-Critical Reliability</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 