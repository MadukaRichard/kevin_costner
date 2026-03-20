import { useState, useEffect } from "react";

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [gal, setGal] = useState(false);
  const [sc, setSc] = useState(false);

  useEffect(() => {
    const fn = () => setSc(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close mobile menu on ESC
  useEffect(() => {
    const fn = (e) => { if (e.key === "Escape") { setOpen(false); setGal(false); } };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open || gal ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open, gal]);

  const close = () => { setOpen(false); setGal(false); };

  const links = [
    { label: "About Us", href: "#about" },
    { label: "Filmography", href: "#filmo" },
    { label: "Story", href: "#story" },
    { label: "Services", href: "#svcs" },
  ];

  const imgs = [
    { src: "https://thumbs.dreamstime.com/b/actor-kevin-costner-lax-airport-20838338.jpg?w=576", cap: "Kevin Costner · 2011" },
    { src: "https://m.gettywallpapers.com/wp-content/uploads/2024/09/Kevin-Costner-Wallpaper-1920x1080-1.jpg", cap: "Cannes Film Festival" },
    { src: "https://m.gettywallpapers.com/wp-content/uploads/2024/09/Kevin-Costner-Wallpaper-8k.jpg", cap: "Press · Kevin Costner" },
    { src: "https://m.gettywallpapers.com/wp-content/uploads/2024/09/Kevin-Costner-Computer-Wallpaper.jpg", cap: "Kevin Costner · 2009" },
    { src: "https://m.gettywallpapers.com/wp-content/uploads/2024/09/Kevin-Costner-Wallpaper-4k.jpg", cap: "Kevin Costner · 2018" },
    { src: "https://m.gettywallpapers.com/wp-content/uploads/2024/09/Kevin-Costner-Wallpapers.jpg", cap: "Dances with Wolves · 1990" },
  ];

  return (
    <>
      {/* ── DESKTOP NAV ── */}
      <nav className={`nav${sc ? " sc" : ""}`}>
        {/* Logo */}
        <div className="nav-logo">
          <div className="nav-logo-box">
            KC
            <div className="nav-logo-dot" />
          </div>
        </div>

        {/* Center links — hidden on mobile */}
        <div className="nav-links">
          {links.map(l => <a key={l.href} href={l.href} onClick={close}>{l.label}</a>)}
          <button
            className="nav-gal-btn"
            onClick={() => setGal(true)}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" rx="1"/>
              <rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/>
              <rect x="14" y="14" width="7" height="7" rx="1"/>
            </svg>
            Gallery
          </button>
        </div>

        {/* Right side */}
        <div className="nav-r">
          {/* Theme toggle — always visible */}
          <button className="nav-th" onClick={onToggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? "☀" : "☾"}
          </button>
          {/* Get in touch — hidden on small mobile */}
          <div className="nav-dot" />
          <a href="#contact" className="nav-cta" onClick={close}>Get In Touch</a>
          {/* Hamburger — shown on mobile */}
          <button
            className={`nav-burg${open ? " open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* ── MOBILE FULL-SCREEN MENU ── */}
      <div className={`mob${open ? " on" : ""}`} aria-hidden={!open}>
        <div className="mob-links">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
          ))}
          <a href="#contact" onClick={close}>Get In Touch</a>
          <button
            className="mob-gal-btn"
            onClick={() => { setOpen(false); setGal(true); }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" rx="1"/>
              <rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/>
              <rect x="14" y="14" width="7" height="7" rx="1"/>
            </svg>
            Gallery
          </button>
        </div>
        {/* Theme toggle inside mobile menu */}
        <button className="mob-theme-btn" onClick={() => { onToggleTheme(); }}>
          {theme === "dark"
            ? <><span>☀</span> Switch to Light Mode</>
            : <><span>☾</span> Switch to Dark Mode</>
          }
        </button>
      </div>

      {/* ── GALLERY OVERLAY ── */}
      {gal && (
        <div className="gal-ov" onClick={() => setGal(false)}>
          <div className="gal-panel" onClick={e => e.stopPropagation()}>
            <div className="gal-hdr">
              <div>
                <div className="gal-hdr-tag">Visual Archive</div>
                <h3 className="gal-title">Gallery</h3>
              </div>
              <button className="gal-cls" onClick={() => setGal(false)} aria-label="Close gallery">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
            <div className="gal-grid">
              {imgs.map((img, i) => (
                <div className="gal-item" key={i}>
                  <img src={img.src} alt={img.cap} loading="lazy" />
                  <div className="gal-cap">{img.cap}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
