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