// Modules
// CommonJS, every file is module (by default)
//Modules -encapsulated code (only share minimum)
// First module in names.js
//Second module in utils.js
//is this gonna work ?
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');

require('./7-mind-grenade')

/*sayHi('susan');
sayHi(names.john);
sayHi(names.peter);*/