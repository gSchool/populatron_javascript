const fs = require('fs')

const FileReader = require('../FileReader')

jest.mock('fs')

describe('The FileReader', () => {
  it('should read all lines', () => {
    // setup
    const csvText = `Country,City,AccentCity,Region,Population
us,Denver,Denver,Colorado,2000000`
    const stub = fs.readFileSync.mockReturnValue(csvText)
    const expectedPath = '/some/path'

    // exercise
    const actual = new FileReader().readAllLines(expectedPath)

    // assert
    expect(stub).toHaveBeenCalledWith(expectedPath, 'utf-8')
    expect(actual.length).toEqual(2)
    expect(actual[0]).toEqual('Country,City,AccentCity,Region,Population')
    expect(actual[1]).toEqual('us,Denver,Denver,Colorado,2000000')

    // teardown
  })
})
