export default function FanCard() {
  const bens = [
    { t:"Verified Top Fan Status", d:"A unique digital card recognized across platforms, events, and premieres worldwide.", icon:<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> },
    { t:"Priority Giveaway Access", d:"First entry into giveaways: signed scripts, VIP screenings, and meet & greet packages.", icon:<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg> },
    { t:"Early Access & Announcements", d:"First to know about Horizon updates, new projects, Modern West music, and special events.", icon:<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
  ];

  return (
    <section className="fancard" id="fan-card">
      <div className="fancard-img">
        <img src="https://wallpapers.com/images/high/kevin-costner-actor-js5ujxw6rtgakhhe.webp" alt="Kevin Costner" />
        <div className="fancard-img-label">
          <div className="fancard-img-label-tag">Exclusive Membership</div>
          <div className="fancard-img-label-text">JOIN KEVIN'S COMMUNITY</div>
        </div>
        <div className="fc-wrap">
          <div className="fc">
            <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start" }}>
              <div className="fc-logo">KC<span style={{color:"var(--red)"}}>·</span></div>
              <div className="fc-type">Official Fan Card</div>
            </div>
            <div><div className="fc-nl">Member Name</div><div className="fc-name">Your Name Here</div></div>
            <div className="fc-bot">
              <div><span className="fc-ml">Since</span><span className="fc-mv">2026</span></div>
              <div><span className="fc-ml">No.</span><span className="fc-mv">KC·0001</span></div>
              <div className="fc-star"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
            </div>
          </div>
        </div>
      </div>
      <div className="fancard-copy sr">
        <div style={{ fontFamily:"var(--fm)",fontSize:".54rem",letterSpacing:".3em",textTransform:"uppercase",color:"var(--red)",display:"flex",alignItems:"center",gap:10,marginBottom:16 }}>
          <span style={{ display:"block",width:20,height:1,background:"var(--red)" }} />Exclusive Membership
        </div>
        <h2 className="fancard-h">THE OFFICIAL<span>KEVIN FAN CARD</span></h2>
        <p className="fancard-desc">Join a community of the most devoted fans of one of Hollywood's greatest legends. Your passport to exclusive experiences and recognition as one of Kevin's most loyal supporters.</p>
        <div className="fancard-bens">
          {bens.map((b, i) => (
            <div className="fancard-ben" key={i}>
              <div className="ben-ico">{b.icon}</div>
              <div><span className="ben-t">{b.t}</span><span className="ben-d">{b.d}</span></div>
            </div>
          ))}
        </div>
        <a href="mailto:kevincostner590124@gmail.com?subject=Fan%20Card%20Application" className="fancard-cta">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><polyline points="1,4 12,13 23,4"/></svg>
          Apply for Your Fan Card
        </a>
        <p className="fancard-note">Free to apply · Limited memberships available</p>
      </div>
    </section>
  );
}
