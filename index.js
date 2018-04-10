const PopulationCounter = require('./PopulationCounter');
const FileReader = require('./FileReader');

const reader = new FileReader();
const populationCounter = new PopulationCounter(reader);
const path = process.argv[2];

const response = populationCounter.count(path);

console.log(response);