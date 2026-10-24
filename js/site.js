// IIS Lab site behaviour: mobile menu, theme toggle, publication filtering.
(function () {
  'use strict';

  // ---- Mobile menu ----
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  if (header && toggle) {
    toggle.addEventListener('click', function () {
      var open = header.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && header.classList.contains('is-open')) {
        header.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  // ---- Theme toggle (light / dark, remembered per browser) ----
  var root = document.documentElement;
  var media = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  function currentTheme() {
    var t = root.getAttribute('data-theme');
    if (t) return t;
    return media && media.matches ? 'dark' : 'light';
  }
  var themeBtn = document.querySelector('.theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('iis-theme', next); } catch (e) {}
    });
  }

  // ---- Fig. 1: word alignment between the English and Persian names ----
  var fig = document.getElementById('align-fig');
  if (fig) {
    var svg = fig.querySelector('.align-lines');
    var NS = 'http://www.w3.org/2000/svg';
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var drawn = false;

    var pairs = function () {
      return Array.prototype.map.call(fig.querySelectorAll('.align-en [data-a]'), function (en) {
        return { id: en.getAttribute('data-a'), en: en, fa: fig.querySelector('.align-fa [data-a="' + en.getAttribute('data-a') + '"]') };
      }).filter(function (p) { return p.fa; });
    };

    var draw = function () {
      var box = fig.getBoundingClientRect();
      while (svg.firstChild) svg.removeChild(svg.firstChild);
      var g = document.createElementNS(NS, 'g');
      pairs().forEach(function (p) {
        var a = p.en.getBoundingClientRect();
        var b = p.fa.getBoundingClientRect();
        var x1 = a.right - box.left + 14;
        var y1 = a.top - box.top + a.height * 0.55;
        var x2 = b.left - box.left - 14;
        var y2 = b.top - box.top + b.height * 0.55;
        var dx = Math.max(24, (x2 - x1) * 0.45);
        var path = document.createElementNS(NS, 'path');
        path.setAttribute('d', 'M' + x1 + ' ' + y1 + ' C' + (x1 + dx) + ' ' + y1 + ' ' + (x2 - dx) + ' ' + y2 + ' ' + x2 + ' ' + y2);
        path.setAttribute('data-a', p.id);
        g.appendChild(path);
        [[x1, y1], [x2, y2]].forEach(function (pt) {
          var c = document.createElementNS(NS, 'circle');
          c.setAttribute('cx', pt[0]); c.setAttribute('cy', pt[1]); c.setAttribute('r', 3);
          c.setAttribute('data-a', p.id);
          g.appendChild(c);
        });
      });
      svg.appendChild(g);
      if (!drawn && !reduce) {
        Array.prototype.forEach.call(g.querySelectorAll('path'), function (path, i) {
          var len = path.getTotalLength();
          path.style.strokeDasharray = len;
          path.style.setProperty('--len', len);
          path.style.animationDelay = (0.15 + i * 0.18) + 's';
        });
        g.classList.add('is-drawing');
      }
      drawn = true;
    };

    var setActive = function (id) {
      fig.classList.toggle('has-active', !!id);
      Array.prototype.forEach.call(fig.querySelectorAll('[data-a]'), function (el) {
        el.classList.toggle('is-active', !!id && el.getAttribute('data-a') === id);
      });
    };
    Array.prototype.forEach.call(fig.querySelectorAll('.align-en [data-a], .align-fa [data-a]'), function (el) {
      el.addEventListener('mouseenter', function () { setActive(el.getAttribute('data-a')); });
      el.addEventListener('mouseleave', function () { setActive(null); });
      el.addEventListener('click', function () { setActive(el.classList.contains('is-active') ? null : el.getAttribute('data-a')); });
    });

    // Draw once the web fonts are in (word positions depend on them), then
    // redraw only when the figure's size actually changes.
    var lastW = 0, lastH = 0;
    var redraw = function () {
      var r = fig.getBoundingClientRect();
      if (Math.round(r.width) === lastW && Math.round(r.height) === lastH) return;
      lastW = Math.round(r.width); lastH = Math.round(r.height);
      draw();
    };
    var start = function () {
      redraw();
      if (window.ResizeObserver) new ResizeObserver(redraw).observe(fig);
      else window.addEventListener('resize', redraw);
    };
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(start, start);
    else start();
  }

  // ---- Publications: search + type filter ----
  var search = document.getElementById('pub-search');
  if (search) {
    var items = Array.prototype.slice.call(document.querySelectorAll('.pub'));
    var years = Array.prototype.slice.call(document.querySelectorAll('[data-year]'));
    var buttons = Array.prototype.slice.call(document.querySelectorAll('.filters button'));
    var count = document.getElementById('pub-count');
    var empty = document.getElementById('pub-empty');
    var type = 'all';

    var apply = function () {
      var terms = search.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
      var shown = 0;
      items.forEach(function (li) {
        var text = li.getAttribute('data-text');
        var okType = type === 'all' || li.getAttribute('data-type') === type;
        var okText = terms.every(function (t) { return text.indexOf(t) !== -1; });
        li.hidden = !(okType && okText);
        if (!li.hidden) shown++;
      });
      years.forEach(function (sec) {
        sec.hidden = !sec.querySelector('.pub:not([hidden])');
      });
      count.textContent = shown + (shown === 1 ? ' paper' : ' papers');
      empty.classList.toggle('is-visible', shown === 0);
    };

    search.addEventListener('input', apply);
    buttons.forEach(function (b) {
      b.addEventListener('click', function () {
        type = b.getAttribute('data-filter');
        buttons.forEach(function (o) { o.setAttribute('aria-pressed', o === b ? 'true' : 'false'); });
        apply();
      });
    });
  }
})();
