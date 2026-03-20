/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import "./App.css";
// @ts-ignore
import Navbar from "./components/Navbar";
// @ts-ignore
import Hero from "./components/Hero";
// @ts-ignore
import About from "./components/About";
// @ts-ignore
import Discography from "./components/Discography";
// @ts-ignore
import FanCard from "./components/FanCard";
// @ts-ignore
import MeetGreet from "./components/MeetGreet";
// @ts-ignore
import Footer from "./components/Footer";

const AWARDS: string[] = [
  "Academy Award — Best Picture · Dances with Wolves",
  "Academy Award — Best Director · Dances with Wolves",
  "Emmy Award — Outstanding Lead Actor · Hatfields & McCoys",
  "Golden Globe — Best Actor Drama · Yellowstone",
  "Screen Actors Guild Award · Hidden Figures Cast",
];

const SERVICES: { num: string; title: string; body: string }[] = [
  { num:"01", title:"Film & Television", body:"50+ films, five directorial features, two Emmy-winning TV performances. A career built on American stories told with extraordinary conviction." },
  { num:"02", title:"Brand Collaborations", body:"Authentic partnerships with brands that reflect Kevin's values — authenticity, the American West, rugged craftsmanship, and family legacy." },
  { num:"03", title:"Modern West Music", body:"Kevin leads country-rock band Modern West. Available for soundtrack licensing, live performance partnerships, and music collaborations." },
];

const STATS: { n: string; l: string; red: boolean }[] = [
  { n:"50+",   l:"Films & TV Credits",     red: false },
  { n:"2",     l:"Academy Awards",          red: true  },
  { n:"1",     l:"Emmy Award",              red: true  },
  { n:"1",     l:"Golden Globe",            red: true  },
  { n:"$100M+",l:"Self-Financed Horizon",   red: false },
];

export default function App() {
  const [theme, setTheme] = useState<string>("dark");
  const curRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse   = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const ring    = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const raf     = useRef<number>(0);

  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Custom cursor
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (curRef.current) {
        curRef.current.style.left = e.clientX + "px";
        curRef.current.style.top  = e.clientY + "px";
      }
    };
    const loop = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.1;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + "px";
        ringRef.current.style.top  = ring.current.y + "px";
      }
      raf.current = requestAnimationFrame(loop);
    };
    const onEnter = () => document.body.classList.add("hov");
    const onLeave = () => document.body.classList.remove("hov");
    window.addEventListener("mousemove", onMove);
    document.querySelectorAll("a,button").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });
    raf.current = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  // Scroll reveal
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("vis"); }),
      { threshold: 0.07 }
    );
    document.querySelectorAll(".sr").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <div id="grain" />
      <div id="cur"   ref={curRef}  />
      <div id="cur-r" ref={ringRef} />

      {/* Viewfinder corners */}
      <div id="corners">
        <div className="corner tl" />
        <div className="corner tr" />
        <div className="corner bl" />
        <div className="corner br" />
      </div>

      <Navbar theme={theme} onToggleTheme={() => setTheme((t: string) => t === "dark" ? "light" : "dark")} />
      <Hero />

      {/* Awards ticker */}
      <div style={{ background:"var(--red)", padding:"13px 0", overflow:"hidden", borderTop:"1px solid rgba(200,41,26,.4)" }}>
        <div style={{ display:"flex", width:"max-content", animation:"at 28s linear infinite" }}>
          {[...AWARDS, ...AWARDS].map((a: string, i: number) => (
            <div
              key={i}
              style={{ display:"flex", alignItems:"center", gap:10, padding:"0 36px", fontFamily:"var(--fb)", fontSize:".64rem", fontWeight:600, letterSpacing:".16em", textTransform:"uppercase", color:"#fff", whiteSpace:"nowrap", borderRight:"1px solid rgba(255,255,255,.2)" }}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity:.7 }}>
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              {a}
            </div>
          ))}
        </div>
        <style>{`@keyframes at{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
      </div>

      <About />

      {/* Stats band */}
      <div className="stats">
        {STATS.map(({ n, l, red }) => (
          <div className={`stat${red ? " stat-red" : ""} sr`} key={l}>
            <span className="stat-n">{n}</span>
            <span className="stat-l">{l}</span>
          </div>
        ))}
      </div>

      <Discography />
      <FanCard />
      <MeetGreet />

      {/* Story */}
      <section className="story" id="story">
        <div className="story-bg">
          <img
            src="https://m.gettywallpapers.com/wp-content/uploads/2024/09/Kevin-Costner-Background-Images.jpg"
            alt="Kevin Costner"
          />
        </div>
        <div className="story-content sr">
          <div className="story-label">The Story</div>
          <h2 className="story-h">THE MAN BEHIND<br /><span>THE LEGEND</span></h2>
          <div className="story-body">
            <p>Kevin Costner grew up moving across California, always the new kid, building quiet resolve that would define his on-screen presence for four decades. A chance meeting with <strong>Richard Burton</strong> changed everything — Burton told him: if acting is what you want, go after it completely.</p>
            <p>After years of odd jobs and near-misses (his scenes were famously cut from <strong>The Big Chill</strong>), Costner became one of the <strong>biggest stars of the late 80s and 90s</strong>. He has never stopped betting on himself — investing personal millions into passion projects, writing scripts, directing, producing, and performing with band <strong>Modern West</strong>.</p>
            <p>Today at 71, he remains one of Hollywood's most iconic figures. <strong>Horizon: An American Saga</strong>, his magnum opus, continues filming. His legacy is one of extraordinary ambition, creative courage, and an unshakeable love for American storytelling.</p>
          </div>
          <div className="story-tags">
            {["Lynwood, California · 1955","Cal State Fullerton · Business","Dances with Wolves · Director","Yellowstone · John Dutton","Modern West · Musician","Horizon · $100M Passion Project"].map((t: string) => (
              <span className="story-tag" key={t}>{t}</span>
            ))}
          </div>
          <a
            href="#filmo"
            style={{ display:"inline-flex", alignItems:"center", gap:9, fontFamily:"var(--fb)", fontSize:".68rem", fontWeight:600, letterSpacing:".18em", textTransform:"uppercase", color:"var(--red)", borderBottom:"1px solid rgba(200,41,26,.35)", paddingBottom:3, cursor:"none" }}
          >
            Explore Filmography
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>
        <div className="story-creds">
          {([ ["4+","Decades of Film"], ["50+","Credits"], ["2","Oscars"], ["71","Age 2026"] ] as [string,string][]).map(([n, l]) => (
            <div className="cred" key={l}>
              <span className="cred-n">{n}</span>
              <span className="cred-l">{l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="svcs" id="svcs">
        <div className="svcs-in">
          <div className="svcs-head sr">
            <div>
              <div style={{ fontFamily:"var(--fm)", fontSize:".54rem", letterSpacing:".3em", textTransform:"uppercase", color:"var(--red)", display:"flex", alignItems:"center", gap:10, marginBottom:14 }}>
                <span style={{ display:"block", width:20, height:1, background:"var(--red)" }} />Services
              </div>
              <div className="svcs-h">BEYOND<br /><span>THE SCREEN</span></div>
            </div>
            <p className="svcs-desc">Kevin Costner's work extends far beyond acting. As a director, producer, musician, and collaborator, he brings the same commitment to every project he touches.</p>
          </div>
          <div className="svcs-grid">
            {SERVICES.map((s, i: number) => (
              <div className={`svc sr d${i}`} key={i}>
                <div className="svc-num">{s.num}</div>
                <div className="svc-title">{s.title}</div>
                <div className="svc-body">{s.body}</div>
                <div className="svc-arr">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="quote sr">
        <div className="q-bg">COSTNER</div>
        <span className="q-mark">"</span>
        <p className="q-text">I THINK THE MISTAKES ARE WHAT MAKE US MORE THOUGHTFUL. THE LIFE I'VE LED — THE EXPERIENCES, THE FILMS, THE FAMILY — I WOULDN'T TRADE ANY OF IT.</p>
        <div className="q-by">— Kevin Costner</div>
      </section>

      {/* Contact */}
      <section className="contact" id="contact">
        <div className="contact-l sr">
          <div className="contact-label">Contact us</div>
          <h2 className="contact-h">DROP US<br /><span>A LINE!</span></h2>
          <p className="contact-p">Whether it's a collaboration, film booking, brand partnership, press inquiry, or licensing — reach out and let's create something extraordinary together.</p>
        </div>
        <div className="cf sr d1">
          <div className="cf-row">
            <input placeholder="Your name" />
            <input placeholder="Your email" />
          </div>
          <input placeholder="Subject" />
          <textarea placeholder="Tell us about your project..." />
          <a href="mailto:kevincostner590124@gmail.com" className="cf-btn">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
            Send Message
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
