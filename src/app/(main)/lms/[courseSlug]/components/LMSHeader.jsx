'use client';

import { Eye, ChevronRight, Share2 } from 'lucide-react';

export default function LMSHeader({ courseTitle, view, isEnrolled, onChangeView }) {
  const share = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch {
      window.prompt('Copy this course link', window.location.href);
    }
  };

  return (
    <header className="sticky top-0 z-30 border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex min-h-[60px] max-w-[1440px] flex-wrap items-center justify-between gap-3 px-5 py-2 md:px-8">
        <nav aria-label="Breadcrumb" className="flex min-w-0 items-center gap-2 text-xs">
          <a href="/onlinecourse" className="shrink-0 text-slate-500 hover:text-slate-800">My Learning</a>
          <ChevronRight size={15} className="shrink-0 text-slate-400" />
          <span className="truncate font-semibold text-slate-900">{courseTitle || 'Course'}</span>
        </nav>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 p-1 text-[11px] shadow-sm">
            <span className="hidden items-center gap-1.5 px-2 text-slate-400 sm:flex"><Eye size={13} />View:</span>
            <button onClick={() => onChangeView('pre-enrollment')} className={'rounded-full px-3 py-1.5 font-semibold ' + (view === 'pre-enrollment' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500')}>Pre-Enrollment</button>
            <button onClick={() => onChangeView('enrolled')} className={'flex items-center gap-1.5 rounded-full px-3 py-1.5 font-semibold ' + (view === 'enrolled' ? 'bg-white text-[#f04e50] shadow-sm' : 'text-slate-500')}>Enrolled Student<span className={'h-2 w-2 rounded-full ' + (isEnrolled ? 'bg-emerald-500' : 'bg-slate-300')} /></button>
          </div>
          <button onClick={share} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-sm hover:bg-slate-50"><Share2 size={14} className="text-[#f04e50]" /><span className="hidden sm:inline">Share</span></button>
        </div>
      </div>
    </header>
  );
}
