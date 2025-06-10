import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";

interface NavigationProps {
  isDialogOpen: boolean;
  setIsDialogOpen: (isOpen: boolean) => void;
  form: any;
  onSubmit: (data: any) => void;
}

const Navigation = ({ isDialogOpen, setIsDialogOpen, form, onSubmit }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSectionOpen, setMobileSectionOpen] = useState<string | null>(null);
  
  // Add new state for tracking dropdown visibility
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Product categories data for dropdown
  const productCategories = [
    { name: "UPS Systems", description: "Uninterruptible power supplies for critical applications", icon: <div className="h-4 w-4 mr-2" /> },
    { name: "Cooling Solutions", description: "Precision air conditioning systems", icon: <div className="h-4 w-4 mr-2" /> },
    { name: "Power Distribution", description: "PDUs and power management solutions", icon: <div className="h-4 w-4 mr-2" /> },
    { name: "Solar Solutions", description: "Renewable energy products and systems", icon: <div className="h-4 w-4 mr-2" /> },
    { name: "Monitoring Systems", description: "Environmental monitoring equipment", icon: <div className="h-4 w-4 mr-2" /> },
    { name: "Racks & Enclosures", description: "High-quality infrastructure housing", icon: <div className="h-4 w-4 mr-2" /> },
    { name: "Cable Management", description: "Organization solutions for data centers", icon: <div className="h-4 w-4 mr-2" /> },
    { name: "Testing Equipment", description: "Diagnostic and measurement tools", icon: <div className="h-4 w-4 mr-2" /> }
  ];
  
  // Service categories data for dropdown
  const serviceCategories = [
    { name: "24/7 Monitoring", description: "Real-time infrastructure monitoring", icon: <div className="h-4 w-4 mr-2" /> },
    { name: "Maintenance Services", description: "Preventive and corrective maintenance", icon: <div className="h-4 w-4 mr-2" /> },
    { name: "Technical Support", description: "Expert technical assistance", icon: <div className="h-4 w-4 mr-2" /> },
    { name: "Installation Services", description: "Professional installation and setup", icon: <div className="h-4 w-4 mr-2" /> },
    { name: "Consulting", description: "Expert advice for infrastructure planning", icon: <div className="h-4 w-4 mr-2" /> },
    { name: "Training", description: "Technical skills development programs", icon: <div className="h-4 w-4 mr-2" /> }
  ];
  
  // Solution categories data for dropdown
  const solutionCategories = [
    { name: "Data Centers", description: "Complete infrastructure solutions", icon: <div className="h-4 w-4 mr-2" /> },
    { name: "Power Management", description: "UPS and power quality systems", icon: <div className="h-4 w-4 mr-2" /> },
    { name: "Renewable Energy", description: "Solar and green energy solutions", icon: <div className="h-4 w-4 mr-2" /> },
    { name: "Managed Services", description: "24/7 monitoring and support", icon: <div className="h-4 w-4 mr-2" /> },
    { name: "Edge Computing", description: "Distributed computing infrastructure", icon: <div className="h-4 w-4 mr-2" /> },
    { name: "Hybrid Solutions", description: "Integrated on-prem and cloud systems", icon: <div className="h-4 w-4 mr-2" /> }
  ];
  
  // Company categories data for dropdown
  const companyCategories = [
    { name: "About Us", description: "Our story and mission", icon: <div className="h-4 w-4 mr-2" /> },
    { name: "Careers", description: "Join our growing team", icon: <div className="h-4 w-4 mr-2" /> },
    { name: "Partners", description: "Strategic alliances and partnerships", icon: <div className="h-4 w-4 mr-2" /> },
    { name: "Legal", description: "Terms, privacy and compliance", icon: <div className="h-4 w-4 mr-2" /> },
    { name: "News", description: "Latest company updates", icon: <div className="h-4 w-4 mr-2" /> },
    { name: "Sustainability", description: "Our environmental initiatives", icon: <div className="h-4 w-4 mr-2" /> }
  ];

  // Function to handle opening dropdown on click
  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };
  
  // Function to handle mobile section toggle
  const toggleMobileSection = (section: string) => {
    if (mobileSectionOpen === section) {
      setMobileSectionOpen(null);
    } else {
      setMobileSectionOpen(section);
    }
  };
  
  // Function to handle mouse enter (hover)
  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };
  
  // Function to handle mouse leave
  const handleMouseLeave = () => {
    // Only close if it wasn't clicked open (we'll handle this with a ref)
    if (!clickRef.current) {
      setActiveDropdown(null);
    }
  };
  
  // Ref to track if dropdown was opened via click
  const clickRef = useRef(false);
  
  // Handle clicks outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setActiveDropdown(null);
        clickRef.current = false;
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className={`fixed top-[var(--banner-height,0px)] w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white shadow-sm'}`}>
      <div className="w-fullpx-6">
        <div className="realtive flex items-center w-full h-20">
          {/* Logo on left */}
          <div className="flex-shrink-0 left-0 pl-6 ">
            <img src="/lovable-uploads/8c79cb12-2bc2-4bcd-95a4-8e82d3f4035f.png"
                 alt="Gravity India"
                 className="h-12 w-auto" />
          </div>

          {/* Navigation Links - Center with flex-auto and justify-center */}
          <div className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <a href="#home" className="text-gray-700 hover:text-blue-600 relative group transition-colors font-medium whitespace-nowrap">
              Who We Are
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>

            <div 
              className="relative dropdown-container" 
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={`flex items-center transition-colors font-medium whitespace-nowrap ${activeDropdown === 'products' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                onClick={() => {
                  toggleDropdown('products');
                  clickRef.current = true;
                }}
              >
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>

            <div 
              className="relative dropdown-container"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={`flex items-center transition-colors font-medium whitespace-nowrap ${activeDropdown === 'services' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                onClick={() => {
                  toggleDropdown('services');
                  clickRef.current = true;
                }}
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>

            <div 
              className="relative dropdown-container"
              onMouseEnter={() => handleMouseEnter('solutions')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={`flex items-center transition-colors font-medium whitespace-nowrap ${activeDropdown === 'solutions' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                onClick={() => {
                  toggleDropdown('solutions');
                  clickRef.current = true;
                }}
              >
                Solutions <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>

            <div 
              className="relative dropdown-container"
              onMouseEnter={() => handleMouseEnter('company')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={`flex items-center transition-colors font-medium whitespace-nowrap ${activeDropdown === 'company' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                onClick={() => {
                  toggleDropdown('company');
                  clickRef.current = true;
                }}
              >
                Company <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            
            <a href="#resources" className="text-gray-700 hover:text-blue-600 relative group transition-colors font-medium whitespace-nowrap">
              Resources
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Rightmost action buttons + mobile menu icon */}
          <div className="flex items-center space-x-4 absolute right-0 pr-6">
            {/* Desktop buttons */}
            <div className="hidden lg:flex space-x-4">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 transform transition-all duration-200 px-6 whitespace-nowrap">
                    Book a Call
                  </Button>
                </DialogTrigger>
              </Dialog>
              
              <Button className="bg-blue-600 hover:bg-blue-700 transform transition-all duration-200 px-6 whitespace-nowrap">
                Contact Us
              </Button>
            </div>
            
            {/* Mobile menu toggle */}
            <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - Vertiv style */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white">
          <div className="flex justify-between items-center h-20 px-6 border-b border-gray-200">
            <img src="/lovable-uploads/8c79cb12-2bc2-4bcd-95a4-8e82d3f4035f.png" alt="Gravity India" className="h-10 w-auto" />
            <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="overflow-y-auto h-[calc(100vh-5rem)]">
            <div className="flex flex-col divide-y divide-gray-200">
              <a href="#home" className="px-6 py-4 text-gray-800 font-medium">
                Who We Are
              </a>
              
              {/* Products Dropdown */}
              <div className="border-b border-gray-200">
                <button 
                  onClick={() => toggleMobileSection('products')}
                  className="w-full px-6 py-4 flex justify-between items-center text-gray-800 font-medium"
                >
                  <span>Products</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileSectionOpen === 'products' ? 'rotate-180' : ''}`} />
                </button>
                
                {mobileSectionOpen === 'products' && (
                  <div className="bg-gray-50 py-2">
                    {productCategories.map((category, index) => (
                      <a key={index} href="#" className="block px-8 py-2 text-gray-700 hover:text-blue-600">
                        {category.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Services Dropdown */}
              <div className="border-b border-gray-200">
                <button 
                  onClick={() => toggleMobileSection('services')}
                  className="w-full px-6 py-4 flex justify-between items-center text-gray-800 font-medium"
                >
                  <span>Services</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileSectionOpen === 'services' ? 'rotate-180' : ''}`} />
                </button>
                
                {mobileSectionOpen === 'services' && (
                  <div className="bg-gray-50 py-2">
                    {serviceCategories.map((category, index) => (
                      <a key={index} href="#" className="block px-8 py-2 text-gray-700 hover:text-blue-600">
                        {category.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Solutions Dropdown */}
              <div className="border-b border-gray-200">
                <button 
                  onClick={() => toggleMobileSection('solutions')}
                  className="w-full px-6 py-4 flex justify-between items-center text-gray-800 font-medium"
                >
                  <span>Solutions</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileSectionOpen === 'solutions' ? 'rotate-180' : ''}`} />
                </button>
                
                {mobileSectionOpen === 'solutions' && (
                  <div className="bg-gray-50 py-2">
                    {solutionCategories.map((category, index) => (
                      <a key={index} href="#" className="block px-8 py-2 text-gray-700 hover:text-blue-600">
                        {category.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Company Dropdown */}
              <div className="border-b border-gray-200">
                <button 
                  onClick={() => toggleMobileSection('company')}
                  className="w-full px-6 py-4 flex justify-between items-center text-gray-800 font-medium"
                >
                  <span>Company</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileSectionOpen === 'company' ? 'rotate-180' : ''}`} />
                </button>
                
                {mobileSectionOpen === 'company' && (
                  <div className="bg-gray-50 py-2">
                    {companyCategories.map((category, index) => (
                      <a key={index} href="#" className="block px-8 py-2 text-gray-700 hover:text-blue-600">
                        {category.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              
              <a href="#resources" className="px-6 py-4 text-gray-800 font-medium">
                Resources
              </a>
              
              {/* CTA Buttons */}
              <div className="px-6 py-4">
                <div className="grid gap-3">
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="w-full border-blue-600 text-blue-600 bg-transparent py-4 hover:bg-blue-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Book a Call
                      </Button>
                    </DialogTrigger>
                  </Dialog>
                  
                  <Button 
                    className="w-full bg-blue-600 text-white py-4 hover:bg-blue-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mega Dropdown for Products */}
      <div 
        className={`absolute left-0 w-full bg-white border-t border-gray-200 shadow-lg transition-all duration-300 z-40 ${activeDropdown === 'products' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
        onMouseEnter={() => handleMouseEnter('products')}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-4 gap-8">
            {/* Left Column - Category List */}
            <div className="col-span-1 border-r border-gray-200 pr-8">
              <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">Categories</h3>
              <ul className="space-y-2">
                {productCategories.map((category, index) => (
                  <li key={index}>
                    <a href="#" className="flex items-center py-2 text-gray-700 hover:text-blue-600 transition-colors">
                      <span className="mr-3 text-gray-500">{category.icon}</span>
                      <span className="font-medium">{category.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Middle Column - Popular Products */}
            <div className="col-span-2">
              <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">Popular Products</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <h4 className="font-medium text-gray-900 mb-1">UPS Systems</h4>
                  <p className="text-sm text-gray-600">Uninterruptible power supplies for critical applications</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <h4 className="font-medium text-gray-900 mb-1">Cooling Solutions</h4>
                  <p className="text-sm text-gray-600">Precision air conditioning systems</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <h4 className="font-medium text-gray-900 mb-1">Power Distribution</h4>
                  <p className="text-sm text-gray-600">PDUs and power management solutions</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <h4 className="font-medium text-gray-900 mb-1">Solar Solutions</h4>
                  <p className="text-sm text-gray-600">Renewable energy products and systems</p>
                </div>
              </div>
            </div>
            
            {/* Right Column - Featured */}
            <div className="col-span-1">
              <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">Featured</h3>
              <div className="bg-blue-50 rounded-lg p-5">
                <h4 className="font-medium text-blue-800 mb-2">New Products</h4>
                <p className="text-sm text-gray-700 mb-4">Explore our latest product offerings for enterprise infrastructure.</p>
                <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-100">
                  View All
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mega Dropdown for Services */}
      <div 
        className={`absolute left-0 w-full bg-white border-t border-gray-200 shadow-lg transition-all duration-300 z-40 ${activeDropdown === 'services' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
        onMouseEnter={() => handleMouseEnter('services')}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-4 gap-8">
            {/* Left Column - Category List */}
            <div className="col-span-1 border-r border-gray-200 pr-8">
              <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">Our Services</h3>
              <ul className="space-y-2">
                {serviceCategories.map((category, index) => (
                  <li key={index}>
                    <a href="#" className="flex items-center py-2 text-gray-700 hover:text-blue-600 transition-colors">
                      <span className="mr-3 text-gray-500">{category.icon}</span>
                      <span className="font-medium">{category.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Middle Column - Popular Services */}
            <div className="col-span-2">
              <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">Popular Services</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <h4 className="font-medium text-gray-900 mb-1">24/7 Monitoring</h4>
                  <p className="text-sm text-gray-600">Real-time infrastructure monitoring</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <h4 className="font-medium text-gray-900 mb-1">Maintenance Services</h4>
                  <p className="text-sm text-gray-600">Preventive and corrective maintenance</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <h4 className="font-medium text-gray-900 mb-1">Technical Support</h4>
                  <p className="text-sm text-gray-600">Expert technical assistance</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <h4 className="font-medium text-gray-900 mb-1">Installation Services</h4>
                  <p className="text-sm text-gray-600">Professional installation and setup</p>
                </div>
              </div>
            </div>
            
            {/* Right Column - Featured */}
            <div className="col-span-1">
              <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">Featured</h3>
              <div className="bg-blue-50 rounded-lg p-5">
                <h4 className="font-medium text-blue-800 mb-2">Service Plans</h4>
                <p className="text-sm text-gray-700 mb-4">Discover our customizable service plans for enterprise infrastructure.</p>
                <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-100">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mega Dropdown for Solutions */}
      <div 
        className={`absolute left-0 w-full bg-white border-t border-gray-200 shadow-lg transition-all duration-300 z-40 ${activeDropdown === 'solutions' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
        onMouseEnter={() => handleMouseEnter('solutions')}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-4 gap-8">
            {/* Left Column - Category List */}
            <div className="col-span-1 border-r border-gray-200 pr-8">
              <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">Solution Areas</h3>
              <ul className="space-y-2">
                {solutionCategories.map((category, index) => (
                  <li key={index}>
                    <a href="#" className="flex items-center py-2 text-gray-700 hover:text-blue-600 transition-colors">
                      <span className="mr-3 text-gray-500">{category.icon}</span>
                      <span className="font-medium">{category.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Middle Column - Popular Solutions */}
            <div className="col-span-2">
              <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">Featured Solutions</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <h4 className="font-medium text-gray-900 mb-1">Data Centers</h4>
                  <p className="text-sm text-gray-600">Complete infrastructure solutions</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <h4 className="font-medium text-gray-900 mb-1">Power Management</h4>
                  <p className="text-sm text-gray-600">UPS and power quality systems</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <h4 className="font-medium text-gray-900 mb-1">Renewable Energy</h4>
                  <p className="text-sm text-gray-600">Solar and green energy solutions</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <h4 className="font-medium text-gray-900 mb-1">Managed Services</h4>
                  <p className="text-sm text-gray-600">24/7 monitoring and support</p>
                </div>
              </div>
            </div>
            
            {/* Right Column - Case Study */}
            <div className="col-span-1">
              <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">Case Study</h3>
              <div className="bg-blue-50 rounded-lg p-5">
                <h4 className="font-medium text-blue-800 mb-2">Success Stories</h4>
                <p className="text-sm text-gray-700 mb-4">See how our solutions have helped businesses achieve their goals.</p>
                <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-100">
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mega Dropdown for Company */}
      <div 
        className={`absolute left-0 w-full bg-white border-t border-gray-200 shadow-lg transition-all duration-300 z-40 ${activeDropdown === 'company' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
        onMouseEnter={() => handleMouseEnter('company')}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-4 gap-8">
            {/* Left Column - Category List */}
            <div className="col-span-1 border-r border-gray-200 pr-8">
              <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">About Us</h3>
              <ul className="space-y-2">
                {companyCategories.map((category, index) => (
                  <li key={index}>
                    <a href="#" className="flex items-center py-2 text-gray-700 hover:text-blue-600 transition-colors">
                      <span className="mr-3 text-gray-500">{category.icon}</span>
                      <span className="font-medium">{category.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Middle Column - Company Info */}
            <div className="col-span-2">
              <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">Our Company</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <h4 className="font-medium text-gray-900 mb-1">About Us</h4>
                  <p className="text-sm text-gray-600">Our story and mission</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <h4 className="font-medium text-gray-900 mb-1">Careers</h4>
                  <p className="text-sm text-gray-600">Join our growing team</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <h4 className="font-medium text-gray-900 mb-1">Partners</h4>
                  <p className="text-sm text-gray-600">Strategic alliances and partnerships</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <h4 className="font-medium text-gray-900 mb-1">News</h4>
                  <p className="text-sm text-gray-600">Latest company updates</p>
                </div>
              </div>
            </div>
            
            {/* Right Column - Leadership */}
            <div className="col-span-1">
              <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">Leadership</h3>
              <div className="bg-blue-50 rounded-lg p-5">
                <h4 className="font-medium text-blue-800 mb-2">Meet Our Team</h4>
                <p className="text-sm text-gray-700 mb-4">Learn about the people behind Gravity India Technologies.</p>
                <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-100">
                  View Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 