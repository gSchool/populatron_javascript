class PopulationCounter {
  constructor (fileReader, parser) {
    this.fileReader = fileReader
    this.parser = parser
  }

  count (filename) {
    const lines = this.fileReader.read(filename)
    const cities = this.parser.parse(lines)
    const sum = cities
      .filter(c => c.Population)
      .map(c => parseInt(c.Population))
      .reduce((acc, cur) => acc + cur, 0)

    const num = sum.toLocaleString() // formatting
    return `World population is: ${num}` // formatting
  }
}

module.exports = PopulationCounter
