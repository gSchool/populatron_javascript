/* eslint-env mocha */

const {expect} = require('chai')

describe('The app', () => {
  it('should print the count', (done) => {
    let calledWidth
    process.argv[2] = './data/worldcitiespop.csv'
    const savedLog = console.log

    console.log = (...args) => {
      calledWidth = args
    }

    require('../index.js')
    console.log = savedLog
    expect(calledWidth[0]).to.equal('World population is: 1,347,982,728')
    done()
  }).timeout(20000)
})
