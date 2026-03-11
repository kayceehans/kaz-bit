// components/About.tsx
export default function About() {
  return (
    <section className="py-16 px-8 bg-gradient-to-b from-[#0a192f] to-blue-900/10">
      <div className="max-w-4xl mx-auto border-l-4 border-blue-500 pl-8">
        <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
        <p className="text-blue-100 leading-relaxed text-lg mb-4">
          Led by <span className="text-blue-400 font-semibold">Kazeem Hassan Obasanjo Omotunde</span>, our team brings years of rigorous experience from 
          Nigeria's top-tier financial institutions. We've managed the systems that move the nation's economy—now, we're 
          bringing that same level of excellence to your business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-blue-900/30 p-5 rounded-lg">
            <h3 className="text-blue-400 font-bold mb-2">Banking-Grade Security</h3>
            <p className="text-sm text-blue-200">Every line of code and every hardware setup is audited for maximum protection.</p>
          </div>
          <div className="bg-blue-900/30 p-5 rounded-lg">
            <h3 className="text-blue-400 font-bold mb-2">Local Reliability</h3>
            <p className="text-sm text-blue-200">Based in the heart of Nigeria, we provide rapid physical support and hardware repairs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
