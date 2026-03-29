(function () {
  var isHome = document.body.classList.contains('home');
  var navType = (performance.getEntriesByType('navigation')[0] || {}).type || 'navigate';
  var isReload = navType === 'reload';
  var showPreloader = isHome && isReload;

  document.body.style.opacity = '1';

  var overlay;
  if (!showPreloader) {
    // White overlay that covers everything including the cursor canvas
    overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;background:#fff;z-index:99999;pointer-events:none;transition:opacity 0.4s ease;';
    document.body.prepend(overlay);
  }

  function showPage() {
    document.body.classList.add('loaded');
    if (overlay) {
      overlay.style.opacity = '0';
      setTimeout(function () { overlay.remove(); }, 500);
    }
  }

  if (showPreloader) {
    var preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = '<span class="preloader__count">0</span>';
    document.body.prepend(preloader);
    document.body.classList.add('loading');

    var countEl = preloader.querySelector('.preloader__count');
    var DURATION = 2200;
    var start = performance.now();

    function easeInOutQuart(t) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
    }

    function tick(now) {
      var progress = Math.min((now - start) / DURATION, 1);
      countEl.textContent = Math.floor(easeInOutQuart(progress) * 100);
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        countEl.textContent = 100;
        setTimeout(function () {
          preloader.classList.add('hide');
          document.body.classList.remove('loading');
          showPage();
          setTimeout(function () { preloader.remove(); }, 1100);
        }, 350);
      }
    }

    requestAnimationFrame(tick);
  } else {
    // All other cases: just fade in
    showPage();
  }
})();
