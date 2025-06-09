import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

import VideoCarousel from "../components/VideoCarousel";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import HeroSection from "../components/HeroSection";
import SupportSection from "../components/SupportSection";
import CompaniesSection from "../components/CompaniesSection";
import SolutionsSection from "../components/SolutionsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ProductsSection from "../components/ProductsSection";
import BlogsSection from "../components/BlogsSection";
import TeamSection from "../components/TeamSection";
import FAQSection from "../components/FAQSection";
import StatsSection from "../components/StatsSection";
import Footer from "../components/Footer";

const Index = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

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
    
    // Show toast notification
    toast({
      title: "Booking Confirmed!",
      description: "Thank you for your interest. We'll contact you within 24 hours to schedule your call.",
    });
    
    // Set form as submitted
    setFormSubmitted(true);
    
    // Close dialog and reset form
    setTimeout(() => {
      setIsDialogOpen(false);
      form.reset();
      setFormSubmitted(false);
    }, 1500);
  };

  const companies = [{
    name: "Company 1",
    logo: "/lovable-uploads/L1.png"
  }, {
    name: "Company 2",
    logo: "/lovable-uploads/L2.png"
  }, {
    name: "Company 3",
    logo: "/lovable-uploads/L3.png"
  }, {
    name: "Company 4",
    logo: "/lovable-uploads/L4.png"
  }, {
    name: "Company 5",
    logo: "/lovable-uploads/L5.png"
  }, {
    name: "Company 6",
    logo: "/lovable-uploads/L6.png"
  }, {
    name: "Company 7",
    logo: "/lovable-uploads/L7.png"
  }, {
    name: "Company 8",
    logo: "/lovable-uploads/L8.png"
  }, {
    name: "Company 9",
    logo: "/lovable-uploads/L9.png"
  }, {
    name: "Company 10",
    logo: "/lovable-uploads/L10.png"
  }, {
    name: "Company 11",
    logo: "/lovable-uploads/L11.png"
  }, {
    name: "Company 12",
    logo: "/lovable-uploads/L12.png"
  }];

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

  return (
    <div className="min-h-screen bg-white">
      {/* Banner */}
      <Banner />
      
      {/* Navigation */}
      <Navigation 
        isDialogOpen={isDialogOpen} 
        setIsDialogOpen={setIsDialogOpen} 
        form={form} 
        onSubmit={onSubmit} 
      />
      
      {/* Hero Section */}
      <HeroSection openBookCallDialog={() => setIsDialogOpen(true)} />
      
      {/* Support Section */}
      <SupportSection />
      
      {/* Companies Section */}
      <CompaniesSection companies={companies} />
      
      {/* Solutions Section */}
      <SolutionsSection solutions={solutions} />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Products Section */}
      <ProductsSection products={products} />
      
      {/* Blogs Section */}
      <BlogsSection blogs={products} />
      
      {/* Team Section */}
      <TeamSection />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Footer */}
      <Footer />

      {/* Book a Call Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Book a Call</DialogTitle>
          </DialogHeader>
          {formSubmitted ? (
            <div className="py-8 text-center">
              <div className="mb-4 mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Booking Confirmed!</h3>
              <p className="text-gray-600">
                Thank you for your interest. We'll contact you within 24 hours to schedule your call.
              </p>
            </div>
          ) : (
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
          )}
        </DialogContent>
      </Dialog>

      {/* Toaster for notifications */}
      <Toaster />
    </div>
  );
};

export default Index;
