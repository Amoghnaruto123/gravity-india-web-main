import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Calendar, Star, MapPin, Phone, Mail, Building2, Zap, Shield, Wrench, Factory, Warehouse, FlaskConical, CheckCircle, Globe, Award, TrendingUp, Menu, X, Send, ChevronDown, Play, Quote, ExternalLink, ChevronRight } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import React from 'react';

// Video carousel component for the hero section
const VideoCarousel = () => {
  const videos = [
    "/videos/data centers.mp4",
    "/videos/infra.mp4",
    "/videos/workers.mp4",
  ];
  
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  
  // Setup video refs array
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, videos.length);
  }, [videos.length]);
  
  // Function to change videos with a more subtle transition
  const changeVideo = () => {
    setIsTransitioning(true);
    
    // After a short fade out animation, change the video
    setTimeout(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
      setIsTransitioning(false);
      
      // If we have a ref to the new video, play it
      const nextVideo = videoRefs.current[currentVideoIndex];
      if (nextVideo) {
        nextVideo.currentTime = 0;
        nextVideo.play();
      }
    }, 600); // Shorter transition duration
  };
  
  // Auto-rotate videos every 10 seconds
  useEffect(() => {
    const interval = setInterval(changeVideo, 10000);
    return () => clearInterval(interval);
  }, [currentVideoIndex]);
  
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30 z-10"></div>
      
      {/* Video elements with more subtle transitions */}
      {videos.map((videoSrc, index) => (
        <div 
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-800 ${
            index === currentVideoIndex 
              ? isTransitioning ? 'opacity-80' : 'opacity-100' 
              : 'opacity-0'
          }`}
        >
          <video
            ref={el => videoRefs.current[index] = el}
            className="w-full h-full object-cover"
            autoPlay={index === 0}
            muted
            loop
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
      
      {/* Video indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentVideoIndex(index);
              // Play the selected video
              const selectedVideo = videoRefs.current[index];
              if (selectedVideo) {
                selectedVideo.currentTime = 0;
                selectedVideo.play();
              }
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentVideoIndex ? 'bg-orange-500 scale-125' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Show video ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  // Add new state for tracking dropdown visibility
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const form = useForm({
    defaultValues: {
      category: "",
      name: "",
      company: "",
      email: "",
      phone: "",
      note: ""
    }
  });

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
    // Handle form submission here
    setIsDialogOpen(false);
    form.reset();
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [{
    title: "The Future of Data Center Cooling: Liquid vs Air",
    excerpt: "Exploring the latest trends in data center cooling technologies and their impact on energy efficiency and operational performance in modern enterprise environments.",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Technology"
  }, {
    title: "Solar Power Integration in Enterprise Infrastructure",
    excerpt: "How modern enterprises are leveraging solar power solutions to reduce operational costs, improve sustainability, and achieve carbon neutrality goals.",
    date: "March 10, 2024",
    readTime: "7 min read",
    category: "Renewable Energy"
  }, {
    title: "Achieving Tier IV Data Center Certification",
    excerpt: "A comprehensive guide to understanding and implementing Tier IV data center standards for maximum uptime and fault tolerance.",
    date: "March 5, 2024",
    readTime: "8 min read",
    category: "Infrastructure"
  }];
  const solutions = [{
    title: "Enterprise Data Center Solutions",
    excerpt: "Complete end-to-end data center infrastructure with Tier IV certification, 99.99% uptime guarantee, and advanced monitoring systems.",
    date: "Complete Solutions",
    readTime: "24/7 Support",
    category: "Data Centers"
  }, {
    title: "Advanced Power Management Systems",
    excerpt: "Comprehensive power solutions including UPS systems, battery backup, intelligent power distribution, and real-time monitoring.",
    date: "Power Solutions",
    readTime: "99.9% Efficiency",
    category: "Power Management"
  }, {
    title: "Precision Cooling & Climate Control",
    excerpt: "Advanced precision cooling solutions with environmental optimization, energy efficiency, and intelligent climate management.",
    date: "Cooling Systems",
    readTime: "Energy Efficient",
    category: "Climate Control"
  }, {
    title: "Renewable Energy Integration",
    excerpt: "Innovative solar and renewable energy solutions with smart grid integration, energy storage, and ROI optimization.",
    date: "Green Energy",
    readTime: "Sustainable",
    category: "Renewable Energy"
  }];
  const testimonials = [{
    title: "Outstanding Infrastructure Partnership",
    excerpt: "Gravity India has been our trusted partner for over 8 years. Their data center solutions have helped us achieve 99.98% uptime across all facilities.",
    date: "Rajesh Kumar",
    readTime: "Infrastructure Head",
    category: "Infosys Technologies"
  }, {
    title: "Exceptional Cooling Solutions",
    excerpt: "The precision cooling systems provided by Gravity India have significantly reduced our energy costs while maintaining optimal performance.",
    date: "Priya Sharma",
    readTime: "Facilities Manager",
    category: "Bosch India"
  }, {
    title: "Reliable 24/7 Support Excellence",
    excerpt: "Their 24/7 support and proactive maintenance approach has been crucial for our e-commerce operations. Highly recommended!",
    date: "Vikram Singh",
    readTime: "Operations Director",
    category: "Flipkart"
  }];
  const stats = [{
    title: "30+ Years of Excellence",
    excerpt: "Three decades of delivering world-class infrastructure solutions to Fortune 500 companies across diverse industries.",
    date: "Since 1995",
    readTime: "Trusted Partner",
    category: "Experience"
  }, {
    title: "500+ Enterprise Clients",
    excerpt: "Serving major corporations including Infosys, Bosch, Flipkart, and Tata Power with mission-critical infrastructure solutions.",
    date: "Fortune 500",
    readTime: "Global Reach",
    category: "Client Base"
  }, {
    title: "99.99% Uptime Guarantee",
    excerpt: "Industry-leading uptime guarantee backed by redundant systems, proactive monitoring, and rapid response capabilities.",
    date: "Maximum Reliability",
    readTime: "Zero Downtime",
    category: "Performance"
  }];
  const companies = [{
    name: "TAJ",
    logo: "/lovable-uploads/85691ddd-6413-4ac4-90ae-2b9267b84cea.png"
  }, {
    name: "Accutech",
    logo: "/lovable-uploads/056a4a3e-c1c1-4d3c-b6c7-9c3eb5066c7e.png"
  }, {
    name: "Autoliv",
    logo: "/lovable-uploads/6cefd88d-bf2e-4470-afc8-07bb6ca58060.png"
  }, {
    name: "Bosch",
    logo: "/lovable-uploads/e3e02282-0b6b-4a90-919b-455a9374bccb.png"
  }, {
    name: "Brillo",
    logo: "/lovable-uploads/3ae7a290-b6ec-4a76-95bb-816844190c4e.png"
  }, {
    name: "Orion Avenue",
    logo: "/lovable-uploads/0ecff96c-4899-4391-a556-fb717a123a87.png"
  }, {
    name: "Infosys",
    logo: "https://via.placeholder.com/120x60/1a1a1a/ffffff?text=INFOSYS"
  }, {
    name: "Flipkart",
    logo: "https://via.placeholder.com/120x60/1a1a1a/ffffff?text=FLIPKART"
  }];

  // Product categories data for dropdown
  const productCategories = [
    { name: "UPS Systems", description: "Uninterruptible power supplies for critical applications", icon: <Shield className="h-4 w-4 mr-2" /> },
    { name: "Cooling Solutions", description: "Precision air conditioning systems", icon: <Warehouse className="h-4 w-4 mr-2" /> },
    { name: "Power Distribution", description: "PDUs and power management solutions", icon: <Zap className="h-4 w-4 mr-2" /> },
    { name: "Solar Solutions", description: "Renewable energy products and systems", icon: <Globe className="h-4 w-4 mr-2" /> },
    { name: "Monitoring Systems", description: "Environmental monitoring equipment", icon: <TrendingUp className="h-4 w-4 mr-2" /> },
    { name: "Racks & Enclosures", description: "High-quality infrastructure housing", icon: <Building2 className="h-4 w-4 mr-2" /> },
    { name: "Cable Management", description: "Organization solutions for data centers", icon: <FlaskConical className="h-4 w-4 mr-2" /> },
    { name: "Testing Equipment", description: "Diagnostic and measurement tools", icon: <Wrench className="h-4 w-4 mr-2" /> }
  ];
  
  // Service categories data for dropdown
  const serviceCategories = [
    { name: "24/7 Monitoring", description: "Real-time infrastructure monitoring", icon: <TrendingUp className="h-4 w-4 mr-2" /> },
    { name: "Maintenance Services", description: "Preventive and corrective maintenance", icon: <Wrench className="h-4 w-4 mr-2" /> },
    { name: "Technical Support", description: "Expert technical assistance", icon: <Users className="h-4 w-4 mr-2" /> },
    { name: "Installation Services", description: "Professional installation and setup", icon: <CheckCircle className="h-4 w-4 mr-2" /> },
    { name: "Consulting", description: "Expert advice for infrastructure planning", icon: <Building2 className="h-4 w-4 mr-2" /> },
    { name: "Training", description: "Technical skills development programs", icon: <Calendar className="h-4 w-4 mr-2" /> }
  ];
  
  // Solution categories data for dropdown
  const solutionCategories = [
    { name: "Data Centers", description: "Complete infrastructure solutions", icon: <Warehouse className="h-4 w-4 mr-2" /> },
    { name: "Power Management", description: "UPS and power quality systems", icon: <Zap className="h-4 w-4 mr-2" /> },
    { name: "Renewable Energy", description: "Solar and green energy solutions", icon: <Globe className="h-4 w-4 mr-2" /> },
    { name: "Managed Services", description: "24/7 monitoring and support", icon: <TrendingUp className="h-4 w-4 mr-2" /> },
    { name: "Edge Computing", description: "Distributed computing infrastructure", icon: <Shield className="h-4 w-4 mr-2" /> },
    { name: "Hybrid Solutions", description: "Integrated on-prem and cloud systems", icon: <Factory className="h-4 w-4 mr-2" /> }
  ];
  
  // Company categories data for dropdown
  const companyCategories = [
    { name: "About Us", description: "Our story and mission", icon: <Building2 className="h-4 w-4 mr-2" /> },
    { name: "Careers", description: "Join our growing team", icon: <Users className="h-4 w-4 mr-2" /> },
    { name: "Partners", description: "Strategic alliances and partnerships", icon: <Zap className="h-4 w-4 mr-2" /> },
    { name: "Legal", description: "Terms, privacy and compliance", icon: <Shield className="h-4 w-4 mr-2" /> },
    { name: "News", description: "Latest company updates", icon: <Globe className="h-4 w-4 mr-2" /> },
    { name: "Sustainability", description: "Our environmental initiatives", icon: <Award className="h-4 w-4 mr-2" /> }
  ];

  // Function to handle opening dropdown on click
  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
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

  return <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm shadow-md'}`}>
        <div className="max-w-7xl mx-auto px-2 lg:px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo - Far Left */}
            <div className="flex items-center pl-0 lg:pl-8">
              <img src="/lovable-uploads/8c79cb12-2bc2-4bcd-95a4-8e82d3f4035f.png" alt="Gravity India Technologies" className="h-12 w-auto animate-fade-in" />
            </div>
            
            {/* Center Navigation Menu */}
            <div className="hidden lg:flex items-center justify-center flex-1 mx-6 space-x-12">
              <a href="#home" className="text-gray-700 hover:text-blue-600 relative group transition-colors font-medium whitespace-nowrap">
                Who We Are
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              
              {/* Products Dropdown - Builder.io style full width */}
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

              {/* Services Dropdown - Builder.io style */}
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

              {/* Solutions Dropdown - Builder.io style */}
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

              {/* Company Dropdown - Builder.io style */}
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
            
            {/* Right Side Buttons */}
            <div className="hidden lg:flex items-center space-x-4 pr-0 lg:pr-8">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 transform transition-all duration-200 px-6 whitespace-nowrap">
                    Book a Call
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle>Book a Call</DialogTitle>
                  </DialogHeader>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Category</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="data-centers">Data Centers</SelectItem>
                                <SelectItem value="ups-systems">UPS Systems</SelectItem>
                                <SelectItem value="cooling-solutions">Cooling Solutions</SelectItem>
                                <SelectItem value="power-distribution">Power Distribution</SelectItem>
                                <SelectItem value="solar-solutions">Solar Solutions</SelectItem>
                                <SelectItem value="maintenance">Maintenance Services</SelectItem>
                                <SelectItem value="monitoring">24/7 Monitoring</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company</FormLabel>
                            <FormControl>
                              <Input placeholder="Your company name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="your.email@company.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                              <Input placeholder="+91 9876543210" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="note"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Note</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Tell us about your requirements..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                        Submit Request
                      </Button>
                    </form>
                  </Form>
                </DialogContent>
              </Dialog>
              
              <Button className="bg-blue-600 hover:bg-blue-700 transform transition-all duration-200 px-6 whitespace-nowrap">
                Contact Us
              </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <button className="lg:hidden hover:scale-110 transform transition-transform duration-200" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && <div className="lg:hidden bg-white shadow-lg animate-fade-in">
            <div className="px-4 py-6 space-y-4">
              <a href="#home" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
                Who We Are
              </a>
              <a href="#products" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
                Products
              </a>
              <a href="#services" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
                Services
              </a>
              <a href="#solutions" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
                Solutions
              </a>
              <a href="#company" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
                Company
              </a>
              <a href="#resources" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
                Resources
              </a>
              <div className="pt-4 space-y-3">
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                      Book a Call
                    </Button>
                  </DialogTrigger>
                </Dialog>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>}

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
                    View All <ArrowRight className="ml-1 h-3 w-3" />
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
              {/* Left Column - Service Categories */}
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
              
              {/* Middle Column - Service Highlights */}
              <div className="col-span-2">
                <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">Service Highlights</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                    <h4 className="font-medium text-gray-900 mb-1">24/7 Monitoring</h4>
                    <p className="text-sm text-gray-600">Real-time infrastructure monitoring with immediate alerts</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                    <h4 className="font-medium text-gray-900 mb-1">Maintenance Services</h4>
                    <p className="text-sm text-gray-600">Preventive and corrective maintenance programs</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                    <h4 className="font-medium text-gray-900 mb-1">Technical Support</h4>
                    <p className="text-sm text-gray-600">Expert assistance available round the clock</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                    <h4 className="font-medium text-gray-900 mb-1">Installation Services</h4>
                    <p className="text-sm text-gray-600">Professional setup and configuration</p>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Featured */}
              <div className="col-span-1">
                <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">Service Plans</h3>
                <div className="bg-green-50 rounded-lg p-5">
                  <h4 className="font-medium text-green-800 mb-2">Annual Maintenance</h4>
                  <p className="text-sm text-gray-700 mb-4">Comprehensive maintenance plans with priority support.</p>
                  <Button variant="outline" size="sm" className="text-green-600 border-green-600 hover:bg-green-100">
                    Learn More <ArrowRight className="ml-1 h-3 w-3" />
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
              {/* Left Column - Solution Categories */}
              <div className="col-span-1 border-r border-gray-200 pr-8">
                <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">Solutions</h3>
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
              
              {/* Middle Column - Solution Highlights */}
              <div className="col-span-2">
                <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">Solution Highlights</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                    <h4 className="font-medium text-gray-900 mb-1">Data Centers</h4>
                    <p className="text-sm text-gray-600">Complete infrastructure solutions with 99.99% uptime</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                    <h4 className="font-medium text-gray-900 mb-1">Power Management</h4>
                    <p className="text-sm text-gray-600">Comprehensive power quality and backup systems</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                    <h4 className="font-medium text-gray-900 mb-1">Renewable Energy</h4>
                    <p className="text-sm text-gray-600">Solar and sustainable energy integration</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                    <h4 className="font-medium text-gray-900 mb-1">Managed Services</h4>
                    <p className="text-sm text-gray-600">End-to-end infrastructure management</p>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Featured */}
              <div className="col-span-1">
                <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">Featured</h3>
                <div className="bg-purple-50 rounded-lg p-5">
                  <h4 className="font-medium text-purple-800 mb-2">Edge Computing</h4>
                  <p className="text-sm text-gray-700 mb-4">Distributed computing infrastructure for faster processing.</p>
                  <Button variant="outline" size="sm" className="text-purple-600 border-purple-600 hover:bg-purple-100">
                    Explore <ArrowRight className="ml-1 h-3 w-3" />
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
              {/* Left Column - Company Pages */}
              <div className="col-span-1 border-r border-gray-200 pr-8">
                <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">Company</h3>
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
              
              {/* Middle Column - Company Highlights */}
              <div className="col-span-2">
                <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">About Us</h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-medium text-gray-900 mb-3">Gravity India Technologies</h4>
                  <p className="text-sm text-gray-700 mb-4">
                    With over 30 years of experience, Gravity India Technologies has been a trusted partner for enterprise infrastructure solutions. We serve Fortune 500 companies across India with reliable, efficient, and sustainable technology solutions.
                  </p>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">500+ Clients</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">30+ Years</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">99.99% Uptime</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Featured */}
              <div className="col-span-1">
                <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">Latest News</h3>
                <div className="bg-gray-50 rounded-lg p-5">
                  <h4 className="font-medium text-gray-900 mb-2">New Office in Bangalore</h4>
                  <p className="text-sm text-gray-700 mb-4">We're expanding our presence with a new office in Bangalore's tech hub.</p>
                  <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-100">
                    Read More <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Updated to match Vertiv style exactly */}
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
                  onClick={() => setIsDialogOpen(true)}
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

      {/* Support section like Vertiv */}
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

      {/* Trusted Companies Section */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-semibold text-gray-900 mb-2 animate-fade-in text-lg">
              Trusted by the world's most innovative companies
            </h2>
          </div>
          
          <div className="overflow-hidden">
            <div className="flex animate-scroll">
              {[...companies, ...companies].map((company, index) => <div key={index} className="flex-shrink-0 mx-8 hover:scale-110 transform transition-transform duration-300">
                  <img src={company.logo} alt={company.name} className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300" />
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-orange-50 text-orange-700 border-orange-200 hover:scale-105 transform transition-transform duration-200">
              <Zap className="mr-2 h-4 w-4" />
              Enterprise Solutions
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Infrastructure Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering enterprise-grade solutions designed for mission-critical operations with uncompromising reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => <Card key={index} className="border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-[1.02] transform animate-fade-in" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="h-48 bg-gradient-to-br from-green-500 to-blue-600 group-hover:scale-105 transform transition-transform duration-300"></div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">{solution.category}</Badge>
                    <span className="text-xs text-gray-500">{solution.readTime}</span>
                  </div>
                  <CardTitle className="text-lg hover:text-blue-600 transition-colors cursor-pointer">
                    {solution.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {solution.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{solution.date}</span>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50 hover:scale-105 transform transition-all duration-200">
                      Explore Solution <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-orange-50 text-orange-700 border-orange-200 hover:scale-105 transform transition-transform duration-200">
              <Factory className="mr-2 h-4 w-4" />
              Product Portfolio
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Product Range
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From power systems to environmental controls, our extensive product range covers every aspect of modern IT infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => <Card key={index} className="border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-[1.02] transform bg-white animate-fade-in" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 group-hover:scale-105 transform transition-transform duration-300"></div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">{product.category}</Badge>
                    <span className="text-xs text-gray-500">{product.readTime}</span>
                  </div>
                  <CardTitle className="text-lg hover:text-blue-600 transition-colors cursor-pointer">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {product.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{product.date}</span>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50 hover:scale-105 transform transition-all duration-200">
                      View Products <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Updated Design */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200 hover:scale-105 transform transition-transform duration-200">
              <Star className="mr-2 h-4 w-4" />
              Client Success Stories
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our clients say about our commitment to excellence and reliability in enterprise infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <div key={index} className="group animate-fade-in" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-blue-200 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] transform">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transform transition-transform duration-300">
                      <Quote className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700 border-gray-200 text-xs mb-2">
                        {testimonial.category}
                      </Badge>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {testimonial.title}
                      </h3>
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-600 mb-6 text-sm leading-relaxed">
                    "{testimonial.excerpt}"
                  </blockquote>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <div className="font-medium text-gray-900 text-sm">{testimonial.date}</div>
                      <div className="text-xs text-gray-500">{testimonial.readTime}</div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50 hover:scale-105 transform transition-all duration-200">
                      Read Full Story <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blogs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-orange-50 text-orange-700 border-orange-200 hover:scale-105 transform transition-transform duration-200">
              <ExternalLink className="mr-2 h-4 w-4" />
              Latest Insights
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industry Knowledge & Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends, technologies, and best practices in IT infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((blog, index) => <Card key={index} className="border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-[1.02] transform bg-white animate-fade-in" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 group-hover:scale-105 transform transition-transform duration-300"></div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">{blog.category}</Badge>
                    <span className="text-xs text-gray-500">{blog.readTime}</span>
                  </div>
                  <CardTitle className="text-lg hover:text-blue-600 transition-colors cursor-pointer">
                    {blog.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {blog.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{blog.date}</span>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50 hover:scale-105 transform transition-all duration-200">
                      Read More <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>)}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 hover:scale-105 transform transition-all duration-200">
              View All Articles <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img src="/lovable-uploads/8c79cb12-2bc2-4bcd-95a4-8e82d3f4035f.png" alt="Gravity India Technologies" className="h-10 w-auto" />
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Powering Fortune 500 companies with mission-critical infrastructure solutions since 1995. Providing data center design, power management and cooling solutions across India.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors hover:scale-110 transform duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-white" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition-colors hover:scale-110 transform duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-white" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Services</h4>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors hover:scale-105 transform duration-200 inline-block">Data Center Solutions</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:scale-105 transform duration-200 inline-block">Power & UPS Systems</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:scale-105 transform duration-200 inline-block">Cooling Solutions</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:scale-105 transform duration-200 inline-block">Renewable Energy</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:scale-105 transform duration-200 inline-block">Managed Services</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors hover:scale-105 transform duration-200 inline-block">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:scale-105 transform duration-200 inline-block">Leadership</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:scale-105 transform duration-200 inline-block">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:scale-105 transform duration-200 inline-block">News & Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:scale-105 transform duration-200 inline-block">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Support</h4>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors hover:scale-105 transform duration-200 inline-block">24/7 Monitoring</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:scale-105 transform duration-200 inline-block">Technical Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:scale-105 transform duration-200 inline-block">Maintenance Plans</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:scale-105 transform duration-200 inline-block">Training</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:scale-105 transform duration-200 inline-block">FAQs</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-400 text-sm">
                  © 2025 Gravity India Technologies Pvt Ltd. All rights reserved.
                </p>
                <div className="flex space-x-4 mt-2">
                  <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors hover:scale-105 transform duration-200">Privacy Policy</a>
                  <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors hover:scale-105 transform duration-200">Terms of Service</a>
                  <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors hover:scale-105 transform duration-200">Sitemap</a>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 hover:scale-105 transform transition-transform duration-200">
                  <Phone className="h-4 w-4 text-blue-400" />
                  <span className="text-blue-400">+91 9886710105</span>
                </div>
                <div className="flex items-center space-x-2 hover:scale-105 transform transition-transform duration-200">
                  <Mail className="h-4 w-4 text-green-400" />
                  <span className="text-green-400">marcom@gravityindia.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};

export default Index;
