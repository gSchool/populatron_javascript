const {expect} = require('chai');

describe('The population counter', () => {
    it('prints the total world population', () => {
        // setup
        process.argv[2] = './data/worldcitiespop.csv';
        const oldLog = console.log
        let consoleOut;
        console.log = (...args) => {
            consoleOut = args
        };

        // execute
        const cut = require('../index.js');
        console.log = oldLog

        // assert
        expect(consoleOut[0]).to.equal('World population is: 1,347,982,728');
    }).timeout(5000)
});
