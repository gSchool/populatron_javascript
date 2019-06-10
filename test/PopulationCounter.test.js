const CSVParser = require('../CSVParser')
const PopulationCounter = require('../PopulationCounter')

describe('PopulationCounter', () => {
    it('count returns 0 when given an empty array from the parser', () => {
        // Setup
        const parser = new CSVParser()
        const classUnderTest = new PopulationCounter(parser)
        const fileData = ''
        const expected = 0

        // Exercise
        const actual = classUnderTest.count(fileData)

        // Assert
        expect(actual).toEqual(expected)

        // Teardown
    });

});