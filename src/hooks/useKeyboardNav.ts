// ═══════════════════════════════════════════════
// KEYBOARD NAV HOOK
// To add a shortcut: add a case to the switch
// ═══════════════════════════════════════════════

import { useEffect } from 'react';

interface KeyboardNavProps {
  onNext: () => void;
  onPrev: () => void;
  onMarkDone: () => void;
  onSearch: () => void;
  onSwitchCourse: (idx: number) => void;
  onToggleSidebar: () => void;
}

export function useKeyboardNav({
  onNext, onPrev, onMarkDone, onSearch, onSwitchCourse, onToggleSidebar,
}: KeyboardNavProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;

      // ⌘K or Ctrl+K — Search
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onSearch();
        return;
      }

      // / — Search (when not typing)
      if (e.key === '/' && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        onSearch();
        return;
      }

      switch (e.key) {
        case 'ArrowRight': onNext(); break;
        case 'ArrowLeft': onPrev(); break;
        case 'd': case 'D': onMarkDone(); break;
        case 'm': case 'M': onToggleSidebar(); break;
        case '1': case '2': case '3': case '4':
          onSwitchCourse(parseInt(e.key) - 1);
          break;
      }
    };

    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onNext, onPrev, onMarkDone, onSearch, onSwitchCourse, onToggleSidebar]);
}
