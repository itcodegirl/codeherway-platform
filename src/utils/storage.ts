// ═══════════════════════════════════════════════
// STORAGE — localStorage hooks & helpers
// ═══════════════════════════════════════════════

import { useState, useEffect, useCallback } from 'react';

// ─── Generic localStorage Hook ──────────────────
export function useLocalStorage<T>(key: string, initial: T): [T, (val: T | ((prev: T) => T)) => void] {
  const [value, setValue] = useState<T>(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initial;
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn('localStorage save failed:', e);
    }
  }, [key, value]);

  return [value, setValue];
}

// ─── Constants ──────────────────────────────────
export const XP_PER_LEVEL = 150;
export const DAILY_GOAL = 3;
export const XP_VALUES = {
  lesson: 25,
  quiz: 40,
  perfectQuiz: 60,
};

// ─── Helpers ────────────────────────────────────
export function getLevel(xp: number): number {
  return Math.floor(xp / XP_PER_LEVEL) + 1;
}

export function getXPInLevel(xp: number): number {
  return xp % XP_PER_LEVEL;
}

export function estimateReadingTime(text: string): number {
  const words = text.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function getTodayString(): string {
  return new Date().toISOString().slice(0, 10);
}

export function getYesterdayString(): string {
  return new Date(Date.now() - 86400000).toISOString().slice(0, 10);
}
