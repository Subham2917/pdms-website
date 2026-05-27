import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/logoCreator_imagetologo.jpg"
              alt="PDMS Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="font-bold text-xl text-gray-900">PDMS</span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 transition"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 space-y-1 border-t border-gray-100 pt-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="block text-gray-700 hover:text-blue-600 py-2 px-2 rounded transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
