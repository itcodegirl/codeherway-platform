// ═══════════════════════════════════════════════
// SEARCH INDEX — Keywords for cross-course search
// ═══════════════════════════════════════════════

export interface SearchEntry {
  title: string;
  module: string;
  course: string;
  icon: string;
  keywords: string;
  courseIdx: number;
  modIdx: number;
  lesIdx: number;
}

import { COURSES } from '../index';

export function buildSearchIndex(): SearchEntry[] {
  const entries: SearchEntry[] = [];
  
  // Module-level keyword hints for better search
  const KEYWORDS: Record<string, string> = {
    'Foundations': 'setup vscode devtools emmet boilerplate',
    'Document Structure': 'doctype head body meta viewport link script defer',
    'Text Content': 'h1 h2 p strong em bold italic blockquote code entities',
    'Links': 'a href anchor navigation nav target blank mailto',
    'Lists': 'ul ol li dl nested unordered ordered description',
    'Images': 'img src alt figure video audio iframe youtube responsive srcset',
    'Tables': 'table thead tbody tr td th colspan rowspan',
    'Forms': 'form input label select textarea checkbox radio validation required pattern',
    'Semantic': 'semantic header main footer article section aside nav details',
    'Accessibility': 'accessibility aria screen reader keyboard tabindex focus a11y',
    'SEO': 'seo meta og opengraph twitter card canonical favicon',
    'Attributes': 'id class data attribute hidden contenteditable tabindex',
    'Best Practices': 'validation w3c deprecated clean code prettier',
    'Connecting': 'link stylesheet script defer async cdn fonts',
    'CSS Foundations': 'css cascading style sheets syntax selector property value',
    'Selectors': 'selector class id hover focus nth-child before after specificity cascade',
    'Colors': 'color hex rgb hsl variable font size weight gradient',
    'Box Model': 'box model padding margin border display block inline overflow',
    'Flexbox': 'flexbox justify-content align-items gap flex-wrap navbar centering',
    'Grid': 'grid template columns rows fr repeat auto-fit minmax areas',
    'Responsive': 'responsive media query breakpoint clamp rem vw vh container mobile-first',
    'Transitions': 'transition animation keyframes transform opacity hover fade pulse spin',
    'Layout': 'layout sidebar position relative absolute fixed sticky z-index',
    'Effects': 'shadow border-radius glassmorphism backdrop-filter blur filter',
    'Variables': 'variable var root theme dark light prefers-color-scheme',
    'Architecture': 'bem block element modifier naming file organization',
    'Modern CSS': 'nesting has is where container scroll animation view transition',
    'Performance': 'performance gpu transform opacity will-change reduced-motion print',
    'JavaScript': 'javascript js programming behavior interactive console defer async',
    'Variables & Data': 'const let var string number boolean undefined null typeof template',
    'Operators': 'operator comparison logical if else switch ternary loop for while',
    'Functions': 'function arrow return scope closure callback higher-order setTimeout',
    'Arrays': 'array map filter reduce forEach find sort spread destructuring',
    'Objects': 'object key value destructuring spread entries keys values',
    'DOM': 'dom querySelector classList textContent innerHTML createElement',
    'Events': 'event addEventListener click submit keydown preventDefault delegation bubbling',
    'Async': 'async await promise fetch api json try catch loading error',
    'Storage': 'localStorage setItem getItem JSON stringify parse persist',
    'Destructuring': 'destructuring spread rest optional chaining nullish coalescing',
    'Classes': 'class constructor this extends super static inheritance',
    'Error Handling': 'try catch throw error import export module',
    'React Foundations': 'react component jsx vite virtual dom declarative',
    'Components': 'component props children conditional rendering export',
    'State': 'useState state setter re-render immutable spread lift state',
    'Hooks': 'useEffect useRef custom hook cleanup dependency',
    'Styling': 'css modules tailwind styled-components className',
    'Router': 'react-router route link useParams useNavigate',
    'Fetching': 'fetch useEffect loading error api controlled form',
    'Context': 'context provider useContext createContext theme prop drilling',
    'useReducer': 'useReducer reducer dispatch action state management',
    'Libraries': 'zustand redux framer motion react-hook-form shadcn',
  };

  COURSES.forEach((course, ci) => {
    course.modules.forEach((mod, mi) => {
      // Find matching keywords by checking if module title contains any keyword key
      let kw = '';
      for (const [key, val] of Object.entries(KEYWORDS)) {
        if (mod.title.includes(key) || key.includes(mod.title.split(' ')[0])) {
          kw = val;
          break;
        }
      }

      mod.lessons.forEach((les, li) => {
        entries.push({
          title: les.title,
          module: mod.title,
          course: course.label,
          icon: course.icon,
          keywords: kw,
          courseIdx: ci,
          modIdx: mi,
          lesIdx: li,
        });
      });
    });
  });

  return entries;
}
