'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { LoaderCircle } from 'lucide-react';
import LMSHeader from './LMSHeader';
import LearningProgress from './LearningProgress';
import LearningQuote from './LearningQuote';
import CourseProgressSidebar from './CourseProgressSidebar';
import LessonMediaPlayer from './LessonMediaPlayer';
import LessonDetails from './LessonDetails';
import NeedHelpCard from './NeedHelpCard';
import ProgressEncouragement from './ProgressEncouragement';
import { getLessonReleaseTime, isLessonLocked } from './lessonSchedule';

const apiBase = (process.env.NEXT_PUBLIC_API_URL || '').replace(/\/$/, '');

export default function LMSCoursePlayer({ courseSlug, courseId }) {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedLessonId, setSelectedLessonId] = useState('');
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [view, setView] = useState('enrolled');
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [now, setNow] = useState(0);
  const [progressError, setProgressError] = useState('');
  const lastProgressSent = useRef({});
  const progressRequests = useRef({});

  useEffect(() => {
    let active = true;
    const loadCourse = async () => {
      setLoading(true);
      try {
        const requestedCourseId = courseId || new URLSearchParams(window.location.search).get('courseId') || '';
        const requestedLessonId = new URLSearchParams(window.location.search).get('lessonId') || '';
        const token = localStorage.getItem('token');
        if (!token) throw new Error('Please sign in to access this course.');
        if (!requestedCourseId) throw new Error('Course information is missing. Open the course from the course listing and try again.');

        const response = await fetch(apiBase + '/course-payments/learn/' + encodeURIComponent(requestedCourseId), {
          cache: 'no-store',
          headers: { Authorization: 'Bearer ' + token },
        });
        const payload = await response.json();
        console.log('LMS course payload:', payload);
        if (!response.ok || payload?.status !== 1) throw new Error(payload?.message || payload?.error || 'Unable to load course.');
        if (!active) return;

        const rawCourse = payload?.course || payload?.data?.course || null;
        const responseChapters = Array.isArray(payload?.chapters) ? payload.chapters : payload?.data?.chapters;
        const nextCourse = rawCourse
          ? { ...rawCourse, chapters: Array.isArray(responseChapters) && responseChapters.length ? responseChapters : rawCourse.chapters || [] }
          : null;
        if (!nextCourse) throw new Error('This course could not be found.');
        const enrollmentStatus = String(payload?.enrollment?.status || payload?.data?.enrollment?.status || '').toLowerCase();
        const enrolled = Boolean(payload?.isEnrolled ?? payload?.data?.isEnrolled ?? ['active', 'completed'].includes(enrollmentStatus));
        setIsEnrolled(enrolled);
        setView(enrolled ? 'enrolled' : 'pre-enrollment');
        const apiProgress = payload?.progress || payload?.data?.progress || {};
        const completedLessonIds = new Set((apiProgress.completedLessonIds || []).map(String));
        const lessonsProgress = apiProgress.lessonsProgress || {};
        let savedProgress = {};
        try { savedProgress = JSON.parse(localStorage.getItem('lms-progress:' + (nextCourse._id || courseSlug)) || '{}'); } catch { savedProgress = {}; }
        const nextChapters = (nextCourse.chapters || []).map((chapter) => ({
          ...chapter,
          lessons: (chapter.lessons || []).map((lesson) => ({
            ...lesson,
            isFinished: Boolean(
              lesson.isFinished ||
              completedLessonIds.has(String(lesson._id)) ||
              lessonsProgress[lesson._id] === true ||
              lessonsProgress[lesson._id]?.isFinished ||
              lessonsProgress[lesson._id]?.completed ||
              Number(lessonsProgress[lesson._id]?.progressPercentage) >= 100 ||
              savedProgress[lesson._id]
            ),
          })),
        }));
        const hydratedCourse = { ...nextCourse, chapters: nextChapters, progress: apiProgress };
        setCourse(hydratedCourse);
        const firstChapter = nextChapters.find((chapter) => chapter.lessons?.length) || nextChapters[0] || null;
        const currentTime = Date.now();
        setNow(currentTime);
        const resumeItem = requestedLessonId
          ? nextChapters.flatMap((chapter) => (chapter.lessons || []).map((lesson) => ({ lesson, chapter })))
            .find(({ lesson }) => String(lesson._id) === requestedLessonId && !isLessonLocked(lesson, currentTime))
          : null;
        setSelectedChapter(resumeItem?.chapter || firstChapter);
        setSelectedLessonId(resumeItem?.lesson?._id || '');
      } catch (error) {
        if (active) setCourse({ loadError: error.message });
      } finally {
        if (active) setLoading(false);
      }
    };
    if (courseSlug) loadCourse();
    return () => { active = false; };
  }, [courseSlug, courseId]);

  const chapters = Array.isArray(course?.chapters) ? course.chapters : [];
  useEffect(() => {
    if (!chapters.length || !now) return;
    const nextReleaseTime = chapters
      .flatMap((item) => item.lessons || [])
      .map(getLessonReleaseTime)
      .filter((releaseTime) => releaseTime !== null && releaseTime > now)
      .sort((a, b) => a - b)[0];
    if (!nextReleaseTime) return;
    const delay = Math.min(2_147_000_000, Math.max(0, nextReleaseTime - now + 25));
    const timer = window.setTimeout(() => setNow(Date.now()), delay);
    return () => window.clearTimeout(timer);
  }, [chapters, now]);
  const lessons = useMemo(() => chapters.flatMap((chapter, chapterIndex) => (chapter.lessons || []).map((lesson, lessonIndex) => ({
    lesson,
    chapter,
    key: lesson._id || (chapter._id || chapterIndex) + '-' + lessonIndex,
  }))), [chapters]);
  const selectedIndex = lessons.findIndex((item) => item.key === selectedLessonId || item.lesson._id === selectedLessonId || item.lesson.title === selectedLessonId);
  const selected = selectedIndex >= 0 ? lessons[selectedIndex] : null;
  const lesson = selected?.lesson || null;
  const chapter = selected?.chapter || selectedChapter;
  const completedCount = lessons.filter(({ lesson: item }) => item.isFinished).length;
  const calculatedPercent = lessons.length ? Math.round((completedCount / lessons.length) * 100) : 0;
  const percent = course?.progress?.progressPercentage == null
    ? calculatedPercent
    : Math.round(Number(course.progress.progressPercentage) || 0);
  const courseImage = course?.heroImage || course?.thumbnailUrl || (Array.isArray(course?.image) ? course.image[0] : course?.image) || '';
  const poster = lesson?.thumbnailUrl || chapter?.thumbnailUrl || courseImage;
  const courseFiles = Array.isArray(course?.files) ? course.files : [];
  const canGoPrevious = selectedIndex > 0 && !isLessonLocked(lessons[selectedIndex - 1]?.lesson, now);
  const canGoNext = selectedIndex >= 0 && selectedIndex < lessons.length - 1 && !isLessonLocked(lessons[selectedIndex + 1]?.lesson, now);
  const canStartChapterLesson = Boolean(chapter?.lessons?.some((item) => !isLessonLocked(item, now)));

  const selectLesson = (nextLesson, nextChapter, key) => {
    if (isLessonLocked(nextLesson, now)) return;
    setSelectedLessonId(key || nextLesson._id || nextLesson.title);
    setSelectedChapter(nextChapter);
  };
  const selectChapter = (nextChapter) => {
    setSelectedChapter(nextChapter);
    setSelectedLessonId('');
  };
  const selectByIndex = (index) => {
    const item = lessons[index];
    if (item && !isLessonLocked(item.lesson, now)) selectLesson(item.lesson, item.chapter, item.key);
  };
  const startChapterLesson = () => {
    const firstLesson = chapter?.lessons?.find((item) => !isLessonLocked(item, now));
    if (!firstLesson) return;
    const item = lessons.find(({ lesson: itemLesson, chapter: itemChapter }) => itemLesson === firstLesson && itemChapter === chapter);
    if (item) selectLesson(item.lesson, item.chapter, item.key);
  };
  const markLessonFinished = (lessonId) => {
    const progressId = course._id || courseSlug;
    let savedProgress = {};
    try { savedProgress = JSON.parse(localStorage.getItem('lms-progress:' + progressId) || '{}'); } catch { savedProgress = {}; }
    savedProgress[lessonId] = true;
    try { localStorage.setItem('lms-progress:' + progressId, JSON.stringify(savedProgress)); } catch {}
    setCourse((current) => {
      const nextChapters = current.chapters.map((item) => ({
        ...item,
        lessons: item.lessons.map((entry) => entry._id === lessonId ? { ...entry, isFinished: true } : entry),
      }));
      const nextLessons = nextChapters.flatMap((item) => item.lessons || []);
      const nextCompletedCount = nextLessons.filter((entry) => entry.isFinished).length;
      return {
        ...current,
        chapters: nextChapters,
        progress: {
          ...current.progress,
          completedLessonsCount: nextCompletedCount,
          progressPercentage: nextLessons.length ? Math.round((nextCompletedCount / nextLessons.length) * 100) : 0,
        },
      };
    });
  };
  const syncLessonProgress = async (targetLesson, watchPercentage, forceComplete = false) => {
    if (!targetLesson?._id || !course?._id) return false;
    const lessonId = String(targetLesson._id);
    const reportedPercentage = Math.max(0, Math.min(100, Math.floor(Number(watchPercentage) || 0)));
    const isCompleted = forceComplete || reportedPercentage >= 95;
    const percentage = isCompleted ? 100 : reportedPercentage;
    const activeRequest = progressRequests.current[lessonId];
    if (activeRequest) {
      const succeeded = await activeRequest;
      if (!succeeded) return false;
      const lastSaved = lastProgressSent.current[lessonId];
      if (!lastSaved?.completed && (isCompleted || percentage > (lastSaved?.percentage ?? -1))) {
        return syncLessonProgress(targetLesson, percentage, forceComplete);
      }
      return true;
    }
    const previous = lastProgressSent.current[lessonId];
    if (previous?.completed) return true;
    if (!forceComplete && previous && percentage <= previous.percentage) return true;

    lastProgressSent.current[lessonId] = { percentage, completed: false };
    setProgressError('');
    const request = (async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) throw new Error('Please sign in again to save lesson progress.');
        const response = await fetch(`${apiBase}/course-payments/lessons/${encodeURIComponent(lessonId)}/progress`, {
          method: 'POST',
          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ courseId: course._id, watchPercentage: percentage, isCompleted }),
        });
        const payload = await response.json();
        if (!response.ok || payload?.status === 0) throw new Error(payload?.message || payload?.error || 'Unable to save lesson progress.');
        if (isCompleted) {
          lastProgressSent.current[lessonId] = { percentage, completed: true };
          markLessonFinished(lessonId);
        }
        return true;
      } catch (error) {
        if (previous) lastProgressSent.current[lessonId] = previous;
        else delete lastProgressSent.current[lessonId];
        setProgressError(error.message || 'Unable to save lesson progress.');
        return false;
      }
    })();
    progressRequests.current[lessonId] = request;
    const succeeded = await request;
    delete progressRequests.current[lessonId];
    return succeeded;
  };
  const completeAndContinue = async () => {
    if (!lesson) return;
    const saved = await syncLessonProgress(lesson, 100, true);
    if (saved && selectedIndex >= 0 && selectedIndex < lessons.length - 1) selectByIndex(selectedIndex + 1);
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
          <LessonMediaPlayer key={lesson?._id || selectedLessonId || 'chapter'} lesson={lesson} poster={poster} courseImage={courseImage} courseId={course._id} onWatchProgress={(percentage) => syncLessonProgress(lesson, percentage)} onQuizPassed={markLessonFinished} />
          <LessonDetails lesson={lesson} chapter={chapter} lessonId={lesson?._id || selectedLessonId} courseId={course._id || courseSlug} courseFiles={courseFiles} hasPrevious={canGoPrevious} hasNext={canGoNext} onPrevious={() => selectByIndex(selectedIndex - 1)} onNext={() => selectByIndex(selectedIndex + 1)} completed={Boolean(lesson?.isFinished)} onToggleComplete={completeAndContinue} progressError={progressError} canStartLesson={canStartChapterLesson} onStartLesson={startChapterLesson} />
        </div>
        <aside className="space-y-5">
          <CourseProgressSidebar chapters={chapters} lessons={lessons} selectedLessonId={selectedLessonId} selectedChapterId={chapter?._id || chapter?.title} now={now} onSelectChapter={selectChapter} onSelectLesson={selectLesson} />
          <NeedHelpCard onMessageTeacher={messageTeacher} />
        </aside>
      </div>
      <ProgressEncouragement />
    </div>
  </main>;
}






