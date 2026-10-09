/**
 * Interações da Home — motion dos Design Systems, sem dependências.
 * Hero (ds3): abertura em cortina + entrada mascarada (classe .go no <html>).
 * Restante (ds2): reveals, títulos por palavra, tom global por scroll,
 * cena do manifesto, parallax do destaque, painéis, spotlight e botões magnéticos.
 */

const html = document.documentElement;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const qs = <T extends Element = HTMLElement>(s: string, c: ParentNode = document) => c.querySelector<T>(s);
const qsa = <T extends Element = HTMLElement>(s: string, c: ParentNode = document) => Array.from(c.querySelectorAll<T>(s));
const clamp = (v: number) => Math.min(1, Math.max(0, v));

/* ---------- Títulos divididos em palavras (preserva spans .grad) ---------- */
qsa('[data-split], [data-words]').forEach((el) => {
  let i = 0;
  const words = el.hasAttribute('data-words');
  const walk = (node: Node) => {
    Array.from(node.childNodes).forEach((n) => {
      if (n.nodeType === Node.TEXT_NODE) {
        const frag = document.createDocumentFragment();
        (n.textContent ?? '').split(/(\s+)/).forEach((w) => {
          if (!w) return;
          if (/^\s+$/.test(w)) {
            frag.appendChild(document.createTextNode(' '));
            return;
          }
          const s = document.createElement('span');
          if (words) {
            s.className = 'w';
            s.style.setProperty('--i', String(i++));
            s.textContent = w;
          } else {
            const inner = document.createElement('span');
            inner.textContent = w;
            inner.style.setProperty('--i', String(i++));
            if (node !== el) inner.className = (node as Element).className;
            s.className = 'wm';
            s.appendChild(inner);
          }
          frag.appendChild(s);
        });
        n.parentNode?.replaceChild(frag, n);
      } else if (n.nodeType === Node.ELEMENT_NODE) walk(n);
    });
  };
  walk(el);
  qsa('.wm', el).forEach((w) => {
    const p = w.parentElement;
    if (p && p !== el && p.classList.contains('grad')) p.classList.remove('grad');
  });
});

/* ---------- Abertura: contador 000→100, cortinas se dividem, Hero entra ---------- */
let opened = false;
const open = () => {
  if (opened) return;
  opened = true;
  html.classList.add('go', 'is-open');
  html.classList.remove('loading');
  try {
    sessionStorage.setItem('q-intro', '1');
  } catch {
    /* armazenamento indisponível: a abertura volta a rodar na próxima visita */
  }
  const loader = qs('.loader');
  if (loader) {
    loader.classList.add('out');
    setTimeout(() => loader.remove(), 1100);
  }
};
const loader = qs('.loader');
if (html.classList.contains('loading') && loader) {
  const count = qs('.loader-count', loader);
  const dur = reduce ? 300 : 1800;
  const t0 = performance.now();
  const tick = (now: number) => {
    const p = clamp((now - t0) / dur);
    if (count) count.textContent = String(Math.round(p * 100)).padStart(3, '0');
    if (p < 1) requestAnimationFrame(tick);
    else setTimeout(open, reduce ? 0 : 350);
  };
  requestAnimationFrame(tick);
} else {
  loader?.remove();
  requestAnimationFrame(() => requestAnimationFrame(open));
}

/* ---------- Reveals (IntersectionObserver · threshold .2 · −10%) ---------- */
const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    }),
  { threshold: 0.2, rootMargin: '0px 0px -10% 0px' },
);
qsa('.rv, [data-split], .clip').forEach((el) => io.observe(el));

/* ---------- Motor de scroll único (rAF): tom da página, cena, parallax, progresso ---------- */
const tones = qsa('[data-tone]');
const toneOf = (el: HTMLElement, entering = false) => +((entering && el.dataset.toneIn) || el.dataset.tone || 0);
const firstTone = tones.length ? toneOf(tones[0], true) : 1;
const scene = qs('[data-scene]');
const pars = qsa('[data-par]');
const progress = qs('.progress');
const nav = qs('#nav');
let ticking = false;

const update = () => {
  ticking = false;
  const H = innerHeight;
  let r: DOMRect;

  /* tom: ao entrar uma dobra (topo de 100% → 40% da tela) o tom vai do anterior ao dela */
  let k = -1;
  const tops = tones.map((el, i) => {
    const t = el.getBoundingClientRect().top;
    if (t <= H) k = i;
    return t;
  });
  let tone = firstTone;
  if (k >= 0) {
    const a = k ? toneOf(tones[k - 1]) : firstTone;
    const b = toneOf(tones[k], true);
    tone = a + (b - a) * clamp((H - tops[k]) / (H * 0.6));
  }
  html.style.setProperty('--t', tone.toFixed(3));
  html.style.setProperty('--ti', clamp((tone - 0.42) / 0.16).toFixed(3));

  if (scene && !reduce) {
    r = scene.getBoundingClientRect();
    if (r.top < H && r.bottom > 0) scene.style.setProperty('--p', clamp(-r.top / (r.height - H)).toFixed(4));
    else scene.style.setProperty('--p', r.top >= H ? '0' : '1');
  }
  pars.forEach((el) => {
    r = el.getBoundingClientRect();
    if (r.top < H && r.bottom > 0) el.style.setProperty('--ip', clamp((H - r.top) / (H * 0.85)).toFixed(3));
  });
  if (progress) {
    const max = document.documentElement.scrollHeight - H;
    progress.style.transform = `scaleX(${clamp(max > 0 ? scrollY / max : 0).toFixed(4)})`;
  }
  nav?.classList.toggle('scrolled', scrollY > 40);
};
addEventListener('scroll', () => {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(update);
  }
}, { passive: true });
addEventListener('resize', update);
update();

/* ---------- Link ativo na nav ---------- */
const navLinks = qsa<HTMLAnchorElement>('[data-nav-link]');
const sio = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) navLinks.forEach((a) => a.classList.toggle('on', a.hash === `#${e.target.id}`));
    }),
  { rootMargin: '-45% 0px -50% 0px' },
);
qsa('main > section[id]').forEach((s) => sio.observe(s));

/* ---------- Menu: painel mobile + submenu "Soluções" ---------- */
const menuBtn = qs('[data-menu-toggle]');
const subs = qsa('.has-sub');
const closeSubs = () =>
  subs.forEach((li) => {
    li.classList.remove('open');
    qs('[data-sub-toggle]', li)?.setAttribute('aria-expanded', 'false');
  });
const setMenu = (on: boolean) => {
  if (!nav || !menuBtn) return;
  nav.classList.toggle('open', on);
  menuBtn.setAttribute('aria-expanded', String(on));
  menuBtn.setAttribute('aria-label', on ? 'Fechar menu' : 'Abrir menu');
};
menuBtn?.addEventListener('click', () => setMenu(!nav?.classList.contains('open')));
qsa('[data-sub-toggle]').forEach((btn) =>
  btn.addEventListener('click', () => {
    const li = btn.closest('.has-sub');
    if (!li) return;
    const on = !li.classList.contains('open');
    closeSubs();
    li.classList.toggle('open', on);
    btn.setAttribute('aria-expanded', String(on));
  }),
);
qsa('#menu a').forEach((a) =>
  a.addEventListener('click', () => {
    setMenu(false);
    closeSubs();
  }),
);
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  if (nav?.classList.contains('open')) menuBtn?.focus();
  setMenu(false);
  closeSubs();
});
document.addEventListener('click', (e) => {
  if (nav && !nav.contains(e.target as Node)) {
    setMenu(false);
    closeSubs();
  }
});

/* ---------- Painéis do processo: expandem por hover, foco ou toque ---------- */
const panels = qsa('[data-panels] .panel');
panels.forEach((p) =>
  ['mouseenter', 'focus', 'click'].forEach((ev) =>
    p.addEventListener(ev, () => panels.forEach((x) => x.classList.toggle('on', x === p))),
  ),
);

/* ---------- Spotlight segue o cursor ---------- */
qsa('[data-spot]').forEach((el) =>
  el.addEventListener('mousemove', (e) => {
    const b = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${((e.clientX - b.left) / b.width) * 100}%`);
    el.style.setProperty('--my', `${((e.clientY - b.top) / b.height) * 100}%`);
  }),
);

/* ---------- Botões magnéticos (força 10px, lerp .18) — só desktop com mouse ---------- */
if (!reduce && matchMedia('(min-width: 1024px) and (hover: hover)').matches) {
  qsa('[data-mag]').forEach((el) => {
    let tx = 0, ty = 0, cx = 0, cy = 0, raf = 0;
    const loop = () => {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      el.style.translate = `${cx.toFixed(2)}px ${cy.toFixed(2)}px`;
      raf = Math.abs(tx - cx) > 0.05 || Math.abs(ty - cy) > 0.05 ? requestAnimationFrame(loop) : 0;
    };
    el.addEventListener('mousemove', (e) => {
      const b = el.getBoundingClientRect();
      tx = ((e.clientX - b.left - b.width / 2) / (b.width / 2)) * 10;
      ty = ((e.clientY - b.top - b.height / 2) / (b.height / 2)) * 10;
      if (!raf) raf = requestAnimationFrame(loop);
    });
    el.addEventListener('mouseleave', () => {
      tx = ty = 0;
      if (!raf) raf = requestAnimationFrame(loop);
    });
  });
}
