// Script from TheaterJS. Github Repo: https://github.com/Zhouzi/TheaterJS
// No library version: https://jsfiddle.net/p1e9La6w/

function Typer (element, options, scenes) {
	var defaultOptions = { erase: 60, type: 80, break: 1000 };
  
  var config = {};
  
  if (Array.isArray(options)) {
  	scenes = options;
    options = {};
  }
  
  for (var key in defaultOptions) {
  	if (!defaultOptions.hasOwnProperty(key)) continue;
    
    if (options[key] != null) {
    	config[key] = options[key];
    } else {
    	config[key] = defaultOptions[key];
    }
  }
  
  var status = 'ready';

  var state = '';

  var currentSceneIndex = 0
  
  function type () {
  	if (status !== 'playing') {
    	return;
    }
    
  	var scene = scenes[currentSceneIndex];
    
    if (state === scene) {
    	return setTimeout(erase, config.break);
    }
    
    state = scene.substr(0, state.length + 1);
    element.textContent = state;
    
    setTimeout(type, config.type);
  }
  
  function erase () {
    if (status !== 'playing') {
    	return;
    }
    
  	if (state === '') {
    	currentSceneIndex++;
      
      if (currentSceneIndex === scenes.length) {
      	currentSceneIndex = 0;
      }
      
      return type();
    }
  
  	state = state.substr(0, state.length - 1);
    element.textContent = state;
    
    setTimeout(erase, config.erase);
  }
  
  function stop () {
  	status = 'ready';
  }
  
  function play () {
  	if (status === 'ready') {
    	status = 'playing';
    	type();
    }
  }
  
  return { play: play, stop: stop };
}

var roletyper = document.getElementById('roletyper');
var player = Typer(roletyper, ['Full Stack Web Developer',
                            'Ex-BIM Manager',
                            'Technology Enthusiast',
                            'Absolute Nerd']);

setTimeout(player.play, 1500)

/* Easy Scroll Dots 2.0.3 --- https://github.com/Superhands89/EasyScrollDots
* By Superhands89 2019-2022 --- https://github.com/Superhands89/
* GPLv3 Licence for open source use only
*/

// a throttle function
function dotsThrottle(func, wait, options) {
  let context, args, result;
  let timeout = null;
  let previous = 0;
  if (!options) options = {};
  const later = function () {
      previous = options.leading === false ? 0 : Date.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
  };
  return function () {
      const now = Date.now();
      if (!previous && options.leading === false) previous = now;
      const remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
          if (timeout) {
              clearTimeout(timeout);
              timeout = null;
          }
          previous = now;
          result = func.apply(context, args);
          if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
          timeout = setTimeout(later, remaining);
      }
      return result;
  };
};

// global fixed nav and offset options
let dotFixedNavPresent = false;
let dotFixedNavId = '';
let dotFixedNavUp = false;
let dotOffset = 0;
let dotNavHeight = 0;

// scroll indicator controller
function easyScrollDots(dotfixedOptions) {
  let scrollIndi = document.querySelectorAll('[data-scroll-indicator-title]');
  dotfixedOptions.fixedNav === true ? dotFixedNavPresent = true : dotFixedNavPresent;
  dotfixedOptions.fixedNavId === '' ? dotFixedNavId = false : dotFixedNavId = dotfixedOptions.fixedNavId;
  dotfixedOptions.fixedNavUpward === true ? dotFixedNavUp = true : dotFixedNavUp;
  dotfixedOptions.offset > 0 ? dotOffset = dotfixedOptions.offset : dotOffset;

  if (dotFixedNavPresent === true && dotFixedNavId.length) {
  // there is a fixed nav and its id has been defined
  const dotNavHeightElem = document.getElementById(dotFixedNavId);
      if (dotNavHeightElem !== null) {
    dotNavHeight = dotNavHeightElem.clientHeight;
      }
      else {
    console.error('easyScrollDots Error: A fixed navigation ID has been defined, but an element with the corresponding ID cannot be found in the DOM. Check you have spelled the dotFixedNavId correctly.')
      }
  }

  if (scrollIndi.length) {
      const scrollIndiTemplate = '<div class="scroll-indicator-controller"><span></span></div>';
      document.querySelector('body').lastElementChild.insertAdjacentHTML('afterend', scrollIndiTemplate);
      const scrollIndiController = document.querySelector('.scroll-indicator-controller');
      if ((typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)) { scrollIndiController.classList.add('indi-mobile'); }
      const scrollIndiElems = Array.prototype.slice.call(scrollIndi);

      scrollIndiElems.forEach(function (e, i) {
          const scrollIndiTitle = e.getAttribute('data-scroll-indicator-title');
          let firstActiveClass = '';

          if (i == 0) {
              firstActiveClass = 'active';
          }
          scrollIndiController.lastElementChild.insertAdjacentHTML('afterend', '<div class="' + firstActiveClass + '" data-indi-controller-id="' + scrollIndiTitle + '" onclick="scrollIndiClicked(\'' + scrollIndiTitle + '\');"><span>' + scrollIndiTitle + '</span><div></div></div>');
          if (i == scrollIndiElems.length - 1) { // insert additional anchor so that we can always refer to previousElementSibling
              scrollIndiController.lastElementChild.insertAdjacentHTML('afterend', '<div data-indi-controller-id="indiEnd" style="display: none;"></div>');
              e.insertAdjacentHTML('afterend', '<div data-scroll-indicator-title="indiEnd"></div>');
              scrollIndiElems.push(document.querySelector('[data-scroll-indicator-title="indiEnd"]'));
          }
      });

      const scrollIndiControllerDots = scrollIndiController.querySelectorAll('[data-indi-controller-id]');

      const handleIndiScroll = dotsThrottle(function () {
          let indiScrollTopCollection = {};

          scrollIndiElems.forEach(function (e) {
              const scrollIndiIdScroll = e.getAttribute('data-scroll-indicator-title');
              const indiScrollTop = e.getBoundingClientRect().top;

              indiScrollTopCollection[scrollIndiIdScroll] = indiScrollTop;
          });

          // const indiOffsetValues = Object.values(indiScrollTopCollection); not supported in IE
          const indiOffsetValues = Object.keys(indiScrollTopCollection).map(function (itm) { return indiScrollTopCollection[itm]; });
    
          const indiOffsetMin = function () {
              const indiRemoveMinuses = indiOffsetValues.filter(function (x) { return x > 0 + (dotOffset + 2) + dotNavHeight; });

              return Math.min.apply(null, indiRemoveMinuses);
          };

          Object.keys(indiScrollTopCollection).forEach(function (e) {

              if (indiScrollTopCollection[e] == indiOffsetMin()) {

                  Array.prototype.forEach.call(scrollIndiControllerDots, function (el) {
                      if (el.classList.contains('active')) {
                          el.classList.remove('active');
                      }
                  });

                  const activeItemCandidate = scrollIndiController.querySelector('[data-indi-controller-id="' + e + '"]');
                  const activeItemCandidatePrevEl = activeItemCandidate.previousElementSibling;
                  const activeItem = activeItemCandidatePrevEl.tagName.toLowerCase() !== 'span' ? activeItemCandidatePrevEl : activeItemCandidate;

                  activeItem.classList.add('active');
              }
          });

      }, 300);

      window.addEventListener('scroll', handleIndiScroll);
  }
};

function scrollIndiClicked(indiId) {

  const cachePageYOffset = window.pageYOffset;
  const indiElement = document.querySelector('[data-scroll-indicator-title="' + indiId + '"]');

  if (dotNavHeight !== 0) {

      if (dotFixedNavUp === true) {
          // fix nav on upward scroll only
          window.scrollTo({
      top: (cachePageYOffset + indiElement.getBoundingClientRect().top) - dotOffset,
              left: 0,
              behavior: 'smooth'
          });
          const scrollPos = document.body.getBoundingClientRect().top;
          setTimeout(function () {
              if (document.body.getBoundingClientRect().top > scrollPos) {
                  window.scrollTo({
        top: (cachePageYOffset + indiElement.getBoundingClientRect().top) - dotNavHeight - dotOffset,
                      left: 0,
                      behavior: 'smooth'
                  });
              }
          }, 400);
      }
      else {
          // fixed nav scroll
          window.scrollTo({
      top: (cachePageYOffset + indiElement.getBoundingClientRect().top) - dotNavHeight - dotOffset,
              left: 0,
              behavior: 'smooth'
          });
      }
  }
  else {
      // normal scroll
      window.scrollTo({
    top: (cachePageYOffset + indiElement.getBoundingClientRect().top) - dotOffset,
          left: 0,
          behavior: 'smooth'
      });
  }
};

easyScrollDots({
  'fixedNav': false,
  'fixedNavId': '',
  'fixedNavUpward': false,
  'offset': 0
});