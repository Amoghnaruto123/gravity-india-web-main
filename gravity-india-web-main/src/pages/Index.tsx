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
import CompaniesSection from "../components/CompaniesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import TeamSection from "../components/TeamSection";
import FAQSection from "../components/FAQSection";
import StatsSection from "../components/StatsSection";
import Footer from "../components/Footer";
import { DialogOverlay } from '@radix-ui/react-dialog';
import { CheckIcon } from 'lucide-react';

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

  const onSubmit = async (data: any) => {
    const formData = {
      category: data.category,
      fullName: data.name,
      companyName: data.company,
      email: data.email,
      phoneNumber: data.phone,
      note: data.note,
    };

    console.log("Sending form data:", formData);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyPHLlRre0t2q4ml4nJpruWrI45TZNWyqDTKMSTuclO1jv2t4k7yxHoPqckA_KiC39-/exec",
        {
          method: "POST",
          mode: "no-cors", // ⚠️ Prevents CORS error but you won't get a readable response
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      // Show toast and close popup
      toast({
        title: "Booking Confirmed!",
        description: "Thank you for your interest. We'll contact you within 24 hours to schedule your call.",
      });

      setFormSubmitted(true);

      setTimeout(() => {
        setIsDialogOpen(false);
        form.reset();
        setFormSubmitted(false);
      }, 1500);
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Please try again.",
      });
    }
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
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Companies Section */}
      <CompaniesSection companies={companies} />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Team Section */}
      <TeamSection />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* Footer */}
      <Footer />

      {/* Book a Call Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogOverlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-xl">
          <div className="flex">
            {/* Left side: Form */}
            <div className="w-1/2 p-8 bg-white">
              <DialogHeader className="mb-6">
                <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">Book a CallBack</DialogTitle>
                <p className="text-gray-600">Get expert consultation for your IT infrastructure needs</p>
              </DialogHeader>

              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="mb-4 mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Booking Confirmed!</h3>
                  <p className="text-gray-600">
                    Thank you for your interest. We'll contact you within 24 hours.
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
                              <SelectTrigger className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500">
                                <SelectValue placeholder="Select a category" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="max-h-60 overflow-y-auto border border-gray-200 bg-white shadow-lg rounded-md">
                              <SelectItem 
                                value="data-centers" 
                                className="cursor-pointer hover:bg-gray-100 focus:bg-gray-100 transition-colors duration-200 ease-in-out"
                              >
                                Data Centers
                              </SelectItem>
                              <SelectItem 
                                value="ups-systems" 
                                className="cursor-pointer hover:bg-gray-100 focus:bg-gray-100 transition-colors duration-200 ease-in-out"
                              >
                                UPS Systems
                              </SelectItem>
                              <SelectItem 
                                value="cooling-solutions" 
                                className="cursor-pointer hover:bg-gray-100 focus:bg-gray-100 transition-colors duration-200 ease-in-out"
                              >
                                Cooling Solutions
                              </SelectItem>
                              <SelectItem 
                                value="power-distribution" 
                                className="cursor-pointer hover:bg-gray-100 focus:bg-gray-100 transition-colors duration-200 ease-in-out"
                              >
                                Power Distribution
                              </SelectItem>
                              <SelectItem 
                                value="solar-solutions" 
                                className="cursor-pointer hover:bg-gray-100 focus:bg-gray-100 transition-colors duration-200 ease-in-out"
                              >
                                Solar Solutions
                              </SelectItem>
                              <SelectItem 
                                value="maintenance" 
                                className="cursor-pointer hover:bg-gray-100 focus:bg-gray-100 transition-colors duration-200 ease-in-out"
                              >
                                Maintenance Services
                              </SelectItem>
                              <SelectItem 
                                value="monitoring" 
                                className="cursor-pointer hover:bg-gray-100 focus:bg-gray-100 transition-colors duration-200 ease-in-out"
                              >
                                24/7 Monitoring
                              </SelectItem>
                              <SelectItem 
                                value="other" 
                                className="cursor-pointer hover:bg-gray-100 focus:bg-gray-100 transition-colors duration-200 ease-in-out"
                              >
                                Other
                              </SelectItem>
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
                            <Input 
                              placeholder="Your full name" 
                              {...field} 
                              className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                            />
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
                            <Input 
                              type="email"
                              placeholder="your.email@company.com" 
                              {...field} 
                              className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                            />
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
                            <Input 
                              placeholder="+91 9876543210" 
                              {...field} 
                              className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                            />
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
                            <Textarea 
                              placeholder="Tell us about your requirements..." 
                              {...field} 
                              className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 ease-in-out"
                    >
                      Schedule Consultation
                    </Button>
                  </form>
                </Form>
              )}
            </div>

            {/* Right side: Image */}
            <div className="w-1/2 bg-white flex items-center justify-center p-0">
              <img 
                src="lovable-uploads/ChatGPT Image Jun 12, 2025, 03_57_56 PM.png" 
                alt="Book a Callback" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Toaster for notifications */}
      <Toaster />
    </div>
  );
};

export default Index;
