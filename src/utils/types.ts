// ═══════════════════════════════════════════════
// TYPES — Shared across the entire app
// ═══════════════════════════════════════════════

// ─── Course Structure ────────────────────────────
export interface Lesson {
  id: string;
  title: string;
  content: string;   // Markdown-lite: **bold**, *italic*, `code`
  code: string;       // Code example shown in preview
  challenge?: string; // Practice prompt
  tip?: string;       // Pro tip box
}

export interface Module {
  id: number;
  title: string;
  emoji: string;
  tagline: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;         // 'html' | 'css' | 'js' | 'react'
  label: string;      // Display name
  icon: string;       // Emoji
  accent: string;     // Hex color
  modules: Module[];
}

// ─── Quizzes ─────────────────────────────────────
export interface QuizQuestion {
  id: string;
  type: 'mc' | 'code'; // multiple choice or code output prediction
  question: string;
  code?: string;        // code snippet for 'code' type
  options: string[];
  correct: number;      // index of correct answer
  explanation: string;
}

export interface Quiz {
  lessonId?: string;
  moduleId?: number;
  questions: QuizQuestion[];
}

// ─── Gamification ────────────────────────────────
export interface XPData {
  total: number;
}

export interface StreakData {
  days: number;
  lastDate: string;
}

export interface DailyData {
  date: string;
  count: number;
}

export interface EarnedBadges {
  [badgeId: string]: { date: string };
}

export interface BadgeDef {
  id: string;
  icon: string;
  name: string;
  desc: string;
}

export interface SRCard {
  question: string;
  code?: string;
  options: string[];
  correct: number;
  explanation: string;
  source: string;
  added: number;
  nextReview: number;
  interval: number;
  ease: number;
}

// ─── Progress ────────────────────────────────────
export interface ProgressData {
  completed: string[];
  quizScores: Record<string, string>;
}

export interface LastPosition {
  course: string;
  mod: string;
  les: string;
  time: number;
}

// ─── Reference ───────────────────────────────────
export interface CheatSection {
  title: string;
  items: [string, string][];
}

export interface ProjectDef {
  title: string;
  diff: 'beginner' | 'intermediate' | 'advanced';
  desc: string;
  skills: string[];
}

export interface GlossaryTerm {
  term: string;
  def: string;
  course: string;
}
