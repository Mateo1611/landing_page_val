/* DIRECTION B — "El Estudio" · structured, conversion-first, proof early */
(function () {
  const { ph, tl, btn, chips, kick, hl, note, sec, num } = WF;

  // ---- HEADER (full nav, solid) ----
  const navB = `<header class="nav solid" data-screen-label="00 Header">
    <div class="logo">VAL<i>.</i></div>
    <div class="links" style="margin-left:auto;margin-right:24px;"><span class="act">Portafolio</span><span>Servicios</span><span>Proceso</span><span>Sobre</span><span>FAQ</span><span>Contacto</span></div>
    ${btn('Cotizar proyecto', true, 'sm')}</header>`;

  // ---- HERO split ----
  const hero = sec('02', 'Hero · split', `
    <div class="grid" style="grid-template-columns:1.05fr 1fr;gap:48px;align-items:center;padding:30px 0;">
      <div>
        ${kick('Estudio audiovisual · Medellín')}
        <div class="hl xl mt20" style="max-width:14ch;">Hacemos que tu marca se vea <em>cara.</em></div>
        <div class="lead mt20" style="max-width:42ch;">Campañas, eventos, inmobiliario y contenido para redes — con calidad de estudio y enfoque en resultado.</div>
        <div class="row gap12 mt32">${btn('Cotizar proyecto →', true, 'lg')}${btn('Ver portafolio', false, 'lg')}</div>
        <div class="row gap40 mt40">
          ${[['+120', 'proyectos'], ['+40', 'marcas'], ['4K', 'producción']].map(s => `<div><div class="hl sm" style="color:var(--amber);">${s[0]}</div><div class="small">${s[1]}</div></div>`).join('')}
        </div>
      </div>
      ${ph('VIDEO HERO · frame premium · 4:5', { ar: '4/5', play: true, cls: 'r3' })}
    </div>`, {
    notes: [
      note('Hero · entrada', 'Texto entra por <b>líneas</b> (izq); el frame de video se revela con <b>máscara</b> (der). Stats con conteo.', { top: 120, stack: 'Motion stagger' }),
      note('Header', 'Barra sólida con blur al hacer scroll. CTA siempre visible.', { top: 30, stack: 'CSS sticky' }),
    ],
  });

  // ---- CATEGORÍAS thin strip ----
  const cats = ['Marcas', 'Eventos', 'Inmobiliario', 'Redes', 'Deportivo', 'Corporativo', 'Social', 'Campañas'];
  const strip = `<section class="sec" data-screen-label="03 Categorías" style="padding:22px 0;background:#23221f08;">
    <div class="sinner"><div class="row jcb wrap gap24" style="font-family:var(--mono);font-size:.78rem;letter-spacing:.12em;text-transform:uppercase;color:var(--ink-2);">
      ${cats.map(c => `<span>${c}</span>`).join('<span style="color:var(--amber);">·</span>')}
    </div></div></section>`;

  // ---- PORTAFOLIO EARLY (uniform grid) ----
  const projects = [
    ['Lanzamiento Nova', 'Marca · 2026'], ['Final Copa Oriente', 'Deportivo · 2025'],
    ['Torre Aurora', 'Inmobiliario · 2026'], ['Festival Lumen', 'Eventos · 2025'],
    ['Serie Mírame', 'Social · 2026'], ['Campaña Raíz', 'Marca · 2025'],
  ];
  const portafolio = sec('04', 'Portafolio · la prueba primero', `
    <div class="row jcb aic wrap gap20" style="margin-bottom:26px;">
      <div>${kick('Trabajo reciente')}<div class="hl md mt12">Mira el nivel antes de leer.</div></div>
      ${chips([['Todos', true], 'Marca', 'Eventos', 'Inmobiliario', 'Deportivo', 'Social'])}
    </div>
    <div class="grid" style="grid-template-columns:repeat(3,1fr);gap:22px;">
      ${projects.map(p => `<div>${ph(p[0], { ar: '4/3', cls: 'r3', play: true })}
        <div class="row jcb aic mt12"><div><div style="font-weight:700;font-size:15px;">${p[0]}</div><div class="small">${p[1]}</div></div>${btn('Ver →', false, 'sm')}</div></div>`).join('')}
    </div>
    <div class="center mt32">${btn('Ver portafolio completo →', false, 'lg')}</div>`, {
    wide: true,
    notes: [note('Portafolio · proof', 'Va <b>temprano</b> = la prueba antes del discurso. Hover zoom + preview; click → <b>modal</b> con "Quiero algo así". Filtros con transición.', { top: 80, stack: 'Motion · modal' })],
  });

  // ---- REEL band ----
  const reel = sec('05', 'Reel destacado', `
    <div class="grid" style="grid-template-columns:1fr 1.4fr;gap:40px;align-items:center;">
      <div>${kick('Showreel')}<div class="hl md mt12" style="max-width:14ch;">Dos minutos que lo resumen.</div>
        <div class="lead mt16" style="max-width:34ch;">Un corte con lo mejor del año: ritmo, color y producción.</div>
        <div class="mt24">${btn('Reproducir reel →', true)}</div></div>
      ${ph('REEL · 02:14 · click → fullscreen', { ar: '16/9', play: true, cls: 'r3' })}
    </div>`, {
    wide: true,
    notes: [note('Reel', 'Versión más contenida: el frame <b>escala suave</b> al entrar en viewport. Sin pin largo.', { top: 70, stack: 'Motion in-view' })],
  });

  // ---- SERVICIOS cards 2x3 (need-based) ----
  const services = [
    ['01', 'Campañas de marca', 'Vender o lanzar', 'Spot, claim y formato por canal.'],
    ['02', 'Eventos', 'Cubrir un momento', 'Corporativo, social y deportivo.'],
    ['03', 'Inmobiliario', 'Mostrar un espacio', 'Video y foto que venden el lugar.'],
    ['04', 'Contenido para redes', 'Crecer en redes', 'Reels verticales y piezas recurrentes.'],
    ['05', 'Branding audiovisual', 'Verse profesional', 'Retratos, corporativo, autoridad.'],
    ['06', 'Producción corporativa', 'Posicionar', 'Marca, cultura y comunicación interna.'],
  ];
  const servicios = sec('06', 'Servicios · por necesidad', `
    <div class="center" style="margin-bottom:28px;">${kick('Qué necesitas lograr')}<div class="hl md mt12">Servicios agrupados por necesidad.</div></div>
    <div class="grid" style="grid-template-columns:repeat(3,1fr);gap:20px;">
      ${services.map(s => `<div class="hb r3 fill" style="padding:24px;">
        <div class="row jcb aic"><span class="num" style="font-size:30px;">${s[0]}</span><span style="font-family:var(--mono);font-size:.6rem;letter-spacing:.14em;color:var(--amber);text-transform:uppercase;">${s[2]}</span></div>
        ${ph('PREVIEW', { h: 120, cls: 'r3', style: 'margin:16px 0;' })}
        <div class="hl sm">${s[1]}</div><div class="small mt8">${s[3]}</div>
        <div class="row jcb aic mt16">${btn('Cotizar este servicio', true, 'sm')}<span style="color:var(--faint);">→</span></div>
      </div>`).join('')}
    </div>`, {
    notes: [note('Servicios · cards', 'Versión <b>cards</b> (más clara/escaneables que la lista). Hover ilumina la card y el preview entra con fade. Misma data en mobile.', { top: 120, stack: 'CSS hover + Motion' })],
  });

  // ---- PROCESO horizontal stepper ----
  const steps = [
    ['I', 'Brief', 'Objetivo real'], ['II', 'Concepto', 'Idea con POV'],
    ['III', 'Producción', 'Rodaje'], ['IV', 'Edición', 'Ritmo y color'], ['V', 'Entrega', 'Listo por canal'],
  ];
  const proceso = sec('07', 'Proceso · stepper horizontal', `
    <div class="center" style="margin-bottom:34px;">${kick('Cómo trabajamos')}<div class="hl md mt12">Cinco pasos claros.</div></div>
    <div style="position:relative;">
      <div style="position:absolute;top:21px;left:6%;right:6%;height:2px;background:var(--hair-2);"></div>
      <div style="position:absolute;top:21px;left:6%;width:20%;height:2px;background:var(--amber);"></div>
      <div class="grid" style="grid-template-columns:repeat(5,1fr);gap:16px;position:relative;">
        ${steps.map((s, i) => `<div class="center"><div class="dot ${i === 0 ? 'on' : ''}" style="margin:14px auto 18px;width:18px;height:18px;"></div>
          <div class="num" style="font-size:26px;${i === 0 ? 'color:var(--amber);opacity:.9;' : ''}">${s[0]}</div>
          <div class="hl sm mt8">${s[1]}</div><div class="small">${s[2]}</div>
          ${ph('media', { ar: '4/3', cls: 'r3', style: 'margin-top:14px;' })}</div>`).join('')}
      </div>
    </div>`, {
    wide: true,
    notes: [note('Proceso · horizontal', 'Stepper en línea: la <b>barra de progreso</b> se llena al hacer scroll y cada paso se ilumina en secuencia.', { top: 100, stack: 'GSAP ScrollTrigger' })],
  });

  // ---- TESTIMONIOS + logos ----
  const testi = sec('08', 'Testimonios + clientes', `
    <div class="grid" style="grid-template-columns:1fr 1fr;gap:20px;">
      ${[0, 1].map(() => `<div class="hb r3 fill" style="padding:28px;">
        <div style="font-family:var(--mono);color:var(--amber);font-size:26px;">"</div>
        ${tl(['100%', '94%', '70%'])}
        <div class="row gap12 aic mt20"><div class="hb" style="width:44px;height:44px;border-radius:50%;"></div><div>${tl(['110px'])}<div class="tl sm" style="width:70px;"></div></div></div></div>`).join('')}
    </div>
    <div class="mt32"><div class="small center" style="font-family:var(--mono);letter-spacing:.16em;text-transform:uppercase;margin-bottom:18px;">Marcas que confían</div>
    <div class="row jcc gap40 wrap" style="opacity:.6;">${[1, 2, 3, 4, 5, 6].map(() => `<div class="hb r3" style="width:120px;height:40px;"></div>`).join('')}</div></div>`, {
    notes: [note('Prueba social', 'Testimonios reales + <b>fila de logos</b>. Si faltan, placeholders claros.', { top: 70 })],
  });

  // ---- SOBRE VAL ----
  const sobre = sec('09', 'Sobre VAL', `
    <div class="grid" style="grid-template-columns:1fr 1fr;gap:48px;align-items:center;">
      ${ph('EQUIPO · detrás de cámaras', { ar: '4/3', cls: 'r3' })}
      <div>${kick('Quiénes somos')}<div class="hl md mt16" style="max-width:16ch;">Del colectivo al estudio.</div>
        <div class="lead mt16" style="max-width:40ch;">Creadores del Oriente Antioqueño. Cercanía y energía, con oficio de estudio.</div>
        ${tl(['96%', '88%'], 'mt16')}</div>
    </div>`, {
    notes: [note('Sobre', 'Breve y humano. Imagen real del equipo.', { top: 70 })],
  });

  // ---- CTA band ----
  const cta = sec('10', 'CTA cinematográfico', `
    <div class="lb hb r3" style="position:relative;height:360px;overflow:hidden;border-width:1.75px;">
      ${ph('FONDO ABSTRACTO · movimiento sutil', { style: 'position:absolute;inset:0;height:100%;border:none;border-radius:0;' })}
      <div style="position:absolute;inset:0;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;gap:20px;padding:0 60px;">
        <div class="hl lg" style="max-width:18ch;">¿Listo para una pieza <em>imposible de ignorar?</em></div>
        <div class="row gap12">${btn('Cotizar proyecto →', true, 'lg')}${btn('Agendar llamada', false, 'lg')}</div></div>
    </div>`, {
    wide: true,
    notes: [note('CTA', 'Banda de conversión fuerte antes del FAQ. Botón con microinteracción.', { top: 110, stack: 'CSS / Motion' })],
  });

  // ---- FAQ 2-col ----
  const faqs = ['¿Cómo se cotiza un proyecto?', '¿Trabajan con marcas y personas?', '¿Cubren eventos?', '¿Entregan piezas para redes?', '¿Cuánto tarda la entrega?', '¿Pueden encargarse de la idea?'];
  const faq = sec('11', 'FAQ · dos columnas', `
    <div class="center" style="margin-bottom:26px;">${kick('Preguntas frecuentes')}</div>
    <div class="grid" style="grid-template-columns:1fr 1fr;gap:14px 40px;">
      ${faqs.map((q, i) => `<div class="acc ${i === 0 ? 'open' : ''}"><span class="q">${q}</span><span class="pm">${i === 0 ? '–' : '+'}</span></div>`).join('')}
    </div>`, {
    notes: [note('FAQ', 'Dos columnas para escanear rápido. Accordion premium.', { top: 60 })],
  });

  // ---- CONTACTO form + sidebar ----
  const fields = [['Nombre'], ['Marca / empresa'], ['Tipo de proyecto'], ['Fecha tentativa'], ['Presupuesto aprox.'], ['WhatsApp']];
  const contacto = sec('12', 'Contacto', `
    <div class="grid" style="grid-template-columns:1.3fr .7fr;gap:40px;align-items:start;">
      <div class="hb r3 fill" style="padding:30px;">
        ${kick('Cotiza tu proyecto')}<div class="hl sm mt12">Cuéntanos lo esencial.</div>
        <div class="grid mt24" style="grid-template-columns:1fr 1fr;gap:16px;">
          ${fields.map(f => `<div class="field"><label>${f[0]}</label><div class="inp"></div></div>`).join('')}
          <div class="field" style="grid-column:1/-1;"><label>Mensaje</label><div class="inp area"></div></div>
        </div>
        <div class="mt24">${btn('Enviar solicitud →', true, 'lg')}</div>
      </div>
      <div class="col gap16">
        <div class="hb r3" style="padding:22px;background:var(--amber);"><div style="font-family:var(--mono);font-size:.66rem;letter-spacing:.14em;color:#5a2300;text-transform:uppercase;">Más rápido</div><div class="hl sm mt8" style="color:#2a0e00;">Escríbenos por WhatsApp</div><div class="mt16">${btn('Abrir WhatsApp', false)}</div></div>
        <div class="hb r3 fill" style="padding:22px;"><div class="kicker muted">Agenda</div><div class="lead mt8">Llamada de 15 minutos.</div><div class="mt16">${btn('Agendar llamada', false)}</div></div>
        <div class="small" style="font-family:var(--mono);letter-spacing:.1em;">hola@valaudiovisual.com<br>@val.audiovisual</div>
      </div>
    </div>`, {
    notes: [note('Contacto', '<b>Form + sidebar</b>: WhatsApp resaltado como vía de baja fricción. Validación + anti-spam.', { top: 100, stack: 'Next.js form' })],
  });

  const footer = `<footer class="sec" data-screen-label="13 Footer" style="background:#23221f0a;border-top:1px dashed var(--hair-2);">
    <div class="sinner"><div class="row jcb aic wrap gap24">
      <div><div class="logo" style="font-size:30px;">VAL<i>.</i></div><div class="small mt8" style="max-width:34ch;">Estudio audiovisual · Medellín.</div>
      <div class="row gap12 mt16">${btn('Cotizar proyecto →', true, 'sm')}</div></div>
      <div class="row gap40 wrap" style="font-family:var(--mono);font-size:.72rem;letter-spacing:.1em;color:var(--muted);text-transform:uppercase;">
        <div class="col gap8"><span style="color:var(--ink);">Menú</span><span>Portafolio</span><span>Servicios</span><span>Proceso</span></div>
        <div class="col gap8"><span style="color:var(--ink);">Social</span><span>Instagram</span><span>YouTube</span></div>
        <div class="col gap8"><span style="color:var(--ink);">Contacto</span><span>WhatsApp</span><span>Email</span></div>
      </div></div>
    <div class="row jcb mt40 small" style="font-family:var(--mono);letter-spacing:.14em;text-transform:uppercase;"><span>© 2026 VAL Audiovisual</span><span>Medellín · 2.39:1</span></div></div></footer>`;

  window.BOARDS = window.BOARDS || {};
  window.BOARDS.B = navB + hero + strip + portafolio + reel + servicios + proceso + testi + sobre + cta + faq + contacto + footer;
})();
