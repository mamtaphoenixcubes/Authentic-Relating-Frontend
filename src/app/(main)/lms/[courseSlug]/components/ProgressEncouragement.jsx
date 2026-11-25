import { Leaf } from 'lucide-react';

export default function ProgressEncouragement() {
  return <section className="mt-10 flex min-h-[90px] items-center justify-between gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-5 text-emerald-900 shadow-sm">
    <div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full bg-emerald-100 text-emerald-700"><Leaf size={19} /></span><div><h2 className="text-sm font-extrabold">You’re Doing Great!</h2><p className="mt-0.5 text-xs text-slate-600">Consistency is the key. Keep going and celebrate small wins.</p></div></div>
    <Leaf aria-hidden="true" className="hidden text-emerald-900/10 sm:block" size={62} />
  </section>;
}
