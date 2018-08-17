/* eslint-env mocha */

const { expect } = require('chai')
const sinon = require('sinon')

const PopulationCounter = require('../PopulationCounter')

describe('The population counter', () => {
  it('should print the count', () => {
    // setup
    const expectedPath = '/some/path'

    const file = 'Country,City,AccentCity,Region,Population\nus,Denver,Denver,Colorado,2000000'

    const parsed = [
      {
        'Country': 'us',
        'City': 'Denver',
        'AccentCity': 'Denver',
        'Region': 'Colorado',
        'Population': '2000000'
      }
    ]

    const expected = 'World population is: 2,000,000'

    const reader = {
      read: sinon.stub().returns(file)
    }

    const parser = {
      parse: sinon.stub().returns(parsed)
    }

    const instanceUnderTest = new PopulationCounter(reader, parser)

    // exercise
    const actual = instanceUnderTest.count(expectedPath)

    // assert
    expect(reader.read.calledWith(expectedPath)).to.equal(true)
    expect(parser.parse.calledWith(file)).to.equal(true)
    expect(actual).to.equal(expected)
  })
})
