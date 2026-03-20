import { useEffect, useState, useRef } from "react";

const PANELS = [
  { src: "https://wallpapers.com/images/high/kevin-costner-smile-hf22126mb0w9yg3g.webp", red: false },
  { src: "https://wallpapers.com/images/high/kevin-costner-the-untouchables-poster-gp1wii5k2c34bbos.webp", red: false },
  { src: "https://wallpapers.com/images/high/kevin-costner-oscar-awards-1991-oeh5siv629bej78h.webp", red: true },
  { src: "https://wallpapers.com/images/high/kevin-costner-as-robin-hood-uomygnhd1w2cf26n.webp", red: false },
  { src: "https://wallpapers.com/images/high/kevin-costner-celebrity-portrait-9cdlwo6x6to77pyq.webp", red: true },
  { src: "https://wallpapers.com/images/high/kevin-costner-yellowstone-4-cast-v091ddk5axdi71ze.webp", red: false },
];

export default function Hero() {
  const [time, setTime] = useState("");
  const [offset, setOffset] = useState(0);
  const panelRef = useRef(null);
  const animRef = useRef(null);
  const speedRef = useRef(0.4);
  const posRef = useRef(0);

  // Live clock
  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // Auto-scrolling carousel panels
  useEffect(() => {
    const loop = () => {
      posRef.current += speedRef.current;
      const panelW = 220; // approx panel width + gap
      const total = PANELS.length * panelW;
      if (posRef.current > total / 2) posRef.current = 0;
      setOffset(posRef.current);
      animRef.current = requestAnimationFrame(loop);
    };
    animRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <section className="hero" id="hero">
      {/* Red glow bleeds */}
      <div className="hero-glow-l" />
      <div className="hero-glow-r" />
      <div className="hero-fade-t" />
      <div className="hero-fade-b" />

      {/* Vertical right text */}
      <div className="hero-vert">Lynwood, California · Born 1955 · American Legend</div>

      {/* Big title */}
      <h1 className="hero-title">Kevin Costner</h1>

      {/* Image panels — carousel */}
      <div className="hero-panels" ref={panelRef} style={{ overflow: "hidden" }}>
        <div style={{ display: "flex", gap: 6, transform: `translateX(-${offset}px)`, willChange: "transform", width: "max-content" }}>
          {[...PANELS, ...PANELS].map((p, i) => (
            <div
              key={i}
              className={`hero-panel${p.red ? " red-tint" : ""}`}
              style={{ width: 210, flexShrink: 0 }}
            >
              <img src={p.src} alt={`Kevin Costner frame ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {/* Tagline */}
      <p className="hero-tagline">
        ACADEMY AWARD WINNER · GOLDEN GLOBE · EMMY AWARD WINNER.<br />
        ACTOR, DIRECTOR, PRODUCER. AN AMERICAN ICON.
      </p>

      {/* Countdown — 3..2..1..0..1..2..3 */}
      <div className="hero-countdown">
        3 . . 2 . . 1 . . 0 . . 1 . . 2 . . 3
        <div className="hero-countdown-bar" />
      </div>

      {/* Bottom bar */}
      <div className="hero-bottom">
        <div className="hero-lang">
          <span className="active">EN</span>
          <span>ES</span>
        </div>
        <div className="hero-clock">{time}</div>
      </div>
    </section>
  );
}
