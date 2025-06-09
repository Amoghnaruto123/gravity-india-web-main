import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Factory } from "lucide-react";

interface Product {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

interface ProductsSectionProps {
  products: Product[];
}

const ProductsSection = ({ products }: ProductsSectionProps) => {
  return (
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
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-[1.02] transform bg-white animate-fade-in" 
              style={{animationDelay: `${index * 100}ms`}}
            >
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection; 