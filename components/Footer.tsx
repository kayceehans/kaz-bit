// components/Footer.tsx
import { Download, Globe, ShieldCheck, Cpu } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050c1a] border-t border-blue-900/50 pt-16 pb-8 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white font-bold text-xl">
              <Cpu className="text-blue-500" size={24} />
              <span>KazeemTech<span className="text-blue-500">.</span></span>
            </div>
            <p className="text-blue-300/70 text-sm leading-relaxed">
              Bridging the gap between banking-grade software engineering and premium hardware infrastructure in Nigeria.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold mb-2 text-sm uppercase tracking-widest">Navigation</h4>
            <a href="#" className="text-blue-400 hover:text-white text-sm transition-colors">Services</a>
            <a href="#" className="text-blue-400 hover:text-white text-sm transition-colors">Case Studies</a>
            <a href="#" className="text-blue-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
          </div>

          {/* Proposal Download (Call to Action) */}
          <div className="bg-blue-900/20 p-6 rounded-2xl border border-blue-500/20">
            <h4 className="text-white font-bold mb-3 flex items-center gap-2">
              <ShieldCheck size={18} className="text-blue-400" />
              Work With Us
            </h4>
            <p className="text-blue-200 text-xs mb-4">
              Get our full business proposal including detailed hardware pricing and software stacks.
            </p>
            <a 
              href="/KazeemTech_Business_Proposal.pdf" // Ensure this file is in your /public folder
              download
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold py-2 px-4 rounded-lg transition-all w-full justify-center shadow-lg shadow-blue-900/20"
            >
              <Download size={16} />
              Download Proposal PDF
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-900/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-500 font-medium">
          <p>© {new Date().getFullYear()} Kaz-Bit Tech Solutions. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Globe size={14} /> Lagos, Nigeria</span>
            <span className="h-4 w-px bg-blue-900/50"></span>
            <span>RC: [R1234560]</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
