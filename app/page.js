"use client";
import { useMemo, useState } from "react";

export default function Page() {
  const tabs = ["overview","soulschool","academy","mail","affiliates","crm","scheduler","contacts","world","feeds","wallet","analytics"];
  const tabCopy = {
    overview:"Welcome to your hub. Quick-jump to anything, then post your next move.",
    soulschool:"SoulSchool is live—drop your wins or questions.",
    academy:"Academy sprint week—checkpoint your progress.",
    mail:"Your open rates are rising—share best subject lines.",
    affiliates:"Affiliates dashboard—who needs a boost today?",
    crm:"CRM at a glance—tag new connections.",
    scheduler:"Plan your next live session—slots filling fast.",
    contacts:"Import contacts and auto-enrich profiles.",
    world:"Explore SmartWorld—local collabs + partnerships.",
    feeds:"Tune SmartFeeds for signal over noise.",
    wallet:"Wallet is ready—watch your balance grow.",
    analytics:"Analytics—spot the patterns that pay."
  };
  const [activeTab, setActiveTab] = useState("overview");

  const rosterData = {
    general: ["Knicole Burchett","Rachel Bibby","Aimee Mackenzie","Malia Cater","Misty Berkholtz","Moose Johnson","Ryan Johnson"],
    growth: ["Gary Walthers","Gerard Della Porta","T-Roy Ellens","Anna Rakel Ryan","Abdul Rasheed El Amin","Jackie Coppins","Crystal Davis"],
    tech:   ["Feroz Ahmed","Garth Donhauser","Patricia Hudson","Moose Johnson","Ryan Johnson","Malia Cater","Rachel Bibby"]
  };
  const [topic, setTopic] = useState("general");
  const roster = useMemo(()=>rosterData[topic], [topic]);
  const [appsOpen, setAppsOpen] = useState(false);

  return (
    <div className="wrap">
      <style dangerouslySetInnerHTML={{__html:`
.wrap{width:100%;max-width:none;margin:0;padding:18px}
.card{background:var(--card);border:4px solid var(--hair);border-radius:18px;box-shadow:0 2px 0 rgba(255,255,255,.05),0 28px 70px rgba(0,0,0,.28)}
.pad{padding:14px}.kicker{font-size:.82rem;opacity:.85;font-weight:900}
.btn{--fg:#fff;--bd:#fff;display:inline-flex;align-items:center;justify-content:center;gap:.55rem;min-height:52px;padding:1.05rem 1.25rem;border-radius:999px;border:4px solid var(--bd);color:var(--fg);font-weight:900;background:linear-gradient(180deg,#171922,#0E0E14);box-shadow:0 22px 44px rgba(124,77,255,.55), inset 0 1px 0 rgba(255,255,255,.28)}
.btn.white{--fg:#0E0E14;--bd:var(--p6);background:#fff}
.btn.purple{--fg:#fff;--bd:var(--p6);background:linear-gradient(180deg,var(--p4),var(--p6))}
.topbar{display:grid;grid-template-columns:260px 1fr auto;gap:12px;align-items:center;margin-bottom:10px}
.brand{display:flex;align-items:center;gap:10px;font-weight:900}.logo{width:44px;height:44px;border-radius:12px;background:conic-gradient(from 210deg,var(--p5),var(--p3))}
.brand h1{margin:0;font-size:1.4rem}
.search{display:flex;align-items:center;gap:8px;background:#fff;border:4px solid var(--p6);border-radius:999px;padding:8px 12px}
.search input{flex:1;border:none;outline:none;background:transparent;color:#11131a;font-weight:900}
.rightbar{display:grid;grid-auto-flow:column;gap:8px;align-items:center;justify-content:end}
.iconbtn{display:inline-grid;place-items:center;width:42px;height:42px;border-radius:12px;background:var(--card);border:4px solid var(--p6);position:relative}
.badge{position:absolute;top:-8px;right:-8px;min-width:20px;height:20px;border-radius:10px;padding:0 6px;display:grid;place-items:center;font-weight:900;font-size:.72rem;color:#fff;background:linear-gradient(180deg,var(--p4),var(--p6))}
.tabs{display:flex;gap:8px;align-items:center;overflow-x:auto;padding:8px 2px 2px}
.tab{flex:0 0 auto;display:inline-flex;align-items:center;gap:.5rem;padding:.65rem 1rem;min-height:42px;border-radius:999px;font-weight:900;border:4px solid var(--p6);background:#fff;color:#0E0E14;box-shadow:0 16px 34px rgba(0,0,0,.30)}
.tab.active{background:linear-gradient(180deg,var(--p4),var(--p6));color:#fff}
.statrow{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin:12px 0}
.stat{display:grid;grid-template-columns:auto 1fr;align-items:center;gap:10px;padding:14px;border-radius:16px;background:linear-gradient(180deg,#1b1c2b,#141524);border:4px solid var(--p6)}
.stat .icon{width:44px;height:44px;border-radius:12px;display:grid;place-items:center;background:#fff;color:#0E0E14;border:2px solid var(--p6);font-weight:900}
.grid{display:grid;grid-template-columns:340px 1fr 400px;gap:14px;align-items:start}
@media (max-width:1100px){.grid{grid-template-columns:1fr}}
/* Sidebar */
.sb{display:grid;gap:10px}
.sbbtn{position:relative;display:flex;align-items:center;gap:12px;padding:12px 14px;min-height:60px;border-radius:16px;border:4px solid var(--p6);background:linear-gradient(180deg,#1c1e34,#141527);color:var(--ink);font-weight:900}
.sbbtn:before{content:"";position:absolute;left:-4px;top:-4px;bottom:-4px;width:6px;border-radius:12px;background:linear-gradient(180deg,var(--p4),var(--p6));opacity:.9}
.sbicon{width:40px;height:40px;border-radius:12px;display:grid;place-items:center;background:#0E0E14;color:#fff;border:2px solid #fff;box-shadow:inset 0 0 0 4px var(--p6)}
.sb-badge{margin-left:auto;margin-right:8px;min-width:22px;height:22px;border-radius:11px;padding:0 6px;display:grid;place-items:center;font-weight:900;font-size:.72rem;color:#fff;background:linear-gradient(180deg,var(--p4),var(--p6))}
.vstack{display:grid;gap:10px}.vstack .btn{width:100%}
.aff{border-radius:16px;border:4px solid var(--p6);background:linear-gradient(180deg,#0F0F15,#0A0A0F);padding:14px;color:#fff}
.linkpill{display:flex;align-items:center;gap:8px;background:#fff;color:#0E0E14;border:4px solid var(--p6);border-radius:999px;padding:10px 14px;min-width:280px}
.postbox{display:flex;align-items:center;gap:10px}.avatar32{width:36px;height:36px;border-radius:999px;overflow:hidden;border:2px solid var(--p6);background:#fff}
.postbox input{flex:1;border:4px solid var(--p6);background:#fff;border-radius:14px;padding:12px 14px;font-weight:900;color:#0e0e14}
.postbig{min-width:178px}
.create-actions{display:flex;gap:10px;margin-top:10px;flex-wrap:wrap;justify-content:center}
.card.pad .chart{height:240px;border-radius:14px;background:linear-gradient(180deg,#221a44,#171235);border:4px solid var(--p6)}
.actionbar{display:grid;grid-template-columns:1fr 1fr 1fr;border:4px solid var(--p6);border-radius:999px;overflow:hidden;background:linear-gradient(180deg,#17172A,#131427)}
.actionbar a{display:flex;align-items:center;justify-content:center;gap:.5rem;padding:.95rem 1.05rem;color:#fff;font-weight:900;border-right:4px solid var(--p6)}
.actionbar a:last-child{border-right:none}.actionbar a.white{background:#fff;color:#0E0E14}.actionbar a.purple{background:linear-gradient(180deg,var(--p4),var(--p6))}
.dock{display:grid;grid-template-columns:repeat(6,1fr);gap:10px}
.tile{display:grid;grid-template-rows:auto auto;place-items:center;gap:6px;padding:14px 8px;background:linear-gradient(180deg,#17172A,#131427);border:4px solid var(--p6);border-radius:14px;font-weight:900}
.iconring{width:52px;height:52px;border-radius:999px;display:grid;place-items:center;background:#0E0E14;border:3px solid #fff;color:#fff;box-shadow:inset 0 0 0 4px var(--p6)}
.menu-list{display:grid;gap:10px}.menu-item{display:flex;align-items:center;justify-content:space-between;padding:12px 14px;border-radius:14px;background:linear-gradient(180deg,#FFFFFF14,#FFFFFF08);border:4px solid var(--p6);font-weight:900}
.post,.sponsor{border-radius:14px;border:4px solid var(--p6);background:linear-gradient(180deg,#17172A,#131427);padding:14px}
.overlay{position:fixed;inset:0;background:rgba(6,7,12,.65);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;z-index:50}
.hidden{display:none}
@media (max-width:720px){ .topbar{grid-template-columns:1fr auto} .brand h1{display:none} }
      `}} />

      {/* Topbar */}
      <div className="topbar">
        <div className="brand"><div className="logo"></div><h1>SMARTNET</h1></div>
        <div className="search" role="search">
          <span>🔎</span>
          <input aria-label="SmartNET Search" placeholder="Search people, pages, groups & #hashtags — or just talk…" />
          <div className="mic" title="Voice search">🎙️</div>
        </div>
        <div className="rightbar">
          <a className="btn purple">Click to Naya</a>
          <div className="iconbtn" title="Messages">💬<span className="badge">3</span></div>
          <div className="iconbtn" title="Notifications">🔔<span className="badge">7</span></div>
          <div className="iconbtn" title="Apps Menu" onClick={()=>setAppsOpen(true)}>▦</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs">
        {tabs.map((k)=>(
          <div key={k} className={"tab"+(activeTab===k?" active":"")} onClick={()=>setActiveTab(k)}>
            {k[0].toUpperCase()+k.slice(1)}
          </div>
        ))}
        <div className="tab">＋</div>
      </div>

      {/* Stats */}
      <div className="statrow">
        <div className="stat"><div className="icon">💎</div><div><div className="label">BALANCE</div><div className="value">$0.00</div></div></div>
        <div className="stat"><div className="icon">🔗</div><div><div className="label">CONNECTIONS</div><div className="value">1,248</div></div></div>
        <div className="stat"><div className="icon">💸</div><div><div className="label">AFFILIATE COMMISSIONS</div><div className="value">$3,420</div></div></div>
        <div className="stat"><div className="icon">✉️</div><div><div className="label">MESSAGES</div><div className="value">28</div></div></div>
      </div>

      <div className="grid">
        {/* Left Sidebar */}
        <aside>
          <nav className="card pad">
            <div className="sb">
              {[
                ["Overview","🏠",0,true],
                ["SmartMail","✉️",3,false],
                ["SoulSchool","🧠",1,false],
                ["Affiliates","🤝",0,false],
                ["CRM","📇",2,false],
                ["Scheduler","📆",0,false],
                ["Contacts Import","⬇️",0,false],
                ["Social Share","📣",0,false],
                ["Reports","📊",0,false],
              ].map(([label, emoji, unread, active], idx)=> (
                <a key={idx} className={"sbbtn"+(active?" active":"")} href="#">
                  <div className="sbicon">{emoji}</div>
                  <div className="sblabel">{label}</div>
                  {unread>0 && <span className="sb-badge">{unread}</span>}
                  <div className="sbc">›</div>
                </a>
              ))}
            </div>
          </nav>
          <div className="card pad" style={{marginTop:10}}>
            <div className="vstack">
              <a className="btn">SOUL SCHOOL</a>
              <a className="btn white">GET HEALED</a>
              <a className="btn purple">GET PAID</a>
            </div>
          </div>
        </aside>

        {/* Center */}
        <main>
          {/* Ambassador */}
          <section className="aff">
            <div className="row" style={{display:"grid",gridTemplateColumns:"1fr auto",gap:12,alignItems:"center"}}>
              <div className="left">
                <div className="kicker" style={{marginBottom:6}}>Welcome SmartNET Ambassador</div>
                <div className="linkpill"><span>🔗</span><div className="code">https://smartnet.life/r/SHARE-1234</div></div>
              </div>
              <div className="ctas" style={{display:"flex",gap:10,flexWrap:"wrap"}}>
                <a className="btn white">GET YOURS</a>
                <a className="btn">GET PAID</a>
              </div>
            </div>
          </section>

          {/* Divine 12 */}
          <section className="card pad" style={{marginTop:12}}>
            <div className="dock">
              {["SmartAsk","Academy","SmartTalk","SmartFeed","SmartHub","SmartMail","SmartSounds","SmartNotes","SmartVault","SmartWorld","SmartCal","SmartHealth"].map((label,i)=>(
                <div key={i} className="tile"><div className="iconring">•</div><small>{label}</small></div>
              ))}
            </div>
          </section>

          {/* Composer */}
          <section className="card pad" style={{marginTop:12}}>
            <div className="postbox">
              <div className="avatar32"><img src="https://picsum.photos/seed/me/200/200" alt=""/></div>
              <input placeholder="Share a win, ask a question, or drop a resource…"/>
              <a className="btn postbig">POST</a>
            </div>
            <div className="create-actions">
              <a className="btn">🖼️ Image</a>
              <a className="btn white">🎬 Video</a>
              <a className="btn purple">✨ Create with Naya</a>
            </div>
          </section>

          {/* Analytics + actions */}
          <section className="card pad" style={{marginTop:12}}>
            <div className="kicker" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <span>Revenue & Commissions</span>
              <div className="hide-sm"><span>● Revenue</span> <span>● Commissions</span></div>
            </div>
            <div className="chart" aria-label="Revenue & Commissions"></div>
            <div className="actionbar" style={{marginTop:10}}>
              <a className="white">👍 SHARE</a>
              <a className="purple">★ NITRO</a>
              <a className="white">💬 COMMENT</a>
            </div>
          </section>

          {/* Feed post */}
          <section className="post" style={{marginTop:12}}>
            <div style={{display:"flex",alignItems:"center",gap:10,fontWeight:900}}>
              <div className="avatar32"><img src="https://picsum.photos/seed/creator/200/200" alt=""/></div>
              <div><div>SmartNET Creator</div><div className="kicker">2h • #{activeTab}</div></div>
            </div>
            <p className="kicker" style={{margin:"10px 0 0"}}>{tabCopy[activeTab] || tabCopy.overview}</p>
          </section>

          {/* Sponsored */}
          <section className="sponsor" style={{marginTop:12}}>
            <div className="kicker" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <span>Sponsored</span><span>SmartHealth</span>
            </div>
            <div className="media" style={{width:"100%",height:180,borderRadius:12,overflow:"hidden",border:"4px solid var(--p6)",margin:"8px 0",background:"#000"}}>
              <img src="https://picsum.photos/seed/health/1000/600" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
            </div>
            <p className="kicker" style={{margin:"6px 0 10px"}}>Snap → Instant Calories. Log meals in ~15s.</p>
            <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
              <a className="btn white">Learn more</a>
              <a className="btn">How it works</a>
            </div>
          </section>
        </main>

        {/* Right rail */}
        <aside>
          <section className="card pad">
            <div className="kicker" style={{fontWeight:900}}>Quick Menu</div>
            <div className="menu-list" style={{marginTop:8}}>
              {["Invite","Academy","Wallet","Analytics","Settings"].map((x,i)=>(
                <div key={i} className="menu-item"><span>{x}</span><span>›</span></div>
              ))}
            </div>
          </section>

          <section className="card pad" style={{marginTop:12}}>
            <div className="kicker" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <span>SOUL SCHOOL</span>
              <div>Topic:{' '}
                <select value={topic} onChange={(e)=>setTopic(e.target.value)}>
                  <option value="general">#general</option>
                  <option value="growth">#growth</option>
                  <option value="tech">#tech</option>
                </select>
              </div>
            </div>
            <div style={{display:"grid",gap:10,marginTop:10}}>
              {roster.map((name, i)=> {
                const seed = name.split(" ")[0].toLowerCase()+i;
                return (
                  <div key={name+i} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 12px",borderRadius:14,border:"4px solid var(--p6)",background:"linear-gradient(180deg,#17172A,#131427)"}}>
                    <div style={{display:"flex",alignItems:"center",gap:10}}>
                      <div className="avatar32"><img src={`https://picsum.photos/seed/${seed}/200/200`} /></div>
                      <span>{name}</span>
                    </div>
                    <span style={{width:8,height:8,borderRadius:999,background:"#22C55E",display:"inline-block"}} />
                  </div>
                );
              })}
            </div>
          </section>
        </aside>
      </div>

      {/* Apps overlay */}
      <div className={appsOpen ? "overlay" : "overlay hidden"} onClick={()=>setAppsOpen(false)}>
        <div className="card pad" style={{width:"min(1100px,96vw)",maxHeight:"86vh",overflow:"auto"}} onClick={(e)=>e.stopPropagation()}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8}}>
            <div style={{fontWeight:900}}>All Apps</div>
            <button className="btn white" style={{minHeight:40,padding:".5rem 1rem"}} onClick={()=>setAppsOpen(false)}>Close</button>
          </div>
          <div className="dock">
            {["SmartAsk","Academy","SmartTalk","SmartFeed","SmartHub","SmartMail","SmartSounds","SmartNotes","SmartVault","SmartWorld","SmartCal","SmartHealth"].map((label,i)=>(
              <div key={i} className="tile"><div className="iconring">•</div><small>{label}</small></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
