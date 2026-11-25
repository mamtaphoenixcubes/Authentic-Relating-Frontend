'use client';

import { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, BadgeCheck, CircleHelp, RotateCcw } from 'lucide-react';

const optionKey = (option, index) => option?._id || String(index);

// Temporary sample content from the lesson response while catalog quiz data is integrated.
const sampleQuiz = {
  title: 'lesson quiz',
  instructions: 'gfdhsgh',
  passingPercentage: 20,
  questions: [{
    questionText: 'sgdhsd',
    explanation: '',
    options: [
      { _id: 'sample-option-1', optionText: 'hsdgh', isCorrect: true },
      { _id: 'sample-option-2', optionText: 'hsfdgh', isCorrect: false },
      { _id: 'sample-option-3', optionText: 'gdsh', isCorrect: false },
      { _id: 'sample-option-4', optionText: 'hsfgd', isCorrect: false },
    ],
  }],
};

export default function QuizPlayer({ lesson, quiz = lesson?.quiz }) {
  const activeQuiz = Array.isArray(quiz?.questions) && quiz.questions.length ? quiz : sampleQuiz;
  const questions = activeQuiz.questions;
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const question = questions[questionIndex];
  const passingPercentage = Number(activeQuiz.passingPercentage ?? 80);
  const answeredCount = Object.keys(answers).length;
  const score = useMemo(() => questions.reduce((total, item, index) => {
    const correctIndex = (item.options || []).findIndex((option) => option.isCorrect);
    const correctKey = correctIndex >= 0 ? optionKey(item.options[correctIndex], correctIndex) : null;
    return total + (answers[index] === correctKey ? 1 : 0);
  }, 0), [answers, questions]);
  const scorePercentage = questions.length ? Math.round((score / questions.length) * 100) : 0;
  const passed = scorePercentage >= passingPercentage;

  const restart = () => {
    setQuestionIndex(0);
    setAnswers({});
    setSubmitted(false);
  };

  if (!questions.length) return <section className="grid min-h-[390px] place-items-center rounded-[24px] border border-slate-200 bg-white p-8 text-center shadow-sm">
    <div className="max-w-md"><span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-[#fff0e6] text-[#f04e50]"><CircleHelp size={27} /></span><h2 className="mt-4 text-xl font-bold text-[#101b31]">{activeQuiz.title || lesson?.title || 'Lesson quiz'}</h2><p className="mt-2 text-sm leading-6 text-slate-600">Quiz questions are not included in the course catalog response for this lesson.</p></div>
  </section>;

  return <section className="min-h-[390px] rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm md:p-8">
    <div className="mx-auto max-w-2xl">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#fff0e6] text-[#f04e50]"><CircleHelp size={22} /></span><div><p className="text-[10px] font-bold uppercase tracking-[.14em] text-slate-400">Knowledge check</p><h2 className="mt-1 text-lg font-bold text-[#101b31]">{activeQuiz.title || lesson?.title || 'Lesson quiz'}</h2></div></div>
        <span className="rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-semibold text-slate-600">{questions.length} {questions.length === 1 ? 'question' : 'questions'} · {passingPercentage}% to pass</span>
      </div>
      {activeQuiz.instructions && <p className="mt-5 text-sm leading-6 text-slate-600">{activeQuiz.instructions}</p>}
      {!submitted ? <>
        <div className="mt-6 flex items-center justify-between text-xs font-semibold text-slate-500"><span>Question {questionIndex + 1} of {questions.length}</span><span>{answeredCount} answered</span></div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-[#f04e50] transition-all" style={{ width: (((questionIndex + 1) / questions.length) * 100) + '%' }} /></div>
        <fieldset className="mt-6 rounded-2xl border border-slate-200 p-4 md:p-5">
          <legend className="px-1 text-base font-bold leading-6 text-slate-900">{question?.questionText}</legend>
          <div className="mt-3 space-y-2.5">{(question?.options || []).map((option, optionIndex) => {
            const key = optionKey(option, optionIndex);
            const selected = answers[questionIndex] === key;
            return <label key={key} className={'flex cursor-pointer items-center gap-3 rounded-xl border px-3.5 py-3 text-sm transition ' + (selected ? 'border-[#f04e50] bg-[#fff5f0] text-slate-900' : 'border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50')}>
              <input type="radio" name={'quiz-question-' + questionIndex} checked={selected} onChange={() => setAnswers((current) => ({ ...current, [questionIndex]: key }))} className="h-4 w-4 accent-[#f04e50]" />
              <span>{option.optionText}</span>
            </label>;
          })}</div>
        </fieldset>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <button type="button" onClick={() => setQuestionIndex((current) => Math.max(0, current - 1))} disabled={questionIndex === 0} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"><ArrowLeft size={14} />Previous</button>
          {questionIndex < questions.length - 1
            ? <button type="button" onClick={() => setQuestionIndex((current) => current + 1)} disabled={answers[questionIndex] === undefined} className="inline-flex items-center gap-2 rounded-xl bg-[#f04e50] px-4 py-2.5 text-xs font-bold text-white hover:bg-[#df4146] disabled:cursor-not-allowed disabled:opacity-45">Next<ArrowRight size={14} /></button>
            : <button type="button" onClick={() => setSubmitted(true)} disabled={answeredCount !== questions.length} className="inline-flex items-center gap-2 rounded-xl bg-[#f04e50] px-4 py-2.5 text-xs font-bold text-white hover:bg-[#df4146] disabled:cursor-not-allowed disabled:opacity-45">Submit Quiz<BadgeCheck size={14} /></button>}
        </div>
        {answeredCount < questions.length && questionIndex === questions.length - 1 && <p className="mt-2 text-right text-[11px] text-slate-400">Answer all questions before submitting.</p>}
      </> : <div className="mt-8 rounded-2xl border border-slate-200 p-5 text-center md:p-8">
        <span className={'mx-auto grid h-14 w-14 place-items-center rounded-full ' + (passed ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700')}><BadgeCheck size={28} /></span>
        <h3 className="mt-4 text-xl font-extrabold text-[#101b31]">{passed ? 'Quiz passed!' : 'Quiz complete'}</h3>
        <p className="mt-2 text-sm text-slate-600">You scored {score} of {questions.length} ({scorePercentage}%). {passed ? 'Great work.' : 'Review your answers and try again.'}</p>
        <div className="mt-5 space-y-3 text-left">{questions.map((item, index) => {
          const chosenIndex = (item.options || []).findIndex((option, optionIndex) => optionKey(option, optionIndex) === answers[index]);
          const correctIndex = (item.options || []).findIndex((option) => option.isCorrect);
          return <div key={item._id || index} className="rounded-xl border border-slate-200 p-3"><p className="text-xs font-bold text-slate-800">{index + 1}. {item.questionText}</p><p className="mt-1.5 text-xs text-slate-500">Your answer: {chosenIndex >= 0 ? item.options[chosenIndex].optionText : 'No answer'}</p>{chosenIndex !== correctIndex && correctIndex >= 0 && <p className="mt-1 text-xs font-semibold text-emerald-700">Correct answer: {item.options[correctIndex].optionText}</p>}{item.explanation && <p className="mt-2 text-xs leading-5 text-slate-500">{item.explanation}</p>}</div>;
        })}</div>
        <button type="button" onClick={restart} className="mt-5 inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50"><RotateCcw size={14} />Retake Quiz</button>
      </div>}
    </div>
  </section>;
}



