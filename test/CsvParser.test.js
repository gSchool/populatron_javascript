/* eslint-env mocha */

const { expect } = require('chai')

const CsvParser = require('../CsvParser')

describe('The CsvParser', () => {
  it('parses csv string to an array of objects', () => {
    const input = `firstName,lastName\nfName,lName`
    const expected = [
      {
        firstName: 'fName',
        lastName: 'lName'
      }
    ]

    const actual = new CsvParser().parse(input)
    expect(actual).to.deep.equal(expected)
  })
})
