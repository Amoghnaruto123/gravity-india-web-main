import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const SupportSection = () => {
  return (
    <section className="bg-gray-100 py-10 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <h3 className="text-xl font-semibold text-gray-900">Get sales and product support:</h3>
            <div className="text-gray-500">Available 9:00 AM - 6:00 PM, Mon - Sat</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center">
                <Phone className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <div className="text-lg font-medium text-gray-900">+91 9886710105</div>
                <div className="text-sm text-gray-500">Technical Support</div>
              </div>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white border-none px-6">
              Get in touch <Mail className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection; 