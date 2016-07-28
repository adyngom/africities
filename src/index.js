var afriCitiesName = require('./africities.json');
var uniqRandom = require('unique-random-array');

module.exports = {
	all: afriCitiesName,
	random: uniqRandom(afriCitiesName)
};