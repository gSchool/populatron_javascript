const PopulationCounter = require('./PopulationCounter');

const populationCounter = new PopulationCounter();
const path = process.argv[2];

const response = populationCounter.count(path);

console.log(response);