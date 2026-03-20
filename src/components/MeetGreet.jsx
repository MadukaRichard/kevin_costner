export default function MeetGreet() {
  const waUrl = "https://wa.me/13465420600?text=Hi%20Kevin's%20Team!%20I'd%20love%20to%20book%20a%20Meet%20%26%20Greet.";
  const steps = [
    { n:"01", title:"Click to Connect",    desc:"Tap the button below and you'll be taken directly to WhatsApp to start a conversation with Kevin's management team." },
    { n:"02", title:"Share Your Details",  desc:"Let the team know your preferred date, city, and any special requests for your personal meet & greet experience." },
    { n:"03", title:"Confirm & Experience",desc:"Once confirmed, prepare for an unforgettable personal moment with one of Hollywood's greatest and most enduring legends." },
  ];

  return (
    <section className="mg" id="meet-greet">
      <div className="mg-in">
        <div className="sr">
          <div style={{ fontFamily:"var(--fm)",fontSize:".54rem",letterSpacing:".3em",textTransform:"uppercase",color:"var(--red)",display:"flex",alignItems:"center",gap:10,marginBottom:18 }}>
            <span style={{ display:"block",width:20,height:1,background:"var(--red)" }} />Personal Experience
          </div>
          <h2 className="mg-h">MEET &amp; GREET<br /><span>WITH KEVIN</span></h2>
          <p className="mg-sub">A rare, intimate opportunity to meet Kevin Costner in person. Limited spots available — reach out directly on WhatsApp to secure yours.</p>
          <div className="mg-steps">
            {steps.map((s, i) => (
              <div className="mg-step" key={i}>
                <span className="mg-sn">{s.n}</span>
                <div><div className="mg-sl">Step {s.n}</div><div className="mg-st">{s.title}</div><div className="mg-sd">{s.desc}</div></div>
              </div>
            ))}
          </div>
        </div>
        <div className="mg-card sr d1">
          <div className="mg-ctop">
            <div className="mg-ico">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
            </div>
            <div>
              <div className="mg-lbl">Book via WhatsApp</div>
              <div className="mg-num">+1 (346) 542-0600</div>
            </div>
          </div>
          <p className="mg-body">Our team responds within 24 hours. Tap the button below to open WhatsApp with a pre-filled message — just hit send and we'll take it from there.</p>
          <div className="mg-avail"><div className="mg-dot" /><span>Team is currently available</span></div>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="mg-wa">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            Book on WhatsApp
          </a>
          <p className="mg-disc">Direct line to Kevin's management team · Confidential &amp; secure</p>
        </div>
      </div>
    </section>
  );
}
