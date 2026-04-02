// ═══════════════════════════════════════════════
// CODE PREVIEW — Code block with tabs + live preview
// ═══════════════════════════════════════════════

import { useState } from 'react';
import { IFRAME_STYLES } from '../utils/iframeStyles';

interface CodePreviewProps {
  code: string;
  lang: string; // 'html' | 'css' | 'js' | 'react'
}

export function CodePreview({ code, lang }: CodePreviewProps) {
  const [tab, setTab] = useState<'code' | 'preview'>('code');
  const [copied, setCopied] = useState(false);
  const isCSS = lang === 'css';
  const isJS = lang === 'js' || lang === 'react';

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Build preview HTML based on language
  let previewHtml: string;
  if (isJS) {
    const consoleScript = `const _out=document.getElementById("out");const _log=(p,c,...a)=>{const d=document.createElement("div");d.className="console-line";d.innerHTML='<span class="prefix" style="color:'+c+'">'+p+'</span>'+a.map(x=>{try{if(typeof x==="object")return JSON.stringify(x,null,2);return String(x)}catch(e){return String(x)}}).join(" ");_out.appendChild(d)};const console={log:(...a)=>_log("→","#4ecdc4",...a),error:(...a)=>_log("✕","#ff6b6b",...a),warn:(...a)=>_log("⚠","#ffa726",...a),table:(a)=>_log("◫","#4ecdc4",a),group:()=>{},groupEnd:()=>{},time:()=>{},timeEnd:(l)=>_log("⏱","#8888a8",l+": ~1ms")};try{${code.replace(/<\/script>/g, '<\\/script>')}}catch(e){console.error(e.message)}`;
    previewHtml = `<!DOCTYPE html><html><head><style>${IFRAME_STYLES} .console-line{font-family:monospace;font-size:13px;padding:3px 0;border-bottom:1px solid #1a1a2e;color:#e0e0e0}.prefix{color:#5a5a7a;margin-right:8px}pre.output{background:#0a0a14;padding:16px;border-radius:8px;margin:0;overflow:auto}</style></head><body><pre class="output" id="out"></pre><script>${consoleScript}<\/script></body></html>`;
  } else if (isCSS) {
    previewHtml = `<!DOCTYPE html><html><head><style>${IFRAME_STYLES}\n${code}</style></head><body><h1>Styled Heading</h1><p class="lead">Lead paragraph with <strong>bold</strong> and <em>italic</em>.</p><p>Body text. <a href="#">A link</a>.</p><div class="card" style="margin-top:16px;padding:20px"><h3>Card Title</h3><p>Content.</p></div><button style="margin-top:12px;padding:10px 24px;cursor:pointer">Button</button></body></html>`;
  } else {
    previewHtml = `<!DOCTYPE html><html><head><style>${IFRAME_STYLES}</style></head><body>${code}</body></html>`;
  }

  const tabIcon = isJS ? 'ƒ' : isCSS ? '{ }' : '<>';
  const previewLabel = isJS ? '▶ Run' : '▶ Preview';

  return (
    <div className="cpv">
      <div className="cpv-tabs">
        <button className={`cpv-tab ${tab === 'code' ? 'on' : ''}`} onClick={() => setTab('code')}>
          {tabIcon} Code
        </button>
        <button className={`cpv-tab ${tab === 'preview' ? 'on' : ''}`} onClick={() => setTab('preview')}>
          {previewLabel}
        </button>
        <button className="cpv-copy" onClick={handleCopy}>
          {copied ? '✓ Copied' : '⎘ Copy'}
        </button>
      </div>
      {tab === 'code' ? (
        <pre className="cpv-code"><code>{code}</code></pre>
      ) : (
        <iframe className="cpv-iframe" srcDoc={previewHtml} title="Preview" sandbox="allow-scripts" />
      )}
    </div>
  );
}
