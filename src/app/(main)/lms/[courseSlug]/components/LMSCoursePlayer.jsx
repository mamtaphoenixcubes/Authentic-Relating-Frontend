'use client';

import { useEffect, useMemo, useState } from 'react';
import { LoaderCircle } from 'lucide-react';
import LMSHeader from './LMSHeader';
import LearningProgress from './LearningProgress';
import LearningQuote from './LearningQuote';
import CourseProgressSidebar from './CourseProgressSidebar';
import LessonMediaPlayer from './LessonMediaPlayer';
import LessonDetails from './LessonDetails';
import NeedHelpCard from './NeedHelpCard';
import ProgressEncouragement from './ProgressEncouragement';

const apiBase = (process.env.NEXT_PUBLIC_API_URL || '').replace(/\/$/, '');

export default function LMSCoursePlayer({ courseSlug }) {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedLessonId, setSelectedLessonId] = useState('');
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [view, setView] = useState('enrolled');
  const [isEnrolled, setIsEnrolled] = useState(false);

  useEffect(() => {
    let active = true;
    const loadCourse = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(apiBase + '/course-payments/catalog/' + encodeURIComponent(courseSlug), {
          cache: 'no-store',
          headers: token ? { Authorization: 'Bearer ' + token } : {},
        });
        const payload = await response.json();
        if (!response.ok || payload?.status === 0) throw new Error(payload?.message || payload?.error || 'Unable to load course.');
        if (!active) return;
        const nextCourse = payload?.course || payload?.data?.course || null;
        if (!nextCourse) throw new Error('This course could not be found.');
        const enrolled = Boolean(payload?.isEnrolled ?? payload?.data?.isEnrolled);
        setIsEnrolled(enrolled);
        setView(enrolled ? 'enrolled' : 'pre-enrollment');
        let savedProgress = {};
        try { savedProgress = JSON.parse(localStorage.getItem('lms-progress:' + (nextCourse._id || courseSlug)) || '{}'); } catch { savedProgress = {}; }
        const nextChapters = (nextCourse.chapters || []).map((chapter) => ({
          ...chapter,
          lessons: (chapter.lessons || []).map((lesson) => ({
            ...lesson,
            isFinished: Boolean(lesson.isFinished || savedProgress[lesson._id]),
          })),
        }));
        const hydratedCourse = { ...nextCourse, chapters: nextChapters };
        setCourse(hydratedCourse);
        const firstChapter = nextChapters.find((chapter) => chapter.lessons?.length) || nextChapters[0] || null;
        const firstLesson = firstChapter?.lessons?.[0] || null;
        setSelectedChapter(firstChapter);
        setSelectedLessonId(firstLesson?._id || (firstLesson ? firstLesson.title : ''));
      } catch (error) {
        if (active) setCourse({ loadError: error.message });
      } finally {
        if (active) setLoading(false);
      }
    };
    if (courseSlug) loadCourse();
    return () => { active = false; };
  }, [courseSlug]);

  const chapters = Array.isArray(course?.chapters) ? course.chapters : [];
  const lessons = useMemo(() => chapters.flatMap((chapter, chapterIndex) => (chapter.lessons || []).map((lesson, lessonIndex) => ({
    lesson,
    chapter,
    key: lesson._id || (chapter._id || chapterIndex) + '-' + lessonIndex,
  }))), [chapters]);
  const selectedIndex = lessons.findIndex((item) => item.key === selectedLessonId || item.lesson._id === selectedLessonId || item.lesson.title === selectedLessonId);
  const selected = selectedIndex >= 0 ? lessons[selectedIndex] : lessons[0];
  const lesson = selected?.lesson || null;
  const chapter = selected?.chapter || selectedChapter;
  const completedCount = lessons.filter(({ lesson: item }) => item.isFinished).length;
  const percent = lessons.length ? Math.round((completedCount / lessons.length) * 100) : 0;
  const poster = lesson?.thumbnailUrl || chapter?.thumbnailUrl || course?.heroImage || course?.thumbnailUrl || '';
  const courseFiles = Array.isArray(course?.files) ? course.files : [];

  const selectLesson = (nextLesson, nextChapter, key) => {
    setSelectedLessonId(key || nextLesson._id || nextLesson.title);
    setSelectedChapter(nextChapter);
  };
  const selectByIndex = (index) => {
    const item = lessons[index];
    if (item) selectLesson(item.lesson, item.chapter, item.key);
  };
  const toggleComplete = () => {
    if (!lesson) return;
    const nextValue = !lesson.isFinished;
    const progressId = course._id || courseSlug;
    let progress = {};
    try { progress = JSON.parse(localStorage.getItem('lms-progress:' + progressId) || '{}'); } catch { progress = {}; }
    progress[lesson._id] = nextValue;
    localStorage.setItem('lms-progress:' + progressId, JSON.stringify(progress));
    setCourse((current) => ({
      ...current,
      chapters: current.chapters.map((item) => ({
        ...item,
        lessons: item.lessons.map((entry) => entry._id === lesson._id ? { ...entry, isFinished: nextValue } : entry),
      })),
    }));
  };
  const messageTeacher = () => {
    const email = course?.teacherEmail || course?.publisherEmail;
    if (email) window.location.href = 'mailto:' + email + '?subject=' + encodeURIComponent('Question about ' + lesson?.title);
  };

  if (loading) return <main className="grid min-h-[70vh] place-items-center"><LoaderCircle className="animate-spin text-[#f04e50]" size={34} /><span className="sr-only">Loading course...</span></main>;
  if (course?.loadError || !course) return <main className="mx-auto max-w-4xl px-5 py-24 text-center"><h1 className="text-2xl font-bold">Course unavailable</h1><p className="mt-3 text-sm text-slate-600">{course?.loadError || 'This course could not be found.'}</p></main>;

  return <main className="min-h-screen bg-[#faf8f5] pb-12 text-slate-900">
    <LMSHeader courseTitle={course.course_title || course.title} view={view} isEnrolled={isEnrolled} onChangeView={setView} />
    <div className="mx-auto max-w-[1440px] px-5 py-7 md:px-10">
      <div className="grid gap-x-8 gap-y-7 lg:grid-cols-[minmax(0,2fr)_384px]">
        <LearningProgress courseTitle={course.learningTitle || course.journeyName || course.course_title || course.title} lessonNumber={Math.max(0, selectedIndex + 1)} totalLessons={lessons.length} percentage={percent} />
        <LearningQuote />
        <div className="min-w-0">
          <LessonMediaPlayer key={lesson?._id || selectedLessonId} lesson={lesson} poster={poster} />
          <LessonDetails lesson={lesson} chapter={chapter} lessonId={lesson?._id || selectedLessonId} courseId={course._id || courseSlug} courseFiles={courseFiles} hasPrevious={selectedIndex > 0} hasNext={selectedIndex >= 0 && selectedIndex < lessons.length - 1} onPrevious={() => selectByIndex(selectedIndex - 1)} onNext={() => selectByIndex(selectedIndex + 1)} completed={Boolean(lesson?.isFinished)} onToggleComplete={toggleComplete} />
        </div>
        <aside className="space-y-5">
          <CourseProgressSidebar chapters={chapters} lessons={lessons} selectedLessonId={selectedLessonId} onSelectLesson={selectLesson} />
          <NeedHelpCard onMessageTeacher={messageTeacher} />
        </aside>
      </div>
      <ProgressEncouragement />
    </div>
  </main>;
}






