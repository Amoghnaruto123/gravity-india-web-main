interface Company {
  name: string;
  logo: string;
}

interface CompaniesSectionProps {
  companies: Company[];
}

const CompaniesSection = ({ companies }: CompaniesSectionProps) => {
  return (
    <section className="py-16 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-semibold text-gray-900 mb-2 animate-fade-in text-lg">
            Partnering with industry leaders across India
          </h2>
        </div>
        
        <div className="overflow-hidden py-6">
          <div className="flex animate-scroll">
            {[...companies, ...companies].map((company, index) => (
              <div key={index} className="flex-shrink-0 mx-1 w-[190px] h-[80px] flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center hover:scale-105 transition-transform duration-300">
                  <img 
                    src={company.logo} 
                    alt={company.name} 
                    className="h-16 w-auto object-contain" 
                    style={{ maxWidth: "175px" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection; 