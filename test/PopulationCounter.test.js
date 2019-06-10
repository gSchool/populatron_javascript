/*globals describe, it, expect, require */

const CSVParser = require('../CSVParser')
const PopulationCounter = require('../PopulationCounter')

describe('PopulationCounter', () => {
    it('count returns 0 when given an empty array from the parser', () => {
        // Setup
        const fileData = ''
        const parser = new CSVParser(fileData)
        const classUnderTest = new PopulationCounter(parser)
        const expected = 0

        // Exercise
        const actual = classUnderTest.count()

        // Assert
        expect(actual).toEqual(expected)

        // Teardown
    });

    it('count returns 500 when given an array with {city: "San Antonio", population: 500}', () => {
        // Setup
        const parser = {
            parse: jest.fn().mockReturnValue([{population: '500'}])
        }
        const classUnderTest = new PopulationCounter(parser)
        const expected = 500

        // Exercise
        const actual = classUnderTest.count()

        // Assert
        expect(actual).toEqual(expected)

        // Teardown
    });

    it('count returns 600 when given an array with {city: "Cadott", population: 600}', () => {
        // Setup
        const parser = {
            parse: jest.fn().mockReturnValue([{population: '600'}])
        }
        const classUnderTest = new PopulationCounter(parser)
        const expected = 600

        // Exercise
        const actual = classUnderTest.count()

        // Assert
        expect(actual).toEqual(expected)

        // Teardown
    });

});