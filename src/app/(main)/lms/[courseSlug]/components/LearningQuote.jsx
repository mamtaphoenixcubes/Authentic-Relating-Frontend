import { Leaf } from 'lucide-react';

export default function LearningQuote() {
  return <div className="relative flex min-h-[74px] items-center justify-center rounded-2xl border border-[#ffddca] bg-[#fff4ec] px-6 py-4 text-center text-sm italic text-[#16233a] shadow-sm">
    “A little progress each day adds up to big results.”
    <Leaf className="absolute -bottom-2 left-0 rotate-45 text-emerald-600" size={16} />
    <Leaf className="absolute -top-2 right-6 -rotate-45 text-emerald-600" size={16} />
  </div>;
}
