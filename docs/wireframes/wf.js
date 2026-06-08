/* Wireframe primitives — return HTML strings. Kept terse on purpose. */
window.WF = (function () {
  const ph = (tag, opts = {}) => {
    const ar = opts.ar ? `aspect-ratio:${opts.ar};` : '';
    const h = opts.h ? `height:${opts.h}px;` : '';
    const w = opts.w ? `width:${opts.w};` : '';
    const play = opts.play ? `<span class="play"></span>` : '';
    const t = tag ? `<span class="ph-tag ${opts.amber ? 'amber' : ''}">${tag}</span>` : '';
    return `<div class="ph ${opts.cls || ''}" style="${ar}${h}${w}${opts.style || ''}">${play}${t}</div>`;
  };
  // text lines: pass array of widths e.g. ['100%','94%','60%']
  const tl = (widths, cls = '') =>
    `<div class="tls gap6">${widths.map(w => `<div class="tl ${cls}" style="width:${w}"></div>`).join('')}</div>`;
  const btn = (label, pri = false, cls = '') => `<button class="wbtn ${pri ? 'pri' : ''} ${cls}">${label}</button>`;
  const chip = (label, on = false) => `<span class="chip ${on ? 'on' : ''}">${label}</span>`;
  const chips = (arr) => `<div class="chips">${arr.map(c => Array.isArray(c) ? chip(c[0], c[1]) : chip(c)).join('')}</div>`;
  const kick = (t, muted = false) => `<div class="kicker ${muted ? 'muted' : ''}">${t}</div>`;
  const hl = (t, size = 'lg') => `<div class="hl ${size}">${t}</div>`;
  // note: tag, body(html), opts{top,left,stack}
  const note = (tag, body, opts = {}) => {
    const top = opts.top != null ? `top:${opts.top}px;` : 'top:40px;';
    const left = opts.left != null ? `left:${opts.left};` : '';
    const stack = opts.stack ? `<div class="stack">${opts.stack}</div>` : '';
    return `<aside class="note" style="${top}${left}">
      <span class="note-tag">↳ ${tag}</span><p>${body}</p>${stack}</aside>`;
  };
  // section wrapper
  const sec = (num, name, inner, opts = {}) => {
    const cls = [opts.bleed ? 'bleed' : '', opts.wide ? 'wide' : '', opts.cls || ''].join(' ');
    const head = opts.bleed
      ? `<div class="shead" style="position:absolute;top:18px;left:0;right:0;z-index:5;">${''}<span class="snum">§${num}</span><span>${name}</span></div>`
      : `<div class="shead"><span class="snum">§${num}</span><span>${name}</span></div>`;
    const notes = (opts.notes || []).join('');
    return `<section class="sec ${cls}" data-screen-label="${num} ${name}">${opts.bleed ? '' : head}<div class="${opts.bleed ? '' : 'sinner'}">${inner}</div>${notes}</section>`;
  };
  const nav = (extra = {}) => {
    const links = (extra.links || ['Portafolio', 'Servicios', 'Proceso', 'FAQ', 'Contacto'])
      .map((l, i) => `<span class="${i === 0 && extra.actFirst ? 'act' : ''}">${l}</span>`).join('');
    return `<header class="nav ${extra.solid ? 'solid' : ''}" data-screen-label="00 Header">
      <div class="logo">VAL<i>.</i></div>
      <div class="links" style="${extra.center ? 'margin:0 auto;' : 'margin-left:auto;margin-right:24px;'}">${links}</div>
      ${btn(extra.cta || 'Cotizar proyecto', true, 'sm')}
    </header>`;
  };
  const num = (n, cls = '') => `<div class="num ${cls}">${n}</div>`;
  return { ph, tl, btn, chip, chips, kick, hl, note, sec, nav, num };
})();
