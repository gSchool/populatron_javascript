/* eslint-env mocha */

const sinon = require('sinon')
const {expect} = require('chai')

const FileReader = require('../FileReader')

describe('The FileReader', () => {
  it('should read all lines', () => {
    // setup
    const csvText = `Country,City,AccentCity,Region,Population\nus,Denver,Denver,Colorado,2000000`
    const fs = {
      readFileSync: sinon.stub().returns(csvText)
    }

    const expectedPath = '/some/path'

    // exercise
    const actual = new FileReader(fs).read(expectedPath)

    // assert
    expect(fs.readFileSync.calledWith(expectedPath)).to.equal(true)
    expect(actual).to.equal(csvText)
  })
})
