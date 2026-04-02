// ═══════════════════════════════════════════════
// QUIZZES — All lesson + module quiz questions
//
// To add a quiz: add { lessonId or moduleId, questions: [...] }
// To edit: find by lessonId/moduleId, change question/options/correct/explanation
// ═══════════════════════════════════════════════

import type { Quiz } from '../utils/types';

export const ALL_QUIZZES: Quiz[] = [
  // ═══ HTML LESSON QUIZZES ═══
  { lessonId:'1-1', questions:[
    { id:'h1a', type:'mc', question:'What does HTML stand for?', options:['Hyper Tool Markup Language','HyperText Markup Language','Home Text Making Language','HyperText Machine Language'], correct:1, explanation:'HTML = HyperText Markup Language — it structures web content using tags.' },
    { id:'h1b', type:'mc', question:'In the house analogy, what is HTML?', options:['The paint','The electricity','The frame/structure','The furniture'], correct:2, explanation:'HTML is the frame, CSS is the paint, JavaScript is the electricity.' },
  ]},
  { lessonId:'1-2', questions:[
    { id:'h2a', type:'mc', question:'Why is the file named index.html?', options:["It's required by VS Code",'Browsers look for it by default','It loads faster','Only valid HTML filename'], correct:1, explanation:'Browsers/servers look for index.html by default.' },
  ]},
  { lessonId:'2-1', questions:[
    { id:'h3a', type:'mc', question:'Which section contains visible page content?', options:['<head>','<meta>','<body>','<html>'], correct:2, explanation:'<body> = visible content. <head> = invisible metadata.' },
    { id:'h3b', type:'mc', question:'What does <!DOCTYPE html> do?', options:['Creates HTML element','Tells browser this is HTML5','Links stylesheet','Sets language'], correct:1, explanation:'<!DOCTYPE html> tells the browser to render as HTML5.' },
  ]},
  { lessonId:'2-2', questions:[
    { id:'h4a', type:'mc', question:'Which meta tag makes your site work on mobile?', options:['charset','description','viewport','author'], correct:2, explanation:'The viewport meta tag enables responsive behavior on mobile.' },
  ]},
  { lessonId:'3-1', questions:[
    { id:'h5a', type:'mc', question:'How many <h1> tags should a page have?', options:['As many as needed','Exactly one','At least two','None'], correct:1, explanation:'One <h1> per page — the main title for accessibility and SEO.' },
  ]},
  { lessonId:'3-2', questions:[
    { id:'h6a', type:'mc', question:'Difference between <strong> and <b>?', options:['No difference','<strong> adds semantic importance; <b> is visual only','<b> is for screen readers','<strong> is deprecated'], correct:1, explanation:'<strong> = importance (screen readers emphasize). <b> = just visual bold.' },
  ]},
  { lessonId:'3-3', questions:[
    { id:'h7a', type:'code', question:'What does &amp; display?', code:'&amp;', options:['<','>','&','@'], correct:2, explanation:'&amp; is the HTML entity for the ampersand &.' },
  ]},
  { lessonId:'4-1', questions:[
    { id:'h8a', type:'mc', question:'Why add rel="noopener noreferrer" to target="_blank"?', options:['SEO','Styling','Security — prevents window access','Required for link to work'], correct:2, explanation:'Without it, the new page can access your window object.' },
  ]},
  { lessonId:'4-2', questions:[
    { id:'h9a', type:'code', question:'Where does this navigate?', code:'<a href="#contact">Contact</a>', options:['contact.html','Element with id="contact" on same page','External page','Nowhere'], correct:1, explanation:'# creates an anchor link to the element with matching id.' },
  ]},
  { lessonId:'5-1', questions:[
    { id:'h10a', type:'mc', question:'When use <ol> instead of <ul>?', options:['Items are important','Order/sequence matters','More than 5 items','Items are links'], correct:1, explanation:'Ordered lists for when sequence matters — steps, rankings.' },
  ]},
  { lessonId:'6-1', questions:[
    { id:'h11a', type:'mc', question:'Why is alt text critical?', options:['Faster loading','Screen readers + fallback when images fail','Required to display','Controls size'], correct:1, explanation:'Alt text: screen readers read it, shows when images fail, helps SEO.' },
  ]},
  { lessonId:'7-1', questions:[
    { id:'h12a', type:'mc', question:'Only valid use for HTML tables?', options:['Page layout','Navigation','Displaying tabular data','Creating grids'], correct:2, explanation:'Tables = tabular data only. Use CSS Grid/Flexbox for layout.' },
  ]},
  { lessonId:'8-1', questions:[
    { id:'h13a', type:'mc', question:'Why must every input have a <label>?', options:['Styling','Screen readers need it','Required for submission','Prevents errors'], correct:1, explanation:'Labels = essential for accessibility. Screen readers identify fields.' },
  ]},
  { lessonId:'8-2', questions:[
    { id:'h14a', type:'mc', question:'Radio vs checkboxes?', options:['No difference','Radio = pick one, Checkbox = pick multiple','Radio = text, Checkbox = boolean','Radio deprecated'], correct:1, explanation:'Radio = pick ONE. Checkboxes = select multiple.' },
  ]},
  { lessonId:'8-3', questions:[
    { id:'h15a', type:'code', question:'What does this accept?', code:'<input pattern="[0-9]{5}">', options:['Any 5 chars','Exactly 5 digits','At most 5 numbers','Any number'], correct:1, explanation:'[0-9]{5} = exactly 5 digits, like a zip code.' },
  ]},
  { lessonId:'9-1', questions:[
    { id:'h16a', type:'mc', question:'Why use <nav> instead of <div class="nav">?', options:['Identical','<div> is slower','<nav> tells screen readers it\'s navigation','<nav> has styling'], correct:2, explanation:'Semantic tags carry meaning for assistive tech and search engines.' },
  ]},
  { lessonId:'10-1', questions:[
    { id:'h17a', type:'mc', question:'What does aria-hidden="true" do?', options:['Hides visually','Tells screen readers to skip','Removes from DOM','Disables clicks'], correct:1, explanation:'aria-hidden="true" = screen readers ignore the element.' },
  ]},
  { lessonId:'12-1', questions:[
    { id:'h18a', type:'mc', question:'IDs vs classes: which is reusable?', options:['IDs','Classes','Both','Neither'], correct:1, explanation:'Classes are reusable. IDs must be unique per page.' },
  ]},
  { lessonId:'13-1', questions:[
    { id:'h19a', type:'mc', question:'Which tag is deprecated?', options:['<strong>','<section>','<font>','<article>'], correct:2, explanation:'<font> is deprecated. Use CSS for font styling.' },
  ]},

  // ═══ HTML MODULE QUIZZES ═══
  { moduleId:1, questions:[
    { id:'hm1a', type:'mc', question:'Three technologies of frontend web?', options:['HTML, CSS, JavaScript','HTML, Python, CSS','React, Node, SQL','HTML, Java, CSS'], correct:0, explanation:'HTML (structure) + CSS (style) + JavaScript (behavior).' },
    { id:'hm1b', type:'mc', question:'What opens DevTools?', options:['Ctrl+Shift+D','F12 or right-click Inspect','Ctrl+Alt+T','F5'], correct:1, explanation:'F12 or right-click → Inspect in all major browsers.' },
    { id:'hm1c', type:'mc', question:'Which VS Code extension launches a local server?', options:['Prettier','Auto Rename Tag','Live Server','ESLint'], correct:2, explanation:'Live Server auto-refreshes when you save.' },
    { id:'hm1d', type:'code', question:'What does ! + Tab produce in VS Code?', code:'! + Tab', options:['CSS reset','HTML5 boilerplate','JS function','Error'], correct:1, explanation:'Emmet ! shortcut generates full HTML5 structure.' },
    { id:'hm1e', type:'mc', question:'Why is it called index.html?', options:['HTML spec requires it','Loads faster','Servers look for it by default','VS Code requires it'], correct:2, explanation:'Web servers default to serving index.html.' },
  ]},
  { moduleId:2, questions:[
    { id:'hm2a', type:'mc', question:'Where do meta tags go?', options:['<body>','<head>','<footer>','<main>'], correct:1, explanation:'Meta tags go in <head> — info about the page, not visible content.' },
    { id:'hm2b', type:'mc', question:'What does charset="UTF-8" enable?', options:['Speed','All characters including emojis','SEO','JS compatibility'], correct:1, explanation:'UTF-8 supports all languages and emojis.' },
    { id:'hm2c', type:'mc', question:'Which loads first — CSS or deferred JS?', options:['JS','CSS','Simultaneously','Random'], correct:1, explanation:'CSS loads first. Deferred JS waits for HTML parsing.' },
    { id:'hm2d', type:'mc', question:'What shows in the browser tab?', options:['<meta title>','<head>','<title> content','<h1> content'], correct:2, explanation:'<title> in <head> sets browser tab text.' },
    { id:'hm2e', type:'mc', question:'Viewport meta tag enables?', options:['SEO','Responsive design on mobile','Faster loading','Dark mode'], correct:1, explanation:'Viewport meta tells mobile browsers how to scale.' },
  ]},

  // ═══ CSS LESSON QUIZZES ═══
  { lessonId:'c1-1', questions:[
    { id:'c1a', type:'mc', question:'What does "Cascading" mean?', options:['Animations fall down','Styles flow down and can be overridden','Files load in order','Only child styles'], correct:1, explanation:'Cascading = styles flow down, more specific rules override.' },
  ]},
  { lessonId:'c2-1', questions:[
    { id:'c2a', type:'code', question:'What does this target?', code:'.highlight { color: pink; }', options:['All elements','id="highlight"','class="highlight"','<highlight> tags'], correct:2, explanation:'Dot (.) = class selector. Targets elements with that class.' },
  ]},
  { lessonId:'c2-4', questions:[
    { id:'c3a', type:'mc', question:'Highest specificity?', options:['.card','p','#hero','*'], correct:2, explanation:'ID (1,0,0) > class (0,1,0) > element (0,0,1) > universal (0,0,0).' },
  ]},
  { lessonId:'c3-1', questions:[
    { id:'c4a', type:'mc', question:'Benefit of CSS variables?', options:['Faster CSS','Change one value, everything updates','Replace classes','Enable animations'], correct:1, explanation:'CSS variables = single source of truth.' },
  ]},
  { lessonId:'c4-1', questions:[
    { id:'c5a', type:'mc', question:'box-sizing: border-box does?', options:['Adds border','Width includes padding+border','Removes margins','Centers elements'], correct:1, explanation:'border-box makes width include padding and border.' },
  ]},
  { lessonId:'c5-1', questions:[
    { id:'c6a', type:'mc', question:'justify-content controls what in a flex row?', options:['Vertical','Horizontal (main axis)','Order','Size'], correct:1, explanation:'justify-content = main axis alignment.' },
  ]},
  { lessonId:'c6-1', questions:[
    { id:'c7a', type:'code', question:'How many columns?', code:'grid-template-columns: repeat(3, 1fr);', options:['1','2','3 equal','3 × 1px'], correct:2, explanation:'repeat(3, 1fr) = 3 columns, each 1 fraction of space.' },
  ]},
  { lessonId:'c7-1', questions:[
    { id:'c8a', type:'mc', question:'Mobile-first uses?', options:['max-width queries','min-width queries','No queries','Both equally'], correct:1, explanation:'Mobile-first: base CSS for small, min-width for larger.' },
  ]},
  { lessonId:'c8-1', questions:[
    { id:'c9a', type:'mc', question:'Cheapest properties to animate?', options:['width/height','margin/padding','transform/opacity','color/background'], correct:2, explanation:'transform and opacity are GPU-accelerated — no layout recalc.' },
  ]},
  { lessonId:'c10-1', questions:[
    { id:'c10a', type:'mc', question:'Glassmorphism effect?', options:['box-shadow + radius','backdrop-filter: blur() + transparent bg','filter: blur()','Multiple backgrounds'], correct:1, explanation:'backdrop-filter: blur() + semi-transparent background = frosted glass.' },
  ]},
  { lessonId:'c11-1', questions:[
    { id:'c11a', type:'code', question:'What returns if --primary not defined?', code:'color: var(--primary, blue);', options:['Error','transparent','blue (fallback)','inherit'], correct:2, explanation:'Second arg to var() is the fallback when variable is undefined.' },
  ]},

  // ═══ CSS MODULE QUIZZES ═══
  { moduleId:101, questions:[
    { id:'cm1a', type:'mc', question:'CSS stands for?', options:['Computer Style Sheets','Cascading Style Sheets','Creative Styling System','Code Style Syntax'], correct:1, explanation:'CSS = Cascading Style Sheets.' },
    { id:'cm1b', type:'mc', question:'Correct CSS syntax?', options:['selector: {prop = val}','selector {prop: val;}','{selector} prop: val','selector (prop: val)'], correct:1, explanation:'selector { property: value; }' },
    { id:'cm1c', type:'mc', question:'Best method for production CSS?', options:['Inline','Internal <style>','External .css file','JavaScript'], correct:2, explanation:'External stylesheets: reusable, cacheable, separation of concerns.' },
    { id:'cm1d', type:'mc', question:'CSS comments look like?', options:['// comment','<!-- comment -->','/* comment */','# comment'], correct:2, explanation:'CSS uses /* */ for comments.' },
    { id:'cm1e', type:'mc', question:'What is "cascading"?', options:['Animations falling','Styles override by specificity and order','Files load in cascade','Only child styles'], correct:1, explanation:'Multiple rules apply; specificity and source order determine winner.' },
  ]},
  { moduleId:105, questions:[
    { id:'cm5a', type:'mc', question:'display: flex does?', options:['Flexible sizing','Creates flex container; children become items','Flexibility to animations','Makes invisible'], correct:1, explanation:'display: flex = container. Direct children = flex items.' },
    { id:'cm5b', type:'code', question:'flex: 1 means?', code:'.item { flex: 1; }', options:['1px width','Grow to fill space','1rem padding','First item only'], correct:1, explanation:'flex: 1 = grow to fill remaining available space.' },
    { id:'cm5c', type:'mc', question:'Center with Flexbox?', options:['margin: auto only','justify-content + align-items center','text-align center','position: center'], correct:1, explanation:'Both justify-content and align-items: center = perfect centering.' },
    { id:'cm5d', type:'mc', question:'flex-wrap: wrap does?', options:['Wraps text','Items wrap to next line','Word-wrap on container','Border around items'], correct:1, explanation:'flex-wrap: wrap allows items onto new lines.' },
    { id:'cm5e', type:'mc', question:'Push flex item to bottom?', options:['align-self: end','position: absolute','margin-top: auto','flex-end: true'], correct:2, explanation:'margin-top: auto pushes to bottom — powerful Flexbox pattern.' },
  ]},

  // ═══ JS LESSON QUIZZES ═══
  { lessonId:'j1-1', questions:[
    { id:'j1a', type:'mc', question:'JavaScript adds what to a website?', options:['Structure','Style','Behavior and interactivity','Database'], correct:2, explanation:'JS = behavior. HTML = structure. CSS = style.' },
  ]},
  { lessonId:'j2-1', questions:[
    { id:'j2a', type:'mc', question:'Which to use by default?', options:['var','let','const','function'], correct:2, explanation:'const by default. let only when you need to reassign. Never var.' },
    { id:'j2b', type:'code', question:'Does this error?', code:'const colors = ["red"];\ncolors.push("blue");', options:["Yes — const can't change",'No — array contents can change',"Yes — push doesn't work",'No — strict mode only'], correct:1, explanation:'const prevents reassigning variable, but array itself can be modified.' },
  ]},
  { lessonId:'j2-2', questions:[
    { id:'j3a', type:'code', question:'typeof null returns?', code:'console.log(typeof null);', options:['"null"','"undefined"','"object"','"boolean"'], correct:2, explanation:'typeof null = "object" — famous JS bug from early days.' },
  ]},
  { lessonId:'j3-1', questions:[
    { id:'j4a', type:'code', question:'What does this log?', code:'console.log(5 === "5");', options:['true','false','undefined','Error'], correct:1, explanation:'=== checks type AND value. number !== string = false.' },
  ]},
  { lessonId:'j3-2', questions:[
    { id:'j5a', type:'code', question:'What does this return?', code:'const x = null;\nconst y = x ?? "default";', options:['null','"default"','undefined','Error'], correct:1, explanation:'?? returns right side when left is null or undefined.' },
  ]},
  { lessonId:'j3-3', questions:[
    { id:'j6a', type:'mc', question:'Best loop for arrays?', options:['for...in','while','for...of','do...while'], correct:2, explanation:'for...of is designed for arrays. for...in is for object keys.' },
  ]},
  { lessonId:'j4-1', questions:[
    { id:'j7a', type:'code', question:'What returns?', code:'const double = n => n * 2;\nconsole.log(double(7));', options:['7','14','NaN','undefined'], correct:1, explanation:'Arrow function: 7 * 2 = 14. Implicit return.' },
  ]},
  { lessonId:'j5-2', questions:[
    { id:'j8a', type:'code', question:'What produces?', code:'[1,2,3,4].filter(n => n > 2);', options:['[1,2]','[3,4]','[2,3,4]','4'], correct:1, explanation:'filter keeps items passing the test. >2 = [3,4].' },
    { id:'j8b', type:'code', question:'What returns?', code:'[10,20,30].reduce((sum,n) => sum+n, 0);', options:['[10,20,30]','60','30','0'], correct:1, explanation:'reduce combines: 0+10+20+30 = 60.' },
  ]},
  { lessonId:'j6-1', questions:[
    { id:'j9a', type:'code', question:'What logs?', code:'const {name,age} = {name:"Jenna",age:25,role:"Dev"};\nconsole.log(name,age);', options:['"Jenna" 25','{name:"Jenna",age:25}','undefined undefined','Error'], correct:0, explanation:'Destructuring extracts name and age into variables.' },
  ]},
  { lessonId:'j8-1', questions:[
    { id:'j10a', type:'mc', question:'e.preventDefault() on form submit?', options:['Prevents JS errors','Stops page reloading','Disables button','Clears form'], correct:1, explanation:'Forms reload by default. preventDefault() stops this.' },
  ]},
  { lessonId:'j8-2', questions:[
    { id:'j11a', type:'mc', question:'What is event delegation?', options:['Delegating to worker','One parent listener handles children','Passing between files','Loop assignment'], correct:1, explanation:'One listener on parent handles all child events via bubbling.' },
  ]},
  { lessonId:'j9-2', questions:[
    { id:'j12a', type:'mc', question:'Keyword that pauses until promise resolves?', options:['pause','wait','await','resolve'], correct:2, explanation:'await pauses async function until promise resolves.' },
  ]},
  { lessonId:'j10-1', questions:[
    { id:'j13a', type:'mc', question:'Before storing object in localStorage?', options:['Nothing','JSON.stringify()','Convert to number','encodeURI()'], correct:1, explanation:'localStorage = strings only. JSON.stringify() converts objects.' },
  ]},

  // ═══ JS MODULE QUIZZES ═══
  { moduleId:201, questions:[
    { id:'jm1a', type:'mc', question:'JS differs from HTML/CSS how?', options:["It's declarative","It's imperative — step-by-step",'Server only',"Can't modify page"], correct:1, explanation:'JS is imperative (instructions). HTML/CSS are declarative.' },
    { id:'jm1b', type:'mc', question:'Type JS and see instant results where?', options:['HTML file','CSS file','Browser console','Terminal'], correct:2, explanation:'DevTools console = instant JS execution.' },
    { id:'jm1c', type:'mc', question:'console.table() does?', options:['Logs text','Displays as table','Creates grid','Shows display'], correct:1, explanation:'console.table() formats arrays/objects as readable table.' },
    { id:'jm1d', type:'mc', question:'Best way to add JS?', options:['Inline onclick','Internal script','External .js with defer',"Doesn't matter"], correct:2, explanation:'External + defer: clean, cacheable, runs after HTML parsing.' },
    { id:'jm1e', type:'code', question:'What outputs?', code:'console.log(typeof "hello");', options:['"hello"','"text"','"string"','"char"'], correct:2, explanation:'typeof "hello" = "string".' },
  ]},
  { moduleId:205, questions:[
    { id:'jm5a', type:'code', question:'Returns?', code:'["a","b","c"].at(-1)', options:['"a"','"c"','undefined','-1'], correct:1, explanation:'.at(-1) = last element.' },
    { id:'jm5b', type:'code', question:'Produces?', code:'[1,2,3].map(n => n * 10)', options:['30','[10,20,30]','[1,2,3]','60'], correct:1, explanation:'map transforms each: [10,20,30].' },
    { id:'jm5c', type:'mc', question:'Combines all items into one value?', options:['map','filter','reduce','forEach'], correct:2, explanation:'reduce combines all into single value.' },
    { id:'jm5d', type:'mc', question:'filter() modifies original?', options:['Yes','No — returns new array','Only objects','Depends'], correct:1, explanation:'filter returns NEW array. Original untouched.' },
    { id:'jm5e', type:'code', question:'What logs?', code:'[5,3,1].toSorted((a,b)=>a-b)', options:['[5,3,1]','[1,3,5]','[5,1,3]','Error'], correct:1, explanation:'toSorted ascending: [1,3,5]. Non-mutating.' },
  ]},

  // ═══ REACT LESSON QUIZZES ═══
  { lessonId:'r1-1', questions:[
    { id:'r1a', type:'mc', question:'What is React?', options:['Programming language','CSS framework','JS library for building UIs','Database'], correct:2, explanation:'React = JavaScript library for user interfaces, by Meta.' },
  ]},
  { lessonId:'r1-3', questions:[
    { id:'r2a', type:'mc', question:'In JSX, use what instead of class?', options:['class','Class','className','cssClass'], correct:2, explanation:'className — because class is a reserved JS word.' },
  ]},
  { lessonId:'r2-2', questions:[
    { id:'r3a', type:'mc', question:'Props flow which direction?', options:['Child to parent','Both','Parent to child only','Sideways'], correct:2, explanation:'One-way data flow: parent → child.' },
  ]},
  { lessonId:'r3-1', questions:[
    { id:'r4a', type:'mc', question:'useState setter does what?', options:['Deletes state','Updates state + triggers re-render','Logs state','Freezes component'], correct:1, explanation:'Setter updates value and tells React to re-render.' },
  ]},
  { lessonId:'r3-2', questions:[
    { id:'r5a', type:'mc', question:'Add item to state array how?', options:['state.push(item)','setState([...state, item])','state.append(item)','setState(state + item)'], correct:1, explanation:'Never mutate. Create new array with spread: [...old, new].' },
  ]},
  { lessonId:'r4-1', questions:[
    { id:'r6a', type:'mc', question:'Empty dependency array [] means?', options:['Every render','Mount only','Never run','When state changes'], correct:1, explanation:'[] = run once on mount only.' },
  ]},
  { lessonId:'r4-2', questions:[
    { id:'r7a', type:'mc', question:'useRef vs useState difference?', options:['None','useRef re-renders','useState re-renders, useRef doesn\'t','useRef for classes'], correct:2, explanation:'useState triggers re-renders. useRef persists without re-rendering.' },
  ]},
  { lessonId:'r8-1', questions:[
    { id:'r8a', type:'mc', question:'Context solves what?', options:['Slow rendering','Prop drilling','CSS conflicts','Memory leaks'], correct:1, explanation:'Context shares data without passing props through every level.' },
  ]},
  { lessonId:'r9-1', questions:[
    { id:'r9a', type:'mc', question:'When to use React.memo?', options:['Every component','Only when you measure a performance problem','On state variables','On all imports'], correct:1, explanation:"Don't optimize prematurely. Measure first." },
  ]},

  // ═══ REACT MODULE QUIZZES ═══
  { moduleId:301, questions:[
    { id:'rm1a', type:'mc', question:'React components are...', options:['HTML templates','CSS selectors','Functions returning JSX','Database queries'], correct:2, explanation:'Components = JS functions that return JSX.' },
    { id:'rm1b', type:'mc', question:'Build tool for new React projects?', options:['Create React App','Webpack','Vite','Gulp'], correct:2, explanation:'Vite is recommended. CRA is deprecated.' },
    { id:'rm1c', type:'mc', question:'Virtual DOM does?', options:['Replaces HTML','Only updates what actually changed','Stores data','Manages CSS'], correct:1, explanation:'Virtual DOM diffs and updates only changed elements.' },
    { id:'rm1d', type:'mc', question:'Component names must start with?', options:['Lowercase','Number','Capital letter','Underscore'], correct:2, explanation:'Capital = component. Lowercase = HTML element.' },
    { id:'rm1e', type:'mc', question:'JSX compiles to?', options:['HTML','CSS','Regular JavaScript','Python'], correct:2, explanation:'JSX is sugar — compiles to React.createElement() calls.' },
  ]},
  { moduleId:303, questions:[
    { id:'rm3a', type:'mc', question:'State setter triggers?', options:['Nothing','Re-render','Page reload','State deletion'], correct:1, explanation:'Setter updates state → React re-renders component.' },
    { id:'rm3b', type:'code', question:"What's wrong?", code:'const [items, setItems] = useState([]);\nitems.push("new");', options:['Nothing','Can\'t push arrays','Mutates state directly — won\'t re-render','push() missing'], correct:2, explanation:'Never mutate. Use setItems([...items, "new"]).' },
    { id:'rm3c', type:'mc', question:'Lifting state up means?', options:['To database','To closest common parent','Deleting state','To a child'], correct:1, explanation:'Shared data goes to the closest common ancestor.' },
    { id:'rm3d', type:'mc', question:'Child → parent communication?', options:['Modify parent props','Call function passed as prop','Global variables','Direct DOM'], correct:1, explanation:'Parent passes callback function. Child calls it.' },
    { id:'rm3e', type:'code', question:'useState returns?', code:'const [count, setCount] = useState(0);', options:['Object','Single value','Array: [value, setter]','Promise'], correct:2, explanation:'useState returns [currentValue, setterFunction].' },
  ]},
];
