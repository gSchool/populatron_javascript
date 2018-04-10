class PopulationCounter {
    constructor(fileReader) {
        this.fileReader = fileReader;
    }

    count(filename) {
        const lines = this.fileReader.readAllLines(filename);
        let sum = 0; // counting
        for(let i = 1; i < lines.length; i++) { // counting
            const line = lines[i]; // parsing
            const terms = line.split(","); // parsing
            if(terms.length < 5) { // counting
                continue; // counting
            }
            const popText = terms[4]; // parsing
            if(popText.length === 0) { // counting
                continue; // counting
            }
            const population = parseInt(popText); // parsing
            sum += population; // counting
        }
        const num = sum.toLocaleString(); // formatting
        return `World population is: ${num}`; // formatting
    }
}

module.exports = PopulationCounter;