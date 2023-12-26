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
                            'Experienced BIM Manager',
                            'Technology Enthusiast',
                            'Absolute Nerd']);

setTimeout(player.play, 1500)

// Custom JS script

function MenuButton() {
  var menu = document.getElementById("menu")
  menu.classList.toggle("show")
}

function chBackcolor() {
  var navbutton = document.getElementById("navbutton")
  navbutton.style.background = "#1AD993"
  var navbar = document.getElementsByClassName("sep-box-light")
  for (let bar of navbar) {
    bar.style.background = "#0D0D0D"
  }
}