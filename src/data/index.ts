// ═══════════════════════════════════════════════
// COURSE INDEX — Assembles all courses
//
// To add a new course:
// 1. Create src/data/yourcourse/course.ts with Module[]
// 2. Import it here
// 3. Add it to the COURSES array below
// ═══════════════════════════════════════════════

import type { Course, Quiz } from '../utils/types';
import { HTML_MODULES } from './html/course';
import { CSS_MODULES } from './css/course';
import { JS_MODULES } from './js/course';
import { REACT_MODULES } from './react/course';

// ─── Courses Array ──────────────────────────────
// Edit accent colors here. Add new courses here.
export const COURSES: Course[] = [
  { id: 'html',  label: 'HTML',  icon: '🧱', accent: '#ff6b9d', modules: HTML_MODULES },
  { id: 'css',   label: 'CSS',   icon: '🎨', accent: '#4ecdc4', modules: CSS_MODULES },
  { id: 'js',    label: 'JS',    icon: '⚡', accent: '#ffa726', modules: JS_MODULES },
  { id: 'react', label: 'React', icon: '⚛️', accent: '#a78bfa', modules: REACT_MODULES },
];

// ─── Quiz Map ───────────────────────────────────
import { ALL_QUIZZES } from './quizzes';

export const QUIZ_MAP = new Map<string, Quiz>();
ALL_QUIZZES.forEach(q => {
  if (q.lessonId) QUIZ_MAP.set(`l:${q.lessonId}`, q);
  if (q.moduleId) QUIZ_MAP.set(`m:${q.moduleId}`, q);
});
