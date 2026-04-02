// ═══════════════════════════════════════════════
// QUIZ VIEW — Interactive quiz with score + explanations
// ═══════════════════════════════════════════════

import { useState } from 'react';
import type { Quiz } from '../utils/types';

interface QuizViewProps {
  quiz: Quiz;
  accent: string;
  label: string;
}

export function QuizView({ quiz, accent, label }: QuizViewProps) {
  const [answers, setAnswers] = useState<Map<string, number>>(new Map());
  const [submitted, setSubmitted] = useState(false);

  const pick = (qId: string, optIdx: number) => {
    if (submitted) return;
    setAnswers(p => { const n = new Map(p); n.set(qId, optIdx); return n; });
  };

  const submit = () => setSubmitted(true);
  const reset = () => { setAnswers(new Map()); setSubmitted(false); };

  const score = quiz.questions.reduce((s, q) => s + (answers.get(q.id) === q.correct ? 1 : 0), 0);
  const total = quiz.questions.length;
  const allAnswered = answers.size === total;
  const pct = Math.round((score / total) * 100);

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <span className="quiz-icon">📝</span>
        <div>
          <h3 className="quiz-title">{label}</h3>
          <span className="quiz-count">{total} question{total > 1 ? 's' : ''}</span>
        </div>
      </div>

      <div className="quiz-questions">
        {quiz.questions.map((q, qi) => {
          const picked = answers.get(q.id);
          const isCorrect = picked === q.correct;
          return (
            <div key={q.id} className={`qq ${submitted ? (isCorrect ? 'correct' : 'wrong') : ''}`}>
              <div className="qq-num">{qi + 1}</div>
              <div className="qq-body">
                <p className="qq-text">{q.question}</p>
                {q.code && <pre className="qq-code"><code>{q.code}</code></pre>}
                <div className="qq-opts">
                  {q.options.map((opt, oi) => {
                    let cls = 'qq-opt';
                    if (picked === oi) cls += ' picked';
                    if (submitted && oi === q.correct) cls += ' is-correct';
                    if (submitted && picked === oi && !isCorrect) cls += ' is-wrong';
                    return (
                      <button key={oi} className={cls} onClick={() => pick(q.id, oi)} disabled={submitted}>
                        <span className="qq-opt-letter">{String.fromCharCode(65 + oi)}</span>
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>
                {submitted && (
                  <div className={`qq-explain ${isCorrect ? 'right' : 'wrong'}`}>
                    <span className="qq-explain-icon">{isCorrect ? '✓' : '✕'}</span>
                    <span>{q.explanation}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {!submitted ? (
        <button className="quiz-submit" style={{ background: allAnswered ? accent : undefined }}
                disabled={!allAnswered} onClick={submit}>
          {allAnswered ? 'Submit Answers' : `Answer all ${total} to submit`}
        </button>
      ) : (
        <div className="quiz-results">
          <div className="quiz-score" style={{ borderColor: accent }}>
            <div className="quiz-score-num" style={{ color: accent }}>{score}/{total}</div>
            <div className="quiz-score-pct">
              {pct}%{pct === 100 ? ' — Perfect! 🎉' : pct >= 70 ? ' — Nice! 💪' : ' — Keep learning! 📚'}
            </div>
          </div>
          <button className="quiz-retry" onClick={reset}>↻ Retry</button>
        </div>
      )}
    </div>
  );
}
