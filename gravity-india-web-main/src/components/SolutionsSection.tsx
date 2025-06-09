import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

interface Solution {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

interface SolutionsSectionProps {
  solutions: Solution[];
}

const SolutionsSection = ({ solutions }: SolutionsSectionProps) => {
  return (
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
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className="border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-[1.02] transform animate-fade-in" 
              style={{animationDelay: `${index * 100}ms`}}
            >
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection; 