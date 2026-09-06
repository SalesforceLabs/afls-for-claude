/**
 * renderImportSpa() — the self-contained single-page app served by import-ui-server.
 * No external assets. Fetches /diff, renders a reviewable/selectable table, and
 * applies the selection by streaming NDJSON from POST /apply.
 *
 * NOTE: client-side JS template literals are written as `\${...}` so this TS
 * template literal emits them verbatim instead of interpolating at build time.
 */

export function renderImportSpa(token: string, targetOrg: string, sourceOrg: string): string {
  const cfg = JSON.stringify({ token, target: targetOrg, source: sourceOrg });
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>AFLS Config Import — ${escapeHtml(sourceOrg)} → ${escapeHtml(targetOrg)}</title>
<style>
  :root { --bg:#14161c; --panel:#1c1f27; --panel2:#232733; --fg:#e6e6e6; --dim:#8b93a7;
          --line:#2a2f3a; --new:#7cc4a4; --chg:#e0b25a; --id:#5a6072; --tgt:#a06a9a;
          --accent:#e0785f; --blue:#7aa2f7; }
  * { box-sizing:border-box; }
  body { margin:0; background:var(--bg); color:var(--fg); font:14px/1.5 -apple-system,Segoe UI,Roboto,sans-serif; }
  header { padding:16px 20px; border-bottom:1px solid var(--line); position:sticky; top:0; background:var(--bg); z-index:5; }
  h1 { font-size:16px; margin:0 0 4px; }
  .sub { color:var(--dim); font-size:12px; }
  .legend { font-size:12px; margin-top:8px; padding:6px 10px; background:var(--panel2); border:1px solid var(--line); border-radius:6px; display:inline-block; }
  .legend b { color:var(--fg); }
  .arrow { color:var(--accent); }
  .toolbar { display:flex; gap:10px; align-items:center; flex-wrap:wrap; padding:12px 20px; border-bottom:1px solid var(--line); }
  .toolbar input[type=search], select { background:var(--panel2); color:var(--fg); border:1px solid var(--line); border-radius:6px; padding:6px 10px; }
  .tabs { display:flex; gap:6px; padding:10px 20px 0; flex-wrap:wrap; }
  .tab { padding:6px 12px; border-radius:6px 6px 0 0; cursor:pointer; color:var(--dim); border:1px solid transparent; }
  .tab.active { background:var(--panel); color:var(--fg); border-color:var(--line); border-bottom-color:var(--panel); }
  .tab .count { color:var(--dim); font-size:11px; }
  main { padding:0 20px 120px; }
  .grp { background:var(--panel); border:1px solid var(--line); border-radius:0 6px 6px 6px; }
  .row { border-top:1px solid var(--line); padding:10px 14px; display:grid; grid-template-columns:24px 90px 1fr auto; gap:10px; align-items:start; }
  .row:first-child { border-top:none; }
  .row.hidden { display:none; }
  .badge { font-size:11px; font-weight:600; padding:2px 8px; border-radius:10px; text-align:center; align-self:start; }
  .b-NEW { background:rgba(124,196,164,.15); color:var(--new); }
  .b-CHANGED { background:rgba(224,178,90,.15); color:var(--chg); }
  .b-IDENTICAL { background:rgba(90,96,114,.2); color:var(--id); }
  .b-TARGET_ONLY { background:rgba(160,106,154,.15); color:var(--tgt); }
  .name { font-weight:600; }
  .cat { color:var(--dim); font-size:12px; }
  .detail { margin-top:8px; font-size:12.5px; color:var(--dim); display:none; }
  .row.open .detail { display:block; }
  .fld { font-family:ui-monospace,SFMono-Regular,Menlo,monospace; font-size:12px; }
  .from { color:#c97a7a; } .to { color:var(--new); }
  .expand { cursor:pointer; color:var(--blue); background:none; border:none; font-size:12px; padding:0; }
  .res { font-size:11px; margin-top:4px; }
  .res.ok { color:var(--new); } .res.err { color:#e06f6f; }
  footer { position:fixed; bottom:0; left:0; right:0; background:var(--panel); border-top:1px solid var(--line); padding:12px 20px; display:flex; gap:14px; align-items:center; }
  button.apply { background:var(--accent); color:#151515; border:none; border-radius:6px; padding:9px 18px; font-weight:700; cursor:pointer; }
  button.apply:disabled { opacity:.5; cursor:default; }
  .bar { flex:1; height:8px; background:var(--panel2); border-radius:4px; overflow:hidden; }
  .bar > i { display:block; height:100%; width:0; background:var(--new); transition:width .2s; }
  .log { max-height:150px; overflow:auto; font-family:ui-monospace,monospace; font-size:11.5px; color:var(--dim); padding:8px 20px; border-top:1px solid var(--line); display:none; }
  .log.show { display:block; }
  .note { color:var(--tgt); font-size:11px; }
  a { color:var(--blue); }
</style>
</head>
<body>
<header>
  <h1>AFLS Configuration Import</h1>
  <div class="sub">Source snapshot <b>${escapeHtml(sourceOrg)}</b> <span class="arrow">→</span> writes into target org <b>${escapeHtml(targetOrg)}</b> · create + update-only (safe) · target is auto-backed-up before apply</div>
  <div class="legend">Each field reads <span class="from">current in ${escapeHtml(targetOrg)}</span> <span class="arrow">→</span> <span class="to">value from ${escapeHtml(sourceOrg)} that will be applied</span>. &nbsp;<b>NEW</b> = create in ${escapeHtml(targetOrg)}; &nbsp;<b>CHANGED</b> = update ${escapeHtml(targetOrg)}.</div>
</header>
<div class="toolbar">
  <input type="search" id="search" placeholder="Filter by name…"/>
  <select id="statusFilter">
    <option value="all">All statuses</option>
    <option value="actionable" selected>Actionable (New + Changed)</option>
    <option value="NEW">New</option>
    <option value="CHANGED">Changed</option>
    <option value="IDENTICAL">Identical</option>
    <option value="TARGET_ONLY">Only in target</option>
  </select>
  <label><input type="checkbox" id="selAll"/> Select all shown</label>
  <span class="sub" id="selCount"></span>
</div>
<div class="tabs" id="tabs"></div>
<main id="main"><div class="sub" style="padding:20px">Loading diff…</div></main>
<div class="log" id="log"></div>
<footer>
  <button class="apply" id="applyBtn" disabled>Apply selected</button>
  <div class="bar"><i id="barFill"></i></div>
  <span class="sub" id="status"></span>
</footer>
<script>
const CFG = ${cfg};
const groupOf = (r) => r.kind === "triggerHandler" ? "Trigger Handlers"
  : r.category === "DbSchema" ? "DB Schema"
  : (r.category === "QuickAction" || r.category === "CustomAction") ? "Actions"
  : "Admin Settings";
let DIFF = null, activeTab = "All", rowsByKey = {};

function esc(s){ return String(s==null?"":s).replace(/[&<>"]/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c])); }
function fmt(v){ return (v===null||v===undefined||v==="") ? "(empty)" : String(v); }

async function load(){
  const res = await fetch("/diff?t="+encodeURIComponent(CFG.token));
  DIFF = await res.json();
  buildTabs(); render();
  document.getElementById("applyBtn").disabled = false;
}

function groups(){
  const g = {};
  for (const r of DIFF.records){ const k = groupOf(r); (g[k]=g[k]||[]).push(r); }
  return g;
}

function buildTabs(){
  const g = groups();
  const names = ["All", ...Object.keys(g).sort()];
  const tabs = document.getElementById("tabs");
  tabs.innerHTML = names.map(n=>{
    const list = n==="All" ? DIFF.records : g[n];
    const act = list.filter(r=>r.status==="NEW"||r.status==="CHANGED").length;
    return '<div class="tab'+(n===activeTab?' active':'')+'" data-tab="'+esc(n)+'">'+esc(n)+' <span class="count">('+act+')</span></div>';
  }).join("");
  tabs.querySelectorAll(".tab").forEach(t=>t.onclick=()=>{ activeTab=t.dataset.tab; buildTabs(); render(); });
}

function actionable(r){ return r.applicable && (r.status==="NEW"||r.status==="CHANGED"); }

function render(){
  const g = groups();
  const list = activeTab==="All" ? DIFF.records : (g[activeTab]||[]);
  const main = document.getElementById("main");
  rowsByKey = {};
  const wrap = document.createElement("div"); wrap.className="grp";
  for (const r of [...list].sort((a,b)=>a.developerName.localeCompare(b.developerName))){
    const row = document.createElement("div"); row.className="row"; row.dataset.key=r.key; row.dataset.status=r.status;
    row.dataset.name=r.developerName.toLowerCase();
    const canPick = actionable(r);
    const cb = canPick ? '<input type="checkbox" class="pick" checked>' : '<span></span>';
    row.innerHTML =
      '<div>'+cb+'</div>'+
      '<div><span class="badge b-'+r.status+'">'+r.status+'</span></div>'+
      '<div><span class="name">'+esc(r.developerName)+'</span> <span class="cat">'+esc(r.category)+'</span>'+
        (r.note?'<div class="note">'+esc(r.note)+'</div>':'')+
        '<div class="detail">'+detail(r)+'</div>'+
        '<div class="res" data-res></div></div>'+
      '<div><button class="expand">details</button></div>';
    row.querySelector(".expand").onclick=()=>row.classList.toggle("open");
    const pick = row.querySelector(".pick"); if(pick) pick.onchange=updateCount;
    wrap.appendChild(row); rowsByKey[r.key]=row;
  }
  main.innerHTML=""; main.appendChild(wrap);
  applyFilter(); updateCount();
}

function detail(r){
  let h="";
  if (r.activeChange) h+='<div>IsActive: <span class="from">'+fmt(r.activeChange.from)+'</span> → <span class="to">'+fmt(r.activeChange.to)+'</span></div>';
  const changed = (r.fieldDiffs||[]).filter(f=>f.willApply);
  for (const f of changed) h+='<div class="fld">'+esc(f.name)+': <span class="from">'+esc(fmt(f.from))+'</span> → <span class="to">'+esc(fmt(f.to))+'</span></div>';
  const other = (r.fieldDiffs||[]).filter(f=>!f.willApply);
  for (const f of other) h+='<div class="fld" style="opacity:.6">'+esc(f.name)+': only in target — left as <span class="from">'+esc(fmt(f.from))+'</span></div>';
  for (const a of (r.assignmentDiff&&r.assignmentDiff.added)||[]) h+='<div>+ assign '+esc(a.name)+' ('+esc(a.level)+')</div>';
  for (const a of (r.assignmentDiff&&r.assignmentDiff.onlyInTarget)||[]) h+='<div style="opacity:.6">assign '+esc(a.name)+' only in target — kept</div>';
  if (!h) return "<div>No applicable changes.</div>";
  const head='<div style="margin-bottom:6px;font-weight:600"><span class="from">'+esc(CFG.target)+' (current)</span> <span class="arrow">→</span> <span class="to">'+esc(CFG.source)+' (will apply)</span></div>';
  return head + h;
}

function applyFilter(){
  const q=document.getElementById("search").value.toLowerCase();
  const sf=document.getElementById("statusFilter").value;
  for (const key in rowsByKey){
    const row=rowsByKey[key]; const st=row.dataset.status;
    let show = row.dataset.name.includes(q);
    if (sf==="actionable") show = show && (st==="NEW"||st==="CHANGED");
    else if (sf!=="all") show = show && st===sf;
    row.classList.toggle("hidden", !show);
  }
}

function shownPicks(){ return Object.values(rowsByKey).filter(r=>!r.classList.contains("hidden")).map(r=>r.querySelector(".pick")).filter(Boolean); }
function updateCount(){
  const picked=Object.values(rowsByKey).map(r=>r.querySelector(".pick")).filter(p=>p&&p.checked).length;
  document.getElementById("selCount").textContent=picked+" selected";
}

document.getElementById("search").oninput=applyFilter;
document.getElementById("statusFilter").onchange=applyFilter;
document.getElementById("selAll").onchange=(e)=>{ shownPicks().forEach(p=>p.checked=e.target.checked); updateCount(); };

document.getElementById("applyBtn").onclick=async ()=>{
  const selection=Object.values(rowsByKey).filter(r=>{const p=r.querySelector(".pick");return p&&p.checked;}).map(r=>r.dataset.key);
  if(!selection.length){ alert("Nothing selected."); return; }
  if(!confirm("Apply "+selection.length+" change(s) to "+CFG.target+"? The target is backed up first.")) return;
  const btn=document.getElementById("applyBtn"); btn.disabled=true;
  const log=document.getElementById("log"); log.classList.add("show"); log.textContent="";
  const status=document.getElementById("status"); const fill=document.getElementById("barFill");
  const addLog=(m)=>{ log.textContent+=m+"\\n"; log.scrollTop=log.scrollHeight; };

  const resp=await fetch("/apply?t="+encodeURIComponent(CFG.token),{
    method:"POST", headers:{"content-type":"application/json","x-afls-token":CFG.token},
    body:JSON.stringify({selection})
  });
  const reader=resp.body.getReader(); const dec=new TextDecoder(); let buf="";
  while(true){
    const {done,value}=await reader.read(); if(done) break;
    buf+=dec.decode(value,{stream:true});
    let nl; while((nl=buf.indexOf("\\n"))>=0){
      const line=buf.slice(0,nl); buf=buf.slice(nl+1); if(!line.trim()) continue;
      const evt=JSON.parse(line); handleEvent(evt, addLog, status, fill);
    }
  }
};

function handleEvent(evt, addLog, status, fill){
  if(evt.type==="backup"){ addLog("Backup saved: "+evt.path); }
  else if(evt.type==="progress"){
    fill.style.width=Math.round((evt.index+1)/evt.total*100)+"%";
    status.textContent=(evt.index+1)+"/"+evt.total+" — "+evt.developerName;
    const row=rowsByKey[evt.key]; if(row){ const el=row.querySelector("[data-res]"); if(el){ el.className="res "+(evt.ok?"ok":"err"); el.textContent=(evt.ok?"✓ ":"✗ ")+evt.action+(evt.message?" — "+evt.message:""); } }
    addLog((evt.ok?"✓":"✗")+" "+evt.developerName+" ["+evt.action+"] "+(evt.message||""));
  }
  else if(evt.type==="done"){
    const r=evt.result;
    status.textContent="Done — "+r.applied+" applied, "+r.failed+" failed, "+r.skipped+" skipped";
    addLog("── Applied "+r.applied+", failed "+r.failed+", skipped "+r.skipped);
    addLog("Result: "+evt.resultPath);
    addLog("Backup: "+evt.backupPath);
  }
  else if(evt.type==="error"){ status.textContent="Error"; addLog("ERROR: "+evt.message); }
}

load().catch(e=>{ document.getElementById("main").innerHTML='<div class="sub" style="padding:20px">Failed to load diff: '+esc(e.message)+'</div>'; });
</script>
</body>
</html>`;
}

function escapeHtml(s: string): string {
  return String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c] as string));
}
