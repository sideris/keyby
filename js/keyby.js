/*!
 * Keyby v0.0.1
 * Copyright (c) 2016 Petros G. Sideris
 * Licensed under the MIT license
 */
(function(root, factory) {
	if (typeof define === 'function' && define.amd)	define([], factory);
	else if (typeof exports === 'object')			module.exports = factory();
	else											root.keyby = factory();
}(this, function() {
	var self = this;
	/**
     * Map of keycodes and their corresponding keys
     * @type {Object}
     */
	 this.map = {
        8: 'backspace',
        9: 'tab',
        13: 'enter',
        16: 'shift',
        17: 'ctrl',
        18: 'alt',
        20: 'capslock',
        27: 'esc',
        32: 'space',
        33: 'pageup',
        34: 'pagedown',
        35: 'end',
        36: 'home',
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        45: 'ins',
        46: 'del',

		48: '0',
		49: '1',
		50: '2',
		51: '3',
		52: '4',
		53: '5',
		54: '6',
		55: '7',
		56: '8',
		57: '9',

		65: 'a',
		66: 'b',
		67: 'c',
		68: 'd',
		69: 'e',
		70: 'f',
		71: 'g',
		72: 'h',
		73: 'i',
		74: 'j',
		75: 'k',
		76: 'l',
		77: 'm',
		78: 'n',
		79: 'o',
		80: 'p',
		81: 'q',
		82: 'r',
		83: 's',
		84: 't',
		85: 'u',
		86: 'v',
		87: 'w',
		88: 'x',
		89: 'y',
		90: 'z',

        106: '*',
        107: '+',
        109: '-',
        110: '.',
        111 : '/',
        186: ';',
        187: '=',
        188: ',',
        189: '-',
        190: '.',
        191: '/',
        192: '`',
        219: '[',
        220: '\\',
        221: ']',
        222: '\''};
	var keyby = {version: '0.0.1'};
	var keycall = {};
	keyby.on = function(key, callback){
		key += '';
		key = key.toLowerCase();
		keycall[key] = callback;
		return this;
	};
	window.addEventListener('keyup', function(e){
		e.preventDefault();
		for(var key in keycall)
			if(key == self.map[e.which])
				keycall[key]()
	});
	return keyby;
}));