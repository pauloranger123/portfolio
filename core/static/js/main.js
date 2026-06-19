/* ── NAV MOBILE ───────────────────────────────────── */
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
toggle?.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

/* ── SKILL BARS ON SCROLL ─────────────────────────── */
const fills = document.querySelectorAll('.skill-fill');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const el = e.target;
      el.style.width = el.dataset.width + '%';
      observer.unobserve(el);
    }
  });
}, { threshold: 0.3 });
fills.forEach(f => observer.observe(f));

/* ── TERMINAL TYPEWRITER ──────────────────────────── */
const lines = [
  { type: 'prompt', text: 'docker build -t modelo-ia:latest .' },
  { type: 'out',    text: '✔  Successfully built 3f9a2c1d' },
  { type: 'prompt', text: 'docker run --gpus all modelo-ia:latest' },
  { type: 'out',    text: '✔  Epoch 50/50 — accuracy: 97.4%' },
  { type: 'prompt', text: 'git push origin main' },
  { type: 'out',    text: '✔  Branch main atualizada com sucesso' },
  { type: 'prompt', text: 'ssh user@servidor && ./deploy.sh' },
  { type: 'out',    text: '🚀 Deploy concluído em produção!' },
];

const body = document.querySelector('.terminal-body');
if (body) {
  body.innerHTML = '';
  let li = 0, ci = 0;

  function addChar() {
    if (li >= lines.length) return;
    const line = lines[li];

    if (ci === 0) {
      const row = document.createElement('div');
      row.style.lineHeight = '1.9';
      if (line.type === 'prompt') {
        row.innerHTML = `<span class="t-prompt">~/dev $</span> <span class="t-cmd" data-line="${li}"></span>`;
      } else {
        row.innerHTML = `<span class="t-out" data-line="${li}"></span>`;
      }
      body.appendChild(row);
    }

    const span = body.querySelector(`[data-line="${li}"]`);
    if (span && ci < line.text.length) {
      span.textContent += line.text[ci];
      ci++;
      setTimeout(addChar, line.type === 'prompt' ? 32 : 18);
    } else {
      li++; ci = 0;
      const pause = line.type === 'prompt' ? 320 : 220;
      setTimeout(addChar, pause);
    }
  }

  setTimeout(addChar, 500);
}

/* ── SMOOTH ACTIVE NAV ────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navAs = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) cur = s.id; });
  navAs.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + cur ? 'var(--orange)' : '';
  });
}, { passive: true });
