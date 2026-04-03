import Dashboard from '@/components/Dashboard';
import ContactForm from '@/components/ContactForm';
import About from '@/components/About';
import Services from '@/components/Services';
import CaseStudy from '@/components/CaseStudy';
import Testimonials from '@/components/Testimonials';
import CEOContact from '@/components/CEOContact';
import Footer from '@/components/Footer';
import ProductSlider from '@/components/productSlider';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a192f] text-white p-8">
      <header className="max-w-6xl mx-auto mb-16 text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
          Kaz-Bit I-T Solutions
        </h1>
        <p className="text-blue-200 text-lg">Sales and Repairs of Laptops, PC, Printers, Premium Software Engineering and Hardware Infrastructure</p>
      </header>      
      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-2xl mb-6 font-semibold">Cheap Quick Sales, Limited stocks (Slide to the right to view more)</h2>
        <ProductSlider />
      </section>

      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-2xl mb-6 font-semibold">Business Performance Summary</h2>
        <Dashboard />
      </section>
     <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-2xl mb-6 font-semibold">About Us</h2>
        <About />
      </section>

      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-2xl mb-6 font-semibold">Services</h2>
        <Services />
      </section>

      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-2xl mb-6 font-semibold">Case Studies</h2>
        <CaseStudy />
      </section>

      <section className="max-w-2xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-8">Get In Touch</h2>
        <ContactForm />
      </section>

      <section className="max-w-2xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-8">Testimonials</h2>
        <Testimonials />
      </section>

      <section className="max-w-2xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-8">CEO</h2>
        <CEOContact />
      </section>

      <section className="max-w-2xl mx-auto">
        {/* <h2 className="text-center text-3xl font-bold mb-8">CEO</h2> */}
        <Footer />
      </section>

    </main>
  );
}




// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }
