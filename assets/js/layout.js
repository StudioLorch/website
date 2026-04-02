/**
 * layout.js — Shared nav and footer component injection
 *
 * Usage: place <div id="site-nav"></div> at the top of <body>,
 * <div id="site-footer"></div> inside home/about/projekte frames,
 * <div id="site-footer-page"></div> on case study pages.
 *
 * To update the nav or footer globally, edit this file only.
 */
(function () {
  // Reveal body immediately so the nav (injected below) is never hidden by
  // "body { opacity: 0 }" from the HTML head. The white entry overlay in
  // preloader.js (z-index 99999) still covers page content; the nav sits
  // above it at z-index 100001 and stays continuously visible.
  document.body.style.opacity = '1';

  const LINKEDIN_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`;

  const FOOTER_INNER = `
    <div class="home-footer__body">
      <h2 class="home-footer__headline">Let's create<br>together</h2>
    </div>
    <div class="home-footer__bar">
      <span class="home-footer__copy">© Timo Lorch</span>
      <a href="http://www.linkedin.com/in/timo-lorch-51a460198" target="_blank" rel="noopener" class="home-footer__link" aria-label="LinkedIn">
        ${LINKEDIN_SVG}
      </a>
    </div>`;

  const LOGO_SVG = `<svg class="site-logo__svg" viewBox="0 0 500 500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path class="site-logo__default" d="M250.00372,375c-13.82396,0-26.97794-2.10672-39.46937-6.30527-12.49888-4.19855-23.95557-10.12417-34.37007-17.76941-10.4145-7.64524-19.44436-16.6751-27.0896-27.0896-7.64524-10.4145-13.57085-21.87118-17.76941-34.37007-4.206-12.49144-6.30527-25.65286-6.30527-39.46937s2.09928-26.97049,6.30527-39.46937c4.19855-12.49144,10.12417-23.94813,17.76941-34.36262,7.64524-10.4145,16.6751-19.45181,27.0896-27.09704,10.4145-7.63779,21.87118-13.56341,34.37007-17.76196,12.49144-4.206,25.64542-6.30527,39.46937-6.30527,13.80907,0,26.97049,2.09928,39.46193,6.30527,12.49888,4.19855,23.95557,10.12417,34.37007,17.76196,10.4145,7.64524,19.44436,16.68255,27.0896,27.09704s13.57085,21.87118,17.76941,34.36262c4.206,12.49888,6.30527,25.65286,6.30527,39.46937s-2.09928,26.97794-6.30527,39.46937c-4.19855,12.49888-10.12417,23.95557-17.76941,34.37007s-16.6751,19.44436-27.0896,27.0896-21.87118,13.57085-34.37007,17.76941c-12.49144,4.19855-25.65286,6.30527-39.46193,6.30527ZM250.00372,354.20823c11.51624,0,22.48906-1.75684,32.90355-5.26308,10.4145-3.50624,19.96546-8.44922,28.65289-14.81404,8.67999-6.36483,16.20612-13.89096,22.57094-22.57839,6.37227-8.67999,11.3078-18.23095,14.81404-28.64545,3.50624-10.42194,5.26308-21.38731,5.26308-32.911,0-11.51624-1.75684-22.48906-5.26308-32.90355-3.50624-10.4145-8.44177-19.96546-14.81404-28.65289-6.36483-8.67999-13.89096-16.20612-22.57094-22.57839-8.68743-6.36483-18.23839-11.30036-28.65289-14.8066-10.4145-3.51368-21.38731-5.26308-32.90355-5.26308-11.52369,0-22.4965,1.7494-32.911,5.26308-10.4145,3.50624-19.96546,8.44177-28.65289,14.8066-8.67999,6.37227-16.20612,13.8984-22.57094,22.57839-6.37227,8.68743-11.3078,18.23839-14.81404,28.65289-3.50624,10.4145-5.26308,21.38731-5.26308,32.90355,0,11.52369,1.75684,22.48906,5.26308,32.911,3.50624,10.4145,8.44177,19.96546,14.81404,28.64545,6.36483,8.68743,13.89096,16.21356,22.57094,22.57839,8.68743,6.36483,18.23839,11.3078,28.65289,14.81404,10.4145,3.50624,21.38731,5.26308,32.911,5.26308ZM192.17685,217.87006v-29.09954h115.64631v29.09954h-40.02025v103.9514h-35.60581v-103.9514h-40.02025Z"/>
    <g class="site-logo__hover">
      <path d="M233.91895,92.66943c4.55469,2.35986,9.63672,3.49463,15.24414,3.40381,5.56738-.09033,10.59375-1.37842,15.08105-3.86523,4.48633-2.48682,8.02441-6.09961,10.61133-10.83936,2.58691-4.73926,3.82617-10.5332,3.71484-17.38232s-1.53711-12.6001-4.27637-17.25342c-2.73926-4.65283-6.39258-8.14893-10.95703-10.48926-4.56543-2.33936-9.63184-3.46436-15.19824-3.37402-5.6084.09082-10.65039,1.37939-15.12695,3.86572-4.47656,2.48682-8.00391,6.09961-10.58105,10.83838-2.57812,4.73975-3.81055,10.53369-3.69922,17.38281.11035,6.80908,1.5293,12.54004,4.25977,17.19287,2.72949,4.65381,6.37207,8.16016,10.92773,10.52002ZM237.21973,55.32666c.92969-2.54883,2.33105-4.49463,4.20215-5.83691s4.18848-2.03613,6.95215-2.08105,5.10254.57373,7.01562,1.85449c1.91406,1.28125,3.37695,3.18066,4.38965,5.69775,1.0127,2.51807,1.54883,5.61914,1.6084,9.30371.05957,3.68506-.37598,6.80225-1.30566,9.35107-.93066,2.54932-2.33105,4.49512-4.20215,5.8374s-4.18945,2.03564-6.95312,2.08057c-2.7627.04492-5.10156-.57324-7.01562-1.85449-1.91406-1.28027-3.37695-3.17969-4.38965-5.69775-1.0127-2.51758-1.54785-5.61865-1.60742-9.30371-.05957-3.68457.375-6.80127,1.30566-9.35107Z"/>
      <polygon points="305.49219 79.92432 328.05469 87.85205 332.5166 75.15332 309.9541 67.22607 313.45898 57.24854 338.5166 66.05225 342.97754 53.354 302.16113 39.0127 281.76465 97.06299 297.52441 102.60059 305.49219 79.92432"/>
      <polygon points="352.84766 103.66211 372.08789 117.86621 380.08203 107.0376 360.8418 92.83398 367.12305 84.32568 388.48926 100.1001 396.4834 89.27148 361.67871 63.57617 325.13379 113.07715 338.57227 122.99854 352.84766 103.66211"/>
      <polygon points="388.0166 176.56055 398.88965 168.62744 382.66895 146.396 391.21289 140.1626 406.1582 160.64697 417.03125 152.71338 402.08594 132.22949 410.62891 125.99658 426.91992 148.32471 437.79297 140.3916 411.65625 104.56885 361.95117 140.83496 388.0166 176.56055"/>
      <polygon points="395.63477 196.53369 426.63574 187.37061 426.7373 187.71631 402.03809 218.2002 405.98926 231.56836 464.99512 214.12793 460.26074 198.10889 429.375 207.23779 429.23828 206.77686 453.9248 176.67334 449.90527 163.07422 390.89941 180.51465 395.63477 196.53369"/>
      <polygon points="459.74609 307.62695 466.78027 264.93994 406.07031 254.93604 403.35449 271.41797 427.06934 275.32568 423.18066 298.92188 436.46094 301.11035 440.34961 277.51416 450.78418 279.2334 446.46582 305.43848 459.74609 307.62695"/>
      <path d="M459.52441,343.25781c-1.69434-.90967-3.47754-1.06055-5.35059-.45215-1.87305.60791-3.29199,1.8125-4.25879,3.6123-.93848,1.74658-1.1416,3.56396-.61035,5.45264.53223,1.88867,1.64453,3.2876,3.33887,4.19727,1.69336.91016,3.47461,1.06494,5.34277.46582,1.86816-.59961,3.27148-1.77246,4.20898-3.51953.9668-1.7998,1.18652-3.64844.66016-5.54541-.52734-1.89795-1.6377-3.30078-3.33105-4.21094Z"/>
      <path d="M398.65234,339.41309c-.91699-1.44727-1.39453-3.02295-1.43457-4.72656-.04004-1.7041.39551-3.40234,1.30469-5.09619.90039-1.67676,2.07422-2.97314,3.52148-3.88916,1.44727-.91699,3.02734-1.39258,4.73926-1.42725,1.71289-.03516,3.40723.39746,5.08398,1.29785l33.4541,17.96924,7.9043-14.71533-34.72461-18.65186c-4.12891-2.21777-8.22168-3.16016-12.27734-2.82617-4.05566.3335-7.84277,1.81787-11.36035,4.45264-3.51855,2.63428-6.5332,6.29004-9.04492,10.96582-2.49219,4.64062-3.86621,9.15479-4.11914,13.54297-.25488,4.3877.59473,8.37354,2.5459,11.95703,1.95215,3.58301,4.99219,6.48389,9.12109,8.70166l34.72461,18.65186,7.9043-14.71582-33.4541-17.96973c-1.67676-.90039-2.97266-2.07422-3.88867-3.521Z"/>
      <path d="M450.48242,360.09131c-1.69336-.91016-3.47754-1.06104-5.34961-.45264-1.87305.6084-3.29297,1.8125-4.25977,3.6123-.9375,1.74658-1.1416,3.56445-.60938,5.45264.53125,1.88867,1.64453,3.2876,3.33789,4.19775,1.69434.90967,3.47461,1.06494,5.34277.46533s3.27148-1.77246,4.20996-3.51953c.9668-1.7998,1.18652-3.64844.65918-5.54541-.52637-1.89746-1.63672-3.30078-3.33105-4.21045Z"/>
      <path d="M358.16797,360.94824l13.45703,15.21136-4.33002,3.83069-21.54791-8.05328-13.5918,12.02393,24.56537,8.90485c-1.37244,3.25885-1.81781,6.55005-1.31244,9.87494.54102,3.55859,2.27148,6.98877,5.19141,10.28906,2.89355,3.27002,6.08789,5.44531,9.58301,6.52441,3.49609,1.07959,7.07617,1.10693,10.74316.08301,3.66699-1.02441,7.21094-3.04932,10.63086-6.0752l19.8916-17.59766-40.76953-46.08398-12.51074,11.06787ZM385.68848,400.94336c-1.4707,1.30029-2.90234,2.21289-4.29688,2.73828-1.39453.52441-2.74121.61963-4.04004.28467s-2.5332-1.1626-3.7002-2.48242c-1.15527-1.30518-1.80957-2.61182-1.96289-3.91943-.1543-1.30762.12695-2.60693.84473-3.89648.71777-1.29004,1.81152-2.58496,3.28125-3.88574l4.41028-3.90186,9.8739,11.16113-4.41016,3.90186Z"/>
      <path d="M298.81256,409.60797l-19.73108,4.72534-6.20062-10.62531-17.53027,4.19824,34.08105,55.10742,22.20508-5.31787,5.4209-64.56738-17.53027,4.19824-.71478,12.28131ZM296.35449,443.93213l-10.69287-18.32312,12.39233-2.96771-1.23267,21.17902-.4668.11182Z"/>
      <polygon points="234.02246 436.68457 233.66602 436.63525 216.05859 401.57373 202.25 399.66895 193.8418 460.62109 210.38965 462.90381 214.79004 430.99902 215.2666 431.06494 232.53223 465.95801 246.58008 467.89551 254.9873 406.94336 238.43945 404.66113 234.02246 436.68457"/>
      <polygon points="182.77539 389.51123 171.76172 410.87402 150.50586 399.91553 144.33789 411.87842 165.59375 422.8374 160.74805 432.23682 137.1416 420.06689 130.97461 432.02979 169.42773 451.85449 197.62305 397.16553 182.77539 389.51123"/>
      <path d="M145.18555,364.12402l-14.45142,14.26965-4.06165-4.11346,6.86072-21.95697-12.75-12.9126-.30487,1.01068-7.07404-16.29681-12.21838,1.42792-8.07874-18.61127,9.38794-7.95093-7.17773-16.53516-48.35449,43.12891,9.09082,20.94531,64.34766-5.85272-7.16394,23.74988c-3.32953-1.19153-6.64062-1.45654-9.93176-.76923-3.52441.73486-6.85449,2.65088-9.99023,5.74707-3.10645,3.06787-5.10352,6.37646-5.98926,9.92578-.88672,3.54932-.71777,7.12598.50488,10.73145,1.22363,3.60498,3.44043,7.03271,6.64844,10.28223l18.66113,18.89795,43.78223-43.23145-11.7373-11.88623ZM66.95605,329.08936l16.1886-13.71063,5.07397,11.68909-21.07117,2.46246-.19141-.44092ZM110.89551,397.98291l-4.1377-4.18994c-1.37891-1.39648-2.36816-2.77686-2.96875-4.14014-.60059-1.36377-.76953-2.70312-.50586-4.01855.2627-1.31543,1.02246-2.59277,2.27637-3.83057,1.23926-1.22461,2.50781-1.94971,3.80566-2.1748,1.29688-.22559,2.60938-.01562,3.93652.63037,1.32812.64551,2.68066,1.66699,4.05957,3.06348l4.13739,4.19031-10.60321,10.46985Z"/>
      <path d="M66.02539,287.1416c6.4834-.28223,12.02148-1.7915,16.61328-4.52783,4.5918-2.73584,8.06055-6.42041,10.4043-11.05371,2.34473-4.63232,3.38574-9.94043,3.125-15.92383-.2334-5.3623-1.49609-10.07373-3.78809-14.13428-2.29199-4.06006-5.47559-7.18945-9.55078-9.38721-4.0752-2.19824-8.91406-3.17529-14.5166-2.93115l-8.52441.37109,1.18652,27.25391,11.88672-.51807-.4859-11.14771c1.71454-.02997,3.2373.30933,4.55621,1.04663,1.39746.78125,2.50293,2.00146,3.31738,3.65967.81348,1.65918,1.27637,3.75879,1.38672,6.2998.12598,2.88135-.44922,5.32275-1.72559,7.32275s-3.17383,3.54639-5.69238,4.63818c-2.51855,1.09229-5.5791,1.7168-9.18066,1.87354-3.56152.15527-6.62598-.22705-9.19141-1.14844-2.56641-.92041-4.5625-2.33691-5.98926-4.24951s-2.20117-4.26953-2.32324-7.07129c-.05664-1.30029.03711-2.50244.2793-3.60547.24316-1.10303.63086-2.08252,1.16504-2.93799.53418-.85498,1.19434-1.58057,1.98047-2.17627.78613-.59521,1.70312-1.04639,2.75293-1.35254l-.73535-16.86865c-3.06738.45459-5.85938,1.47852-8.37598,3.07129-2.51758,1.59375-4.66895,3.63672-6.4541,6.13037-1.78613,2.49365-3.12598,5.32861-4.02051,8.50488-.89355,3.17676-1.26172,6.58594-1.10352,10.22754.18066,4.14209,1.0459,7.99414,2.59375,11.55469,1.54883,3.56152,3.73828,6.66357,6.57031,9.30713,2.83203,2.64307,6.24219,4.65479,10.23145,6.03467,3.99023,1.37988,8.52637,1.95898,13.6084,1.73779Z"/>
      <polygon points="109.01758 182.37646 96.18555 178.31445 87.87988 204.55127 77.79785 201.35938 85.4502 177.18506 72.61816 173.12305 64.96582 197.29736 54.88379 194.10596 63.22559 167.75439 50.39355 163.69238 37.01074 205.96875 95.6709 224.53857 109.01758 182.37646"/>
      <polygon points="120.63477 164.43115 94.88477 144.88721 95.10254 144.6001 134.29395 146.43506 142.72168 135.33105 93.70996 98.13184 83.61133 111.4375 109.26562 130.90869 108.97461 131.29199 70.09766 129.24219 61.52441 140.5376 110.53516 177.7373 120.63477 164.43115"/>
      <rect x="141.67903" y="79.9288" width="42.30113" height="12.49787" transform="translate(-21.39788 86.73969) rotate(-28.06485)"/>
    </g>
  </svg>`;

  const isCase = document.body.classList.contains('case');
  const NAV_HTML = `<header class="site-header">
    <a class="site-logo ${isCase ? 'is-hidden' : ''}" href="index.html">${LOGO_SVG}</a>
    <a class="site-back-btn ${isCase ? '' : 'is-hidden'}" href="projekte.html" aria-label="Alle Projekte">&#xE13A;</a>
  </header>`;

  // --- Inject header (logo only) ---
  const navEl = document.getElementById('site-nav');
  if (navEl) navEl.outerHTML = NAV_HTML;

  // --- Logo glass layer (only when logo is visible, not on case pages) ---
  var _logoEl = document.querySelector('.site-logo');
  if (_logoEl && !isCase) {
    var logoGlass = document.createElement('div');
    logoGlass.className = 'site-logo-glass';
    document.body.appendChild(logoGlass);

    function syncLogoGlass() {
      var r = _logoEl.getBoundingClientRect();
      var size = r.width / 2;
      var offset = (r.width - size) / 2;
      logoGlass.style.top    = (r.top  + offset) + 'px';
      logoGlass.style.left   = (r.left + offset) + 'px';
      logoGlass.style.width  = size + 'px';
      logoGlass.style.height = size + 'px';
    }
    requestAnimationFrame(syncLogoGlass);
    window.addEventListener('resize', syncLogoGlass);
  }

  // --- Bottom pill nav ---
  var bottomNav = document.createElement('nav');
  bottomNav.className = 'bottom-nav';
  bottomNav.innerHTML = `
    <ul class="bottom-nav__list">
      <li class="bottom-nav__bg" aria-hidden="true"></li>
      <li class="bottom-nav__item"><a href="index.html" data-page="home">HOME</a></li>
      <li class="bottom-nav__item"><a href="projekte.html" data-page="projekte">PROJEKTE</a></li>
      <!-- DISABLED: Services <li class="bottom-nav__item"><a href="services.html" data-page="services">SERVICES</a></li> -->
      <li class="bottom-nav__item"><a href="about.html" data-page="about">ABOUT</a></li>
      <li class="bottom-nav__item"><a href="#kontakt-anchor" class="js-nav-kontakt">KONTAKT</a></li>
    </ul>`;

  // Blur layer as a sibling — keeps backdrop-filter outside the
  // mix-blend-mode compositing group so both effects work independently.
  var navGlass = document.createElement('div');
  navGlass.className = 'bottom-nav-glass';
  document.body.appendChild(navGlass);
  document.body.appendChild(bottomNav);

  function syncGlass() {
    var r = bottomNav.getBoundingClientRect();
    var list = bottomNav.querySelector('.bottom-nav__list');
    var lr = list.getBoundingClientRect();
    if (window.innerWidth <= 768) {
      // Mobile: CSS handles position (fixed bottom), only sync size to match the list
      navGlass.style.width  = lr.width  + 'px';
      navGlass.style.height = lr.height + 'px';
    } else {
      navGlass.style.position = 'fixed';
      navGlass.style.top      = r.top    + 'px';
      navGlass.style.left     = r.left   + 'px';
      navGlass.style.width    = r.width  + 'px';
      navGlass.style.height   = r.height + 'px';
    }
  }
  requestAnimationFrame(syncGlass);
  window.addEventListener('resize', syncGlass);
  window.addEventListener('scroll', syncGlass, { passive: true });

  // --- Mobile: hide nav at very bottom of page, show on scroll up ---
  (function () {
    var isMobile = function () { return window.innerWidth <= 768; };
    var lastScrollY = window.scrollY;

    function isAtBottom() {
      return (window.innerHeight + Math.round(window.scrollY)) >= document.body.scrollHeight - 5;
    }

    window.addEventListener('scroll', function () {
      if (!isMobile()) return;
      var currentY = window.scrollY;
      if (isAtBottom()) {
        bottomNav.classList.add('is-hidden-bottom');
        navGlass.classList.add('is-hidden-bottom');
      } else if (currentY < lastScrollY) {
        // scrolling up
        bottomNav.classList.remove('is-hidden-bottom');
        navGlass.classList.remove('is-hidden-bottom');
        requestAnimationFrame(syncGlass);
      }
      lastScrollY = currentY;
    }, { passive: true });
  })();

  // --- Active state (CSS-only pill via class) ---
  var _bc = document.body.className;
  var _isCase = _bc.includes('case');
  bottomNav.querySelectorAll('.bottom-nav__item a[data-page]').forEach(function (a) {
    if (_bc.includes(a.dataset.page) || (_isCase && a.dataset.page === 'projekte')) {
      a.parentElement.classList.add('is-active');
    }
  });

  // --- Sliding background ---
  var _list = bottomNav.querySelector('.bottom-nav__list');
  var _bg   = bottomNav.querySelector('.bottom-nav__bg');

  function moveBg(li) {
    _bg.style.left  = li.offsetLeft + 'px';
    _bg.style.width = li.offsetWidth + 'px';
    _bg.style.opacity = '1';
    bottomNav.querySelectorAll('.bottom-nav__item').forEach(function (item) {
      item.classList.remove('is-highlighted');
    });
    li.classList.add('is-highlighted');
  }

  // Initialize pill at active item
  var _initActive = bottomNav.querySelector('.bottom-nav__item.is-active');
  if (_initActive) {
    _bg.style.transition = 'none';
    moveBg(_initActive);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () {
        moveBg(_initActive);
        requestAnimationFrame(function () { _bg.style.transition = ''; });
      });
    } else {
      requestAnimationFrame(function () { _bg.style.transition = ''; });
    }
  }

  bottomNav.querySelectorAll('.bottom-nav__item').forEach(function (li) {
    li.addEventListener('mouseenter', function () { moveBg(this); });
  });
  _list.addEventListener('mouseleave', function () {
    var activeItem = bottomNav.querySelector('.bottom-nav__item.is-active');
    if (activeItem) {
      moveBg(activeItem);
    } else {
      _bg.style.opacity = '0';
      bottomNav.querySelectorAll('.bottom-nav__item').forEach(function (item) {
        item.classList.remove('is-highlighted');
      });
    }
  });

  // --- KONTAKT link ---
  document.addEventListener('click', function (e) {
    var kontaktLink = e.target.closest('.js-nav-kontakt');
    if (!kontaktLink) return;
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();

    openModal();
  }, true);

  // --- Inject home footer (inside .home-frame / .about-frame) ---
  const footerEl = document.getElementById('site-footer');
  if (footerEl) {
    footerEl.outerHTML = `<footer class="home-footer" id="kontakt-anchor">${FOOTER_INNER}</footer>`;
  }

  // --- Inject page footer (case study pages — outside .page) ---
  const footerPageEl = document.getElementById('site-footer-page');
  if (footerPageEl) {
    footerPageEl.outerHTML = `<footer class="home-footer home-footer--page" id="kontakt-anchor">${FOOTER_INNER}</footer>`;
  }

  // --- Kontakt cursor (footer headline only) ---
  var cursorKontakt = document.createElement('div');
  cursorKontakt.className = 'cursor-mehr cursor-kontakt';
  cursorKontakt.textContent = 'Kontakt';
  document.body.appendChild(cursorKontakt);

  // --- Contact form modal ---
  var modal = document.createElement('div');
  modal.className = 'contact-modal';
  modal.innerHTML = `
    <div class="contact-modal__backdrop"></div>
    <div class="contact-modal__card">
      <button class="contact-modal__close" aria-label="Schliessen">&#x2715;</button>
      <form class="contact-modal__form" novalidate>
        <input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off">
        <div class="contact-modal__field">
          <label for="cm-name">Name</label>
          <input type="text" id="cm-name" name="name" placeholder="Dein Name" required>
        </div>
        <div class="contact-modal__field">
          <label for="cm-email">E-Mail</label>
          <input type="email" id="cm-email" name="email" placeholder="deine@email.com" required>
        </div>
        <div class="contact-modal__field">
          <label for="cm-msg">Nachricht</label>
          <textarea id="cm-msg" name="message" rows="5" placeholder="Was möchtest du umsetzen?" required></textarea>
        </div>
        <button type="submit" class="contact-modal__submit" disabled>Senden</button>
        <p class="contact-modal__status"></p>
      </form>
    </div>`;
  document.body.appendChild(modal);

  function openModal() {
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    document.body.classList.add('contact-open');
  }
  function closeModal() {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
    document.body.classList.remove('contact-open');
  }

  modal.querySelector('.contact-modal__backdrop').addEventListener('click', closeModal);
  modal.querySelector('.contact-modal__close').addEventListener('click', closeModal);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

  // --- Form validation: enable submit only when all fields are valid ---
  var cmForm    = modal.querySelector('.contact-modal__form');
  var cmSubmit  = modal.querySelector('.contact-modal__submit');
  var cmName    = modal.querySelector('#cm-name');
  var cmEmail   = modal.querySelector('#cm-email');
  var cmMsg     = modal.querySelector('#cm-msg');
  var emailRe   = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validateForm() {
    var valid = cmName.value.trim().length > 0
             && emailRe.test(cmEmail.value.trim())
             && cmMsg.value.trim().length > 0;
    cmSubmit.disabled = !valid;
  }
  cmName.addEventListener('input', validateForm);
  cmEmail.addEventListener('input', validateForm);
  cmMsg.addEventListener('input', validateForm);

  var cmStatus = modal.querySelector('.contact-modal__status');

  cmForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var name    = cmName.value.trim();
    var email   = cmEmail.value.trim();
    var message = cmMsg.value.trim();
    if (!name || !emailRe.test(email) || !message) return;

    cmSubmit.disabled = true;
    cmSubmit.textContent = 'Wird gesendet…';
    cmStatus.textContent = '';
    cmStatus.className = 'contact-modal__status';

    fetch('https://formspree.io/f/mlgogqzz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ name: name, email: email, message: message, _gotcha: '' })
    })
    .then(function (res) {
      if (res.ok) {
        cmStatus.textContent = 'Nachricht gesendet — vielen Dank!';
        cmStatus.classList.add('is-success');
        cmForm.reset();
        cmSubmit.textContent = 'Senden';
      } else {
        throw new Error('Server error');
      }
    })
    .catch(function () {
      cmStatus.textContent = 'Etwas ist schiefgelaufen. Bitte versuche es erneut.';
      cmStatus.classList.add('is-error');
      cmSubmit.textContent = 'Senden';
      validateForm();
    });
  });

  // --- Mobile: tap logo to open contact form ---
  if (window.innerWidth <= 768) {
    var logoBtn = document.querySelector('.site-logo');
    if (logoBtn) {
      logoBtn.style.pointerEvents = 'auto';
      logoBtn.addEventListener('click', function (e) {
        e.preventDefault();
        openModal();
      });
    }
  }

  // --- Organic morph for all .cursor-mehr labels ---
  var _morphEls = document.querySelectorAll('.cursor-mehr');
  var _mPrevX = 0, _mPrevY = 0, _mSpeed = 0, _mAngle = 0;
  var _morphPts = []; // 8 spring-driven border-radius values
  for (var _mi = 0; _mi < 8; _mi++) _morphPts.push({ v: 0, r: 50 });

  document.addEventListener('mousemove', function (e) {
    cursorKontakt.style.left = e.clientX + 'px';
    cursorKontakt.style.top  = e.clientY + 'px';
    var dx = e.clientX - _mPrevX, dy = e.clientY - _mPrevY;
    _mSpeed = Math.sqrt(dx * dx + dy * dy);
    _mAngle = Math.atan2(dy, dx);
    _mPrevX = e.clientX; _mPrevY = e.clientY;
  });

  (function morphTick(t) {
    var spd = Math.min(_mSpeed, 30);
    for (var i = 0; i < 8; i++) {
      var a = (i / 8) * Math.PI * 2;
      var dir = Math.cos(a - _mAngle);
      var drive = dir * spd * 1.8;
      var noise = Math.sin(t * 0.0009 + i * 2.1) * 6
                + Math.sin(t * 0.0015 + i * 3.7) * 4;
      _morphPts[i].v = _morphPts[i].v * 0.82 + (drive + noise - (_morphPts[i].r - 50)) * 0.08;
      _morphPts[i].r += _morphPts[i].v;
      _morphPts[i].r = Math.max(25, Math.min(75, _morphPts[i].r));
    }
    // CSS border-radius shorthand: TL TR BR BL / TL TR BR BL
    var css = _morphPts[0].r.toFixed(1) + '% ' + _morphPts[1].r.toFixed(1) + '% '
            + _morphPts[2].r.toFixed(1) + '% ' + _morphPts[3].r.toFixed(1) + '% / '
            + _morphPts[4].r.toFixed(1) + '% ' + _morphPts[5].r.toFixed(1) + '% '
            + _morphPts[6].r.toFixed(1) + '% ' + _morphPts[7].r.toFixed(1) + '%';
    _morphEls.forEach(function (el) { el.style.borderRadius = css; });
    _mSpeed *= 0.9;
    requestAnimationFrame(morphTick);
  })(performance.now());

  document.addEventListener('click', function (e) {
    if (cursorKontakt.classList.contains('is-visible')) {
      // Delay so the click ripple plays before the modal covers it
      setTimeout(openModal, 400);
    }
  });

  // Use event delegation so it works after wrapChars splits the headline into spans
  document.addEventListener('mouseover', function (e) {
    if (e.target.closest('.home-footer__headline')) {
      cursorKontakt.classList.add('is-visible');
      document.body.style.cursor = 'none';
      window._labelActive = true;
    }
  });
  document.addEventListener('mouseout', function (e) {
    if (e.target.closest('.home-footer__headline') &&
        !e.relatedTarget?.closest('.home-footer__headline')) {
      cursorKontakt.classList.remove('is-visible');
      document.body.style.cursor = '';
      window._labelActive = false;
    }
  });
})();

// bfcache restore
window.addEventListener('pageshow', function (e) {
  if (e.persisted) document.body.classList.add('loaded');
});

// === PROXIMITY FONT-WEIGHT (Variable Font per character) ===
(function () {
  if (window.innerWidth <= 768) return;
  var MIN_W  = 300;
  var MAX_W  = 900;
  var RADIUS = 300;
  var LERP   = 0.12;

  var mx = -9999, my = -9999;
  var allChars = [];
  var wrapTargets = []; // { el, clone } — original DOM saved for resize re-wrap

  function wrapChars(el) {
    // Prevent any soft line-wrapping regardless of how wide chars grow during hover.
    // <br> hard breaks still work normally.
    el.style.whiteSpace = 'nowrap';

    Array.from(el.childNodes).forEach(function (node) {
      if (node.nodeType !== 3 || !node.textContent) return;

      // Measure natural advance widths INCLUDING kerning via Range API.
      // Must happen before replacing the text node — kerning context is lost afterwards.
      var text = node.textContent;
      var charWidths = Array.from(text).map(function (_, i) {
        var range = document.createRange();
        range.setStart(node, i);
        range.setEnd(node, i + 1);
        var w = range.getBoundingClientRect().width;
        return w > 0 ? w : 8;
      });

      var frag = document.createDocumentFragment();
      Array.from(text).forEach(function (ch, i) {
        var outer = document.createElement('span');
        // Start at natural kerned width (MIN_W) — looks identical to original text.
        // maxWidth is filled in by measureMaxWidths() before animation starts.
        outer.style.cssText = 'display:inline-block;overflow:visible;text-align:center;width:' + charWidths[i].toFixed(2) + 'px';
        var s = document.createElement('span');
        s.className = 'wght-char';
        s.style.display = 'inline-block';
        s.textContent = ch === ' ' ? '\u00a0' : ch;
        outer.appendChild(s);
        allChars.push({ el: s, outer: outer, current: MIN_W, naturalWidth: charWidths[i], maxWidth: charWidths[i] });
        frag.appendChild(outer);
      });
      el.replaceChild(frag, node);
    });
  }

  document.addEventListener('mousemove', function (e) { mx = e.clientX; my = e.clientY; });
  document.addEventListener('mouseleave', function ()  { mx = -9999; my = -9999; });

  function cachePositions() {
    allChars.forEach(function (c) {
      var r = c.outer.getBoundingClientRect();
      c.cx = r.left + r.width  / 2;
      c.cy = r.top  + r.height / 2;
    });
  }

  // Measure the heaviest glyph widths using an offscreen clone so the
  // visible headlines never flash to MAX_W during resize.
  function measureMaxWidths(then) {
    // Build a hidden measurement container that mirrors the real layout
    var measurer = document.createElement('div');
    measurer.style.cssText = 'position:absolute;top:0;left:0;width:100%;visibility:hidden;pointer-events:none;z-index:-1';
    document.body.appendChild(measurer);

    // For each headline, clone it and set all chars to MAX_W
    var cloneMap = []; // { original, cloneChar }
    wrapTargets.forEach(function (t) {
      var clone = t.el.cloneNode(true);
      // Copy computed styles that affect text sizing
      var cs = getComputedStyle(t.el);
      clone.style.cssText = 'font-family:' + cs.fontFamily + ';font-size:' + cs.fontSize + ';letter-spacing:' + cs.letterSpacing + ';line-height:' + cs.lineHeight + ';width:' + cs.width + ';max-width:' + cs.maxWidth;
      measurer.appendChild(clone);

      // Match clone's .wght-char spans to real allChars entries
      var cloneOuters = clone.querySelectorAll('.wght-char');
      var realChars = allChars.filter(function (c) { return t.el.contains(c.el); });
      realChars.forEach(function (c, i) {
        if (!cloneOuters[i]) return;
        var cloneInner = cloneOuters[i];
        var cloneOuter = cloneInner.parentElement;
        cloneInner.style.fontVariationSettings = "'wght' " + MAX_W;
        cloneOuter.style.width = '';
        cloneMap.push({ original: c, cloneOuter: cloneOuter });
      });
    });

    requestAnimationFrame(function () {
      cloneMap.forEach(function (entry) {
        entry.original.maxWidth = entry.cloneOuter.getBoundingClientRect().width;
      });
      // Reset visible chars to MIN_W (in case they weren't already)
      allChars.forEach(function (c) {
        c.outer.style.width = c.naturalWidth.toFixed(2) + 'px';
        c.el.style.fontVariationSettings = "'wght' " + MIN_W;
        c.current = MIN_W;
      });
      document.body.removeChild(measurer);
      if (then) then();
    });
  }

  function tick() {
    allChars.forEach(function (c) {
      var d  = Math.sqrt((mx - c.cx) * (mx - c.cx) + (my - c.cy) * (my - c.cy));
      var tt = Math.max(0, 1 - d / RADIUS);
      tt = tt * tt * (3 - 2 * tt);
      var target = MIN_W + tt * (MAX_W - MIN_W);
      c.current += (target - c.current) * LERP;
      c.el.style.fontVariationSettings = "'wght' " + c.current.toFixed(1);
      // Container grows with the glyph so heavier characters never overlap neighbours
      var progress = (c.current - MIN_W) / (MAX_W - MIN_W);
      c.outer.style.width = (c.naturalWidth + progress * (c.maxWidth - c.naturalWidth)).toFixed(2) + 'px';
    });
    requestAnimationFrame(tick);
  }

  document.querySelectorAll('.hero__headline, .home-footer__headline, .about-hero__headline').forEach(function (el) {
    wrapTargets.push({ el: el, clone: el.cloneNode(true) });
    wrapChars(el);
  });

  requestAnimationFrame(function () {
    measureMaxWidths(function () {
      cachePositions();
      tick();
    });
  });

  window.addEventListener('resize', function () {
    allChars = [];
    wrapTargets.forEach(function (t) {
      t.el.innerHTML = '';
      Array.from(t.clone.childNodes).forEach(function (n) {
        t.el.appendChild(n.cloneNode(true));
      });
      wrapChars(t.el);
    });
    requestAnimationFrame(function () {
      measureMaxWidths(cachePositions);
    });
  });
  window.addEventListener('scroll', cachePositions, { passive: true });
})();

// === INVERT CURSOR BLOB (Metaball + Spring Physics) ===
(function () {
  // Safari has a rendering bug where mix-blend-mode:difference + blur/contrast filter
  // on a canvas causes the entire page to flash bright — disable the effect there.
  var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  if (isSafari) return;

  var isTouchDevice = !window.matchMedia('(pointer: fine)').matches;
  var isTouching = false;

  // --- Canvas ---
  // Single canvas handles both states:
  // Moving → gooey filter (blur+contrast) for liquid metaball effect
  // Idle   → filter:none so the resting circle stays perfectly crisp
  // CSS transition on filter smoothly morphs between the two states.
  var FILTER_ACTIVE = 'blur(14px) contrast(18)';
  var FILTER_IDLE   = 'none';

  var canvas = document.createElement('canvas');
  canvas.style.cssText = [
    'position:fixed', 'top:0', 'left:0',
    'pointer-events:none', 'z-index:10000',
    'mix-blend-mode:difference',
    'filter:' + FILTER_IDLE,
    'transition:filter 0.5s ease',
    'visibility:hidden'
  ].join(';');
  document.body.appendChild(canvas);
  var canvasReady = false;
  setTimeout(function () {
    canvasReady = true;
    canvas.style.visibility = 'visible';
  }, 900);
  var ctx = canvas.getContext('2d');

  // Second canvas for white label blob — screen blend makes black=transparent, white=opaque.
  // Same goo filter gives it the same organic shape as the cursor form.
  var canvasL = document.createElement('canvas');
  canvasL.style.cssText = [
    'position:fixed', 'top:0', 'left:0',
    'pointer-events:none', 'z-index:10001',
    'mix-blend-mode:screen',
    'filter:' + FILTER_ACTIVE,
    'visibility:hidden'
  ].join(';');
  document.body.appendChild(canvasL);
  var ctxL = canvasL.getContext('2d');

  // Third canvas for glow-mode cursor (normal blend, transparent bg)
  var canvasG = document.createElement('canvas');
  canvasG.style.cssText = [
    'position:fixed', 'top:0', 'left:0',
    'pointer-events:none', 'z-index:10003',
    'visibility:hidden'
  ].join(';');
  document.body.appendChild(canvasG);
  var ctxG = canvasG.getContext('2d');

  function resize() {
    canvas.width  = canvasL.width  = canvasG.width  = window.innerWidth;
    canvas.height = canvasL.height = canvasG.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // --- Config ---
  var BASE_R  = 58;
  var HOVER_R = 78;
  var IDLE_R  = 7;     // resting circle radius (crisp, no filter)
  var IDLE_MS = 300;   // ms without movement → idle
  var MAX_AGE = 900;   // ms — fast dissolve
  var LERP    = 0.10;

  // --- State ---
  // Restore cursor position from previous page so cursor doesn't vanish on navigation
  var _saved = sessionStorage.getItem('cursorPos');
  var _init  = _saved ? JSON.parse(_saved) : null;
  var mouseX = _init ? _init.x : -999, mouseY = _init ? _init.y : -999;
  var blobX  = mouseX, blobY  = mouseY;
  var targetR = BASE_R, currentR = _init ? BASE_R : 0;
  var headDotR = IDLE_R;
  var isVisible = !!_init;
  var isHovering = false;
  var lastMoveTime = 0;
  var wasIdle = true;
  var history = []; // { x, y, t }
  var labelProgress = 0; // 0 = no label, 1 = label fully active (lerped)
  var moveAlpha = 0; // smooth swell-in when cursor starts moving

  // Spring points for organic head deformation
  var N = 10;
  var sp = [];
  for (var i = 0; i < N; i++) sp.push({ a: (i / N) * Math.PI * 2, dr: 0, v: 0 });

  // --- Events ---
  function onMove(e) {
    mouseX = e.clientX; mouseY = e.clientY;
    lastMoveTime = performance.now();
    if (!isVisible) { blobX = mouseX; blobY = mouseY; isVisible = true; }
  }
  // pointermove fires reliably over text / selectable content where mousemove can drop
  document.addEventListener('pointermove', onMove);
  document.addEventListener('mousemove',   onMove);
  document.addEventListener('mouseleave', function () {
    // Don't kill instantly — set lastMoveTime to now so idle kicks in
    // after IDLE_MS, then the trail and head fade out naturally.
    lastMoveTime = performance.now();
  });
  document.addEventListener('mouseover', function (e) {
    isHovering = !!e.target.closest('a, button, [role="button"]');
  });

  // --- Touch support (mobile) ---
  document.addEventListener('touchstart', function (e) {
    var touch = e.touches[0];
    mouseX = touch.clientX; mouseY = touch.clientY;
    lastMoveTime = performance.now();
    isTouching = true;
    if (!isVisible) { blobX = mouseX; blobY = mouseY; isVisible = true; }
  }, { passive: true });
  document.addEventListener('touchmove', function (e) {
    var touch = e.touches[0];
    mouseX = touch.clientX; mouseY = touch.clientY;
    lastMoveTime = performance.now();
    if (!isVisible) { blobX = mouseX; blobY = mouseY; isVisible = true; }
  }, { passive: true });
  document.addEventListener('touchend', function () {
    isTouching = false;
    lastMoveTime = performance.now();
  });

  // Save cursor position before navigation so next page can restore it
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href]');
    if (link && !link.getAttribute('href').startsWith('#') && !e.defaultPrevented) {
      sessionStorage.setItem('cursorPos', JSON.stringify({ x: mouseX, y: mouseY }));
      canvas.style.display = 'none';
    }
  });
  window.addEventListener('pagehide', function () {
    sessionStorage.setItem('cursorPos', JSON.stringify({ x: mouseX, y: mouseY }));
    canvas.style.display = 'none';
  });

  // --- Splash on click (stone-in-water ripple) ---
  // --- Click ripple dissolve ---
  var splashT = 0;
  var SPLASH_DUR = 2000; // ms
  document.addEventListener('click', function () {
    splashT = performance.now();
  });

  // Perpendicular normal at history[i] (used for organic lateral displacement)
  function getNorm(i) {
    var n = history.length, dx, dy;
    if (n < 2) return { x: 1, y: 0 };
    if (i === 0)      { dx = history[1].x - history[0].x;     dy = history[1].y - history[0].y; }
    else if (i===n-1) { dx = history[n-1].x-history[n-2].x;   dy = history[n-1].y-history[n-2].y; }
    else              { dx = history[i+1].x-history[i-1].x;   dy = history[i+1].y-history[i-1].y; }
    var len = Math.sqrt(dx*dx + dy*dy) || 1;
    return { x: -dy/len, y: dx/len };
  }

  // Catmull-Rom closed path for head blob
  function drawClosed(pts, c) {
    c = c || ctx;
    var n = pts.length;
    if (n < 3) return;
    c.moveTo(pts[0].x, pts[0].y);
    for (var i = 0; i < n; i++) {
      var p0=pts[(i-1+n)%n], p1=pts[i], p2=pts[(i+1)%n], p3=pts[(i+2)%n];
      c.bezierCurveTo(
        p1.x+(p2.x-p0.x)/6, p1.y+(p2.y-p0.y)/6,
        p2.x-(p3.x-p1.x)/6, p2.y-(p3.y-p1.y)/6,
        p2.x, p2.y
      );
    }
  }

  function animate(t) {
    if (!canvasReady) { requestAnimationFrame(animate); return; }
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (!isVisible) { requestAnimationFrame(animate); return; }
    var glowMode = !!window._cursorHidden;

    // Derive smooth velocity from the lerped blob position — no raw mouse jitter
    var prevBX = blobX, prevBY = blobY;
    blobX += (mouseX - blobX) * LERP;
    blobY += (mouseY - blobY) * LERP;
    var svx = blobX - prevBX;
    var svy = blobY - prevBY;
    var speed  = Math.sqrt(svx*svx + svy*svy);
    var mAngle = Math.atan2(svy, svx);

    var idle = (performance.now() - lastMoveTime) > IDLE_MS;
    moveAlpha += ((idle ? 0 : 1) - moveAlpha) * 0.09;
    labelProgress += ((window._labelActive ? 1 : 0) - labelProgress) * 0.07;
    var effectiveIdleR = IDLE_R + labelProgress * (75 - IDLE_R);

    // Only switch to crisp filter when idle, trail gone, AND no label active.
    // While a label is showing the gooey filter stays on so the blob keeps flowing.
    // In glow mode, hide the main canvas entirely to prevent artifacts.
    canvas.style.visibility = glowMode ? 'hidden' : (canvasReady ? 'visible' : 'hidden');
    var trailGone = history.length <= 1;
    var wantCrisp = idle && trailGone && labelProgress < 0.05 && splashP <= 0;
    if (!glowMode && wantCrisp !== wasIdle) {
      canvas.style.filter = wantCrisp ? FILTER_IDLE : FILTER_ACTIVE;
      wasIdle = wantCrisp;
    }

    // currentR always stays at least effectiveIdleR — no shrinking below label minimum.
    // On touch devices, shrink to 0 when finger is lifted.
    var touchFadeMin = (isTouchDevice && !isTouching) ? 0 : effectiveIdleR;
    targetR  = (isTouchDevice && !isTouching && idle) ? 0 : Math.max(BASE_R, effectiveIdleR);
    currentR += (targetR - currentR) * 0.13;
    currentR  = Math.max(currentR, touchFadeMin);

    if (!idle) history.push({ x: blobX, y: blobY, t: t });
    while (history.length > 1 && history[0].t < t - MAX_AGE) history.shift();

    // Spring physics — used only for idle settling; drive kept subtle so p.dr
    // stays small and the idle-to-circle transition is smooth.
    for (var i = 0; i < N; i++) {
      var p = sp[i];
      var align  = Math.cos(p.a - mAngle);
      var drive  = align * Math.min(speed, 20) * 1.2;   // subtle directional drive
      var nScale = Math.max(0, 1 - speed * 0.05) * 4;   // light noise at rest
      var noise  = Math.sin(t * 0.00071 + i * 1.5) * nScale
                 + Math.sin(t * 0.00113 + i * 2.4) * nScale * 0.5;
      p.v  = p.v  * 0.78 + (drive + noise - p.dr) * 0.09;
      p.dr += p.v;
    }

    // How far into idle we are (0 = just stopped, 1 = fully settled after 600ms)
    var idleProgress = idle
      ? Math.min(1, (performance.now() - lastMoveTime - IDLE_MS) / 600)
      : 0;

    // --- Click ripple dissolve state ---
    var splashAge = t - splashT;
    var splashP   = (splashT > 0 && splashAge < SPLASH_DUR)
      ? splashAge / SPLASH_DUR : 0;

    // --- Fluid trail: single filled ribbon — no gaps at any speed ---
    var trailPath = null;
    var tailTip = null; // { x, y, r } for rounding the tail tip in glow mode
    if (history.length >= 2) {
      var n  = history.length;
      var lp = new Array(n);
      var rp = new Array(n);

      for (var i = 0; i < n; i++) {
        var h     = history[i];
        var age   = (t - h.t) / MAX_AGE;
        var tf    = Math.pow(Math.max(0, 1 - age), 0.18);
        var wv = 1
          + Math.sin(h.t * 0.0041 + t * 0.00021) * 0.38
          + Math.sin(h.t * 0.0093 + t * 0.00031) * 0.22
          + Math.sin(h.t * 0.0197)                * 0.14;
        var r = currentR * tf * Math.max(0.1, wv);
        var nv    = getNorm(i);
        var phase = h.t * 0.0035 + t * 0.00038;
        var dissolve = Math.pow(Math.max(0, 1 - tf), 1.4) * 70;
        var enL = i < n - 1
          ? (Math.sin(phase * 1.21) * 22
          +  Math.sin(phase * 2.83) * 11
          +  Math.sin(phase * 5.47) * dissolve
          +  Math.sin(phase * 9.13) * dissolve * 0.65
          +  Math.sin(phase * 17.8) * dissolve * 0.4
          +  Math.sin(phase * 31.2) * dissolve * 0.25) * tf
          : 0;
        var enR = i < n - 1
          ? (Math.sin(phase * 1.74) * 20
          +  Math.sin(phase * 3.51) *  9
          +  Math.sin(phase * 6.89) * dissolve
          +  Math.sin(phase * 12.3) * dissolve * 0.6
          +  Math.sin(phase * 23.7) * dissolve * 0.35
          +  Math.sin(phase * 43.1) * dissolve * 0.2) * tf
          : 0;
        lp[i] = { x: h.x + nv.x * (r + enL), y: h.y + nv.y * (r + enL) };
        rp[i] = { x: h.x - nv.x * (r + enR), y: h.y - nv.y * (r + enR) };
      }

      // Save tail tip for glow-mode rounding
      var dL = Math.sqrt((lp[0].x-history[0].x)*(lp[0].x-history[0].x)+(lp[0].y-history[0].y)*(lp[0].y-history[0].y));
      var dR = Math.sqrt((rp[0].x-history[0].x)*(rp[0].x-history[0].x)+(rp[0].y-history[0].y)*(rp[0].y-history[0].y));
      tailTip = { x: history[0].x, y: history[0].y, r: (dL + dR) / 2 };

      var nvH  = getNorm(n - 1);
      var angL = Math.atan2(nvH.y, nvH.x);
      var newestAge = (t - history[n - 1].t) / MAX_AGE;
      var newestTf  = Math.pow(Math.max(0, 1 - newestAge), 0.18);
      var arcCapR   = currentR * newestTf;

      trailPath = function(c) {
        c.moveTo(lp[0].x, lp[0].y);
        for (var i = 1; i < n; i++) c.lineTo(lp[i].x, lp[i].y);
        c.arc(blobX, blobY, arcCapR, angL, angL + Math.PI, true);
        for (var i = n - 1; i >= 0; i--) c.lineTo(rp[i].x, rp[i].y);
        c.closePath();
      };

      if (!glowMode) {
        var hue = (t * 0.04) % 360;
        var trailAlpha = ((splashP > 0 && idle) ? Math.pow(1 - splashP, 3) : 1) * moveAlpha;
        if (window._cursorColorOverride) {
          var _cc = window._cursorColorOverride.split(',');
          ctx.fillStyle = 'rgba(' + (255 - _cc[0]) + ',' + (255 - _cc[1]) + ',' + (255 - _cc[2]) + ',' + trailAlpha + ')';
        } else {
          ctx.fillStyle = 'hsla(' + hue + ',100%,50%,' + trailAlpha + ')';
        }
        ctx.beginPath();
        trailPath(ctx);
        ctx.fill();
      }
    }

    // --- Head ---
    var headAlpha = Math.max(labelProgress, idle ? Math.max(0, 1 - idleProgress * 2) : moveAlpha);
    if (splashP > 0 && idle) headAlpha *= Math.pow(1 - splashP, 3);
    var headPts = sp.map(function (p) {
      var deform = idle ? p.dr * (1 - idleProgress) : 0;
      var r      = Math.max(1, currentR + deform);
      return { x: blobX + r * Math.cos(p.a), y: blobY + r * Math.sin(p.a) };
    });
    if (!glowMode && headAlpha > 0) {
      var headHue = (t * 0.04) % 360;
      if (window._cursorColorOverride) {
        var _hc = window._cursorColorOverride.split(',');
        ctx.fillStyle = 'rgba(' + (255 - _hc[0]) + ',' + (255 - _hc[1]) + ',' + (255 - _hc[2]) + ',' + headAlpha + ')';
      } else {
        ctx.fillStyle = 'hsla(' + headHue + ',100%,50%,' + headAlpha + ')';
      }
      ctx.beginPath();
      drawClosed(headPts);
      ctx.fill();
    }

    // --- Click: expanding puff ring ---
    if (!glowMode && splashP > 0) {
      var ringEase   = 1 - Math.pow(1 - splashP, 5);
      var outerR     = currentR + ringEase * 175;
      var thickness  = currentR * 1.2 * (1 - splashP * 0.85);
      var innerR     = Math.max(0, outerR - thickness);
      var ringAlpha  = Math.pow(1 - splashP, 2) * 0.7;
      var puffHue    = (t * 0.04) % 360;

      // Draw filled ring with organic noise on both edges
      var SEGS = 48;
      if (window._cursorColorOverride) {
        var _pc = window._cursorColorOverride.split(',');
        ctx.fillStyle = 'rgba(' + (255 - _pc[0]) + ',' + (255 - _pc[1]) + ',' + (255 - _pc[2]) + ',' + ringAlpha + ')';
      } else {
        ctx.fillStyle = 'hsla(' + puffHue + ',100%,50%,' + ringAlpha + ')';
      }
      ctx.beginPath();
      // Outer edge — clockwise
      for (var si = 0; si <= SEGS; si++) {
        var a  = (si / SEGS) * Math.PI * 2;
        var on = Math.sin(a * 3.1 + splashT * 0.005) * 18 * ringEase
               + Math.sin(a * 7.3 + t * 0.0008) * 10 * ringEase;
        var or2 = outerR + on;
        var ox = blobX + Math.cos(a) * or2;
        var oy = blobY + Math.sin(a) * or2;
        if (si === 0) ctx.moveTo(ox, oy); else ctx.lineTo(ox, oy);
      }
      // Inner edge — counter-clockwise (cuts the hole)
      for (var si = SEGS; si >= 0; si--) {
        var a  = (si / SEGS) * Math.PI * 2;
        var iN = Math.sin(a * 4.7 + splashT * 0.007) * 14 * ringEase
               + Math.sin(a * 9.1 + t * 0.001) * 8 * ringEase;
        var ir = innerR + iN;
        var ix = blobX + Math.cos(a) * Math.max(0, ir);
        var iy = blobY + Math.sin(a) * Math.max(0, ir);
        ctx.lineTo(ix, iy);
      }
      ctx.closePath();
      ctx.fill();
    }

    // --- White label blob on canvasL (screen blend) ---
    // Same spring-deformed shape as head but smaller and white.
    // Sits above the colored cursor so text stays readable.
    ctxL.fillStyle = 'black';
    ctxL.fillRect(0, 0, canvasL.width, canvasL.height);
    if (labelProgress > 0.01) {
      canvasL.style.visibility = 'visible';
      var labelR = currentR * 0.75 + 10;
      var labelPts = sp.map(function (p) {
        var deform = idle ? p.dr * (1 - idleProgress) : 0;
        var r = Math.max(1, labelR + deform);
        return { x: blobX + r * Math.cos(p.a), y: blobY + r * Math.sin(p.a) };
      });
      ctxL.fillStyle = 'rgba(255,255,255,' + labelProgress + ')';
      ctxL.beginPath();
      var ln = labelPts.length;
      ctxL.moveTo(labelPts[0].x, labelPts[0].y);
      for (var i = 0; i < ln; i++) {
        var lp0=labelPts[(i-1+ln)%ln], lp1=labelPts[i], lp2=labelPts[(i+1)%ln], lp3=labelPts[(i+2)%ln];
        ctxL.bezierCurveTo(
          lp1.x+(lp2.x-lp0.x)/6, lp1.y+(lp2.y-lp0.y)/6,
          lp2.x-(lp3.x-lp1.x)/6, lp2.y-(lp3.y-lp1.y)/6,
          lp2.x, lp2.y
        );
      }
      ctxL.fill();
    } else {
      canvasL.style.visibility = 'hidden';
    }

    // --- Glow-mode cursor: original trail ribbon + overlapping circles ---
    // Trail ribbon = exact same shape as normal cursor (no modifications).
    // Head circle + tail-tip circle overlap seamlessly (same color).
    // CSS drop-shadow wraps the combined silhouette.
    ctxG.clearRect(0, 0, canvasG.width, canvasG.height);
    if (glowMode) {
      canvasG.style.visibility = 'visible';
      canvasG.style.filter = 'drop-shadow(0 0 18px rgba(255,255,255,0.9)) drop-shadow(0 0 40px rgba(255,255,255,0.45))';
      ctxG.fillStyle = '#e3e5e8';
      if (trailPath) {
        // 1. Trail ribbon (unchanged original shape)
        ctxG.beginPath();
        trailPath(ctxG);
        ctxG.fill();
        // 2. Head circle (covers the semicircle cap at the front)
        ctxG.beginPath();
        ctxG.arc(blobX, blobY, currentR, 0, Math.PI * 2);
        ctxG.fill();
        // 3. Tail-tip circle (rounds off the sharp back end)
        if (tailTip && tailTip.r > 0.5) {
          ctxG.beginPath();
          ctxG.arc(tailTip.x, tailTip.y, tailTip.r, 0, Math.PI * 2);
          ctxG.fill();
        }
      }
    } else {
      canvasG.style.visibility = 'hidden';
      canvasG.style.filter = 'none';
    }

    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
})();

// === LOGO PROXIMITY REVEAL ===
(function () {
  var logo = document.querySelector('.site-logo');
  if (!logo) return;
  var hoverGroup = logo.querySelector('.site-logo__hover');
  if (!hoverGroup) return;
  if (window.innerWidth <= 768) {
    hoverGroup.style.opacity = '1';
    var mAngle = 0, mLast = 0;
    function mTick(now) {
      var dt = mLast ? (now - mLast) / 1000 : 0;
      mLast = now;
      mAngle += -36 * dt;
      hoverGroup.style.transform = 'rotate(' + mAngle.toFixed(1) + 'deg)';
      requestAnimationFrame(mTick);
    }
    requestAnimationFrame(mTick);
    return;
  }

  var RADIUS = 200;
  var LERP   = 0.10;
  var SPEED  = -36; // degrees per second (negative = counter-clockwise)
  var current = 0;
  var angle = 0;
  var wasActive = false;
  var lastTime = 0;
  var mx = -9999, my = -9999;

  document.addEventListener('mousemove', function (e) { mx = e.clientX; my = e.clientY; });
  document.addEventListener('mouseleave', function () {
    mx = -9999; my = -9999;
  });

  function tick(now) {
    var dt = lastTime ? (now - lastTime) / 1000 : 0;
    lastTime = now;

    var r  = logo.getBoundingClientRect();
    var cx = r.left + r.width  / 2;
    var cy = r.top  + r.height / 2;
    var d  = Math.sqrt((mx - cx) * (mx - cx) + (my - cy) * (my - cy));
    var t  = Math.max(0, 1 - d / RADIUS);
    t = t * t * (3 - 2 * t); // smoothstep
    current += (t - current) * LERP;

    var isActive = current > 0.01;
    if (isActive && !wasActive) angle = 0; // reset rotation on each new hover
    wasActive = isActive;

    if (isActive) angle += SPEED * dt;

    hoverGroup.style.opacity = current.toFixed(3);
    hoverGroup.style.transform = 'rotate(' + angle.toFixed(1) + 'deg)';
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();

// === BACK BUTTON PROXIMITY SWELL ===
(function () {
  var btn = document.querySelector('.site-back-btn');
  if (!btn) return;

  var MIN_W = 300, MAX_W = 800;
  var RADIUS = 200;
  var LERP   = 0.10;
  var current = MIN_W;
  var mx = -9999, my = -9999;

  document.addEventListener('mousemove', function (e) { mx = e.clientX; my = e.clientY; });
  document.addEventListener('mouseleave', function () {
    mx = -9999; my = -9999; current = MIN_W;
    btn.style.fontVariationSettings = "'wght' " + MIN_W;
  });
  window.addEventListener('resize', function () {
    mx = -9999; my = -9999; current = MIN_W;
    btn.style.fontVariationSettings = "'wght' " + MIN_W;
  });

  function tick() {
    var r  = btn.getBoundingClientRect();
    var cx = r.left + r.width  / 2;
    var cy = r.top  + r.height / 2;
    var d  = Math.sqrt((mx - cx) * (mx - cx) + (my - cy) * (my - cy));
    var t  = Math.max(0, 1 - d / RADIUS);
    t = t * t * (3 - 2 * t); // smoothstep
    current += (MIN_W + t * (MAX_W - MIN_W) - current) * LERP;
    btn.style.fontVariationSettings = "'wght' " + current.toFixed(1);
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();

// === SPA-STYLE PAGE TRANSITIONS ===
// Keeps header, nav, footer, cursors, and modal persistent across navigations.
// Strategy: wrap all page-specific content in #spa-content on first load,
// then on navigation fetch new page and swap only that wrapper.
(function () {
  var TRANSITION_OUT = 250;
  var TRANSITION_IN  = 350;
  var navigating = false;

  // --- Wrap current page content on first load ---
  // Everything that is NOT injected by layout.js is page content.
  var wrapper = document.createElement('div');
  wrapper.id = 'spa-content';
  wrapper.style.transition = 'opacity ' + TRANSITION_OUT + 'ms ease';

  // Collect all body children that are page content (not layout-injected)
  var layoutTags = ['site-header', 'bottom-nav', 'bottom-nav-glass',
    'site-logo-glass', 'mobile-nav', 'contact-modal'];
  var layoutClasses = ['cursor-mehr', 'cursor-kontakt', 'bottom-nav-glass'];
  var toWrap = [];

  Array.from(document.body.children).forEach(function (el) {
    if (el.tagName === 'SCRIPT') return;
    // Check if layout-injected by tag/class/id
    if (el.classList && layoutTags.some(function (c) { return el.classList.contains(c); })) return;
    if (el.classList && layoutClasses.some(function (c) { return el.classList.contains(c); })) return;
    toWrap.push(el);
  });

  // Insert wrapper before the first page-content node, then move all page content into it
  if (toWrap.length) {
    document.body.insertBefore(wrapper, toWrap[0]);
    toWrap.forEach(function (el) { wrapper.appendChild(el); });
  }

  // Save footer HTML template for re-injection
  var footerTemplate = '';
  var existingFooter = document.querySelector('.home-footer');
  if (existingFooter) footerTemplate = existingFooter.innerHTML;

  function isInternalLink(a) {
    if (!a || !a.href) return false;
    if (a.target === '_blank') return false;
    var raw = a.getAttribute('href');
    if (!raw || raw.startsWith('#') || raw.startsWith('mailto:') || raw.startsWith('tel:')) return false;
    try {
      var url = new URL(a.href, location.href);
      if (url.origin !== location.origin) return false;
      if (url.pathname === location.pathname && url.hash) return false;
      return url.pathname !== location.pathname;
    } catch (e) { return false; }
  }

  function navigateTo(href, pushState) {
    if (navigating) return;
    navigating = true;

    // Freeze nav blend-mode so text colour doesn't flash as content fades
    document.body.classList.add('is-transitioning');

    // Start fetching immediately while fading out
    var fetchPromise = fetch(href).then(function (res) {
      if (!res.ok) throw new Error(res.status);
      return res.text();
    });

    // Fade out current content
    wrapper.style.opacity = '0';

    // Wait for both fade-out and fetch to complete
    var fadeOutDone = new Promise(function (resolve) {
      setTimeout(resolve, TRANSITION_OUT);
    });

    Promise.all([fetchPromise, fadeOutDone]).then(function (results) {
      var html = results[0];
      var parser = new DOMParser();
      var doc = parser.parseFromString(html, 'text/html');

      var newBodyClass = doc.body.className;
      var newTitle = doc.title;
      var isCase = newBodyClass.includes('case');

      // Update body class and title — keep is-transitioning + loaded to prevent flash
      document.body.className = newBodyClass + ' is-transitioning loaded';
      document.title = newTitle;
      document.body.style.opacity = '1'; // ensure visible

      // Update meta description
      var oldMeta = document.querySelector('meta[name="description"]');
      var newMeta = doc.querySelector('meta[name="description"]');
      if (oldMeta && newMeta) oldMeta.setAttribute('content', newMeta.getAttribute('content'));

      // Build new wrapper content from fetched page
      // Grab everything from body except: #site-nav, scripts
      var newHTML = '';
      Array.from(doc.body.children).forEach(function (el) {
        if (el.tagName === 'SCRIPT') return;
        if (el.id === 'site-nav') return;
        newHTML += el.outerHTML;
      });

      // Replace footer placeholders with actual footer
      newHTML = newHTML.replace(
        '<div id="site-footer"></div>',
        '<footer class="home-footer" id="kontakt-anchor">' + footerTemplate + '</footer>'
      );
      newHTML = newHTML.replace(
        '<div id="site-footer-page"></div>',
        '<footer class="home-footer home-footer--page" id="kontakt-anchor">' + footerTemplate + '</footer>'
      );

      wrapper.innerHTML = newHTML;

      // Update logo/back-button visibility
      var logo = document.querySelector('.site-logo');
      var backBtn = document.querySelector('.site-back-btn');
      if (logo) logo.classList.toggle('is-hidden', isCase);
      if (backBtn) backBtn.classList.toggle('is-hidden', !isCase);
      var _glass = document.querySelector('.site-logo-glass');
      if (_glass) _glass.style.display = isCase ? 'none' : '';

      // Update active nav state
      document.querySelectorAll('.bottom-nav__item').forEach(function (item) {
        item.classList.remove('is-active', 'is-highlighted');
      });
      var newActiveItem = null;
      document.querySelectorAll('.bottom-nav__item a[data-page]').forEach(function (a) {
        var match = newBodyClass.includes(a.dataset.page) ||
                    (a.dataset.page === 'projekte' && newBodyClass.includes('case'));
        a.classList.toggle('active', match);
        if (match) {
          a.parentElement.classList.add('is-active');
          newActiveItem = a.parentElement;
        }
      });
      if (newActiveItem) moveBg(newActiveItem);

      // Execute inline scripts from new page
      doc.querySelectorAll('body > script:not([src])').forEach(function (s) {
        var script = document.createElement('script');
        script.textContent = s.textContent;
        document.body.appendChild(script);
      });

      // Scroll to top
      window.scrollTo(0, 0);

      // Push history state
      if (pushState) history.pushState({ spa: true }, '', href);

      // Fade in
      requestAnimationFrame(function () {
        wrapper.style.transition = 'opacity ' + TRANSITION_IN + 'ms ease';
        wrapper.style.opacity = '1';
        setTimeout(function () {
          document.body.classList.remove('is-transitioning');
          navigating = false;
        }, TRANSITION_IN);
      });

    }).catch(function () {
      // Fetch failed — fall back to normal navigation
      navigating = false;
      window.location.href = href;
    });
  }

  // Intercept clicks on internal links (capture phase for reliability)
  document.addEventListener('click', function (e) {
    if (e.defaultPrevented) return;
    var a = e.target.closest('a');
    if (!a || e.metaKey || e.ctrlKey || e.shiftKey) return;
    if (!isInternalLink(a)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    navigateTo(a.href, true);
  }, true);

  // Handle browser back/forward
  window.addEventListener('popstate', function () {
    navigateTo(location.href, false);
  });

  // Store initial state
  history.replaceState({ spa: true }, '', location.href);

  // Mobile: wave font-weight animation on "Let's create together"
  if (window.innerWidth <= 768) {
    function initFooterWave() {
      var headline = document.querySelector('.home-footer__headline');
      if (!headline || headline.dataset.waveInit) return;
      headline.dataset.waveInit = '1';

      var MIN_W = 300, MAX_W = 900;
      var text = headline.innerHTML;
      var chars = [];
      headline.innerHTML = '';

      var parts = text.split(/<br\s*\/?>/i);
      parts.forEach(function (part, pi) {
        Array.from(part).forEach(function (ch) {
          var span = document.createElement('span');
          span.style.display = 'inline-block';
          span.style.fontVariationSettings = "'wght' " + MIN_W;
          span.textContent = ch === ' ' ? '\u00a0' : ch;
          headline.appendChild(span);
          chars.push(span);
        });
        if (pi < parts.length - 1) headline.appendChild(document.createElement('br'));
      });

      var SPEED = 0.4;
      var WAVE_LEN = chars.length * 0.6;

      function tick(t) {
        var time = t / 1000;
        chars.forEach(function (span, i) {
          var phase = (time * SPEED - i / WAVE_LEN) * Math.PI * 2;
          var w = MIN_W + (Math.sin(phase) * 0.5 + 0.5) * (MAX_W - MIN_W);
          span.style.fontVariationSettings = "'wght' " + w.toFixed(0);
        });
        requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }
    initFooterWave();
    window.addEventListener('spa:navigate', initFooterWave);
  }
})();
