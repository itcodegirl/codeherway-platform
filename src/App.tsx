// ═══════════════════════════════════════════════
// APP — Root component, wires everything together
// ═══════════════════════════════════════════════

import { useState, useRef, useCallback, useEffect } from 'react';
import { COURSES, QUIZ_MAP } from './data';
import { useTheme } from './context/ThemeContext';
import { useProgress } from './context/ProgressContext';
import { useKeyboardNav } from './hooks/useKeyboardNav';
import { estimateReadingTime, XP_VALUES } from './utils/storage';
import { Sidebar } from './components/Sidebar';
import { LessonView } from './components/LessonView';
import { QuizView } from './components/QuizView';
import { XPPopup } from './components/XPPopup';
import { BadgeUnlock } from './components/BadgeUnlock';
import { ThemeToggle } from './components/ThemeToggle';
import { BottomToolbar } from './components/BottomToolbar';
import { SearchPanel } from './components/SearchPanel';
import { CheatsheetPanel } from './components/CheatsheetPanel';
import { GlossaryPanel } from './components/GlossaryPanel';
import { ProjectsPanel } from './components/ProjectsPanel';
import { BadgesPanel } from './components/BadgesPanel';
import { SRPanel } from './components/SRPanel';
import './App.css';

type Panel = null | 'search' | 'cheatsheet' | 'glossary' | 'projects' | 'badges' | 'sr';

export default function App() {
  const { theme } = useTheme();
  const {
    progress, toggleLesson, saveQuizScore,
    awardXP, recordDailyActivity,
    savePosition, trackCourseVisit,
    addToSRQueue,
  } = useProgress();

  const [courseIdx, setCourseIdx] = useState(0);
  const [modIdx, setModIdx] = useState(0);
  const [lesIdx, setLesIdx] = useState(0);
  const [sidebar, setSidebar] = useState(false);
  const [showModQuiz, setShowModQuiz] = useState(false);
  const [panel, setPanel] = useState<Panel>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  const course = COURSES[courseIdx];
  const modules = course.modules;
  const mod = modules[modIdx];
  const les = mod.lessons[lesIdx];
  const isLastLesson = lesIdx === mod.lessons.length - 1;
  const lessonQuiz = QUIZ_MAP.get(`l:${les.id}`);
  const moduleQuiz = QUIZ_MAP.get(`m:${mod.id}`);
  const readTime = estimateReadingTime(les.content + les.code);

  const lessonKey = `${course.label}|${mod.title}|${les.title}`;
  const isDone = progress.completed.includes(lessonKey);

  // Save position on nav
  useEffect(() => {
    savePosition({ course: `${course.icon} ${course.label}`, mod: `${mod.emoji} ${mod.title}`, les: showModQuiz ? '📝 Module Quiz' : les.title });
    trackCourseVisit(course.id);
  }, [courseIdx, modIdx, lesIdx, showModQuiz]);

  // ─── Navigation ───────────────────────────────
  const scrollTop = () => mainRef.current?.scrollTo({ top: 0, behavior: 'smooth' });

  const go = useCallback((mi: number, li: number) => {
    setModIdx(mi); setLesIdx(li); setSidebar(false); setShowModQuiz(false); scrollTop();
  }, []);

  const switchCourse = useCallback((ci: number) => {
    if (ci < 0 || ci >= COURSES.length) return;
    setCourseIdx(ci); setModIdx(0); setLesIdx(0); setSidebar(false); setShowModQuiz(false); scrollTop();
  }, []);

  const next = useCallback(() => {
    if (showModQuiz) { setShowModQuiz(false); if (modIdx < modules.length - 1) go(modIdx + 1, 0); return; }
    if (isLastLesson && moduleQuiz && !showModQuiz) { setShowModQuiz(true); scrollTop(); return; }
    if (lesIdx < mod.lessons.length - 1) go(modIdx, lesIdx + 1);
    else if (modIdx < modules.length - 1) go(modIdx + 1, 0);
  }, [modIdx, lesIdx, showModQuiz, isLastLesson, moduleQuiz, mod.lessons.length, modules.length, go]);

  const prev = useCallback(() => {
    if (showModQuiz) { setShowModQuiz(false); scrollTop(); return; }
    if (lesIdx > 0) go(modIdx, lesIdx - 1);
    else if (modIdx > 0) go(modIdx - 1, modules[modIdx - 1].lessons.length - 1);
  }, [modIdx, lesIdx, showModQuiz, modules, go]);

  const handleMarkDone = useCallback(() => {
    toggleLesson(lessonKey);
    if (!isDone) {
      awardXP(XP_VALUES.lesson, 'Lesson completed');
      recordDailyActivity();
    }
  }, [lessonKey, isDone, toggleLesson, awardXP, recordDailyActivity]);

  const handleSearchNav = useCallback((ci: number, mi: number, li: number) => {
    setCourseIdx(ci); setModIdx(mi); setLesIdx(li); setShowModQuiz(false); scrollTop();
  }, []);

  // ─── Keyboard ─────────────────────────────────
  useKeyboardNav({
    onNext: next, onPrev: prev, onMarkDone: handleMarkDone,
    onSearch: () => setPanel(p => p === 'search' ? null : 'search'),
    onSwitchCourse: switchCourse,
    onToggleSidebar: () => setSidebar(s => !s),
  });

  const isFirst = modIdx === 0 && lesIdx === 0 && !showModQuiz;
  const isLast = modIdx === modules.length - 1 && lesIdx === mod.lessons.length - 1 && (showModQuiz || !moduleQuiz);

  const closePanel = () => setPanel(null);

  return (
    <div className={`shell ${theme}`} data-course={course.id}>
      <Sidebar
        courses={COURSES} courseIdx={courseIdx} modIdx={modIdx} lesIdx={lesIdx}
        showModQuiz={showModQuiz} isOpen={sidebar}
        onClose={() => setSidebar(false)} onSelectCourse={switchCourse} onSelectLesson={go}
        onSelectModQuiz={(mi) => { setModIdx(mi); setLesIdx(modules[mi].lessons.length - 1); setShowModQuiz(true); setSidebar(false); scrollTop(); }}
      />

      <main className="mn" ref={mainRef}>
        <div className="topbar">
          <button className="ham" onClick={() => setSidebar(true)}>☰</button>
          <div className="bc">
            <span className="bc-course" style={{ color: course.accent }}>{course.icon} {course.label}</span>
            <span className="bc-sep">›</span>
            <span className="bc-mod">{mod.emoji} {mod.title}</span>
            <span className="bc-sep">›</span>
            <span className="bc-les">{showModQuiz ? '📝 Module Quiz' : les.title}</span>
          </div>
          {!showModQuiz && <span className="read-time"><span className="rt-icon">⏱</span>{readTime} min</span>}
          <button className="search-trigger" onClick={() => setPanel('search')}>
            <span>🔍</span><span>Search</span><kbd>⌘K</kbd>
          </button>
          {!showModQuiz && (
            <button className={`mark-btn ${isDone ? 'dn' : ''}`} onClick={handleMarkDone}>
              {isDone ? '✓ Done' : 'Mark Done'}
            </button>
          )}
        </div>

        <div className="lv-wrap">
          {showModQuiz && moduleQuiz ? (
            <div className="lv">
              <div className="lv-head">
                <span className="lv-emoji">📝</span>
                <h2 className="lv-title">{mod.title} — Module Quiz</h2>
              </div>
              <p className="lp">Test your knowledge of <strong>{mod.title}</strong>.</p>
              <QuizView quiz={moduleQuiz} accent={course.accent} label={`${mod.title} Quiz`} />
            </div>
          ) : (
            <>
              <LessonView lesson={les} emoji={mod.emoji} lang={course.id} />
              {lessonQuiz && (
                <div style={{ maxWidth: 840, margin: '0 auto', padding: '0 32px' }}>
                  <QuizView quiz={lessonQuiz} accent={course.accent} label="Quick Check" />
                </div>
              )}
            </>
          )}
        </div>

        <div className="nav-row">
          <button className="nav-btn" onClick={prev} disabled={isFirst}>← Previous</button>
          <button className="nav-btn nx" onClick={next} disabled={isLast} style={{ background: course.accent }}>
            {isLast ? 'Course Complete! 🎉' : isLastLesson && moduleQuiz && !showModQuiz ? 'Module Quiz →' : 'Next →'}
          </button>
        </div>
      </main>

      {/* Floating UI */}
      <ThemeToggle />
      <BottomToolbar
        onCheatsheet={() => setPanel('cheatsheet')} onGlossary={() => setPanel('glossary')}
        onProjects={() => setPanel('projects')} onBadges={() => setPanel('badges')}
        onSR={() => setPanel('sr')}
      />
      <XPPopup />
      <BadgeUnlock />

      {/* Panels */}
      <SearchPanel isOpen={panel === 'search'} onClose={closePanel} onNavigate={handleSearchNav} />
      <CheatsheetPanel isOpen={panel === 'cheatsheet'} onClose={closePanel} currentCourse={course.id} />
      <GlossaryPanel isOpen={panel === 'glossary'} onClose={closePanel} />
      <ProjectsPanel isOpen={panel === 'projects'} onClose={closePanel} currentCourse={course.id} />
      <BadgesPanel isOpen={panel === 'badges'} onClose={closePanel} />
      <SRPanel isOpen={panel === 'sr'} onClose={closePanel} />
    </div>
  );
}
