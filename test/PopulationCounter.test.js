const {expect} = require('chai');

const CsvParser = require('../CsvParser');
const MockFileReader = require('./MockFileReader');
const PopulationCounter = require('../PopulationCounter');

describe('The population counter', () => {
    it('should print the count', () => {
        // setup
        const lines = [
            'Country,City,AccentCity,Region,Population',
            'us,Denver,Denver,Colorado,2000000'
        ];
        const parser = new CsvParser();
        const reader = new MockFileReader(lines);
        const cut = new PopulationCounter(reader, parser);
        const expectedPath = '/some/path';

        // exercise
        const actual = cut.count(expectedPath);

        // assert
        expect(reader.path).to.equal(expectedPath);
        expect(actual).to.equal('World population is: 2,000,000');
    })
});