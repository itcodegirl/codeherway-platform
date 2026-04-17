# Archived Repository

This repository is archived and is no longer the active home of CodeHerWay platform development.

It was retained as a source/reference repository during the CodeHerWay consolidation process. Active canonical platform work is currently taking place in `education_platform`.

## Status
- Archived source repository
- Not the active development repo
- Kept for historical and reference purposes only

## Current canonical repository during consolidation
`education_platform`

## Planned final state
After consolidation is complete, `education_platform` is planned to be renamed to `codeherway-platform`.

# ⚡ CodeHerWay Learning Platform

An interactive coding education platform for women in tech — 4 courses, 92 lessons, quizzes, XP system, badges, and more.

**Live:** [codeherway1.netlify.app](https://codeherway1.netlify.app)

---

## 🚀 Deploy to Netlify

### Option 1: Drag & Drop (30 seconds)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the `dist/` folder onto the page
3. Your site is live!

### Option 2: Git Deploy (recommended for updates)
1. Push this repo to GitHub
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import from Git**
3. Set **publish directory** to `dist`
4. Leave **build command** empty (pre-built)
5. Deploy!

### Option 3: CLI
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=dist
```

### Local Preview
```bash
npx serve dist -p 3000
# Opens at http://localhost:3000
```

### Local Development (edit + hot reload)
```bash
npm install
npm run dev
# Opens at http://localhost:5173 with hot reload
```

---

## 📁 Project Structure

```
codeherway-platform/
├── dist/
│   └── index.html                ← Compiled app (deploy this!)
├── src/
│   ├── utils/
│   │   ├── types.ts              ← All TypeScript interfaces
│   │   ├── storage.ts            ← localStorage hooks + XP constants
│   │   ├── markdown.tsx          ← Lesson content renderer
│   │   └── iframeStyles.ts       ← Code preview iframe CSS
│   ├── context/
│   │   ├── ThemeContext.tsx       ← Dark/light theme provider
│   │   └── ProgressContext.tsx    ← XP, streak, badges, progress, SR
│   ├── hooks/
│   │   └── useKeyboardNav.ts     ← Keyboard shortcuts
│   ├── data/
│   │   ├── index.ts              ← ⭐ Course assembly (add courses here!)
│   │   ├── quizzes.ts            ← All quiz questions
│   │   ├── html/course.ts        ← HTML course (14 modules)
│   │   ├── css/course.ts         ← CSS course (14 modules)
│   │   ├── js/course.ts          ← JS course (14 modules)
│   │   ├── react/course.ts       ← React course (14 modules)
│   │   └── reference/
│   │       ├── cheatsheets.ts    ← Quick reference cards
│   │       ├── glossary.ts       ← 41 searchable terms
│   │       ├── projects.ts       ← 12 build project ideas
│   │       └── search-index.ts   ← Search keyword index
│   ├── components/
│   │   ├── Sidebar.tsx           ← Navigation + stats
│   │   ├── LessonView.tsx        ← Lesson content display
│   │   ├── CodePreview.tsx       ← Code/Preview tabs
│   │   ├── QuizView.tsx          ← Interactive quizzes
│   │   ├── SearchPanel.tsx       ← Cross-course search (⌘K)
│   │   ├── CheatsheetPanel.tsx   ← Syntax reference cards
│   │   ├── GlossaryPanel.tsx     ← Searchable glossary
│   │   ├── ProjectsPanel.tsx     ← Build project ideas
│   │   ├── BadgesPanel.tsx       ← Achievement grid
│   │   ├── SRPanel.tsx           ← Spaced repetition review
│   │   ├── BottomToolbar.tsx     ← Floating tool buttons
│   │   ├── XPPopup.tsx           ← XP gain animation
│   │   ├── BadgeUnlock.tsx       ← Badge unlock animation
│   │   └── ThemeToggle.tsx       ← Dark/light toggle
│   ├── App.tsx                   ← Root component
│   ├── App.css                   ← All styles
│   └── main.tsx                  ← Entry point
├── netlify.toml                  ← Netlify config
├── package.json                  ← Dependencies + scripts
└── README.md                     ← This file
```

---

## ✏️ How to Edit Content

### Fix a typo or edit a lesson
1. Open `src/data/html/course.ts` (or css, js, react)
2. Ctrl+F the lesson title
3. Edit the `content`, `code`, `tip`, or `challenge` field
4. Save → rebuild → redeploy

### Add a new lesson
Add to the `lessons` array in any module:
```typescript
{
  id: 'unique-id',
  title: 'Lesson Title',
  content: `**Bold text** and *italic*.\n\nNew paragraph here.\n\n- Bullet point\n1. Numbered item`,
  code: `<!-- Code shown in preview -->\n<h1>Example</h1>`,
  tip: 'Optional pro tip text',
  challenge: 'Optional practice prompt',
}
```

### Add a new module
Add to the modules array in a course file:
```typescript
{
  id: 99,          // unique number
  emoji: '🆕',
  title: 'Module Name',
  tagline: 'Short description.',
  lessons: [ /* lessons here */ ],
}
```

### Add a new course
1. Create `src/data/newcourse/course.ts`
2. Export a `Module[]` array
3. In `src/data/index.ts`, import it and add to `COURSES`:
```typescript
{ id: 'new', label: 'New', icon: '🆕', accent: '#hexcolor', modules: NEW_MODULES }
```

### Content Format
| Syntax | Renders as |
|--------|-----------|
| `**text**` | **Bold** (course accent color) |
| `*text*` | *Italic* (cyan) |
| `` `code` `` | `inline code` (amber badge) |
| `\n\n` | New paragraph |
| `\n- item` | Bullet point |
| `\n1. item` | Numbered list |

---

## ✨ Features

### 4 Course Tracks
| Course | Modules | Lessons | Accent |
|--------|---------|---------|--------|
| 🧱 HTML | 14 | 24 | `#ff6b9d` Pink |
| 🎨 CSS | 14 | 24 | `#4ecdc4` Cyan |
| ⚡ JavaScript | 14 | 24 | `#ffa726` Amber |
| ⚛️ React | 14 | 20 | `#a78bfa` Purple |

### Learning Tools
- ✏️ Code preview with Code/Preview tabs
- 📝 96 quiz questions (lesson + module level)
- 🔍 Cross-course search (⌘K or /)
- 📋 Cheat sheets per course
- 📖 Searchable glossary (41 terms)
- 🔨 12 curated build projects

### Gamification
- ⭐ XP system with level progression (150 XP/level)
- 🏆 16 earnable badges with unlock animations
- 🔥 Streak tracking (consecutive days)
- 🎯 Daily goal tracker (3 activities/day)
- 🔄 Spaced repetition (wrong answers resurface)

### UX & Design
- 🌙/☀️ Dark/light theme (persists)
- 💾 All progress saved to localStorage
- ⏱ Reading time estimates per lesson
- ⌨️ Full keyboard navigation
- 🖨️ Print/PDF export
- 📱 Fully responsive (mobile, tablet, desktop)

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `←` `→` | Navigate lessons |
| `D` | Toggle mark done |
| `⌘K` or `/` | Open search |
| `1` `2` `3` `4` | Switch courses |
| `M` | Toggle sidebar (mobile) |
| `Esc` | Close any panel |

---

## 🎮 XP & Badges

### XP Values
| Action | XP |
|--------|-----|
| Complete a lesson | +25 |
| Complete a quiz | +40 |
| Perfect quiz score | +60 |

### Badges (16 total)
🌱 First Steps · 📚 Getting Started · 🔥 On Fire · 💪 Unstoppable · 👑 Legend · 🧠 Quiz Taker · 🎓 Scholar · 💯 Perfectionist · 📅 Hat Trick · ⚡ Weekly Warrior · ⭐ Rising Star · 🌟 Superstar · 🦉 Night Owl · 🐦 Early Bird · 🗺️ Explorer · 🎯 Goal Crusher

---

## 🛠️ Tech Stack

- **UI:** React 18 + TypeScript
- **Build:** Vite
- **Styling:** Custom CSS with CSS Variables + Tailwind base
- **Storage:** localStorage (client-side only)
- **Deploy:** Netlify (static)
- **Size:** ~475KB compiled, zero runtime dependencies

---

## 📝 Quick Edit Reference

| What | File | Time |
|------|------|------|
| Fix a lesson typo | `src/data/[course]/course.ts` | 30 sec |
| Add a lesson | Same file, add object to lessons array | 5 min |
| Add a module | Same file, add object to modules array | 10 min |
| Add a course | New file + update `src/data/index.ts` | 1 hour |
| Edit quiz question | `src/data/quizzes.ts` | 1 min |
| Add glossary term | `src/data/reference/glossary.ts` | 30 sec |
| Add cheat sheet item | `src/data/reference/cheatsheets.ts` | 30 sec |
| Add build project | `src/data/reference/projects.ts` | 2 min |
| Change accent color | `src/data/index.ts` | 10 sec |
| Change XP values | `src/utils/storage.ts` | 10 sec |
| Add a badge | `src/context/ProgressContext.tsx` | 5 min |
| Change daily goal | `src/utils/storage.ts` → `DAILY_GOAL` | 10 sec |
| Add keyboard shortcut | `src/hooks/useKeyboardNav.ts` | 2 min |
| Adjust theme colors | CSS variables in `src/App.css` | 2 min |

---

## 📄 License

© 2025 CodeHerWay. All rights reserved.

---

Built with 💪 by [CodeHerWay](https://codeherway.com) — empowering women in tech.
