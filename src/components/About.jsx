export default function About() {
  const pts = [
    "Bringing rugged individualism and emotional depth to every role — from Eliot Ness to John Dutton.",
    "Directing sweeping American epics: Dances with Wolves, Open Range, Horizon: An American Saga.",
    "A storyteller who bets on himself — investing personal millions to bring bold visions to life.",
  ];
  return (
    <section className="about" id="about">
      <div className="sr">
        <div className="about-label">About</div>
        <h2 className="about-h">MORE THAN<br />A STAR —<br /><span>AN AMERICAN</span><br />VOICE</h2>
        <div className="about-pts">
          {pts.map((p, i) => (
            <div className="about-pt" key={i}>
              <span className="about-pt-n">0{i + 1}</span>
              <p className="about-pt-t">{p}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="about-right sr d1">
        <div className="about-body">
          <p>Kevin Michael Costner was born January 18, 1955, in Lynwood, California. A chance conversation with <strong>Richard Burton</strong> on a flight changed his life — Burton told him: if acting is what you want, go after it completely. Costner quit his marketing job and moved to Hollywood, driving trucks and giving tours until his first break arrived.</p>
          <p>His ascent was rapid: <strong>The Untouchables</strong> (1987), <strong>Bull Durham</strong> (1988), <strong>Field of Dreams</strong> (1989), and the crown jewel — <strong>Dances with Wolves</strong> (1990), which he directed, produced, and starred in, winning <strong>two Academy Awards</strong>. <strong>The Bodyguard</strong> (1992) with Whitney Houston became one of the highest-grossing films of the decade.</p>
          <p>After a mid-career renaissance with <strong>Hatfields &amp; McCoys</strong> (2012, Emmy Award) and the globally beloved <strong>Yellowstone</strong> (2018–2024, Golden Globe), he poured over <strong>$100 million of his own money</strong> into his magnum opus — <strong>Horizon: An American Saga</strong>. When not filming, he performs country rock with his band <strong>Modern West</strong>.</p>
        </div>
        <div className="about-tags">
          {["Academy Award Winner · 1991","Emmy Award · 2012","Golden Globe · 2023","Dances with Wolves · Director","Yellowstone · John Dutton","Horizon · $100M Self-Financed","Modern West · Band Leader"].map(t => (
            <span className="about-tag" key={t}>{t}</span>
          ))}
        </div>
        <a href="#filmo" className="about-link">
          Explore Filmography
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
      </div>
    </section>
  );
}
