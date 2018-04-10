const fs = require('fs');
const sinon = require('sinon');
const {expect} = require('chai');

const PopulationCounter = require('../PopulationCounter');

describe('The population counter', () => {
    it('should print the count', () => {
        // setup
        const csvText = `Country,City,AccentCity,Region,Population
us,Denver,Denver,Colorado,2000000`;
        const cut = new PopulationCounter();
        const stub = sinon.stub(fs, 'readFileSync');
        stub.returns(csvText);
        const expectedPath = '/some/path';

        // exercise
        const actual = cut.count(expectedPath);

        // assert
        expect(stub.calledWith(expectedPath)).to.be.true;
        expect(actual).to.equal('World population is: 2,000,000');

        // teardown
        stub.restore();
    })
});