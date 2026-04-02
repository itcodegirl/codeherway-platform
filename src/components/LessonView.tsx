// ═══════════════════════════════════════════════
// LESSON VIEW — Renders a single lesson
// ═══════════════════════════════════════════════

import type { Lesson } from '../utils/types';
import { renderMarkdown } from '../utils/markdown';
import { CodePreview } from './CodePreview';

interface LessonViewProps {
  lesson: Lesson;
  emoji: string;
  lang: string;
}

export function LessonView({ lesson, emoji, lang }: LessonViewProps) {
  return (
    <div className="lv">
      <div className="lv-head">
        <span className="lv-emoji">{emoji}</span>
        <h2 className="lv-title">{lesson.title}</h2>
      </div>

      <div className="lv-body">
        {renderMarkdown(lesson.content)}
      </div>

      <CodePreview code={lesson.code} lang={lang} />

      {lesson.tip && (
        <div className="box tip">
          <div className="box-label">💡 Pro Tip</div>
          <p>{lesson.tip}</p>
        </div>
      )}

      {lesson.challenge && (
        <div className="box chal">
          <div className="box-label">🔥 Challenge</div>
          <p>{lesson.challenge}</p>
        </div>
      )}
    </div>
  );
}
