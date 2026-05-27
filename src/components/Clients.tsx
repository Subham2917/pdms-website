// import { CLIENTS } from '../data';

// export default function Clients() {
//   return (
//     <section id="clients" className="py-20 bg-gradient-to-b from-slate-50 to-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
//             Our Prestigious Clients
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mb-4" />
//           <p className="text-gray-600">Trusted by India's leading companies</p>
//         </div>

//         {/* Client grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
//           {CLIENTS.map((client) => (
//             <div
//               key={client.name}
//               className={`bg-gradient-to-br ${client.color} h-32 rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition transform hover:scale-105`}
//             >
//               <span className="text-white font-bold text-center px-4 text-sm">
//                 {client.name}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import { CLIENTS } from '../data';

export default function Clients() {
  return (
    <section id="clients" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Our Prestigious Clients
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mb-4" />
          <p className="text-gray-600">Trusted by India's leading companies</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {CLIENTS.map((client) =>
            client.logo ? (
              <div
                key={client.name}
                className="h-32 bg-white rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 flex items-center justify-center p-4 border border-gray-100"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ) : (
              <div
                key={client.name}
                className={`bg-gradient-to-br ${client.color} h-32 rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition transform hover:scale-105`}
              >
                <span className="text-white font-bold text-center px-4 text-sm">
                  {client.name}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}