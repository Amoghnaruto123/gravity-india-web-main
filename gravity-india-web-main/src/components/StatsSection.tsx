const StatsSection = () => {
  return (
    <section id="stats" className="py-24 bg-white text-gray-800 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2 text-gray-900">The Gravity India Facts</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="border-r border-gray-200 last:border-0">
            <div className="text-center">
              <p className="text-6xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent">30+</p>
              <p className="text-gray-700">Years of Experience</p>
            </div>
          </div>

          <div className="border-r border-gray-200 last:border-0">
            <div className="text-center">
              <p className="text-6xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent">500+</p>
              <p className="text-gray-700">Enterprise Clients</p>
            </div>
          </div>

          <div className="border-r border-gray-200 last:border-0">
            <div className="text-center">
              <p className="text-6xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent">99.9%</p>
              <p className="text-gray-700">Uptime Guarantee</p>
            </div>
          </div>

          <div className="border-r border-gray-200 last:border-0">
            <div className="text-center">
              <p className="text-6xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent">24/7</p>
              <p className="text-gray-700">Support & Monitoring</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 