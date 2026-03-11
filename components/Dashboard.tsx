// components/Dashboard.tsx
"use client"; 
import { Code, Server, Wrench, Users } from 'lucide-react';
import Counter from './Counter';

const stats = [
  { label: 'Software Projects', value: 12, suffix: '+', icon: Code },
  { label: 'Hardware Supplied', value: 500, suffix: '+', icon: Server },
  { label: 'Technical Repairs', value: 1200, suffix: '', icon: Wrench },
  { label: 'Expert Staff', value: 8, suffix: '', icon: Users },
];

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-blue-900/20 rounded-2xl border border-blue-500/30 backdrop-blur-md">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col items-center p-4">
          <stat.icon className="text-blue-400 mb-2" size={28} />
          <div className="text-2xl font-bold text-white">
            <Counter value={stat.value} suffix={stat.suffix} />
          </div>
          <span className="text-blue-200 text-sm text-center">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
