// ═══════════════════════════════════════════════
// CHEAT SHEETS — Quick reference cards per course
// To add: add [syntax, description] pairs to items arrays
// ═══════════════════════════════════════════════

import type { CheatSection } from '../../utils/types';

export const CHEATSHEETS: Record<string, CheatSection[]> = {
  html: [
    { title:'Document', items:[['<!DOCTYPE html>','HTML5 declaration'],['<html lang="en">','Root element'],['<head>','Metadata container'],['<body>','Visible content'],['<meta charset="UTF-8">','Character encoding'],['<meta name="viewport"...>','Mobile responsive'],['<title>','Browser tab title'],['<link rel="stylesheet">','External CSS']] },
    { title:'Text', items:[['<h1>-<h6>','Headings (one h1/page)'],['<p>','Paragraph'],['<strong>','Important (bold)'],['<em>','Emphasis (italic)'],['<br />','Line break'],['<blockquote>','Block quote'],['<code>','Inline code'],['<pre>','Preformatted text']] },
    { title:'Links & Media', items:[['<a href="url">','Hyperlink'],['<img src="" alt="">','Image (self-closing)'],['<figure>','Image container'],['<video controls>','Video player'],['<nav>','Navigation section'],['target="_blank"','Open new tab'],['loading="lazy"','Lazy load'],['<iframe>','Embed content']] },
    { title:'Forms', items:[['<form action="" method="">','Form container'],['<input type="text">','Text input'],['<label for="id">','Input label (required!)'],['<select>','Dropdown'],['<textarea>','Multi-line input'],['<button type="submit">','Submit button'],['required','Must fill field'],['pattern="regex"','Validation pattern']] },
    { title:'Semantic', items:[['<header>','Page/section header'],['<main>','Main content (1/page)'],['<footer>','Page/section footer'],['<article>','Self-contained content'],['<section>','Thematic group'],['<aside>','Side content'],['<details>','Collapsible'],['<time datetime="">','Date/time']] },
  ],
  css: [
    { title:'Selectors', items:[['element','Type selector'],['.class','Class selector'],['#id','ID selector (unique)'],['*','Universal'],['div p','Descendant'],['div > p','Direct child'],[':hover','Mouse over'],[':nth-child(n)','By position']] },
    { title:'Box Model', items:[['box-sizing:border-box','Include padding in width'],['margin:0 auto','Center horizontally'],['padding:16px 24px','Vert | horiz'],['border-radius:8px','Rounded corners'],['max-width:100%','Prevent overflow'],['overflow:auto','Scrollbar when needed'],['display:none','Hide completely'],['display:flex','Flex container']] },
    { title:'Flexbox', items:[['display:flex','Create container'],['justify-content:center','Main axis align'],['align-items:center','Cross axis align'],['gap:16px','Space between'],['flex:1','Grow to fill'],['flex-wrap:wrap','Allow wrapping'],['flex-direction:column','Stack vertical'],['margin-top:auto','Push to bottom']] },
    { title:'Grid', items:[['display:grid','Create container'],['repeat(3,1fr)','3 equal columns'],['repeat(auto-fit,minmax(280px,1fr))','Responsive grid'],['gap:24px','Grid spacing'],['grid-column:span 2','Span columns'],['grid-template-areas','Named layout'],['place-self:center','Center in cell']] },
    { title:'Responsive', items:[['@media(min-width:768px)','Tablet breakpoint'],['clamp(1rem,3vw,2rem)','Fluid sizing'],['aspect-ratio:16/9','Maintain ratio'],['object-fit:cover','Fill no distort'],['100dvh','Full viewport height'],['container-type:inline-size','Container queries'],['prefers-reduced-motion','Motion prefs'],['prefers-color-scheme','System theme']] },
  ],
  js: [
    { title:'Variables', items:[['const x = 5','Unchangeable'],['let y = 10','Reassignable'],['typeof x','Check type'],['`Hello ${name}`','Template literal'],['parseInt("42")','To integer'],['Number("42")','To number'],['String(42)','To string'],['Boolean(1)','To boolean']] },
    { title:'Arrays', items:[['.map(fn)','Transform each'],['.filter(fn)','Keep matches'],['.reduce(fn,init)','Combine to one'],['.find(fn)','First match'],['.includes(x)','Contains?'],['.sort((a,b)=>a-b)','Sort ascending'],['[...arr, new]','Add immutably'],['arr.filter(x=>x.id!==id)','Remove immutably']] },
    { title:'Objects', items:[['const {a,b} = obj','Destructure'],['const [x,y] = arr','Destructure array'],['{ ...obj, key: val }','Spread + override'],['Object.keys(obj)','Array of keys'],['Object.entries(obj)','[k,v] pairs'],['obj?.nested?.prop','Optional chaining'],['value ?? fallback','Nullish coalescing'],['delete obj.key','Remove property']] },
    { title:'DOM', items:[['querySelector(".x")','Select first'],['querySelectorAll("p")','Select all'],['classList.toggle("x")','Toggle class'],['addEventListener("click",fn)','Attach event'],['e.preventDefault()','Stop default'],['createElement("div")','Create element'],['element.remove()','Remove element'],['insertAdjacentHTML()','Insert HTML']] },
    { title:'Async', items:[['async function fn()','Async function'],['await fetch(url)','Await promise'],['try { } catch(e) { }','Error handling'],['Promise.all([p1,p2])','Parallel'],['response.json()','Parse JSON'],['setTimeout(fn,ms)','Delay'],['setInterval(fn,ms)','Repeat'],['clearInterval(id)','Stop interval']] },
  ],
  react: [
    { title:'Components', items:[['function App() { return <div/> }','Component'],['export default App','Export'],['<Component />','Render'],['{ expression }','JS in JSX'],['className="x"','CSS class'],['<>...</>','Fragment'],['{ cond && <X/> }','Conditional'],['{ list.map(x=><X key/>)}','Render list']] },
    { title:'Hooks', items:[['useState(init)','State [val,setter]'],['useEffect(fn,[deps])','Side effects'],['useRef(init)','Mutable ref'],['useContext(Ctx)','Read context'],['useReducer(fn,init)','Complex state'],['useMemo(fn,[deps])','Cache calc'],['useCallback(fn,[deps])','Cache function'],['custom: useFetch()','Reusable logic']] },
    { title:'State', items:[['setCount(c=>c+1)','From previous'],['[...items, new]','Add to array'],['items.filter(...)','Remove from array'],['items.map(...)','Update in array'],['{...obj, key:val}','Update object'],['lift state up','Common parent'],['Context.Provider','Share globally'],['useReducer','Action-based']] },
    { title:'Router', items:[['<BrowserRouter>','Wrap app'],['<Route path="/" element={}>','Define route'],['<Link to="/about">','Navigate'],['useParams()','URL params'],['useNavigate()','Programmatic nav'],['path="/user/:id"','Dynamic param'],['path="*"','404 catch-all'],['<Suspense>','Loading fallback']] },
  ],
};
