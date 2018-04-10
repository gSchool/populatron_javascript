const {expect} = require('chai');

describe('The population counter', () => {
    it('should print the count', () => {
        let calledWidth;
        process.argv[2] = './data/worldcitiespop.csv';
        console.log = (...args) => {
            calledWidth = args
        };
        const cut = require('../index.js');
        expect(calledWidth[0]).to.equal('World population is: 1,347,982,728');
    })
});