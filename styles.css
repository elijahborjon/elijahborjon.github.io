/* =========================================================
   Design tokens
========================================================= */
:root{
  --bg-green:#0f2f1a;
  --bg-green-2:#103714;
  --oat:#f3efe6;
  --oat-2:#efe7d8;
  --text:#0b1c10;
  --muted:#3f4f46;
  --white:#ffffff;
  --divider:rgba(15,47,26,.14);
  --shadow:0 18px 50px rgba(0,0,0,.15);
  --radius:16px;
  --radius-lg:24px;
  --neon:#d7ff47;
  --mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
  --sans:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;
}

/* =========================================================
   Base reset
========================================================= */
*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0;
  font-family:var(--sans);
  color:var(--text);
  background:#fff;
  overflow-x:hidden;
}
a{color:inherit;text-decoration:none}
.container{
  width:min(1100px,calc(100% - 48px));
  margin:0 auto;
}
.mono{font-family:var(--mono);font-weight:600;letter-spacing:.02em}

/* =========================================================
   GLOBAL SAFETY: hidden always means hidden
========================================================= */
[hidden]{display:none!important}

/* =========================================================
   Announcement bar
========================================================= */
.announce{
  position:sticky;
  top:0;
  z-index:60;
  background:var(--oat);
  border-bottom:1px solid var(--divider);
}
.announce-inner{
  width:min(1100px,calc(100% - 48px));
  margin:0 auto;
  display:flex;
  gap:12px;
  align-items:center;
  padding:10px 0;
}
.announce-pill{
  font-family:var(--mono);
  font-size:12px;
  padding:4px 8px;
  border-radius:999px;
  background:var(--bg-green-2);
  color:#fff;
}
.announce-text{font-size:14px;color:var(--muted)}
.announce-link{
  margin-left:auto;
  font-size:14px;
  color:var(--bg-green-2);
}

/* =========================================================
   Header
========================================================= */
.header{
  position:sticky;
  top:45px;
  z-index:50;
  background:rgba(255,255,255,.9);
  backdrop-filter:blur(10px);
  border-bottom:1px solid var(--divider);
}
.header-nav{
  width:min(1100px,calc(100% - 48px));
  margin:0 auto;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:14px 0;
}
.logo{
  display:flex;
  align-items:center;
  gap:10px;
}
.logo-mark{
  width:34px;height:34px;
  border-radius:10px;
  background:var(--bg-green-2);
  color:#fff;
  display:grid;
  place-items:center;
  font-weight:800;
}
.header-links{display:flex;gap:18px}
.navlink{
  padding:8px 10px;
  border-radius:999px;
}
.navlink:hover{background:rgba(15,47,26,.06)}
.navlink.is-active{background:rgba(15,47,26,.1)}
.header-cta{display:flex;gap:10px}

/* =========================================================
   Buttons
========================================================= */
.btn{
  display:inline-flex;
  align-items:center;
  gap:8px;
  padding:10px 14px;
  border-radius:999px;
  font-weight:700;
  border:1px solid transparent;
  transition:.15s ease;
}
.btn-dark{background:var(--bg-green-2);color:#fff}
.btn-neon{background:var(--neon);color:var(--bg-green-2)}
.btn-light{background:var(--oat);border-color:rgba(16,55,20,.18)}
.btn-outline{background:none;border-color:rgba(16,55,20,.22)}

/* =========================================================
   Sections
========================================================= */
.section{padding:70px 0}
.section-oat{background:linear-gradient(180deg,var(--oat),#fff)}
.hero{
  background:var(--bg-green-2);
  color:#fff;
  padding:70px 0 60px;
}
.hero-grid{
  display:grid;
  grid-template-columns:1.05fr .95fr;
  gap:42px;
}
.display{
  font-weight:900;
  line-height:.95;
  font-size:clamp(42px,6vw,72px);
}
.hero-p{max-width:58ch;line-height:1.6}

/* =========================================================
   Cards
========================================================= */
.grid-3{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:16px;
}
.card{
  border:1px solid var(--divider);
  border-radius:var(--radius);
  padding:18px;
  background:#fff;
  transition:.18s ease;
}
.card:hover{
  transform:translateY(-2px);
  box-shadow:0 18px 40px rgba(0,0,0,.1);
}

/* =========================================================
   Lightbox (SAFE)
========================================================= */
.lightbox{
  position:fixed;
  inset:0;
  background:rgba(0,0,0,.72);
  display:grid;
  place-items:center;
  z-index:9998;
}
.lightbox-img{
  max-width:min(1100px,100%);
  max-height:86vh;
  border-radius:var(--radius-lg);
}
.lightbox-close{
  position:absolute;
  top:18px;
  right:18px;
  width:44px;
  height:44px;
  font-size:22px;
}

/* =========================================================
   CUSTOM CURSOR — STABLE VERSION
========================================================= */
body{cursor:none}

.cursor{
  position:fixed;
  top:0;
  left:0;
  width:22px;
  height:22px;
  border-radius:50%;
  background:rgba(140,140,140,.25);
  border:1px solid rgba(140,140,140,.6);
  pointer-events:none;
  transform:translate(-50%,-50%);
  z-index:10000;
  transition:width .2s,height .2s,opacity .2s;
}
.cursor.is-hover{
  width:42px;
  height:42px;
}
.cursor.is-hidden{opacity:0}

/* Disable fake cursor on touch */
@media (pointer:coarse){
  body{cursor:auto}
  .cursor{display:none}
}

/* =========================================================
   Responsive
========================================================= */
@media (max-width:980px){
  .hero-grid{grid-template-columns:1fr}
  .grid-3{grid-template-columns:1fr}
  .header-cta{display:none}
}
