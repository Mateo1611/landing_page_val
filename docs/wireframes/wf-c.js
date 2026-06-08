/* DIRECTION C — "El Editorial" · typographic, chaptered, side index, cinematic rows */
(function () {
  const { ph, tl, btn, chips, kick, hl, note, sec, num } = WF;

  // ---- minimal topbar + side index ----
  const topbar = `<header class="nav" data-screen-label="00 Header / Topbar" style="padding:18px 48px;border-bottom:1px dashed var(--hair-2);">
    <div class="logo">VAL<i>.</i></div>
    <div style="margin-left:auto;font-family:var(--mono);font-size:.7rem;letter-spacing:.18em;color:var(--muted);text-transform:uppercase;display:flex;align-items:center;gap:9px;"><span style="width:8px;height:8px;border-radius:50%;background:var(--amber);"></span>REC · 2026 · MED</div>
    <div style="margin-left:24px;">${btn('Cotizar proyecto', true, 'sm')}</div></header>`;
  const sideindex = `<nav style="position:absolute;top:120px;right:18px;z-index:6;display:flex;flex-direction:column;gap:11px;align-items:flex-end;">
    ${['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'].map((n, i) => `<div style="display:flex;align-items:center;gap:8px;">${i === 0 ? `<span style="font-family:var(--mono);font-size:.58rem;color:var(--amber);letter-spacing:.1em;">PORTADA</span>` : ''}<span style="display:block;width:${i === 0 ? 28 : 18}px;height:1.5px;background:${i === 0 ? 'var(--amber)' : 'var(--hair-2)'};"></span></div>`).join('')}
  </nav>`;

  // ---- HERO typographic ----
  const hero = sec('02', 'Hero · tipográfico', `
    <div class="lb" style="position:relative;min-height:600px;display:flex;flex-direction:column;justify-content:center;padding:80px 0;">
      <div style="font-family:var(--mono);font-size:.7rem;letter-spacing:.22em;color:var(--amber);text-transform:uppercase;margin-bottom:24px;">Estudio audiovisual · 2.39 : 1</div>
      <div class="hl" style="font-size:118px;line-height:.9;letter-spacing:-.04em;">IMPOSIBLE<br>DE <em>IGNORAR.</em></div>
      <div class="row jcb aic wrap gap24 mt40">
        <div class="lead" style="max-width:40ch;">Historias visuales que mueven marcas, eventos y proyectos. Una sola página, como un tráiler.</div>
        <div class="row gap12">${btn('Cotizar proyecto →', true, 'lg')}${btn('Ver portafolio', false, 'lg')}</div>
      </div>
      <div style="position:absolute;top:90px;right:0;width:230px;">${ph('REEL · 02:14', { ar: '9/16', play: true, cls: 'r3', style: 'border-radius:14px;' })}</div>
    </div>`, {
    notes: [
      note('Hero · entrada', 'Tipografía gigante entra <b>línea por línea</b> con máscara, como subtítulos. El chip de reel se revela aparte. Barras letterbox fijas.', { top: 140, stack: 'GSAP SplitText' }),
      note('Side index', 'Índice lateral de capítulos (como el manual). Marca la sección activa al hacer scroll.', { top: 360, stack: 'IntersectionObserver' }),
    ],
  });

  // ---- CATEGORÍAS vertical ticker ----
  const cats = ['Marcas', 'Eventos', 'Inmobiliario', 'Redes', 'Deportivo', 'Corporativo', 'Social', 'Campañas'];
  const ticker = sec('03', 'Categorías · ticker', `
    <div class="grid" style="grid-template-columns:.5fr 1.5fr;gap:40px;align-items:start;">
      <div>${kick('Lo que cubrimos')}</div>
      <div>${cats.map((c, i) => `<div class="row jcb aic" style="padding:14px 0;border-bottom:1px solid var(--hair-2);${i === 0 ? 'border-top:1px solid var(--hair-2);' : ''}">
        <div class="hl sm" style="${i === 0 ? '' : 'color:var(--ink-2);'}">${c}</div>
        <span style="font-family:var(--mono);font-size:.66rem;letter-spacing:.14em;color:var(--faint);">0${i + 1}</span></div>`).join('')}</div>
    </div>`, {
    notes: [note('Ticker', 'Lista que se revela en cascada al entrar. Sobria, editorial.', { top: 50, stack: 'Motion stagger' })],
  });

  // ---- REEL letterbox full-width ----
  const reel = sec('04', 'Reel destacado · letterbox', `
    <div class="lb" style="border-radius:14px;overflow:hidden;">
      ${ph('REEL PRINCIPAL · pantalla completa al click · 2.39:1', { ar: '2.39/1', play: true, cls: 'r3', style: 'border-radius:14px;' })}
    </div>
    <div class="row jcb aic mt16 wrap gap16">
      <div class="hl sm">Showreel 2026 — un corte, todo el rango.</div>
      <div style="font-family:var(--mono);font-size:.7rem;letter-spacing:.14em;color:var(--muted);text-transform:uppercase;">● REC 00:02:14 · 4K · 23.976</div>
    </div>`, {
    wide: true,
    notes: [note('Reel · scroll', 'Las <b>barras letterbox</b> se abren como un obturador al entrar; el video escala 1.06→1 (ken-burns).', { top: 70, stack: 'GSAP ScrollTrigger' })],
  });

  // ---- SERVICIOS big typographic list ----
  const services = [
    ['01', 'Campañas de marca', 'Vender o lanzar'],
    ['02', 'Eventos', 'Cubrir un momento'],
    ['03', 'Inmobiliario', 'Mostrar un espacio'],
    ['04', 'Contenido para redes', 'Crecer en redes'],
    ['05', 'Branding audiovisual', 'Verse profesional'],
    ['06', 'Producción corporativa', 'Posicionar'],
  ];
  const servicios = sec('05', 'Servicios · lista tipográfica', `
    <div style="margin-bottom:24px;">${kick('Modos de producción')}</div>
    <div>${services.map((s, i) => `<div class="row jcb aic" style="padding:26px 0;border-bottom:1.5px solid ${i === 0 ? 'var(--note-line)' : 'var(--hair-2)'};${i === 0 ? 'border-top:1.5px solid var(--note-line);' : ''}">
      <div class="row gap24 aic"><span class="num" style="font-size:46px;${i === 0 ? 'color:var(--amber);opacity:.9;' : ''}">${s[0]}</span>
        <div class="hl" style="font-size:40px;${i === 0 ? '' : 'color:var(--ink-2);'}">${s[1]}</div></div>
      <div class="row gap24 aic">
        ${i === 0 ? ph('PREVIEW', { w: '160px', h: 90, cls: 'r3' }) : ''}
        <div class="small" style="font-family:var(--mono);letter-spacing:.12em;text-transform:uppercase;">${s[2]}</div>
        <span style="color:${i === 0 ? 'var(--amber)' : 'var(--faint)'};font-size:20px;">→</span></div>
    </div>`).join('')}</div>
    <div class="mt24">${btn('Cotizar este servicio →', true)}</div>`, {
    wide: true,
    notes: [note('Servicios · hover', 'Al pasar sobre una fila, su <b>preview aparece inline</b> (a la derecha) y la tipografía se ilumina. El resto baja de opacidad.', { top: 110, stack: 'Motion + state' })],
  });

  // ---- PORTAFOLIO cinematic alternating rows ----
  const projects = [
    ['01', 'Lanzamiento Nova', 'Marca · Campaña · 2026', false],
    ['02', 'Final Copa Oriente', 'Deportivo · 2025', true],
    ['03', 'Torre Aurora', 'Inmobiliario · 2026', false],
    ['04', 'Festival Lumen', 'Eventos · 2025', true],
  ];
  const rows = projects.map(p => `
    <div class="grid" style="grid-template-columns:${p[3] ? '.8fr 1.2fr' : '1.2fr .8fr'};gap:40px;align-items:center;margin-bottom:40px;">
      ${p[3]
      ? `<div class="${p[3] ? 'order1' : ''}"><div class="num" style="font-size:54px;">${p[0]}</div><div class="hl md mt12">${p[1]}</div><div class="small mt8" style="font-family:var(--mono);letter-spacing:.12em;text-transform:uppercase;">${p[2]}</div><div class="mt20">${btn('Ver proyecto →', false)}</div></div>${ph(p[1], { ar: '16/9', play: true, cls: 'r3' })}`
      : `${ph(p[1], { ar: '16/9', play: true, cls: 'r3' })}<div><div class="num" style="font-size:54px;">${p[0]}</div><div class="hl md mt12">${p[1]}</div><div class="small mt8" style="font-family:var(--mono);letter-spacing:.12em;text-transform:uppercase;">${p[2]}</div><div class="mt20">${btn('Ver proyecto →', false)}</div></div>`}
    </div>`).join('');
  const portafolio = sec('06', 'Portafolio · filas cinematográficas', `
    <div class="row jcb aic wrap gap20" style="margin-bottom:30px;">
      <div>${kick('Trabajo seleccionado')}<div class="hl md mt12">Cada proyecto, una escena.</div></div>
      ${chips([['Todos', true], 'Marca', 'Eventos', 'Inmobiliario', 'Deportivo', 'Social'])}
    </div>
    ${rows}
    <div class="center mt12">${btn('Ver todo el portafolio →', false, 'lg')}</div>`, {
    wide: true,
    notes: [note('Portafolio · rows', 'Filas full-width alternadas (no grid). Hover = <b>preview de video + zoom lento</b>; click → modal con "Quiero algo así".', { top: 90, stack: 'GSAP · modal' })],
  });

  // ---- PROCESO editorial chapter spreads ----
  const chapters = [
    ['I', 'Brief', 'Escuchamos el objetivo real, no solo el pedido. Definimos qué tiene que lograr la pieza.'],
    ['II', 'Concepto', 'Una idea con punto de vista: tono, referencias y guion.'],
    ['III', 'Producción', 'Rodaje con equipo, luz y dirección. El día clave.'],
    ['IV', 'Edición', 'Ritmo, color y sonido hasta el último frame.'],
    ['V', 'Entrega', 'Piezas listas para cada canal, a tiempo.'],
  ];
  const spreads = chapters.map((c, i) => `
    <div class="grid" style="grid-template-columns:1fr 1fr;gap:40px;align-items:center;padding:30px 0;border-top:1px solid var(--hair-2);">
      ${i % 2 === 0
      ? `<div><div style="font-family:var(--mono);font-size:.7rem;letter-spacing:.2em;color:var(--amber);text-transform:uppercase;">Capítulo ${c[0]}</div><div class="hl lg mt12">${c[1]}</div><div class="lead mt16" style="max-width:34ch;">${c[2]}</div></div>${ph('Capítulo ' + c[0] + ' · media', { ar: '4/3', cls: 'r3' })}`
      : `${ph('Capítulo ' + c[0] + ' · media', { ar: '4/3', cls: 'r3' })}<div><div style="font-family:var(--mono);font-size:.7rem;letter-spacing:.2em;color:var(--amber);text-transform:uppercase;">Capítulo ${c[0]}</div><div class="hl lg mt12">${c[1]}</div><div class="lead mt16" style="max-width:34ch;">${c[2]}</div></div>`}
    </div>`).join('');
  const proceso = sec('07', 'Proceso · capítulos editoriales', `
    <div class="center" style="margin-bottom:20px;">${kick('El proceso')}<div class="hl md mt12">Cinco capítulos.</div></div>
    ${spreads}`, {
    wide: true,
    notes: [note('Proceso · capítulos', 'Cada capítulo es un <b>spread editorial</b> que se fija (sticky) mientras su media cambia. Numeración romana grande. Reveal de texto.', { top: 120, stack: 'GSAP ScrollTrigger pin' })],
  });

  // ---- SOBRE VAL ----
  const sobre = sec('08', 'Sobre VAL', `
    <div class="grid" style="grid-template-columns:1fr 1fr;gap:48px;align-items:center;">
      <div>${kick('Quiénes somos')}<div class="hl lg mt16" style="max-width:14ch;">Del Oriente, para todo el país.</div>
        <div class="lead mt16" style="max-width:40ch;">Un colectivo que se volvió estudio. Nunca entregamos dos veces lo mismo.</div></div>
      ${ph('EQUIPO · retrato editorial', { ar: '3/4', cls: 'r3' })}
    </div>`, {
    notes: [note('Sobre', 'Editorial, retrato vertical. Texto breve con carácter.', { top: 70 })],
  });

  // ---- TESTIMONIOS pull-quotes ----
  const testi = sec('09', 'Testimonios · pull-quotes', `
    <div class="center" style="margin-bottom:30px;">${kick('Lo que dicen')}</div>
    ${[0, 1].map((n, i) => `<div style="padding:30px 0;border-top:1px solid var(--hair-2);">
      <div class="hl" style="font-size:38px;line-height:1.1;letter-spacing:-.02em;color:var(--ink-2);max-width:24ch;${i % 2 ? 'margin-left:auto;text-align:right;' : ''}">"<span style="color:var(--ink);">Entendieron la marca mejor que nosotros.</span>"</div>
      <div class="small mt12" style="font-family:var(--mono);letter-spacing:.14em;text-transform:uppercase;${i % 2 ? 'text-align:right;' : ''}">— Cliente · Marca</div></div>`).join('')}
    <div class="row jcc gap40 mt32 wrap" style="opacity:.6;">${[1, 2, 3, 4, 5].map(() => `<div class="hb r3" style="width:120px;height:38px;"></div>`).join('')}</div>`, {
    notes: [note('Testimonios', 'Frases grandes como <b>pull-quotes editoriales</b>, alternando lado. Logos abajo.', { top: 70 })],
  });

  // ---- CTA full-bleed trailer ----
  const cta = sec('10', 'CTA · cierre de tráiler', `
    <div class="lb" style="position:relative;height:480px;border-radius:16px;overflow:hidden;">
      ${ph('FONDO ABSTRACTO · textura en movimiento', { style: 'position:absolute;inset:0;height:100%;border:none;border-radius:0;' })}
      <div style="position:absolute;inset:0;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;gap:24px;padding:0 60px;">
        <div style="font-family:var(--mono);font-size:.7rem;letter-spacing:.24em;color:var(--amber);text-transform:uppercase;">Fin del tráiler</div>
        <div class="hl" style="font-size:60px;line-height:.95;max-width:18ch;">Tu próxima pieza, <em>imposible de ignorar.</em></div>
        <div class="row gap12">${btn('Cotizar proyecto →', true, 'lg')}${btn('Agendar llamada', false, 'lg')}</div></div>
    </div>`, {
    wide: true,
    notes: [note('CTA', 'Cierre tipo tráiler: fundido a negro del fondo, el texto y los CTA quedan. Movimiento sutil.', { top: 130, stack: 'GSAP / Motion' })],
  });

  // ---- FAQ accordion ----
  const faqs = [['¿Cómo se cotiza un proyecto audiovisual?', true], ['¿Trabajan con marcas y personas?'], ['¿Cubren eventos?'], ['¿Entregan piezas para redes?'], ['¿Cuánto tarda la entrega?'], ['¿Pueden encargarse de la idea?'], ['¿Qué necesita el cliente para empezar?']];
  const faq = sec('11', 'FAQ', `
    <div class="center" style="margin-bottom:26px;">${kick('Preguntas frecuentes')}</div>
    <div style="max-width:820px;margin:0 auto;">
      ${faqs.map(f => `<div class="acc ${f[1] ? 'open' : ''}"><span class="q">${f[0]}</span><span class="pm">${f[1] ? '–' : '+'}</span></div>${f[1] ? `<div style="padding:6px 4px 18px;">${tl(['94%', '78%'])}</div>` : ''}`).join('')}
    </div>`, {
    notes: [note('FAQ', 'Accordion centrado, una sola columna ancha. Editorial.', { top: 60 })],
  });

  // ---- CONTACTO ----
  const fields = [['Nombre'], ['Marca / empresa'], ['Tipo de proyecto'], ['Fecha tentativa'], ['Presupuesto aprox.'], ['WhatsApp']];
  const contacto = sec('12', 'Contacto', `
    <div class="grid" style="grid-template-columns:.8fr 1.2fr;gap:48px;align-items:start;">
      <div>${kick('Hablemos')}<div class="hl md mt12" style="max-width:14ch;">Empecemos tu proyecto.</div>
        <div class="lead mt16" style="max-width:30ch;">Cuéntanos qué necesitas. Respondemos rápido.</div>
        <div class="col gap12 mt24">${btn('WhatsApp directo', false)}${btn('Agendar llamada', false)}</div>
        <div class="small mt24" style="font-family:var(--mono);letter-spacing:.1em;">hola@valaudiovisual.com<br>@val.audiovisual · Medellín</div></div>
      <div class="grid" style="grid-template-columns:1fr 1fr;gap:18px;">
        ${fields.map(f => `<div class="field"><label>${f[0]}</label><div class="inp"></div></div>`).join('')}
        <div class="field" style="grid-column:1/-1;"><label>Mensaje</label><div class="inp area"></div></div>
        <div style="grid-column:1/-1;">${btn('Enviar solicitud →', true, 'lg')}</div>
      </div>
    </div>`, {
    notes: [note('Contacto', 'Form a la derecha, vías de contacto a la izquierda. Sin fricción.', { top: 90, stack: 'Validación + anti-spam' })],
  });

  const footer = `<footer class="sec" data-screen-label="13 Footer" style="background:#23221f0a;border-top:1px dashed var(--hair-2);">
    <div class="sinner"><div class="row jcb aic wrap gap24">
      <div><div class="hl" style="font-size:46px;">VAL<span style="color:var(--amber);">.</span></div><div class="small mt8">Imposible de ignorar.</div></div>
      <div class="row gap40 wrap" style="font-family:var(--mono);font-size:.72rem;letter-spacing:.1em;color:var(--muted);text-transform:uppercase;">
        <div class="col gap8"><span style="color:var(--ink);">Menú</span><span>Portafolio</span><span>Servicios</span><span>Proceso</span></div>
        <div class="col gap8"><span style="color:var(--ink);">Social</span><span>Instagram</span><span>YouTube</span></div>
        <div class="col gap8"><span style="color:var(--ink);">Contacto</span><span>WhatsApp</span><span>Email</span></div>
      </div></div>
    <div class="row jcb mt40 small" style="font-family:var(--mono);letter-spacing:.14em;text-transform:uppercase;"><span>© 2026 VAL Audiovisual · Oriente Antioqueño</span><span>2.39 : 1</span></div></div></footer>`;

  window.BOARDS = window.BOARDS || {};
  window.BOARDS.C = sideindex + topbar + hero + ticker + reel + servicios + portafolio + proceso + sobre + testi + cta + faq + contacto + footer;
})();
