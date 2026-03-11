// components/Testimonials.tsx
import { Quote } from 'lucide-react';

const reviews = [
  {
    name: "Olawale Adeyemi",
    role: "IT Manager, Heritage Sector",
    content: "Hassan's approach to software is different. Having worked in banking, he understands that 'almost working' isn't enough. The inventory app he built is rock solid.",
    image: "/avatars/user1.jpg" // You can use placeholder images for now
  },
  {
    name: "Chidi Okafor",
    role: "CEO, Nexa Logistics",
    content: "We struggled with server downtime for months. KazeemTech didn't just fix the hardware; they optimized our entire network. Exceptional service.",
    image: "/avatars/user2.jpg"
  },
  {
    name: "Amina Bello",
    role: "Operations Lead",
    content: "The procurement process was seamless. They delivered genuine Dell hardware and handled the setup in record time. Truly professional.",
    image: "/avatars/user3.jpg"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#0a192f]">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-16">Trusted by Professionals</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-blue-900/10 p-8 rounded-2xl border border-blue-500/20 relative">
              <Quote className="text-blue-500/20 absolute top-4 right-4" size={48} />
              <p className="text-blue-100 italic mb-6">"{review.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{review.name}</h4>
                  <p className="text-blue-400 text-xs">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
