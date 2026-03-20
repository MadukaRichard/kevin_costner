import { useState } from "react";

const DECADES = [
  { d:"1980s", c:8, f:["Sizzle Beach U.S.A. (1981)","Fandango (1985)","American Flyers (1985)","Silverado (1985)","No Way Out (1987)","The Untouchables (1987)","Bull Durham (1988)","Field of Dreams (1989)"] },
  { d:"1990s", c:11, f:["Dances with Wolves (1990)","Robin Hood: Prince of Thieves (1991)","JFK (1991)","The Bodyguard (1992)","A Perfect World (1993)","Wyatt Earp (1994)","Waterworld (1995)","Tin Cup (1996)","The Postman (1997)","Message in a Bottle (1999)","For Love of the Game (1999)"] },
  { d:"2000s", c:8, f:["Thirteen Days (2000)","Open Range (2003)","The Upside of Anger (2005)","The Guardian (2006)","Mr. Brooks (2007)","Swing Vote (2008)","The New Daughter (2009)"] },
  { d:"2010s", c:9, f:["The Company Men (2010)","Hatfields & McCoys (2012)","Man of Steel (2013)","Draft Day (2014)","McFarland, USA (2015)","Hidden Figures (2016)","Molly's Game (2017)","The Highwaymen (2019)"] },
  { d:"2020s", c:6, f:["Let Him Go (2020)","Yellowstone S5 (2022–23)","Horizon: An American Saga — Ch.1 (2024)","Horizon: An American Saga — Ch.2 (2024)","Kevin Costner's the West (2025)","Horizon: Ch.3 (In Production)"] },
];

const SIGS = [
  { n:"01", t:"DANCES WITH WOLVES",   d:"Directed & starred · 2× Academy Awards",  y:"1990" },
  { n:"02", t:"YELLOWSTONE",          d:"John Dutton · Golden Globe 2023",           y:"2018–24" },
  { n:"03", t:"THE BODYGUARD",        d:"With Whitney Houston · $411M worldwide",    y:"1992" },
  { n:"04", t:"FIELD OF DREAMS",      d:"\"If you build it, he will come\"",          y:"1989" },
  { n:"05", t:"THE UNTOUCHABLES",     d:"Eliot Ness · with De Niro & Connery",       y:"1987" },
];

const RECENT = [
  { y:"2025", type:"Documentary · Host", title:"Kevin Costner's the West",  desc:"Executive producer and host of the acclaimed 8-part frontier documentary series.",  hl:true },
  { y:"2025", type:"Epic Western · Filming", title:"Horizon: Chapter 3",     desc:"The ambitious four-part saga continues. Costner has invested $100M+ of his own money.", hl:false },
  { y:"2024", type:"Epic Western · Director", title:"Horizon: An American Saga", desc:"Two chapters premiered at Cannes 2024. A sweeping multi-generational story of westward expansion.", hl:false },
  { y:"2023", type:"TV Series · Final Season", title:"Yellowstone Season 5",  desc:"His final appearance as John Dutton in the Paramount hit that made him a TV legend.", hl:false },
];

const STRIP = [
  "https://resizing.flixster.com/0JlYLxHv7pgWu0c9sMlbB5H9_Ss=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11582_p_v8_ad.jpg",
  "https://variety.com/wp-content/uploads/2025/01/MSDBODY_WB002.jpg?w=1000&h=667&crop=1&resize=1920%2C1280",
  "https://m.media-amazon.com/images/M/MV5BNDA3NzA3MDYyOF5BMl5BanBnXkFtZTcwMzc0ODI1NA@@._V1_QL75_UX588_.jpg",
  "https://i0.wp.com/www.moviescramble.co.uk/wp-content/uploads/2014/09/Draft-Day-Kevin-Costner.jpg?w=550&ssl=1",
  "https://static0.moviewebimages.com/wordpress/wp-content/uploads/article/XF4X0vBqYO60NEg3imOSrqJtZ0TqgN.jpg?q=50&fit=crop&w=1120&h=630&dpr=1.5",
  "https://people.com/thmb/UW5PB-CFO91CQLcH8J_uiCJTTp8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/KEVIN-COSTNER-horizon-062424-7b4ba32b689a4644bf0ffa633b7c10a5.jpg",
];

export default function Discography() {
  const [dec, setDec] = useState(0);
  return (
    <section className="filmo" id="filmo">
      <div className="filmo-side">
        <div className="filmo-side-head">
          <div style={{ fontFamily:"var(--fm)",fontSize:".54rem",letterSpacing:".3em",textTransform:"uppercase",color:"var(--red)",display:"flex",alignItems:"center",gap:10,marginBottom:14 }}>
            <span style={{ display:"block",width:20,height:1,background:"var(--red)" }} />
            Filmography
          </div>
          <div className="filmo-side-title">50+<br />FILMS.<br />FOUR<br />DECADES.</div>
        </div>
        <div className="filmo-tabs">
          {DECADES.map((d, i) => (
            <button key={i} className={`ftab${dec === i ? " on" : ""}`} onClick={() => setDec(i)}>
              {d.d} <span>{d.c} films</span>
            </button>
          ))}
        </div>
      </div>
      <div className="filmo-main">
        {/* Film strip */}
        <div className="fstrip sr">
          <div className="fstrip-t">
            {[...STRIP,...STRIP].map((src, i) => (
              <div className="fstrip-f" key={i}>
                <img src={src} alt={`frame ${i}`} loading="lazy" />
                <span className="fstrip-fn">{String((i % STRIP.length)+1).padStart(2,"0")}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ fontFamily:"var(--fm)",fontSize:".54rem",letterSpacing:".3em",textTransform:"uppercase",color:"var(--red)",display:"flex",alignItems:"center",gap:10,marginBottom:16 }} className="sr">
          <span style={{ display:"block",width:20,height:1,background:"var(--red)" }} />
          Films of the {DECADES[dec].d}
        </div>
        <div className="flist sr d1">
          {DECADES[dec].f.map((f, i) => (
            <div className="frow" key={`${dec}-${i}`} style={{ animationDelay:`${i*.055}s` }}>
              <span className="fi">{String(i+1).padStart(2,"0")}</span>
              <span className="fn">{f}</span>
              <span className="fl" />
            </div>
          ))}
        </div>

        <div style={{ fontFamily:"var(--fm)",fontSize:".54rem",letterSpacing:".3em",textTransform:"uppercase",color:"var(--red)",display:"flex",alignItems:"center",gap:10,margin:"48px 0 16px" }} className="sr">
          <span style={{ display:"block",width:20,height:1,background:"var(--red)" }} />
          Signature Roles
        </div>
        <div className="sigs sr d1">
          {SIGS.map((s, i) => (
            <div className="sig" key={i}>
              <span className="sig-n">{s.n}</span>
              <div className="sig-b">
                <span className="sig-t">{s.t}</span>
                <span className="sig-d">{s.d}</span>
              </div>
              <span className="sig-y">{s.y}</span>
            </div>
          ))}
        </div>

        <div style={{ fontFamily:"var(--fm)",fontSize:".54rem",letterSpacing:".3em",textTransform:"uppercase",color:"var(--red)",display:"flex",alignItems:"center",gap:10,margin:"48px 0 16px" }} className="sr">
          <span style={{ display:"block",width:20,height:1,background:"var(--red)" }} />
          Recent Work · 2023–2025
        </div>
        <div className="recent sr d1">
          {RECENT.map((r, i) => (
            <div className={`rc${r.hl?" hl":""}`} key={i}>
              <div className="rc-y">{r.y}</div>
              <div className="rc-type">{r.type}</div>
              <div className="rc-title">{r.title}</div>
              <div className="rc-desc">{r.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
