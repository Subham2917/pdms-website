import { Phone, Mail, MapPin, Globe } from 'lucide-react';
import { CONTACT_INFO, WHY_CHOOSE_US } from '../data';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact details */}
          <div className="space-y-8">
            <ContactItem
              icon={<MapPin className="h-6 w-6 text-white" />}
              iconBg="bg-blue-500"
              label="Location"
              value={CONTACT_INFO.location}
            />
            <ContactItem
              icon={<Phone className="h-6 w-6 text-white" />}
              iconBg="bg-teal-500"
              label="Phone"
              value={CONTACT_INFO.phone}
            />
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600">
                  <Mail className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Email</h3>
                {CONTACT_INFO.emails.map((email) => (
                  <p key={email} className="text-gray-300 mt-1">
                    <a href={`mailto:${email}`} className="hover:text-blue-400 transition">
                      {email}
                    </a>
                  </p>
                ))}
              </div>
            </div>
            <ContactItem
              icon={<Globe className="h-6 w-6 text-white" />}
              iconBg="bg-cyan-500"
              label="Website"
              value={CONTACT_INFO.website}
            />
          </div>

          {/* Why PDMS */}
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Why Choose PDMS?</h3>
            <ul className="space-y-4 text-gray-200">
              {WHY_CHOOSE_US.map((reason) => (
                <li key={reason} className="flex items-start">
                  <span className="text-blue-400 mr-3 flex-shrink-0">✓</span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  iconBg,
  label,
  value,
}: {
  icon: React.ReactNode;
  iconBg: string;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <div className={`flex items-center justify-center h-12 w-12 rounded-md ${iconBg}`}>
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">{label}</h3>
        <p className="text-gray-300 mt-2">{value}</p>
      </div>
    </div>
  );
}
