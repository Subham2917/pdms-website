export const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#clients', label: 'Clients' },
  { href: '#contact', label: 'Contact' },
] as const;

export const PRODUCTS = [
  {
    name: 'Cutter Suction Dredger (CSD)',
    image: '/cutter_suction_dreger(csd).jpeg',
  },
  {
    name: 'Jet Suction Dredger',
    image: '/1000147676.jpeg',
  },
  {
    name: 'Submersible Dredger',
    image: '/submerisble_dreger.jpeg',
  },
] as const;

export const SERVICES_LEFT = [
  'De-Siltation Work',
  'Reservoir / Lagoon / Ash Recovery Pond Cleaning',
  'Slurry / Silt Management',
  'Sand Filling',
  'Hydrography / Bathymetry Survey',
  'Underwater Diving, Survey & Inspections',
  'River Deepening Work',
] as const;

export const SERVICES_RIGHT = [
  'Intake Well Cleaning',
  'Approach Road / Access Road Construction by Sand',
  'Navigational Channel Maintenance',
  'Jetty Construction',
  'Capital Dredging',
  'Flood Control Work',
  'Bund / Embankment Works',
] as const;

export const GALLERY_ITEMS = [
  { title: 'Marine Dredging Operations', src: '/marine.png', large: true },
  { title: 'Ash Lagoon from Recovery Pond', src: '/jet_sunction_dredger.jpg', large: true },
  { title: 'Sand Filling', src: '/1.jpg', large: false },
  { title: 'De-Siltation', src: '/De_siltation.jpeg', large: false },
  { title: 'Jetty Construction', src: '/1000147057.jpeg', large: false },
] as const;

export const CLIENTS = [
  { name: 'Jindal Steel & Power', color: 'from-orange-400 to-green-400', logo: '/Jindal Steel Power.jpg' },
  { name: 'NHPC',                 color: 'from-blue-400 to-cyan-400',    logo: '/NHPC.jpeg' },
  { name: 'JSW',                  color: 'from-blue-600 to-blue-700',    logo: '/jsw.png' },
  { name: 'Aditya Birla',         color: 'from-orange-500 to-red-500',   logo: "/aditya birla.jpg" },
  { name: 'Adani Power',          color: 'from-green-500 to-teal-500',   logo: '/adani power.png' },
  { name: 'Hindalco',             color: 'from-red-500 to-orange-500',   logo: '/Hindalco.jpg' },
  { name: 'Hinduja',              color: 'from-blue-500 to-indigo-500',  logo: '/hinduja.png' },
  { name: 'L&T',                  color: 'from-blue-500 to-cyan-500',    logo: '/Larsen and Turbo.jpg' },
  { name: 'Utkal Alumina',        color: 'from-gray-500 to-gray-600',    logo: '/Utkal alumina.jpg' },
  { name: 'NTPC',                 color: 'from-gray-500 to-gray-600',    logo: '/1000147673.jpg' },
];
export const CONTACT_INFO = {
  location: 'Kolkata, West Bengal, India',
  phone: '+91 90 8888 222 6',
  emails: ['prakash.dms@yahoo.com', 'info@pdms.co.in'],
  website: 'www.pdms.co.in',
} as const;

export const WHY_CHOOSE_US = [
  'Extensive experience in dredging and marine services',
  "Partnerships with India's leading companies",
  'State-of-the-art dredging equipment',
  'Flexible service models – Contractual, Rental, or Measurement basis',
  'Comprehensive marine project solutions',
] as const;
