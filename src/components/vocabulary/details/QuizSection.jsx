'use client';

import React, { useState } from 'react';
import { CheckCircle2, XCircle, RotateCcw, } from 'lucide-react';

export default function QuizSection({ quizData }) {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!quizData || quizData.length === 0) return null;

  const handleSelect = (qId, optionIdx) => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    quizData.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) score++;
    });
    return score;
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
  };

  return (
    <section className="bg-surface rounded-3xl border border-slate-200/80 shadow-xs p-6 sm:p-8 space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 font-black">
            🎯
          </div>
          <h2 className="text-xl font-black font-heading text-brand-dark">
            কুইজ দিয়ে নিজেকে যাচাই করুন
          </h2>
        </div>
        {isSubmitted && (
          <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black">
            স্কোর: {calculateScore()} / {quizData.length}
          </span>
        )}
      </div>

      {/* Quiz Questions */}
      <div className="space-y-6">
        {quizData.map((q, idx) => {
          const userAns = selectedAnswers[q.id];
          const isCorrect = userAns === q.correctAnswer;

          return (
            <div key={q.id} className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/60 space-y-3">
              <h3 className="text-sm sm:text-base font-bold text-brand-dark flex items-start gap-2">
                <span className="w-6 h-6 rounded-lg bg-brand-badge text-brand-primary text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                {q.question}
              </h3>

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {q.options.map((option, optIdx) => {
                  let btnStyle = "bg-white border-slate-200 hover:border-brand-secondary text-brand-dark";

                  if (userAns === optIdx) {
                    btnStyle = "bg-brand-primary text-white border-brand-primary font-bold";
                  }

                  if (isSubmitted) {
                    if (optIdx === q.correctAnswer) {
                      btnStyle = "bg-emerald-600 text-white border-emerald-600 font-bold";
                    } else if (userAns === optIdx && !isCorrect) {
                      btnStyle = "bg-rose-600 text-white border-rose-600 font-bold";
                    } else {
                      btnStyle = "bg-slate-100 text-slate-400 border-slate-200 opacity-60";
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelect(q.id, optIdx)}
                      disabled={isSubmitted}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all duration-200 flex items-center justify-between ${btnStyle}`}
                    >
                      <span>{option}</span>
                      {isSubmitted && optIdx === q.correctAnswer && <CheckCircle2 className="w-4 h-4 text-white" />}
                      {isSubmitted && userAns === optIdx && !isCorrect && <XCircle className="w-4 h-4 text-white" />}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Action Bar */}
      <div className="pt-2 flex items-center justify-end gap-3">
        {!isSubmitted ? (
          <button
            onClick={() => setIsSubmitted(true)}
            disabled={Object.keys(selectedAnswers).length < quizData.length}
            className="w-full sm:w-auto px-6 py-3 rounded-xl font-heading font-black text-xs text-white bg-brand-primary hover:bg-brand-primary/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md shadow-brand-primary/20"
          >
            উত্তর জমা দিন
          </button>
        ) : (
          <button
            onClick={resetQuiz}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-heading font-bold text-xs text-brand-primary bg-brand-badge hover:bg-brand-badge/80 transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            পুনরায় কুইজ দিন
          </button>
        )}
      </div>

    </section>
  );
}