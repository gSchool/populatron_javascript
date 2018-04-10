const fs = require('fs');
const sinon = require('sinon');
const {expect} = require('chai');

const FileReader = require('../FileReader');

describe('The FileReader', () => {
    it('should read all lines', () => {
        // setup
        const csvText = `Country,City,AccentCity,Region,Population
us,Denver,Denver,Colorado,2000000`;
        const stub = sinon.stub(fs, 'readFileSync');
        stub.returns(csvText);
        const expectedPath = '/some/path';

        // exercise
        const actual = new FileReader().readAllLines(expectedPath);

        // assert
        expect(stub.calledWith(expectedPath)).to.be.true;
        expect(actual.length).to.equal(2);
        expect(actual[0]).to.equal('Country,City,AccentCity,Region,Population');
        expect(actual[1]).to.equal('us,Denver,Denver,Colorado,2000000');

        // teardown
        stub.restore();
    })
});
