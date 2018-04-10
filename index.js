const fs = require('fs');

let sum = 0;
const path = process.argv[2];
const text = fs.readFileSync(path, 'utf-8');
const lines = text.split('\n');
for(let i = 1; i < lines.length; i++) {
    const line = lines[i];
    const terms = line.split(",");
    if(terms.length < 5) {
        continue;
    }
    const popText = terms[4];
    if(popText.length === 0) {
        continue;
    }
    const population = parseInt(popText);
    sum += population;
}
const num = sum.toLocaleString();
console.log(`World population is: ${num}`);