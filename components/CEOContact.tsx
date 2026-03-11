// components/CEOContact.tsx
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import Image from 'next/image';

export default function CEOContact() {
  return (
    <section className="py-20 px-6 bg-[#0a192f]">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-900/40 to-[#0a192f] rounded-3xl border border-blue-500/20 overflow-hidden shadow-2xl">
        <div className="flex flex-col md:flex-row items-center gap-12 p-8 md:p-12">
          
          {/* CEO Image Side */}
          <div className="relative w-48 h-48 md:w-64 md:h-84 flex-shrink-0">
            <div className="absolute inset-0 bg-blue-500 rounded-2xl rotate-6 opacity-20"></div>
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-blue-400/50 shadow-lg">
              <Image 
                src="/ceo-hassan.jpg" // Put your photo in the public folder as ceo-hassan.jpg
                alt="Hassan Kazeem - CEO"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Contact Details Side */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold text-white mb-1">Hassan Kazeem</h2>
            <p className="text-blue-400 font-mono text-sm mb-6 uppercase tracking-widest font-bold">
              Founder & Lead Software Engineer
            </p>
            
            <div className="space-y-4 text-blue-100">
              <div className="flex items-center justify-center md:justify-start gap-4 group">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <a href="mailto:hassan@kazeemtech.com" className="hover:text-blue-400 transition-colors">
                  kazeem.hassan@outlook.com
                </a>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-4 group">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <a href="tel:+2348000000000" className="hover:text-blue-400 transition-colors">
                  +234 (0) 809 583 4592
                </a>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-4 group">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <MapPin size={20} />
                </div>
                <span>Lagos, Nigeria (Available Nationwide)</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-6 mt-8">
              <a href="#" className="text-blue-300 hover:text-white transition-colors"><Linkedin size={24} /></a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors"><Github size={24} /></a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
