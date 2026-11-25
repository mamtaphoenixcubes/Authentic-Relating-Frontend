'use client';

import { useEffect, useState } from 'react';
import { BookOpen, Download, FileText, Lightbulb, StickyNote } from 'lucide-react';
import sanitizeHtml from 'sanitize-html';

const tabs = [{ id: 'overview', label: 'Overview', Icon: BookOpen }, { id: 'resources', label: 'Resources', Icon: FileText }, { id: 'notes', label: 'Notes', Icon: StickyNote }];
const escapeHtml = (value) => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
const markdownInline = (value) => escapeHtml(value)
  .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2">$1</a>')
  .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  .replace(/__([^_]+)__/g, '<strong>$1</strong>')
  .replace(/\*([^*]+)\*/g, '<em>$1</em>')
  .replace(/_([^_]+)_/g, '<em>$1</em>');
const markdownToHtml = (value) => {
  const blocks = [];
  let paragraph = [];
  let listType = '';
  let listItems = [];
  const flushParagraph = () => { if (paragraph.length) blocks.push('<p>' + paragraph.map(markdownInline).join('<br>') + '</p>'); paragraph = []; };
  const flushList = () => { if (listItems.length) blocks.push('<' + listType + '>' + listItems.map((item) => '<li>' + markdownInline(item) + '</li>').join('') + '</' + listType + '>'); listType = ''; listItems = []; };
  String(value || '').split(/\r?\n/).forEach((line) => {
    const text = line.trim();
    if (!text) { flushParagraph(); flushList(); return; }
    const heading = text.match(/^(#{1,3})\s+(.+)$/);
    const unordered = text.match(/^[-*]\s+(.+)$/);
    const ordered = text.match(/^\d+[.)]\s+(.+)$/);
    if (heading) { flushParagraph(); flushList(); blocks.push('<h' + heading[1].length + '>' + markdownInline(heading[2]) + '</h' + heading[1].length + '>'); return; }
    if (unordered || ordered) {
      flushParagraph();
      const nextType = unordered ? 'ul' : 'ol';
      if (listType && listType !== nextType) flushList();
      listType = nextType;
      listItems.push((unordered || ordered)[1]);
      return;
    }
    flushList();
    paragraph.push(text);
  });
  flushParagraph(); flushList();
  return blocks.join('');
};
const richTextHtml = (value) => {
  const source = String(value || '').trim();
  if (!source) return '';
  const html = /<\s*[a-z][^>]*>/i.test(source) ? source : markdownToHtml(source);
  return sanitizeHtml(html, {
    allowedTags: ['h1', 'h2', 'h3', 'h4', 'blockquote', 'p', 'br', 'strong', 'b', 'em', 'i', 'u', 's', 'del', 'ul', 'ol', 'li', 'a'],
    allowedAttributes: { a: ['href', 'target', 'rel'] },
    allowedSchemes: ['http', 'https', 'mailto'],
  });
};
const mediaUrl = (value) => {
  if (!value) return '';
  if (/^(https?:|blob:|data:)/i.test(value)) return value;
  const base = (process.env.NEXT_PUBLIC_API_URL || '').replace(/\/$/, '');
  try { return new URL(value, base || window.location.origin).toString(); } catch { return value; }
};
const fileUrl = (file) => typeof file === 'string' ? file : file?.url || file?.fileUrl || file?.mediaAssetUrl || file?.path || '';
const isPdfFile = (file) => {
  if (typeof file === 'string') return /\.pdf(?:$|[?#])/i.test(file);
  return /pdf/i.test(file?.mimeType || file?.type || file?.fileType || '') || /\.pdf(?:$|[?#])/i.test(fileUrl(file));
};

export default function LessonDetails({ lesson, chapter, lessonId, courseId, onPrevious, onNext, hasPrevious, hasNext, completed, onToggleComplete }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [notes, setNotes] = useState('');
  const [noteSaved, setNoteSaved] = useState(false);

  useEffect(() => {
    try { setNotes(localStorage.getItem('lms-notes:' + courseId + ':' + lessonId) || ''); } catch { setNotes(''); }
    setNoteSaved(false);
  }, [courseId, lessonId]);

  const saveNotes = () => {
    try {
      localStorage.setItem('lms-notes:' + courseId + ':' + lessonId, notes);
      setNoteSaved(true);
    } catch {
      setNoteSaved(false);
    }
  };
  const updateNotes = (value) => {
    setNotes(value);
    setNoteSaved(false);
  };
  const lessonFiles = [
    ...(Array.isArray(lesson?.pdf) ? lesson.pdf : lesson?.pdf ? [lesson.pdf] : []),
    ...(Array.isArray(lesson?.files) ? lesson.files : []),
    ...(Array.isArray(lesson?.resources) ? lesson.resources : []),
  ];
  const pdfResource = lesson?.pdfUrl
    ? { url: lesson.pdfUrl, name: lesson.pdfName || 'Lesson PDF' }
    : lessonFiles.find(isPdfFile)
      ? { url: fileUrl(lessonFiles.find(isPdfFile)), name: lessonFiles.find(isPdfFile)?.name || lessonFiles.find(isPdfFile)?.title || 'Lesson PDF' }
      : String(lesson?.lessonType || '').toLowerCase() === 'pdf' && (lesson?.mediaAssetUrl || lesson?.url)
        ? { url: lesson.mediaAssetUrl || lesson.url, name: lesson.pdfName || lesson.title || 'Lesson PDF' }
        : null;

  return <section className="mt-6">
    <h2 className="text-[23px] font-extrabold tracking-tight text-[#101b31]">{lesson?.title || 'Choose a lesson'}</h2>
    {/* <div className="rich-course-content mt-2 text-sm leading-6 text-slate-700 [&_p]:mb-3 [&_p:last-child]:mb-0 [&_ul]:my-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:my-3 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:my-1 [&_h1]:mb-2 [&_h1]:text-xl [&_h1]:font-bold [&_h2]:mb-2 [&_h2]:text-lg [&_h2]:font-bold [&_h3]:mb-2 [&_h3]:font-bold [&_blockquote]:border-l-2 [&_blockquote]:border-[#f04e50] [&_blockquote]:pl-3 [&_blockquote]:italic [&_a]:text-[#f04e50] [&_a]:underline" dangerouslySetInnerHTML={{ __html: richTextHtml(lesson?.descriptionMarkdown || lesson?.content || lesson?.plaindescription || lesson?.description || 'Lesson description will appear here.') }} /> */}
    <div role="tablist" aria-label="Lesson information" className="mt-5 flex gap-8 border-b border-slate-200">
      {tabs.map(({ id, label }) => <button type="button" role="tab" aria-selected={activeTab === id} key={id} onClick={() => setActiveTab(id)} className={'appearance-none border-x-0 border-t-0 border-b-2 bg-transparent px-0 pb-3 text-sm font-semibold shadow-none outline-none transition-colors focus-visible:underline ' + (activeTab === id ? 'border-[#f04e50] text-[#f04e50]' : 'border-transparent text-slate-500 hover:text-slate-800')}>{label}</button>)}
    </div>
    <div className="min-h-[175px] py-6">
      {activeTab === 'overview' && <div><h3 className="text-sm font-bold text-[#101b31]">About this lesson</h3><div className="rich-course-content mt-2 text-sm leading-6 text-slate-700 [&_p]:mb-3 [&_p:last-child]:mb-0 [&_ul]:my-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:my-3 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:my-1 [&_h1]:mb-2 [&_h1]:text-xl [&_h1]:font-bold [&_h2]:mb-2 [&_h2]:text-lg [&_h2]:font-bold [&_h3]:mb-2 [&_h3]:font-bold [&_blockquote]:border-l-2 [&_blockquote]:border-[#f04e50] [&_blockquote]:pl-3 [&_blockquote]:italic [&_a]:text-[#f04e50] [&_a]:underline" dangerouslySetInnerHTML={{ __html: richTextHtml(lesson?.descriptionMarkdown || lesson?.content || lesson?.plaindescription || lesson?.description || 'Lesson details will appear here.') }} />{(chapter?.description || chapter?.descriptionMarkdown) && <div className="mt-5"><h4 className="text-sm font-bold text-[#101b31]">About this chapter</h4><div className="rich-course-content mt-2 text-sm leading-6 text-slate-700 [&_p]:mb-3 [&_p:last-child]:mb-0 [&_ul]:my-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:my-3 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:my-1 [&_h1]:mb-2 [&_h1]:text-xl [&_h1]:font-bold [&_h2]:mb-2 [&_h2]:text-lg [&_h2]:font-bold [&_h3]:mb-2 [&_h3]:font-bold [&_blockquote]:border-l-2 [&_blockquote]:border-[#f04e50] [&_blockquote]:pl-3 [&_blockquote]:italic [&_a]:text-[#f04e50] [&_a]:underline" dangerouslySetInnerHTML={{ __html: richTextHtml(chapter.descriptionMarkdown || chapter.description) }} /></div>}<div className="mt-5 flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-amber-100 text-amber-600"><Lightbulb size={17} /></span><div><p className="text-xs font-bold">Tip</p><p className="mt-1 text-xs leading-5">{lesson?.tip || 'Move at your own pace and stay present with the material.'}</p></div></div></div>}
      {activeTab === 'resources' && <div>
        {pdfResource?.url ? <a href={mediaUrl(pdfResource.url)} download={pdfResource.name} className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-[#f04e50]/25 bg-white px-4 py-2 text-sm font-semibold text-[#f04e50] transition hover:bg-[#fff5f0]"><Download size={16} />Download PDF<span className="max-w-[220px] truncate text-xs font-normal text-slate-500">{pdfResource.name}</span></a> : <p className="text-sm text-slate-500">No PDF is available for this lesson.</p>}
      </div>}
      {activeTab === 'notes' && <div>
        <label htmlFor="lesson-notes" className="sr-only">Lesson notes</label>
        <textarea id="lesson-notes" value={notes} onChange={(event) => updateNotes(event.target.value)} placeholder="Record your thoughts, body sensations, or questions for this lesson..." className="min-h-[114px] w-full resize-y rounded-2xl border border-[#dfe5ee] bg-white p-4 text-sm leading-6 text-[#26344d] outline-none placeholder:text-[#8a96aa] focus:border-[#f04e50]" />
        <div className="mt-4 flex items-center gap-3">
          <button type="button" onClick={saveNotes} className="inline-flex min-h-9 items-center justify-center rounded-xl bg-[#f04e50] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#df4146]">Save Note</button>
          {noteSaved && <span role="status" className="text-xs font-medium text-emerald-700">Note saved</span>}
        </div>
      </div>}
    </div>
    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-5">
      <button type="button" onClick={onPrevious} disabled={!hasPrevious} className="rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-bold text-slate-600 disabled:cursor-not-allowed disabled:opacity-40">← &nbsp; Previous Lesson</button>
      <button type="button" onClick={onToggleComplete} className="rounded-xl bg-slate-100 px-5 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-200">{completed ? '✓ Completed' : '✓  Mark as Completed'}</button>
      <button type="button" onClick={onNext} disabled={!hasNext} className="rounded-xl bg-[#f04e50] px-4 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-[#df4146] disabled:cursor-not-allowed disabled:opacity-40">Next Lesson &nbsp; →</button>
    </div>
  </section>;
}




