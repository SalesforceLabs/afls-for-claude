#!/usr/bin/env python3
"""Generate a self-contained, browsable HTML report from an AFLS config export JSON.

Handles any combination of export categories (trigger handlers, admin settings,
DB Schema, actions). Each category renders as a searchable/sortable tab.

Usage: python3 scripts/gen-export-html.py <export.json> <output.html>
"""
import json
import sys
import html
from pathlib import Path

src = Path(sys.argv[1])
out = Path(sys.argv[2])
data = json.loads(src.read_text())

# Known top-level category keys -> (display title, priority column order).
CATEGORIES = [
    ("dbSchema", "DB Schema", ["developerName", "label", "isActive"]),
    ("triggerHandlers", "Trigger Handlers", ["developerName", "label", "isActive"]),
    ("adminSettings", "Admin Settings", ["category", "developerName", "label"]),
    ("actions", "Actions", ["developerName", "label", "type", "isActive"]),
]


def flatten(rec):
    """Merge scalar top-level props with one level of a nested `fields` object."""
    row = {}
    for k, v in rec.items():
        if k == "fields" and isinstance(v, dict):
            for fk, fv in v.items():
                row.setdefault(fk, fv)
        elif isinstance(v, (dict, list)):
            row[k] = json.dumps(v)
        else:
            row[k] = v
    return row


def cell(v):
    if v is None or v == "":
        return '<span class="muted">&mdash;</span>'
    if isinstance(v, bool):
        cls = "b-active" if v else "b-inactive"
        return f'<span class="badge {cls}">{"true" if v else "false"}</span>'
    s = str(v)
    # Long / SOQL-ish / comma-list values render as code for readability.
    if len(s) > 40 or any(t in s for t in ("SELECT ", " AND ", " WHERE ", "{", "=")):
        s = s.replace("&amp;", "&").replace("&gt;", ">").replace("&lt;", "<")
        return "<code>" + html.escape(s) + "</code>"
    return html.escape(s)


sections = []
tabs = []
overall = 0
for key, title, priority in CATEGORIES:
    items = data.get(key)
    if not isinstance(items, list) or not items:
        continue
    rows = [flatten(r) for r in items]
    overall += len(rows)

    # Column order: priority keys first, then the rest alphabetically.
    keys = set()
    for r in rows:
        keys.update(r.keys())
    cols = [c for c in priority if c in keys] + sorted(k for k in keys if k not in priority)

    tabs.append((key, title, len(rows)))
    sections.append({"key": key, "title": title, "cols": cols, "rows": rows})

payload = json.dumps(sections).replace("</", "<\\/")
tab_json = json.dumps([{"key": k, "title": t, "count": c} for k, t, c in tabs])

meta = {
    "sourceOrg": data.get("sourceOrg", ""),
    "exportedAt": data.get("exportedAt", ""),
    "version": str(data.get("version", "")),
    "overall": overall,
}

TEMPLATE = r"""<!DOCTYPE html>
<html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>AFLS Config Export &mdash; __ORG__</title>
<style>
  :root{--bg:#0f1720;--panel:#161f2b;--border:#26313f;--text:#e5edf5;--muted:#8ba0b5;
        --accent:#4c9aff;--green:#3fb950;--red:#f85149;--amber:#d29922;--chip:#1f2a38;}
  *{box-sizing:border-box;}
  body{margin:0;font:14px/1.5 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;background:var(--bg);color:var(--text);}
  header{padding:24px 28px 16px;border-bottom:1px solid var(--border);}
  h1{margin:0 0 4px;font-size:20px;} .sub{color:var(--muted);font-size:13px;}
  .cards{display:flex;flex-wrap:wrap;gap:12px;padding:18px 28px;}
  .card{background:var(--panel);border:1px solid var(--border);border-radius:10px;padding:12px 16px;min-width:120px;}
  .card .n{font-size:22px;font-weight:600;} .card .l{color:var(--muted);font-size:12px;text-transform:uppercase;letter-spacing:.04em;}
  .tabs{display:flex;gap:6px;flex-wrap:wrap;padding:0 28px;border-bottom:1px solid var(--border);}
  .tab{padding:10px 16px;cursor:pointer;color:var(--muted);border-bottom:2px solid transparent;font-size:13px;}
  .tab.active{color:var(--text);border-bottom-color:var(--accent);}
  .tab .c{color:var(--muted);font-size:11px;}
  .controls{display:flex;gap:10px;align-items:center;padding:16px 28px 10px;}
  input[type=search]{flex:1;min-width:220px;background:var(--panel);border:1px solid var(--border);color:var(--text);padding:9px 12px;border-radius:8px;font-size:14px;}
  .count{color:var(--muted);font-size:13px;padding:0 28px 10px;}
  .wrap{padding:0 28px 40px;overflow-x:auto;}
  table{width:100%;border-collapse:collapse;background:var(--panel);border:1px solid var(--border);border-radius:10px;overflow:hidden;}
  th,td{padding:9px 12px;text-align:left;border-bottom:1px solid var(--border);vertical-align:top;}
  th{background:var(--chip);font-size:12px;text-transform:uppercase;letter-spacing:.04em;color:var(--muted);cursor:pointer;user-select:none;white-space:nowrap;}
  tr:hover td{background:#1a2431;}
  .badge{display:inline-block;padding:2px 8px;border-radius:20px;font-size:11px;font-weight:600;}
  .b-active{background:rgba(63,185,80,.15);color:var(--green);} .b-inactive{background:rgba(248,81,73,.15);color:var(--red);}
  code{font-family:"SF Mono",Menlo,Consolas,monospace;font-size:12px;background:var(--bg);padding:1px 5px;border-radius:4px;color:#a5d6ff;white-space:pre-wrap;word-break:break-word;display:inline-block;max-width:640px;}
  .muted{color:var(--muted);}
</style></head><body>
<header><h1>AFLS Configuration Export</h1>
<div class="sub">Org <strong>__ORG__</strong> &middot; exported __EXPORTED__ &middot; schema version __VERSION__</div></header>
<div class="cards" id="cards"></div>
<div class="tabs" id="tabs"></div>
<div class="controls"><input type="search" id="q" placeholder="Search this tab&hellip;"></div>
<div class="count" id="count"></div>
<div class="wrap"><table id="tbl"><thead></thead><tbody></tbody></table></div>
<script>
const SECTIONS = __PAYLOAD__, TABS = __TABS__, OVERALL = __OVERALL__;
const esc = s => (s==null?"":String(s)).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
let active = SECTIONS.length ? SECTIONS[0].key : null, sortK=null, sortAsc=true;

const cards=document.getElementById('cards');
cards.innerHTML = `<div class="card"><div class="n">${OVERALL}</div><div class="l">Total records</div></div>` +
  TABS.map(t=>`<div class="card"><div class="n">${t.count}</div><div class="l">${esc(t.title)}</div></div>`).join('');

const tabsEl=document.getElementById('tabs');
tabsEl.innerHTML = SECTIONS.map(s=>{
  const t=TABS.find(x=>x.key===s.key);
  return `<div class="tab" data-k="${s.key}">${esc(s.title)} <span class="c">${t.count}</span></div>`;
}).join('');

function fmt(v){
  if(v===null||v===undefined||v==='') return '<span class="muted">&mdash;</span>';
  if(v===true) return '<span class="badge b-active">true</span>';
  if(v===false) return '<span class="badge b-inactive">false</span>';
  const s=String(v);
  if(s.length>40 || /SELECT | AND | WHERE |[{=]/.test(s)) return '<code>'+esc(s)+'</code>';
  return esc(s);
}

function render(){
  const sec=SECTIONS.find(s=>s.key===active); if(!sec) return;
  const q=document.getElementById('q').value.toLowerCase().trim();
  let list=sec.rows.filter(r=>!q || Object.values(r).some(v=>String(v==null?'':v).toLowerCase().includes(q)));
  if(sortK){
    list=[...list].sort((a,b)=>{
      let x=a[sortK],y=b[sortK];
      if(typeof x==='boolean'){x=x?1:0;y=y?1:0;} else {x=(x==null?'':x).toString().toLowerCase();y=(y==null?'':y).toString().toLowerCase();}
      return x<y?(sortAsc?-1:1):x>y?(sortAsc?1:-1):0;
    });
  }
  document.getElementById('count').textContent=`Showing ${list.length} of ${sec.rows.length} ${sec.title} records`;
  document.querySelector('#tbl thead').innerHTML='<tr>'+sec.cols.map(c=>`<th data-k="${esc(c)}">${esc(c)}</th>`).join('')+'</tr>';
  document.querySelector('#tbl tbody').innerHTML=list.map(r=>'<tr>'+sec.cols.map(c=>`<td>${fmt(r[c])}</td>`).join('')+'</tr>').join('');
  document.querySelectorAll('#tbl th').forEach(th=>th.onclick=()=>{
    const k=th.dataset.k; if(sortK===k)sortAsc=!sortAsc; else {sortK=k;sortAsc=true;} render();
  });
}
tabsEl.querySelectorAll('.tab').forEach(t=>t.onclick=()=>{
  active=t.dataset.k; sortK=null;
  tabsEl.querySelectorAll('.tab').forEach(x=>x.classList.toggle('active',x.dataset.k===active));
  render();
});
document.getElementById('q').addEventListener('input',render);
if(active){tabsEl.querySelector('.tab').classList.add('active'); render();}
</script></body></html>
"""

out.write_text(
    TEMPLATE.replace("__PAYLOAD__", payload)
    .replace("__TABS__", tab_json)
    .replace("__OVERALL__", str(overall))
    .replace("__ORG__", html.escape(meta["sourceOrg"]))
    .replace("__EXPORTED__", html.escape(meta["exportedAt"]))
    .replace("__VERSION__", html.escape(meta["version"]))
)
print(f"Wrote {out} ({overall} records across {len(sections)} categories)")
