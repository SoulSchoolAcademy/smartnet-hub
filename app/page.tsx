export default function Page() {
  return (
    <div style={{padding:24}}>
      <div style={{display:'grid',gridTemplateColumns:'260px 1fr auto',gap:12,alignItems:'center',marginBottom:10}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontWeight:900,color:'#fff'}}>
          <div style={{width:44,height:44,borderRadius:12,background:'linear-gradient(135deg,#7C4DFF,#BCA7FF)'}}></div>
          <h1 style={{margin:0,fontSize:'1.4rem'}}>SMARTNET</h1>
        </div>
        <div style={{display:'flex',alignItems:'center',gap:8,background:'#fff',border:'4px solid var(--p6)',borderRadius:999,padding:'8px 12px'}}>
          <span>🔎</span><input style={{flex:1,border:'none',outline:'none',background:'transparent',fontWeight:900}} placeholder="Search people, pages, groups & #hashtags — or just talk…" />
          <div title="Voice search">🎙️</div>
        </div>
        <div style={{display:'grid',gridAutoFlow:'column',gap:8,justifyContent:'end'}}>
          <a className="btn purple">Click to Naya</a>
          <div style={{display:'grid',placeItems:'center',width:42,height:42,borderRadius:12,background:'var(--card)',border:'4px solid var(--p6)',color:'#fff'}}>💬</div>
          <div style={{display:'grid',placeItems:'center',width:42,height:42,borderRadius:12,background:'var(--card)',border:'4px solid var(--p6)',color:'#fff'}}>🔔</div>
        </div>
      </div>
      <p style={{color:'#fff',opacity:.85,fontWeight:900}}>Build OK — v17 shell is live. Replace this page with your full Hub when ready.</p>
    </div>
  );
}
