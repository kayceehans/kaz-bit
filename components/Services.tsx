// components/Services.tsx
import { Laptop, Server, Network, ShieldCheck } from 'lucide-react';

const services = [
    {
    title: "Software Development",
    description: "Custom software solutions for modern business needs.",
    brands: ["React", "C#", "Python", "Node.js"],
    icon: Server,
  },
  {
    title: "Corporate Laptops",
    description: "Sales and component-level repairs for high-performance business units.",
    brands: ["HP EliteBook", "Dell Latitude", "Lenovo ThinkPad", "Apple MacBook"],
    icon: Laptop,
  },  
  {
    title: "Networking Solutions",
    description: "Robust connectivity and secure communication systems.",
    brands: ["Cisco", "Ubiquiti", "MikroTik", "TP-Link"],
    icon: Network,
  },
  {
    title: "Banking Security",
    description: "Security-first software and hardware audits for financial safety.",
    brands: ["Fortinet", "Sophos", "Cisco Meraki"],
    icon: ShieldCheck,
  },
];

export default function Services() {
  return (
    <section className="py-20 px-8 bg-[#0a192f]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Expertise & Specialized Brands</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-blue-900/10 border border-blue-500/20 rounded-xl hover:border-blue-400/50 transition-all group">
              <service.icon className="text-blue-400 mb-4 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-blue-200 text-sm mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.brands.map((brand) => (
                  <span key={brand} className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded border border-blue-500/30">
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
