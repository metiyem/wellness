if (!Array.prototype.flat) {
  Array.prototype.flat = function(depth) {
    depth = isNaN(depth) ? 1 : Number(depth);

    return depth ? this.reduce(function (acc, cur) {
      if (Array.isArray(cur)) {
        acc.push(...cur.flat(depth - 1));
      } else {
        acc.push(cur);
      }

      return acc;
    }, []) : this.slice();
  };
}


var $ = Dom7;

document.addEventListener('deviceready', function () {
    navigator.splashscreen.hide();
}, false);

// Demo
const html = document.documentElement;
if (document.location.href.includes('safe-areas')) {
  const html = document.documentElement;
  if (html) {
    html.style.setProperty('--f7-safe-area-top', '44px');
    html.style.setProperty('--f7-safe-area-bottom', '34px');
  }
}
html.style.setProperty('--f7-navbar-height','85px')
if (document.location.href.includes('example-preview')) {
  $('.view-main').attr('data-browser-history', 'true');
  $('.view-main').attr('data-browser-history-root', '/kitchen-sink/core/');
  $('.view-main').attr('data-preload-previous-page', 'false');
  $('.view-main').attr('data-ios-swipe-back', 'false');
  document.documentElement.classList.add('example-preview');
}

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}
if (document.location.search.indexOf('mode=') >= 0) {
  const mode = document.location.search.split('mode=')[1].split('&')[0];
  if (mode === 'dark') document.documentElement.classList.add('dark');
}


// Init App
var app = new Framework7({
  el: '#app',
  theme,
  // store.js,
  store: store,
  // routes.js,
  routes: routes,
  popup: {
    closeOnEscape: true,
  },
  sheet: {
    closeOnEscape: true,
  },
  popover: {
    closeOnEscape: true,
  },
  actions: {
    closeOnEscape: true,
  },
  vi: {
    placementId: 'pltd4o7ibb9rc653x14',
  },
  navbar: {
    mdCenterTitle: true,
    hideOnPageScroll:true,
    showOnPageScrollTop:true,
    showOnPageScrollEnd:false,
  }
});

// var swiper = app.swiper.create('.swiper', {
//   speed: 100,
//   spaceBetween: 50
// });
