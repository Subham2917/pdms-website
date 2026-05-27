export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <img
              src="/logoCreator_imagetologo.jpg"
              alt="PDMS Logo"
              className="w-8 h-8 object-contain"
            />
            <span className="font-bold text-white">PDMS</span>
          </div>
          <p className="text-gray-400 text-center md:text-right text-sm">
            © {year} Prakash Dredging & Marine Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
