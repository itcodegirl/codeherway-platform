// ═══════════════════════════════════════════════
// PROGRESS CONTEXT — XP, streak, badges, daily goals, progress
// ═══════════════════════════════════════════════

import { createContext, useContext, useCallback, useEffect, type ReactNode } from 'react';
import { useLocalStorage, XP_PER_LEVEL, DAILY_GOAL, XP_VALUES, getLevel, getTodayString, getYesterdayString } from '../utils/storage';
import type { ProgressData, XPData, StreakData, DailyData, EarnedBadges, SRCard, LastPosition, BadgeDef } from '../utils/types';

// ─── Badge Definitions ──────────────────────────
// To add a badge: add an entry here. That's it!
export const BADGE_DEFS: BadgeDef[] = [
  { id: 'first_lesson', icon: '🌱', name: 'First Steps', desc: 'Complete your first lesson' },
  { id: 'five_lessons', icon: '📚', name: 'Getting Started', desc: 'Complete 5 lessons' },
  { id: 'ten_lessons', icon: '🔥', name: 'On Fire', desc: 'Complete 10 lessons' },
  { id: 'twenty_lessons', icon: '💪', name: 'Unstoppable', desc: 'Complete 20 lessons' },
  { id: 'fifty_lessons', icon: '👑', name: 'Legend', desc: 'Complete 50 lessons' },
  { id: 'first_quiz', icon: '🧠', name: 'Quiz Taker', desc: 'Complete your first quiz' },
  { id: 'five_quizzes', icon: '🎓', name: 'Scholar', desc: 'Complete 5 quizzes' },
  { id: 'perfect_quiz', icon: '💯', name: 'Perfectionist', desc: 'Get 100% on any quiz' },
  { id: 'streak_3', icon: '📅', name: 'Hat Trick', desc: '3-day learning streak' },
  { id: 'streak_7', icon: '⚡', name: 'Weekly Warrior', desc: '7-day learning streak' },
  { id: 'level_5', icon: '⭐', name: 'Rising Star', desc: 'Reach Level 5' },
  { id: 'level_10', icon: '🌟', name: 'Superstar', desc: 'Reach Level 10' },
  { id: 'night_owl', icon: '🦉', name: 'Night Owl', desc: 'Study after 10 PM' },
  { id: 'early_bird', icon: '🐦', name: 'Early Bird', desc: 'Study before 7 AM' },
  { id: 'explorer', icon: '🗺️', name: 'Explorer', desc: 'Visit all 4 course tracks' },
  { id: 'daily_goal', icon: '🎯', name: 'Goal Crusher', desc: 'Complete your daily goal' },
];

// ─── Context Type ───────────────────────────────
interface ProgressContextType {
  // Progress
  progress: ProgressData;
  toggleLesson: (lessonKey: string) => void;
  saveQuizScore: (quizKey: string, score: string) => void;

  // XP
  xp: XPData;
  awardXP: (amount: number, reason: string) => void;
  xpPopup: { amount: number; reason: string; newLevel: number | null } | null;
  clearXPPopup: () => void;

  // Streak
  streak: number;

  // Daily Goal
  dailyCount: number;
  recordDailyActivity: () => void;

  // Badges
  earnedBadges: EarnedBadges;
  newBadge: BadgeDef | null;
  clearNewBadge: () => void;

  // Spaced Repetition
  srQueue: SRCard[];
  addToSRQueue: (cards: SRCard[]) => void;
  updateSRCard: (question: string, correct: boolean) => void;
  getDueSRCards: () => SRCard[];

  // Position
  lastPosition: LastPosition;
  savePosition: (pos: Partial<LastPosition>) => void;

  // Courses Visited
  coursesVisited: string[];
  trackCourseVisit: (courseId: string) => void;
}

const ProgressContext = createContext<ProgressContextType>({} as ProgressContextType);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useLocalStorage<ProgressData>('chw-progress', { completed: [], quizScores: {} });
  const [xp, setXP] = useLocalStorage<XPData>('chw-xp', { total: 0 });
  const [streakData, setStreakData] = useLocalStorage<StreakData>('chw-streak', { days: 0, lastDate: '' });
  const [dailyData, setDailyData] = useLocalStorage<DailyData>('chw-daily', { date: getTodayString(), count: 0 });
  const [earnedBadges, setEarnedBadges] = useLocalStorage<EarnedBadges>('chw-badges', {});
  const [srQueue, setSRQueue] = useLocalStorage<SRCard[]>('chw-sr-queue', []);
  const [lastPosition, setLastPosition] = useLocalStorage<LastPosition>('chw-last-position', { course: '', mod: '', les: '', time: 0 });
  const [coursesVisited, setCoursesVisited] = useLocalStorage<string[]>('chw-courses-visited', []);
  const [xpPopup, setXPPopup] = useLocalStorage<{ amount: number; reason: string; newLevel: number | null } | null>('chw-xp-popup-tmp', null);
  const [newBadge, setNewBadge] = useLocalStorage<BadgeDef | null>('chw-new-badge-tmp', null);

  // ─── Streak calculation on mount ──────────────
  useEffect(() => {
    const today = getTodayString();
    const yesterday = getYesterdayString();
    if (streakData.lastDate === today) return;
    if (streakData.lastDate === yesterday) {
      setStreakData({ days: streakData.days + 1, lastDate: today });
    } else {
      setStreakData({ days: 1, lastDate: today });
    }
  }, []);

  const streak = streakData.days;

  // ─── Daily goal (reset if new day) ────────────
  const today = getTodayString();
  const dailyCount = dailyData.date === today ? dailyData.count : 0;

  const recordDailyActivity = useCallback(() => {
    const t = getTodayString();
    setDailyData(prev => {
      const d = prev.date === t ? prev : { date: t, count: 0 };
      return { date: t, count: Math.min(d.count + 1, DAILY_GOAL) };
    });
  }, [setDailyData]);

  // ─── Progress ─────────────────────────────────
  const toggleLesson = useCallback((lessonKey: string) => {
    setProgress(prev => {
      const has = prev.completed.includes(lessonKey);
      return {
        ...prev,
        completed: has
          ? prev.completed.filter(k => k !== lessonKey)
          : [...prev.completed, lessonKey],
      };
    });
  }, [setProgress]);

  const saveQuizScore = useCallback((quizKey: string, score: string) => {
    setProgress(prev => ({
      ...prev,
      quizScores: { ...prev.quizScores, [quizKey]: score },
    }));
  }, [setProgress]);

  // ─── XP ───────────────────────────────────────
  const awardXP = useCallback((amount: number, reason: string) => {
    setXP(prev => {
      const oldLevel = getLevel(prev.total);
      const newTotal = prev.total + amount;
      const newLevel = getLevel(newTotal);
      setXPPopup({ amount, reason, newLevel: newLevel > oldLevel ? newLevel : null });
      return { total: newTotal };
    });
  }, [setXP, setXPPopup]);

  const clearXPPopup = useCallback(() => setXPPopup(null), [setXPPopup]);

  // ─── Badges ───────────────────────────────────
  const checkBadges = useCallback(() => {
    const ctx = {
      completed: progress.completed,
      quizScores: progress.quizScores,
      xpTotal: xp.total,
      streak,
      coursesVisited,
      dailyCount,
      hour: new Date().getHours(),
    };

    const checks: Record<string, boolean> = {
      first_lesson: ctx.completed.length >= 1,
      five_lessons: ctx.completed.length >= 5,
      ten_lessons: ctx.completed.length >= 10,
      twenty_lessons: ctx.completed.length >= 20,
      fifty_lessons: ctx.completed.length >= 50,
      first_quiz: Object.keys(ctx.quizScores).length >= 1,
      five_quizzes: Object.keys(ctx.quizScores).length >= 5,
      perfect_quiz: Object.values(ctx.quizScores).some(v => { const [a, b] = v.split('/'); return a === b && parseInt(a) > 0; }),
      streak_3: ctx.streak >= 3,
      streak_7: ctx.streak >= 7,
      level_5: getLevel(ctx.xpTotal) >= 5,
      level_10: getLevel(ctx.xpTotal) >= 10,
      night_owl: ctx.hour >= 22,
      early_bird: ctx.hour < 7,
      explorer: ctx.coursesVisited.length >= 4,
      daily_goal: ctx.dailyCount >= DAILY_GOAL,
    };

    let foundNew: BadgeDef | null = null;
    const updated = { ...earnedBadges };

    BADGE_DEFS.forEach(b => {
      if (!updated[b.id] && checks[b.id]) {
        updated[b.id] = { date: getTodayString() };
        if (!foundNew) foundNew = b;
      }
    });

    if (foundNew) {
      setEarnedBadges(updated);
      setNewBadge(foundNew);
    }
  }, [progress, xp, streak, coursesVisited, dailyCount, earnedBadges, setEarnedBadges, setNewBadge]);

  // Check badges whenever key values change
  useEffect(() => { checkBadges(); }, [progress.completed.length, Object.keys(progress.quizScores).length, xp.total, dailyCount]);

  const clearNewBadge = useCallback(() => setNewBadge(null), [setNewBadge]);

  // ─── Spaced Repetition ────────────────────────
  const addToSRQueue = useCallback((cards: SRCard[]) => {
    setSRQueue(prev => {
      const existing = new Set(prev.map(c => c.question));
      const newCards = cards.filter(c => !existing.has(c.question));
      return [...prev, ...newCards];
    });
  }, [setSRQueue]);

  const updateSRCard = useCallback((question: string, correct: boolean) => {
    setSRQueue(prev => prev.map(card => {
      if (card.question !== question) return card;
      if (correct) {
        const newInterval = Math.round(card.interval * card.ease);
        return { ...card, interval: newInterval, ease: Math.min(card.ease + 0.1, 3.0), nextReview: Date.now() + newInterval * 86400000 };
      } else {
        return { ...card, interval: 1, ease: Math.max(card.ease - 0.2, 1.3), nextReview: Date.now() + 86400000 };
      }
    }));
  }, [setSRQueue]);

  const getDueSRCards = useCallback(() => {
    return srQueue.filter(c => c.nextReview <= Date.now());
  }, [srQueue]);

  // ─── Position ─────────────────────────────────
  const savePosition = useCallback((pos: Partial<LastPosition>) => {
    setLastPosition(prev => ({ ...prev, ...pos, time: Date.now() }));
  }, [setLastPosition]);

  // ─── Courses Visited ──────────────────────────
  const trackCourseVisit = useCallback((courseId: string) => {
    setCoursesVisited(prev => prev.includes(courseId) ? prev : [...prev, courseId]);
  }, [setCoursesVisited]);

  return (
    <ProgressContext.Provider value={{
      progress, toggleLesson, saveQuizScore,
      xp, awardXP, xpPopup, clearXPPopup,
      streak,
      dailyCount, recordDailyActivity,
      earnedBadges, newBadge, clearNewBadge,
      srQueue, addToSRQueue, updateSRCard, getDueSRCards,
      lastPosition, savePosition,
      coursesVisited, trackCourseVisit,
    }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  return useContext(ProgressContext);
}
