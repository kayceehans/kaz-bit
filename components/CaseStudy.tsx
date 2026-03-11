// components/CaseStudy.tsx
import { CheckCircle, Shield, BarChart3 } from 'lucide-react';

export default function CaseStudy() {
  return (
    <section className="py-20 px-8 bg-blue-950/40 border-y border-blue-500/10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-blue-400 font-mono text-sm tracking-widest uppercase font-bold">Featured Project</span>
          <h2 className="text-4xl font-bold text-white mt-2">FinTrack: Enterprise Asset Intelligence</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-blue-100 text-lg leading-relaxed">
              We replaced a fragmented manual tracking system with a <span className="text-white font-semibold underline decoration-blue-500">centralized ERP module</span> specifically designed for the high-security requirements of a Nigerian commercial bank.
            </p>
            
            <ul className="space-y-4">
              {[
                { icon: Shield, text: "Banking-grade encryption for all asset data." },
                { icon: BarChart3, text: "Real-time depreciation & audit reporting." },
                { icon: CheckCircle, text: "Automated maintenance alerts for HP/Dell servers." }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-blue-200">
                  <item.icon size={20} className="text-blue-400" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-[#0a192f] p-8 rounded-lg border border-blue-500/20">
              <h4 className="text-blue-400 font-bold mb-4">Project Impact</h4>
              <div className="space-y-4">
                <div>
                  <span className="block text-3xl font-bold text-white">99.9%</span>
                  <span className="text-sm text-blue-300">Inventory Accuracy achieved within 6 months.</span>
                </div>
                <div className="pt-4 border-t border-blue-800">
                  <span className="block text-3xl font-bold text-white">₦25M+</span>
                  <span className="text-sm text-blue-300">Estimated savings in unrecovered hardware assets.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
