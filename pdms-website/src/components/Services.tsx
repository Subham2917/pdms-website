import { PRODUCTS, SERVICES_LEFT, SERVICES_RIGHT } from '../data';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Products & Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto" />
        </div>

        {/* Products */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8">Products</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <div
                key={product.name}
                className="group relative overflow-hidden rounded-xl shadow-lg h-72 border border-white/10 hover:border-white/30 transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                  <p className="text-white font-bold text-lg">{product.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services list */}
        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:border-blue-400/50 transition">
          <h3 className="text-2xl font-bold text-white mb-6">Services</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3 text-gray-200">
              {SERVICES_LEFT.map((service) => (
                <li key={service} className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-3 text-gray-200">
              {SERVICES_RIGHT.map((service) => (
                <li key={service} className="flex items-start">
                  <span className="w-2 h-2 bg-teal-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
