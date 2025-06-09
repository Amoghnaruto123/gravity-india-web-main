import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-sky-300 via-sky-500 to-sky-700 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/lovable-uploads/8c79cb12-2bc2-4bcd-95a4-8e82d3f4035f.png" alt="Gravity India Technologies" className="h-10 w-auto" />
            </div>
            <p className="text-white mb-6 max-w-md">
              Powering Fortune 500 companies with mission-critical infrastructure solutions since 1995. Providing data center design, power management and cooling solutions across India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors hover:scale-110 transform duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-white" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors hover:scale-110 transform duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-white" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3 text-white">
              <li><a href="#" className="hover:text-sky-100 transition-colors hover:scale-105 transform duration-200 inline-block">Data Center Solutions</a></li>
              <li><a href="#" className="hover:text-sky-100 transition-colors hover:scale-105 transform duration-200 inline-block">Power & UPS Systems</a></li>
              <li><a href="#" className="hover:text-sky-100 transition-colors hover:scale-105 transform duration-200 inline-block">Cooling Solutions</a></li>
              <li><a href="#" className="hover:text-sky-100 transition-colors hover:scale-105 transform duration-200 inline-block">Renewable Energy</a></li>
              <li><a href="#" className="hover:text-sky-100 transition-colors hover:scale-105 transform duration-200 inline-block">Managed Services</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3 text-white">
              <li><a href="#" className="hover:text-sky-100 transition-colors hover:scale-105 transform duration-200 inline-block">About Us</a></li>
              <li><a href="#" className="hover:text-sky-100 transition-colors hover:scale-105 transform duration-200 inline-block">Leadership</a></li>
              <li><a href="#" className="hover:text-sky-100 transition-colors hover:scale-105 transform duration-200 inline-block">Careers</a></li>
              <li><a href="#" className="hover:text-sky-100 transition-colors hover:scale-105 transform duration-200 inline-block">News & Press</a></li>
              <li><a href="#" className="hover:text-sky-100 transition-colors hover:scale-105 transform duration-200 inline-block">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-3 text-white">
              <li><a href="#" className="hover:text-sky-100 transition-colors hover:scale-105 transform duration-200 inline-block">24/7 Monitoring</a></li>
              <li><a href="#" className="hover:text-sky-100 transition-colors hover:scale-105 transform duration-200 inline-block">Technical Support</a></li>
              <li><a href="#" className="hover:text-sky-100 transition-colors hover:scale-105 transform duration-200 inline-block">Maintenance Plans</a></li>
              <li><a href="#" className="hover:text-sky-100 transition-colors hover:scale-105 transform duration-200 inline-block">Training</a></li>
              <li><a href="#" className="hover:text-sky-100 transition-colors hover:scale-105 transform duration-200 inline-block">FAQs</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-white text-sm">
                © 2025 Gravity India Technologies Pvt Ltd. All rights reserved.
              </p>
              <div className="flex space-x-4 mt-2">
                <a href="#" className="text-white/80 text-sm hover:text-white transition-colors hover:scale-105 transform duration-200">Privacy Policy</a>
                <a href="#" className="text-white/80 text-sm hover:text-white transition-colors hover:scale-105 transform duration-200">Terms of Service</a>
                <a href="#" className="text-white/80 text-sm hover:text-white transition-colors hover:scale-105 transform duration-200">Sitemap</a>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 hover:scale-105 transform transition-transform duration-200">
                <Phone className="h-4 w-4 text-orange-300" />
                <span className="text-orange-300">+91 9886710105</span>
              </div>
              <div className="flex items-center space-x-2 hover:scale-105 transform transition-transform duration-200">
                <Mail className="h-4 w-4 text-white" />
                <span className="text-white">marcom@gravityindia.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 