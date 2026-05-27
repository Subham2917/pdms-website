const BASIS_ITEMS = ['Contractual basis', 'Hire / Rental basis', 'Measurement / Quantity basis'];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl overflow-hidden shadow-2xl h-96">
              <img
                src="/1.jpg"
                alt="Dredging work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mb-6" />
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              PDMS is a prominent player in the Dredging and Marine business. Our extensive experience includes successful collaborations with India’s leading Power, Metal and Construction companies, such as Adani, JSW, NHPC, NTPC, Jindal, Aditya
Birla Group, Hinduja Group, Lanco, L&T, Hindalco, Afcons, Navayuga Eng., GR Infra, Utkal Alumina, Patel Eng. and many others.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-xl border-l-4 border-blue-600">
              <h3 className="font-semibold text-gray-900 mb-3">
                We offer dredging and marine works on:
              </h3>
              <ul className="space-y-2 text-gray-700">
                {BASIS_ITEMS.map((item) => (
                  <li key={item} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
