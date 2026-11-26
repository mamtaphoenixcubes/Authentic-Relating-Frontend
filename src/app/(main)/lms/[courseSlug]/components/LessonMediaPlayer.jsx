'use client';

import { FileText, Music2, Play } from 'lucide-react';
import QuizPlayer from './QuizPlayer';

const baseUrl = (process.env.NEXT_PUBLIC_API_URL || '').replace(/\/$/, '');
const mediaUrl = (value) => {
  if (!value) return '';
  if (/^(https?:|blob:|data:)/i.test(value)) return value;
  try { return new URL(value, baseUrl || window.location.origin).toString(); } catch { return value; }
};
const lessonMedia = (lesson) => {
  const type = String(lesson?.lessonType || '').toLowerCase();
  if (type === 'audio') return lesson?.audioUrl || lesson?.mediaAssetUrl || lesson?.url || '';
  if (type === 'pdf') return lesson?.pdfUrl || lesson?.mediaAssetUrl || lesson?.url || '';
  return lesson?.mediaAssetUrl || lesson?.videoUrl || lesson?.url || '';
};
const videoEmbed = (src) => {
  const youtube = src.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]+)/i);
  if (youtube) return 'https://www.youtube-nocookie.com/embed/' + youtube[1];
  const vimeo = src.match(/vimeo\.com\/(?:video\/)?(\d+)/i);
  return vimeo ? 'https://player.vimeo.com/video/' + vimeo[1] : '';
};

export default function LessonMediaPlayer({ lesson, poster }) {
  if (!lesson) return <div aria-label="No lesson selected" className="aspect-video w-full rounded-[24px] bg-[#101820] shadow-[0_16px_28px_rgba(18,30,42,.18)]" />;
  const type = String(lesson?.lessonType || 'video').toLowerCase();
  const src = mediaUrl(lessonMedia(lesson));
  const embed = type === 'video' ? videoEmbed(src) : '';
  if (type === 'quiz') return <QuizPlayer key={lesson?._id || lesson?.title} lesson={lesson} quiz={lesson?.quiz} />;

  return <div className="group relative aspect-video w-full overflow-hidden rounded-[24px] bg-[#101820] shadow-[0_16px_28px_rgba(18,30,42,.18)]">
    {type === 'video' && src && (embed ? <iframe className="h-full w-full" src={embed} title={lesson?.title || 'Course video'} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /> : <video className="h-full w-full bg-black object-contain" src={src} poster={mediaUrl(poster)} controls playsInline />)}
    {type === 'audio' && src && <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-slate-800 to-slate-950 p-8 text-white"><span className="grid h-20 w-20 place-items-center rounded-full bg-white/10"><Music2 size={36} /></span><h2 className="mt-4 text-xl font-bold">{lesson?.title || 'Audio lesson'}</h2><audio className="mt-8 w-full max-w-lg" src={src} controls /></div>}
    {type === 'pdf' && src && <iframe className="h-full w-full bg-white" src={src} title={lesson?.title || 'Course PDF'} />}
    {(!src || !['video', 'audio', 'pdf'].includes(type)) && <div className="grid h-full place-items-center text-white/70">{type === 'audio' ? <Music2 size={35} /> : type === 'pdf' ? <FileText size={35} /> : <Play size={35} />}</div>}
  </div>;
}
