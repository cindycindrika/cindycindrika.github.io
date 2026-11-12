/* site.js — membangun semua halaman dari data/content.js.
   Tidak perlu diedit untuk mengubah isi; edit data/content.js saja. */
(function () {
  var S = window.SITE, P = S.profile;
  var page = document.body.getAttribute('data-page');
  var $ = function (id) { return document.getElementById(id); };

  // nilai kosong atau yang masih "ISI: ..." tidak ditampilkan
  function ok(v) { return typeof v === 'string' ? (v.trim() !== '' && v.trim().indexOf('ISI') !== 0) : !!v; }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function list(arr, cls) { arr = (arr || []).filter(ok); return arr.length ? '<ul class="' + (cls || 'bullets') + '">' + arr.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' : ''; }
  function byId(id) { return S.projects.filter(function (p) { return p.id === id; })[0]; }
  function imgs(p) { return (p.images || []).filter(function (i) { return i && ok(i.src); }); }
  function cover(p) { return ok(p.cover) ? p.cover : (imgs(p)[0] || {}).src; }
  function mail() { return 'mailto:' + P.email; }

  /* ---------- header & footer ---------- */
  var nav = [['index', 'Home', 'index.html'], ['about', 'About', 'about.html'], ['portfolio', 'Portfolio', 'portfolio.html'], ['research', 'Research', 'research.html'], ['cv', 'CV', 'cv.html']];
  $('site-header').innerHTML =
    '<div class="wrap bar"><a class="brand" href="index.html"><span class="mark"></span>' + esc(P.shortName || P.name) + '</a>' +
    '<button class="menu-btn" aria-label="Menu" aria-expanded="false">Menu</button><nav class="nav">' +
    nav.map(function (n) { var on = (n[0] === page) || (page === 'project' && n[0] === 'portfolio'); return '<a href="' + n[2] + '"' + (on ? ' class="on"' : '') + '>' + n[1] + '</a>'; }).join('') +
    '<a class="nav-cta" href="#contact">Contact</a></nav></div>';
  var mb = document.querySelector('.menu-btn');
  mb.addEventListener('click', function () { var o = document.body.classList.toggle('nav-open'); mb.setAttribute('aria-expanded', o); });

  var links = [];
  if (ok(P.email)) links.push(['Email', mail(), P.email]);
  if (ok(P.phone)) links.push(['Phone', 'tel:' + P.phone.replace(/[^+\d]/g, ''), P.phone]);
  if (ok(P.linkedin)) links.push(['LinkedIn', P.linkedin, P.linkedin.replace(/^https?:\/\//, '')]);
  if (ok(P.github)) links.push(['GitHub', P.github, P.github.replace(/^https?:\/\//, '')]);
  if (ok(P.instagram)) links.push(['Instagram', P.instagram, P.instagram.replace(/^https?:\/\//, '')]);
  $('site-footer').innerHTML =
    '<section class="contact" id="contact"><div class="wrap contact-grid"><div><p class="eyebrow light">Contact</p><h2>Let\'s talk about structures.</h2>' +
    '<p class="lead">Open to structural engineering roles and collaboration. ' + esc(P.location) + '.</p></div><dl class="contact-list">' +
    links.map(function (l) { return '<div><dt>' + l[0] + '</dt><dd><a href="' + esc(l[1]) + '"' + (l[1].indexOf('http') === 0 ? ' target="_blank" rel="noopener"' : '') + '>' + esc(l[2]) + '</a></dd></div>'; }).join('') +
    '</dl></div></section><div class="foot"><div class="wrap foot-in"><span>&copy; ' + new Date().getFullYear() + ' ' + esc(P.name) + '</span><span>' + esc(P.role) + '</span></div></div>';

  /* ---------- komponen ---------- */
  function tile(p) {
    var c = cover(p);
    return '<a class="tile" href="project.html?id=' + encodeURIComponent(p.id) + '" data-cat="' + esc(p.category) + '">' +
      '<div class="tile-img' + (c ? '' : ' empty') + '">' + (c ? '<img src="' + esc(c) + '" alt="">' : '<span>' + esc(p.client) + '</span>') +
      '<em class="tag">' + esc(p.category) + '</em></div>' +
      '<h3>' + esc(p.title) + '</h3><p class="meta">' + [p.client, p.location].filter(ok).map(esc).join(' &middot; ') + '</p>' +
      '<span class="more">View project</span></a>';
  }
  function gallery(arr) {
    arr = (arr || []).filter(function (i) { return i && ok(i.src); });
    if (!arr.length) return '';
    return '<div class="gallery">' + arr.map(function (i) {
      return '<figure><a class="zoom" href="' + esc(i.src) + '"><img src="' + esc(i.src) + '" alt="' + esc(i.caption || '') + '"></a>' + (ok(i.caption) ? '<figcaption>' + esc(i.caption) + '</figcaption>' : '') + '</figure>';
    }).join('') + '</div>';
  }
  function head(eyebrow, title, lead) {
    return '<section class="page-head"><div class="wrap"><p class="eyebrow light">' + esc(eyebrow) + '</p><h1>' + esc(title) + '</h1>' + (lead ? '<p class="lead">' + esc(lead) + '</p>' : '') + '</div></section>';
  }
  function sec(label, title, body, cls) {
    return '<section class="sec ' + (cls || '') + '"><div class="wrap"><div class="sec-head"><p class="eyebrow">' + esc(label) + '</p>' + (title ? '<h2>' + esc(title) + '</h2>' : '') + '</div>' + body + '</div></section>';
  }
  function rows(arr, fn) { return '<div class="rows">' + arr.map(fn).join('') + '</div>'; }
  function skillsBlock() {
    return '<div class="cols4">' + S.skills.map(function (g) { return '<div><h3 class="small">' + esc(g.group) + '</h3>' + list(g.items, 'plain') + '</div>'; }).join('') + '</div>';
  }
  function eduBlock() {
    return rows(S.education, function (e) {
      return '<article class="row"><div class="when">' + esc(e.period) + '<br><span>' + esc(e.location) + '</span></div><div><h3>' + esc(e.school) + '</h3><p class="sub">' + esc(e.degree) + '</p>' + list(e.points) + '</div></article>';
    });
  }
  function expBlock() {
    return rows(S.experience, function (e) {
      var pr = (e.projectIds || []).map(byId).filter(Boolean);
      return '<article class="row"><div class="when">' + (ok(e.period) ? esc(e.period) + '<br>' : '') + '<span>' + esc(e.location) + '</span></div><div><h3>' + esc(e.title) + '</h3><p class="sub">' + esc(e.org) + '</p>' + list(e.points) +
        (pr.length ? '<p class="linkline">Projects: ' + pr.map(function (p) { return '<a href="project.html?id=' + p.id + '">' + esc(p.title) + '</a>'; }).join('<span class="sep"> / </span>') + '</p>' : '') + '</div></article>';
    });
  }
  function simpleRows(arr, a, b, c) {
    return rows(arr, function (x) { return '<article class="row slim"><div class="when">' + (ok(x[c]) ? esc(x[c]) : '') + '</div><div><h3>' + esc(x[a]) + '</h3>' + (ok(x[b]) ? '<p class="sub">' + esc(x[b]) + '</p>' : '') + (ok(x.detail) && b !== 'detail' ? '<p>' + esc(x.detail) + '</p>' : '') + '</div></article>'; });
  }

  /* ---------- halaman ---------- */
  var M = $('main'), html = '';

  if (page === 'index') {
    html += '<section class="hero"><div class="wrap hero-grid"><div class="hero-text"><p class="eyebrow light">' + esc(P.role) + '</p><h1>' + esc(P.name) + '</h1>' +
      '<p class="tagline">' + esc(P.tagline) + '</p><p class="lead">' + esc(P.intro) + '</p>' +
      '<p class="actions"><a class="btn" href="portfolio.html">View portfolio</a><a class="btn ghost" href="cv.html">Curriculum vitae</a></p></div>' +
      '<div class="hero-photo"><div class="ph-fallback">' + esc(P.initials) + '</div><img src="' + esc(P.photo) + '" alt="' + esc(P.name) + '" onerror="this.remove()"></div></div></section>';
    html += '<section class="stats"><div class="wrap stats-grid">' + P.stats.map(function (s) { return '<div><strong>' + esc(s.value) + '</strong><span>' + esc(s.label) + '</span></div>'; }).join('') + '</div></section>';
    html += sec('Selected work', 'Projects', '<div class="tiles">' + P.featured.map(byId).filter(Boolean).map(tile).join('') + '</div><p class="after"><a class="btn dark" href="portfolio.html">All ' + S.projects.length + ' projects</a></p>');
    html += sec('Expertise', 'What I work with', skillsBlock(), 'tint');
    html += sec('Research', 'Beyond structural design',
      rows(S.research.slice(0, 3), function (r) { return '<article class="row"><div class="when">' + esc(r.type) + '</div><div><h3>' + esc(r.title) + '</h3><p>' + esc(r.summary) + '</p></div></article>'; }) +
      '<p class="after"><a class="btn dark" href="research.html">All research</a></p>');
  }

  if (page === 'about') {
    html += head('About', P.name, P.role + '  /  ' + P.location);
    html += '<section class="sec"><div class="wrap about-grid"><div class="about-photo"><div class="ph-fallback">' + esc(P.initials) + '</div><img src="' + esc(P.photo) + '" alt="' + esc(P.name) + '" onerror="this.remove()"></div><div class="prose">' +
      P.about.map(function (t) { return '<p>' + esc(t) + '</p>'; }).join('') +
      '<p class="actions"><a class="btn dark" href="cv.html">Curriculum vitae</a><a class="btn line" href="#contact">Contact</a></p></div></div></section>';
    html += sec('Education', '', eduBlock(), 'tint');
    html += sec('Expertise', '', skillsBlock());
    html += sec('Awards', '', simpleRows(S.awards, 'title', 'detail', 'year'), 'tint');
    html += sec('Certifications', '', simpleRows(S.certifications, 'title', 'detail', 'year'));
    html += sec('Organizations and teaching', '', simpleRows(S.organizations, 'title', 'org', 'period'), 'tint');
  }

  if (page === 'portfolio') {
    var cats = []; S.projects.forEach(function (p) { if (cats.indexOf(p.category) < 0) cats.push(p.category); });
    html += head('Portfolio', 'Projects', 'Professional work, internships, thesis, and academic design projects.');
    html += '<section class="sec"><div class="wrap"><div class="filters"><button class="on" data-f="*">All (' + S.projects.length + ')</button>' +
      cats.map(function (c) { return '<button data-f="' + esc(c) + '">' + esc(c) + ' (' + S.projects.filter(function (p) { return p.category === c; }).length + ')</button>'; }).join('') +
      '</div><div class="tiles">' + S.projects.map(tile).join('') + '</div></div></section>';
  }

  if (page === 'project') {
    var id = new URLSearchParams(location.search).get('id'), p = byId(id);
    if (!p) { html += head('Portfolio', 'Project not found', '') + '<section class="sec"><div class="wrap"><a class="btn dark" href="portfolio.html">Back to portfolio</a></div></section>'; }
    else {
      document.title = p.title + ' | ' + P.name;
      var ix = S.projects.indexOf(p), nx = S.projects[(ix + 1) % S.projects.length];
      html += '<section class="page-head"><div class="wrap"><p class="crumb"><a href="portfolio.html">Portfolio</a> / ' + esc(p.category) + '</p><h1>' + esc(p.title) + '</h1><p class="lead">' + esc(p.summary) + '</p></div></section>';
      html += '<section class="sec"><div class="wrap proj-grid"><div><p class="eyebrow">Scope and results</p>' + list(p.highlights, 'bullets big') + gallery(p.images) + '</div>' +
        '<aside><dl class="facts">' + [['Client', p.client], ['Location', p.location], ['Period', p.period], ['Role', p.role]].concat(p.facts || []).filter(function (f) { return ok(f[1]); }).map(function (f) { return '<div><dt>' + esc(f[0]) + '</dt><dd>' + esc(f[1]) + '</dd></div>'; }).join('') + '</dl>' +
        ((p.tools || []).length ? '<p class="eyebrow">Tools and codes</p><p class="chips">' + p.tools.map(function (t) { return '<span>' + esc(t) + '</span>'; }).join('') + '</p>' : '') + '</aside></div></section>';
      html += '<section class="next"><div class="wrap"><a href="project.html?id=' + nx.id + '"><span class="eyebrow light">Next project</span><strong>' + esc(nx.title) + '</strong></a></div></section>';
    }
  }

  if (page === 'research') {
    html += head('Research', 'Research projects', 'Water resources, geotechnical hazard, and IoT devices.');
    html += '<section class="sec"><div class="wrap">' + S.research.map(function (r, i) {
      return '<article class="research" id="' + esc(r.id) + '"><div class="r-num">' + ('0' + (i + 1)).slice(-2) + '</div><div class="r-body"><p class="eyebrow">' + esc(r.type) + (ok(r.period) ? '  /  ' + esc(r.period) : '') + '</p><h2>' + esc(r.title) + '</h2><p class="lead dark">' + esc(r.summary) + '</p>' +
        '<div class="cols3">' + [['Findings', r.findings], ['My role', r.role], ['Outputs', r.outputs]].filter(function (c) { return (c[1] || []).filter(ok).length; }).map(function (c) { return '<div><h3 class="small">' + c[0] + '</h3>' + list(c[1]) + '</div>'; }).join('') + '</div>' +
        (r.link && ok(r.link.url) ? '<p><a class="btn dark" target="_blank" rel="noopener" href="' + esc(r.link.url) + '">' + esc(r.link.label) + '</a></p>' : '') + gallery(r.images) + '</div></article>';
    }).join('') + (ok(P.supportingDocs) ? '<p class="after">Certificates, IPR and patent documents: <a href="' + esc(P.supportingDocs) + '" target="_blank" rel="noopener">supporting documents folder</a>.</p>' : '') + '</div></section>';
  }

  if (page === 'cv') {
    html += head('Curriculum vitae', P.name, P.role + '  /  ' + P.location);
    html += '<section class="sec cv-actions"><div class="wrap"><p class="actions">' + (ok(P.cvFile) ? '<a class="btn dark" href="' + esc(P.cvFile) + '" download>Download PDF</a>' : '') + '<button class="btn line" onclick="window.print()">Print this page</button></p></div></section>';
    html += sec('Summary', '', '<div class="prose wide"><p>' + esc(P.about[0]) + '</p></div>');
    html += sec('Work experience', '', expBlock(), 'tint');
    html += sec('Education', '', eduBlock());
    html += sec('Projects', '', rows(S.projects.filter(function (p) { return p.category === 'Thesis' || p.category === 'Academic'; }), function (p) {
      return '<article class="row"><div class="when">' + esc(p.period) + '<br><span>' + esc(p.category) + '</span></div><div><h3><a href="project.html?id=' + p.id + '">' + esc(p.title) + '</a></h3><p>' + esc(p.summary) + '</p></div></article>';
    }), 'tint');
    html += sec('Skills', '', skillsBlock());
    html += sec('Awards', '', simpleRows(S.awards, 'title', 'detail', 'year'), 'tint');
    html += sec('Certifications', '', simpleRows(S.certifications, 'title', 'detail', 'year'));
    html += sec('Organizations and teaching', '', simpleRows(S.organizations, 'title', 'org', 'period'), 'tint');
    html += sec('Languages', '', '<p>' + S.languages.map(function (l) { return esc(l.name) + ' (' + esc(l.level) + ')'; }).join('  /  ') + '</p>');
  }

  M.innerHTML = html;

  /* ---------- filter portfolio ---------- */
  Array.prototype.forEach.call(document.querySelectorAll('.filters button'), function (b) {
    b.addEventListener('click', function () {
      document.querySelector('.filters .on').classList.remove('on'); b.classList.add('on');
      var f = b.getAttribute('data-f');
      Array.prototype.forEach.call(document.querySelectorAll('.tiles .tile'), function (t) { t.style.display = (f === '*' || t.getAttribute('data-cat') === f) ? '' : 'none'; });
    });
  });

  /* ---------- lightbox ---------- */
  var lb = document.createElement('div'); lb.className = 'lightbox'; lb.innerHTML = '<button aria-label="Close">Close</button><img alt=""><p></p>'; document.body.appendChild(lb);
  function close() { lb.classList.remove('open'); }
  lb.addEventListener('click', close);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  Array.prototype.forEach.call(document.querySelectorAll('a.zoom'), function (a) {
    a.addEventListener('click', function (e) { e.preventDefault(); lb.querySelector('img').src = a.getAttribute('href'); lb.querySelector('p').textContent = a.querySelector('img').alt; lb.classList.add('open'); });
  });
  if (location.hash === '#contact') { var c = $('contact'); if (c) c.scrollIntoView(); }
})();
