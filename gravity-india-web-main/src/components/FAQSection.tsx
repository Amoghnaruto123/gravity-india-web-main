const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50 border-y border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our infrastructure solutions and services.
          </p>
        </div>

        <div className="space-y-4">
          {/* FAQ Item 1 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
            <button className="w-full flex items-center justify-between p-6 text-left">
              <h3 className="text-xl font-semibold text-gray-900">What infrastructure solutions do you provide?</h3>
              <span className="text-2xl">+</span>
            </button>
            <div className="px-6 pb-6">
              <p className="text-gray-700">
                We offer comprehensive infrastructure solutions including data center design and implementation, power management systems, cooling solutions, renewable energy integration, and end-to-end managed services with 24/7 monitoring and support.
              </p>
            </div>
          </div>

          {/* FAQ Item 2 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
            <button className="w-full flex items-center justify-between p-6 text-left">
              <h3 className="text-xl font-semibold text-gray-900">How long do you provide support after installation?</h3>
              <span className="text-2xl">+</span>
            </button>
            <div className="px-6 pb-6">
              <p className="text-gray-700">
                We provide comprehensive support packages ranging from 1 to 5 years, with options for extended warranties. Our standard support includes 24/7 monitoring, emergency response within 4 hours, preventative maintenance, and quarterly performance reviews.
              </p>
            </div>
          </div>

          {/* FAQ Item 3 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
            <button className="w-full flex items-center justify-between p-6 text-left">
              <h3 className="text-xl font-semibold text-gray-900">What testing and commissioning services do you offer?</h3>
              <span className="text-2xl">+</span>
            </button>
            <div className="px-6 pb-6">
              <p className="text-gray-700">
                Our T&C division offers power quality audits, thermography audits, earth pit testing, socket testing, battery impedance testing, electrical safety audits, load bank testing up to 2MW, injection testing, arc flash analysis, and data center commissioning.
              </p>
            </div>
          </div>

          {/* FAQ Item 4 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
            <button className="w-full flex items-center justify-between p-6 text-left">
              <h3 className="text-xl font-semibold text-gray-900">Do you provide sustainable energy solutions?</h3>
              <span className="text-2xl">+</span>
            </button>
            <div className="px-6 pb-6">
              <p className="text-gray-700">
                Yes, we specialize in renewable energy integration, including solar power solutions, smart grid integration, energy storage systems, and comprehensive ESG consulting to help organizations meet sustainability goals and compliance requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 