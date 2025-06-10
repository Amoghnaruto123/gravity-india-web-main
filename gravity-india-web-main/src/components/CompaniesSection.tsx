interface Company {
  name: string;
  logo: string;
}

interface CompaniesSectionProps {
  companies: Company[];
}

const CompaniesSection = ({ companies }: CompaniesSectionProps) => {
  return (
    <section className="py-12 sm:py-16 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-semibold text-gray-900 text-lg sm:text-xl animate-fade-in">
            Partnering with industry leaders across India
          </h2>
        </div>

        <div className="overflow-hidden py-6">
          <div className="flex animate-scroll gap-6 sm:gap-8">
            {[...companies, ...companies].map((company, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-[180px] h-[100px] flex items-center justify-center p-2 sm:p-3"
              >
                <div className="w-full h-full flex items-center justify-center hover:scale-105 transition-transform duration-300">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-18 sm:h-20 w-auto object-contain max-w-full"
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
