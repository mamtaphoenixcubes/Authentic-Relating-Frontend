import { MessageSquareText } from 'lucide-react';

export default function NeedHelpCard({ onMessageTeacher }) {
  return <section className="rounded-3xl border border-[#ffddca] bg-[#fff4ec] px-5 py-6 text-center shadow-sm">
    <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#ffe7da] text-[#f04e50]"><MessageSquareText size={20} /></span>
    <h2 className="mt-3 text-sm font-bold text-[#101b31]">Need Help?</h2>
    <p className="mx-auto mt-1.5 max-w-[270px] text-xs leading-5 text-slate-600">Have questions about this lesson? Reach out to your teacher anytime.</p>
    <button onClick={onMessageTeacher} className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#ffd2ad] bg-white px-3 py-2.5 text-xs font-bold text-[#f04e50] hover:bg-orange-50"><MessageSquareText size={14} />Message Teacher</button>
  </section>;
}
