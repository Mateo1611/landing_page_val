/* DIRECTION A — "El Reel" · immersive cinema, minimal nav, narrative scroll */
(function () {
  const { ph, tl, btn, chips, kick, hl, note, sec, nav, num } = WF;

  const services = [
    ['01', 'Campañas de marca', 'Vender o lanzar'],
    ['02', 'Eventos', 'Cubrir un momento'],
    ['03', 'Inmobiliario', 'Mostrar un espacio'],
    ['04', 'Contenido para redes', 'Crecer en redes'],
    ['05', 'Branding audiovisual', 'Verse profesional'],
    ['06', 'Producción corporativa', 'Posicionar'],
  ];

  // ---- HERO (full-bleed) ----
  const hero = sec('02', 'Hero cinematográfico', `
    <div class="lb" style="position:relative;height:660px;">
      ${ph('VIDEO HERO · LOOP · 16:9 · autoplay muted', { cls: 'r3', style: 'position:absolute;inset:0;height:100%;border:none;border-radius:0;' })}
      <div style="position:absolute;inset:0;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;gap:22px;padding:0 40px;">
        ${kick('VAL Audiovisual · Estudio')}
        <div class="hl xl" style="max-width:16ch;">Contenido <em>imposible</em><br>de ignorar.</div>
        <div class="lead" style="max-width:46ch;">Campañas, eventos y piezas para marcas que necesitan verse distintas — no una más.</div>
        <div class="row gap12 mt8">${btn('Cotizar proyecto →', true, 'lg')}${btn('Ver portafolio', false, 'lg')}</div>
      </div>
      <div style="position:absolute;bottom:22px;left:0;right:0;display:flex;justify-content:center;"><div class="scrollcue"><span>Scroll</span><div class="ln"></div></div></div>
    </div>`, {
    bleed: true,
    notes: [
      note('Hero · entrada', 'Fade in <b>desde negro</b>. El claim entra <b>línea por línea</b>; el video se revela suave detrás; los CTA aparecen al final.', { top: 150, stack: 'GSAP timeline · Motion stagger' }),
      note('Header · scroll', 'Transparente sobre el hero → al bajar se vuelve <b>barra con blur oscuro</b>.', { top: 380, stack: 'CSS + scroll listener' }),
    ],
  });

  // ---- CATEGORÍAS marquee ----
  const cats = ['Marcas', 'Eventos', 'Inmobiliario', 'Redes', 'Deportivo', 'Corporativo', 'Social', 'Campañas'];
  const marquee = sec('03', 'Franja de categorías', `
    <div class="marq" style="justify-content:center;flex-wrap:wrap;">
      ${cats.map(c => `<span>${c}</span><span class="sep">/</span>`).join('')}
    </div>`, {
    notes: [note('Marquee', 'Fila horizontal en <b>loop lento</b>, sutil. No roba protagonismo.', { top: 40, stack: 'CSS marquee' })],
  });

  // ---- REEL destacado ----
  const reel = sec('04', 'Reel destacado · video expandible', `
    <div class="center" style="margin-bottom:26px;">${kick('El reel')}<div class="hl md mt12">Producción que se siente.</div></div>
    <div class="lb" style="border-radius:18px;overflow:hidden;">
      ${ph('REEL PRINCIPAL · 02:14 · click → fullscreen', { ar: '21/9', play: true, cls: 'r3', style: 'border-radius:18px;' })}
    </div>
    <div class="row jcb mt16" style="font-family:var(--mono);font-size:.7rem;letter-spacing:.14em;color:var(--muted);text-transform:uppercase;">
      <span>● REC · 4K · 23.976</span><span>VAL — Showreel 2026</span></div>`, {
    wide: true,
    notes: [note('Reel · scroll', 'El frame <b>escala con el scroll</b> y se expande a casi full-bleed; el <b>border-radius baja</b>, el fondo oscurece y el texto entra por capas.', { top: 60, stack: 'GSAP ScrollTrigger · pin' })],
  });

  // ---- SERVICIOS interactive list + preview ----
  const servList = services.map((s, i) => `
    <div class="row jcb" style="padding:20px 4px;border-bottom:1px solid var(--hair-2);${i === 0 ? 'border-top:1px solid var(--hair-2);' : ''}">
      <div class="row gap20 aic">
        <span class="num" style="font-size:34px;${i === 0 ? 'color:var(--amber);opacity:.85;' : ''}">${s[0]}</span>
        <div><div class="hl sm" style="${i === 0 ? '' : 'color:var(--ink-2);'}">${s[1]}</div><div class="small">${s[2]}</div></div>
      </div>
      ${i === 0 ? '<span style="font-family:var(--mono);font-size:.7rem;letter-spacing:.14em;color:var(--amber);">ACTIVO ▸</span>' : '<span style="color:var(--faint);">→</span>'}
    </div>`).join('');
  const servicios = sec('05', 'Servicios como modos de producción', `
    <div class="row jcb aic" style="margin-bottom:24px;"><div>${kick('Qué hacemos')}<div class="hl md mt12" style="max-width:18ch;">Servicios por necesidad,<br>no por industria.</div></div></div>
    <div class="grid" style="grid-template-columns:1fr 1.05fr;gap:48px;align-items:start;">
      <div>${servList}</div>
      <div style="position:sticky;top:20px;">
        ${ph('PREVIEW DEL SERVICIO ACTIVO · video/foto', { ar: '4/3', cls: 'r3' })}
        <div class="row jcb aic mt16">
          <div><div class="hl sm">Campañas de marca</div><div class="small" style="max-width:34ch;">Piezas comerciales para vender o lanzar: spot, claim y formato para cada canal.</div></div>
        </div>
        <div class="mt16">${btn('Cotizar este servicio →', true)}</div>
      </div>
    </div>`, {
    notes: [note('Servicios · hover', 'Hover/clic en un servicio <b>cambia el preview</b> de la derecha. El activo se ilumina; la media entra con <b>máscara / fade</b>.', { top: 120, stack: 'Motion + state' })],
  });

  // ---- PORTAFOLIO masonry ----
  const masonryItems = [
    ['Lanzamiento Nova', 'Marca · 2026', 360],
    ['Final Copa Oriente', 'Deportivo · 2025', 250],
    ['Torre Aurora', 'Inmobiliario · 2026', 300],
    ['Festival Lumen', 'Eventos · 2025', 240],
    ['Serie Mírame', 'Social · 2026', 330],
    ['Campaña Raíz', 'Marca · 2025', 270],
    ['Gimnasio Forge', 'Redes · 2026', 230],
    ['Boda V&M', 'Social · 2025', 300],
  ];
  const cols = [[], [], [], []];
  masonryItems.forEach((it, i) => cols[i % 4].push(it));
  const masonry = cols.map(col => `<div class="col gap20">${col.map(it => `
    <div>${ph(it[0] + ' · ' + it[1], { h: it[2], cls: 'r3' })}
      <div class="row jcb aic mt12"><div><div style="font-weight:700;font-size:15px;">${it[0]}</div><div class="small">${it[1]}</div></div>${btn('Ver →', false, 'sm')}</div>
    </div>`).join('')}</div>`).join('');
  const portafolio = sec('06', 'Portafolio seleccionado', `
    <div class="row jcb aic wrap gap20" style="margin-bottom:26px;">
      <div>${kick('La prueba')}<div class="hl md mt12">Trabajo seleccionado.</div></div>
      ${chips([['Todos', true], 'Marca', 'Eventos', 'Inmobiliario', 'Deportivo', 'Social'])}
    </div>
    <div class="grid" style="grid-template-columns:repeat(4,1fr);gap:20px;align-items:start;">${masonry}</div>`, {
    wide: true,
    notes: [note('Portafolio', 'Hover = <b>zoom lento</b> + preview de video corto. Click abre <b>modal premium</b> con CTA "Quiero algo así". Filtros con transición suave.', { top: 90, stack: 'Motion layout · modal' })],
  });

  // ---- PROCESO sticky chapters ----
  const chapters = [
    ['I', 'Brief', 'Escuchamos el objetivo real, no solo el pedido.'],
    ['II', 'Concepto', 'Una idea con punto de vista y un porqué.'],
    ['III', 'Producción', 'Rodaje con equipo, luz y dirección.'],
    ['IV', 'Edición', 'Ritmo, color y sonido hasta el último frame.'],
    ['V', 'Entrega', 'Piezas listas para cada canal, a tiempo.'],
  ];
  const proceso = sec('07', 'Proceso por capítulos', `
    <div class="center" style="margin-bottom:34px;">${kick('Cómo trabajamos')}<div class="hl md mt12">Cinco capítulos.</div></div>
    <div class="grid" style="grid-template-columns:30px 1fr 1.1fr;gap:34px;align-items:start;">
      <div class="rail" style="height:420px;align-self:stretch;justify-self:center;">
        <div class="fillbar"></div>
        ${chapters.map((c, i) => `<div class="dot ${i === 0 ? 'on' : ''}" style="position:absolute;top:${i * 24}%;left:-6px;"></div>`).join('')}
      </div>
      <div>
        ${chapters.map((c, i) => `<div style="padding:14px 0;border-bottom:1px solid var(--hair-2);opacity:${i === 0 ? 1 : .55};">
          <div class="row gap16 aic"><span class="num" style="font-size:30px;${i === 0 ? 'color:var(--amber);opacity:.9;' : ''}">${c[0]}</span>
          <div><div class="hl sm">Capítulo ${c[0]} — ${c[1]}</div><div class="small">${c[2]}</div></div></div></div>`).join('')}
      </div>
      <div style="position:sticky;top:20px;">${ph('MEDIA DEL CAPÍTULO ACTIVO · cambia por scroll', { ar: '4/5', cls: 'r3' })}</div>
    </div>`, {
    notes: [note('Proceso · sticky', '<b>Sticky chapters</b>: el media de la derecha queda fijo y cambia por capítulo mientras la <b>línea de progreso</b> avanza. Texto con reveal.', { top: 120, stack: 'GSAP ScrollTrigger' })],
  });

  // ---- SOBRE VAL ----
  const sobre = sec('08', 'Sobre VAL Audiovisual', `
    <div class="grid" style="grid-template-columns:1fr 1fr;gap:48px;align-items:center;">
      <div>${kick('Quiénes somos')}
        <div class="hl md mt16" style="max-width:16ch;">Un colectivo del Oriente que se volvió estudio.</div>
        <div class="lead mt16" style="max-width:42ch;">Creadores de Medellín y el Oriente Antioqueño. Nunca entregamos dos veces lo mismo.</div>
        <div class="row gap40 mt32">
          ${[['+120', 'proyectos'], ['6', 'años'], ['MED', 'Oriente Ant.']].map(s => `<div><div class="hl sm" style="color:var(--amber);">${s[0]}</div><div class="small">${s[1]}</div></div>`).join('')}
        </div>
      </div>
      ${ph('EQUIPO / DETRÁS DE CÁMARAS · foto o video', { ar: '4/3', cls: 'r3' })}
    </div>`, {
    notes: [note('Sobre', 'Humaniza, breve. Imagen real del equipo. 3 datos con <b>conteo animado</b>.', { top: 70, stack: 'Motion count-up' })],
  });

  // ---- TESTIMONIOS ----
  const testi = sec('09', 'Testimonios / prueba social', `
    <div class="center" style="margin-bottom:26px;">${kick('Confían en VAL')}</div>
    <div class="grid" style="grid-template-columns:repeat(3,1fr);gap:20px;">
      ${[0, 1, 2].map(i => `<div class="hb r3 fill" style="padding:26px;">
        <div style="font-family:var(--mono);color:var(--amber);font-size:22px;">"</div>
        ${tl(['100%', '96%', '88%', '60%'])}
        <div class="row gap12 aic mt20"><div class="hb" style="width:40px;height:40px;border-radius:50%;"></div><div>${tl(['90px'])}<div class="tl sm" style="width:60px;"></div></div></div>
      </div>`).join('')}
    </div>
    <div class="row jcc gap40 mt40 wrap" style="opacity:.6;">
      ${[1, 2, 3, 4, 5].map(() => `<div class="hb r3" style="width:120px;height:38px;"></div>`).join('')}
    </div>`, {
    notes: [note('Prueba social', 'Cards sobrias + fila de <b>logos de clientes</b>. Legibilidad sobre carga.', { top: 60 })],
  });

  // ---- CTA cinematográfico ----
  const cta = sec('10', 'CTA cinematográfico', `
    <div class="lb" style="position:relative;height:440px;border-radius:18px;overflow:hidden;">
      ${ph('FONDO ABSTRACTO · video / textura en movimiento', { style: 'position:absolute;inset:0;height:100%;border-radius:0;border:none;' })}
      <div style="position:absolute;inset:0;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;gap:22px;padding:0 60px;">
        <div class="hl lg" style="max-width:20ch;">Tu próximo proyecto no necesita más contenido. Necesita una pieza <em>imposible de ignorar.</em></div>
        <div class="row gap12">${btn('Cotizar proyecto →', true, 'lg')}${btn('Agendar llamada', false, 'lg')}</div>
      </div>
    </div>`, {
    wide: true,
    notes: [note('CTA · cierre', 'Cierre de tráiler. Fondo con <b>movimiento sutil</b>; botón con microinteracción al hover.', { top: 120, stack: 'CSS / Motion' })],
  });

  // ---- FAQ ----
  const faqs = [
    ['¿Cómo se cotiza un proyecto audiovisual?', true],
    ['¿Trabajan con marcas y personas?'],
    ['¿Cubren eventos?'],
    ['¿Entregan piezas para redes?'],
    ['¿Cuánto tarda la entrega?'],
    ['¿Pueden encargarse de la idea?'],
    ['¿Qué necesita el cliente para empezar?'],
  ];
  const faq = sec('11', 'FAQ', `
    <div class="grid" style="grid-template-columns:.7fr 1.3fr;gap:48px;align-items:start;">
      <div>${kick('Dudas')}<div class="hl md mt12">Antes de<br>escribirnos.</div></div>
      <div>${faqs.map(f => `<div class="acc ${f[1] ? 'open' : ''}"><span class="q">${f[0]}</span><span class="pm">${f[1] ? '–' : '+'}</span></div>${f[1] ? `<div style="padding:4px 4px 18px;">${tl(['96%', '80%'])}</div>` : ''}`).join('')}</div>
    </div>`, {
    notes: [note('FAQ', 'Accordion premium, estados abierto/cerrado claros.', { top: 60 })],
  });

  // ---- CONTACTO ----
  const fields = [['Nombre'], ['Marca / empresa'], ['Tipo de proyecto'], ['Fecha tentativa'], ['Presupuesto aprox.'], ['WhatsApp']];
  const contacto = sec('12', 'Contacto', `
    <div class="grid" style="grid-template-columns:1.2fr .8fr;gap:48px;align-items:start;">
      <div>${kick('Hablemos')}<div class="hl md mt12" style="max-width:16ch;">Cuéntanos qué quieres lograr.</div>
        <div class="grid mt32" style="grid-template-columns:1fr 1fr;gap:18px;">
          ${fields.map(f => `<div class="field"><label>${f[0]}</label><div class="inp"></div></div>`).join('')}
          <div class="field" style="grid-column:1/-1;"><label>Mensaje</label><div class="inp area"></div></div>
        </div>
        <div class="mt24">${btn('Enviar solicitud →', true, 'lg')}</div>
      </div>
      <div class="col gap16">
        <div class="hb r3 fill" style="padding:22px;"><div class="kicker">WhatsApp directo</div><div class="lead mt12">Respuesta rápida, sin fricción.</div><div class="mt16">${btn('Escribir por WhatsApp', false)}</div></div>
        <div class="hb r3 fill" style="padding:22px;"><div class="kicker muted">Agenda</div><div class="lead mt12">Agendar una llamada de 15 min.</div><div class="mt16">${btn('Agendar llamada', false)}</div></div>
        <div class="small" style="font-family:var(--mono);letter-spacing:.1em;">hola@valaudiovisual.com<br>@val.audiovisual · Medellín</div>
      </div>
    </div>`, {
    notes: [note('Contacto', 'Form oscuro y claro, sin fricción. 3 vías: <b>form · WhatsApp · agenda</b>. Mensaje de confianza.', { top: 90, stack: 'Validación + anti-spam' })],
  });

  // ---- FOOTER ----
  const footer = `<footer class="sec" data-screen-label="13 Footer" style="background:#23221f0a;border-top:1px dashed var(--hair-2);">
    <div class="sinner"><div class="row jcb aic wrap gap24">
      <div><div class="logo" style="font-size:30px;">VAL<i>.</i></div><div class="small mt8" style="max-width:34ch;">Estudio audiovisual · Oriente Antioqueño, Medellín.</div></div>
      <div class="row gap40 wrap" style="font-family:var(--mono);font-size:.72rem;letter-spacing:.1em;color:var(--muted);text-transform:uppercase;">
        <div class="col gap8"><span style="color:var(--ink);">Menú</span><span>Portafolio</span><span>Servicios</span><span>Proceso</span></div>
        <div class="col gap8"><span style="color:var(--ink);">Social</span><span>Instagram</span><span>YouTube</span><span>TikTok</span></div>
        <div class="col gap8"><span style="color:var(--ink);">Contacto</span><span>WhatsApp</span><span>Agenda</span><span>Email</span></div>
      </div>
    </div>
    <div class="row jcb mt40 small" style="font-family:var(--mono);letter-spacing:.14em;text-transform:uppercase;"><span>© 2026 VAL Audiovisual</span><span>2.39 : 1</span></div>
    </div></footer>`;

  const navA = `<header class="nav" data-screen-label="00 Header" style="position:relative;">
    <div class="logo" style="margin:0 auto 0 0;">VAL<i>.</i></div>
    <div class="links" style="margin:0 auto;"><span class="act">Portafolio</span><span>Servicios</span><span>Proceso</span><span>FAQ</span><span>Contacto</span></div>
    ${btn('Cotizar proyecto', true, 'sm')}</header>`;

  window.BOARDS = window.BOARDS || {};
  window.BOARDS.A = navA + hero + marquee + reel + servicios + portafolio + proceso + sobre + testi + cta + faq + contacto + footer;
})();
