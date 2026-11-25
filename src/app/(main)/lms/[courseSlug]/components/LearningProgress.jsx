export default function LearningProgress({ courseTitle, lessonNumber, totalLessons, percentage }) {
  return <section>
    <p className="text-sm font-medium text-slate-500">Welcome back,</p>
    <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-[#101b31] md:text-[30px]">Continue Your {courseTitle || 'Learning'} Journey</h1>
    <p className="mt-3 text-xs font-medium text-slate-700">Lesson {totalLessons ? lessonNumber : 0} of {totalLessons} · {percentage}% complete</p>
    <div className="mt-3 flex max-w-[355px] items-center gap-3">
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-200"><div className="h-full rounded-full bg-[#f04e50] transition-all" style={{ width: percentage + '%' }} /></div>
      <span className="text-xs font-semibold text-slate-700">{percentage}%</span>
    </div>
  </section>;
}
