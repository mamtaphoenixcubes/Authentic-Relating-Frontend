'use client';

import { useEffect, useRef } from 'react';
import { FileText, Music2, Play } from 'lucide-react';
import QuizPlayer from './QuizPlayer';

const baseUrl = (process.env.NEXT_PUBLIC_API_URL || '').replace(/\/$/, '');
const mediaUrl = (value) => {
  if (!value) return '';
  if (/^(https?:|blob:|data:)/i.test(value)) return value;
  try { return new URL(value, baseUrl || window.location.origin).toString(); } catch { return value; }
};
const firstAssetUrl = (assets) => {
  const asset = Array.isArray(assets) ? assets[0] : assets;
  return typeof asset === 'string' ? asset : asset?.file || asset?.url || asset?.mediaAssetUrl || '';
};
const lessonMedia = (lesson) => {
  const type = String(lesson?.lessonType || '').toLowerCase();
  if (type === 'audio') return lesson?.audioUrl || firstAssetUrl(lesson?.audio) || lesson?.mediaAssetUrl || lesson?.url || '';
  if (type === 'pdf') return lesson?.pdfUrl || firstAssetUrl(lesson?.pdf) || lesson?.mediaAssetUrl || lesson?.url || '';
  return lesson?.mediaAssetUrl || lesson?.videoUrl || firstAssetUrl(lesson?.Video || lesson?.video) || lesson?.url || '';
};
const videoEmbed = (src) => {
  const youtube = src.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]+)/i);
  if (youtube) return 'https://www.youtube-nocookie.com/embed/' + youtube[1];
  const vimeo = src.match(/vimeo\.com\/(?:video\/)?(\d+)/i);
  return vimeo ? 'https://player.vimeo.com/video/' + vimeo[1] : '';
};

export default function LessonMediaPlayer({ lesson, poster, courseImage, courseId, onWatchProgress, onQuizPassed }) {
  const completedPlaybackReported = useRef('');
  useEffect(() => {
    completedPlaybackReported.current = '';
  }, [lesson?._id]);

  if (!lesson) return <div role="img" aria-label="Course image preview" className="aspect-video w-full rounded-[24px] bg-[#101820] bg-cover bg-center shadow-[0_16px_28px_rgba(18,30,42,.18)]" style={(courseImage || poster) ? { backgroundImage: `linear-gradient(rgba(16,24,32,.12), rgba(16,24,32,.12)), url("${mediaUrl(courseImage || poster)}")` } : undefined} />;
  const type = String(lesson?.lessonType || 'video').toLowerCase();
  const src = mediaUrl(lessonMedia(lesson));
  const embed = type === 'video' ? videoEmbed(src) : '';
  const reportCompletion = () => {
    const lessonId = String(lesson?._id || lesson?.title || '');
    if (completedPlaybackReported.current === lessonId) return;
    completedPlaybackReported.current = lessonId;
    onWatchProgress?.(100);
  };
  const reportPausedProgress = (event) => {
    const { currentTime, duration } = event.currentTarget;
    if (!duration || currentTime <= 0) return;
    const percentage = Math.min(100, Math.floor((currentTime / duration) * 100));
    if (percentage >= 95) reportCompletion();
    else onWatchProgress?.(percentage);
  };
  const reportThresholdProgress = (event) => {
    const { currentTime, duration } = event.currentTarget;
    if (duration > 0 && currentTime / duration >= 0.95) reportCompletion();
  };
  if (type === 'quiz') return <QuizPlayer key={lesson?._id || lesson?.title} lesson={lesson} courseId={courseId} quiz={lesson?.quiz} onPassed={onQuizPassed} />;

  return <div className="group relative aspect-video w-full overflow-hidden rounded-[24px] bg-[#101820] shadow-[0_16px_28px_rgba(18,30,42,.18)]">
    {type === 'video' && src && (embed ? <iframe className="h-full w-full" src={embed} title={lesson?.title || 'Course video'} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /> : <video className="h-full w-full bg-black object-contain" src={src} poster={mediaUrl(poster)} controls playsInline onTimeUpdate={reportThresholdProgress} onPause={reportPausedProgress} onEnded={reportCompletion} />)}
    {type === 'audio' && src && <div className="flex h-full flex-col items-center justify-center bg-slate-900 bg-cover bg-center p-8 text-white" style={(courseImage || poster) ? { backgroundImage: `linear-gradient(rgba(10,18,28,.68), rgba(10,18,28,.76)), url("${mediaUrl(courseImage || poster)}")` } : undefined}><span className="grid h-20 w-20 place-items-center rounded-full bg-white/10"><Music2 size={36} /></span><h2 className="mt-4 text-xl font-bold">{lesson?.title || 'Audio lesson'}</h2><audio className="mt-8 w-full max-w-lg" src={src} controls onTimeUpdate={reportThresholdProgress} onPause={reportPausedProgress} onEnded={reportCompletion} /></div>}
    {type === 'pdf' && src && <iframe className="h-full w-full bg-white" src={src} title={lesson?.title || 'Course PDF'} />}
    {(!src || !['video', 'audio', 'pdf'].includes(type)) && <div className="grid h-full place-items-center text-white/70">{type === 'audio' ? <Music2 size={35} /> : type === 'pdf' ? <FileText size={35} /> : <Play size={35} />}</div>}
  </div>;
}
