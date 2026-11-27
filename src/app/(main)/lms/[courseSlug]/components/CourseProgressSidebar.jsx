'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, ChevronRight, Circle, CircleCheck, CircleHelp, FileText, LockKeyhole, Music2, Play } from 'lucide-react';
import { formatLessonReleaseTime, isLessonLocked } from './lessonSchedule';

const lessonIcon = (type) => type === 'quiz' ? CircleHelp : type === 'audio' ? Music2 : type === 'pdf' ? FileText : Play;

export default function CourseProgressSidebar({ chapters = [], lessons = [], selectedLessonId, selectedChapterId, now, onSelectChapter, onSelectLesson }) {
  const [expanded, setExpanded] = useState(() => Object.fromEntries(chapters.map((chapter, index) => [chapter._id || String(index), index === 0])));
  const completedTotal = lessons.filter((item) => item.lesson.isFinished).length;
  const percent = lessons.length ? Math.round((completedTotal / lessons.length) * 100) : 0;

  useEffect(() => {
    if (!selectedChapterId) return;
    const chapterIndex = chapters.findIndex((chapter) => (chapter._id || chapter.title) === selectedChapterId);
    if (chapterIndex < 0) return;
    const chapterKey = chapters[chapterIndex]._id || String(chapterIndex);
    setExpanded((current) => current[chapterKey] ? current : { ...current, [chapterKey]: true });
  }, [chapters, selectedChapterId]);

  return (
    <section className="rounded-[24px] border border-[#dfe5ee] bg-white p-5 shadow-[0_2px_5px_rgba(16,27,49,0.04)] sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-[16px] font-bold tracking-[-0.02em] text-[#101b31]">Course Progress</h2>
        <span className="text-xs font-bold text-[#101b31]">{percent}%</span>
      </div>
      <p className="mt-1.5 text-[12px] leading-4 text-[#68758d]">{completedTotal} of {lessons.length} lessons completed</p>
      <div
        className="mt-2 h-2 overflow-hidden rounded-full bg-[#edf1f6]"
        role="progressbar"
        aria-label="Course progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
      >
        <div className="h-full rounded-full bg-[#f04e50] transition-[width] duration-300" style={{ width: percent + '%' }} />
      </div>

      <div className="mt-6 space-y-3">
        {chapters.map((chapter, chapterIndex) => {
          const key = chapter._id || String(chapterIndex);
          const expandedNow = expanded[key] ?? chapterIndex === 0;
          const chapterLessons = chapter.lessons || [];
          const done = chapterLessons.filter((lesson) => lesson.isFinished).length;
          const activeChapter = selectedChapterId === (chapter._id || chapter.title);
          return (
            <section key={key} className="relative rounded-[17px] border border-[#d4dce8] bg-white shadow-[0_0_0_1px_rgba(212,220,232,0.28)]">
              <button
                type="button"
                aria-expanded={expandedNow}
                onClick={() => { onSelectChapter?.(chapter); setExpanded((current) => ({ ...current, [key]: !expandedNow })); }}
                className={"relative z-10 mx-px mt-px flex min-h-[46px] w-[calc(100%-2px)] items-center justify-between gap-3 px-4 py-3 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#f04e50] " + (activeChapter ? "bg-[#fff0e6] text-[#f04e50] " : "bg-[#f8f9fb] hover:bg-[#f4f6f9] ") + (expandedNow ? "rounded-t-[15px]" : "rounded-[15px]")}
              >
                <span className={'flex min-w-0 items-center gap-2.5 text-[13px] font-bold ' + (activeChapter ? 'text-[#f04e50]' : 'text-[#101b31]')}>
                  {expandedNow ? <ChevronDown className="shrink-0 text-[#94a3b8]" size={15} /> : <ChevronRight className="shrink-0 text-[#94a3b8]" size={15} />}
                  <span className="truncate">{chapter.title || 'Chapter ' + (chapterIndex + 1)}</span>
                </span>
                <span className="shrink-0 text-[11px] font-medium text-[#8794aa]">{done}/{chapterLessons.length}</span>
              </button>
              {expandedNow && (
                <div className="space-y-0.5 px-2.5 pb-2.5 pt-1.5">
                  {chapterLessons.map((lesson, lessonIndex) => {
                    const lessonId = lesson._id || key + '-' + lessonIndex;
                    const type = String(lesson.lessonType || '').toLowerCase();
                    const Icon = lessonIcon(type);
                    const locked = isLessonLocked(lesson, now);
                    const active = selectedLessonId === lessonId && !locked;
                    const duration = lesson.durationFormatted || lesson.duration || '';
                    const releaseLabel = formatLessonReleaseTime(lesson);
                    return (
                      <button
                        type="button"
                        key={lessonId}
                        disabled={locked}
                        title={locked ? `Available ${releaseLabel}` : undefined}
                        aria-label={locked ? `${lesson.title || 'Lesson'} locked until ${releaseLabel}` : undefined}
                        aria-current={active ? 'true' : undefined}
                        onClick={() => onSelectLesson(lesson, chapter, lessonId)}
                        className={'flex min-h-[36px] w-full items-center gap-2.5 rounded-[11px] px-2 py-2 text-left transition-colors ' + (locked ? 'cursor-not-allowed bg-slate-50 text-slate-400' : active ? 'bg-[#fff0e6] text-[#f04e50]' : 'text-[#26344d] hover:bg-[#f8f9fb]')}
                      >
                        {locked
                          ? <LockKeyhole className="shrink-0 text-[#94a3b8]" size={15} />
                          : lesson.isFinished
                          ? <CircleCheck className="shrink-0 text-emerald-500" size={16} />
                          : active
                            ? <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[#f04e50] text-white"><Play size={9} fill="currentColor" /></span>
                            : <Circle className="shrink-0 text-[#cbd5e1]" size={16} />}
                        <span className={'min-w-0 flex-1 truncate text-[12px] ' + (active ? 'font-bold' : 'font-medium')}>
                          {lesson.title || (type === 'quiz' ? 'Quiz' : 'Lesson ' + (lessonIndex + 1))}
                        </span>
                        {duration
                          ? <span className={'shrink-0 text-[11px] tabular-nums ' + (active ? 'font-semibold text-[#f04e50]' : 'text-[#8794aa]')}>{duration}</span>
                          : <Icon className={'shrink-0 ' + (active ? 'text-[#f04e50]' : 'text-[#94a3b8]')} size={14} />}
                      </button>
                    );
                  })}
                  {!chapterLessons.length && <p className="px-2 py-3 text-xs text-slate-500">No lessons in this chapter yet.</p>}
                </div>
              )}
            </section>
          );
        })}
        {!chapters.length && <p className="py-2 text-xs text-slate-500">Course chapters will appear here.</p>}
      </div>
    </section>
  );
}

