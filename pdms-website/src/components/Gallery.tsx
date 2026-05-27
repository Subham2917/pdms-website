import { GALLERY_ITEMS } from '../data';

export default function Gallery() {
  const largeItems = GALLERY_ITEMS.filter((i) => i.large);
  const smallItems = GALLERY_ITEMS.filter((i) => !i.large);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Project Gallery</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto" />
        </div>

        {/* Large images */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {largeItems.map((item) => (
            <div key={item.title} className="relative group overflow-hidden rounded-xl shadow-lg h-72">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                <p className="text-white font-semibold">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Small images */}
        <div className="grid md:grid-cols-3 gap-6">
          {smallItems.map((item) => (
            <div key={item.title} className="relative group overflow-hidden rounded-xl shadow-lg h-64">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white font-semibold">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
