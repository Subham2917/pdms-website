export default function Hero() {
  return (
    <section
      id="home"
      className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-blue-50 to-white relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Making Waves in the{' '}
                <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                  Dredging Industry
                </span>
              </h1>
              <p className="text-xl text-gray-600">
                Leading provider of dredging and marine services across India
              </p>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              PDMS is a prominent player in the Dredging and Marine business
              with extensive experience collaborating with India's leading
              Power, Metal, and Construction companies.
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>

          {/* Illustration */}
          <div className="relative flex justify-center">
            <svg viewBox="0 0 200 200" className="w-72 h-72 md:w-full md:h-auto animate-pulse">
              <defs>
                <linearGradient id="shipGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#14b8a6', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <circle
                cx="100"
                cy="100"
                r="95"
                fill="url(#shipGradient)"
                opacity="0.1"
                stroke="url(#shipGradient)"
                strokeWidth="2"
              />
              <path
                d="M 100 50 Q 140 80 120 140 Q 100 160 80 140 Q 60 80 100 50"
                fill="url(#shipGradient)"
              />
              <circle cx="100" cy="45" r="8" fill="#f59e0b" />
              <path d="M 85 135 L 115 135 L 110 155 L 90 155 Z" fill="#0f766e" opacity="0.6" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
