const CsvParser = require('../CsvParser')

describe('The CsvParser', () => {
  it('should parse one line', () => {
    // setup
    const parser = new CsvParser()

    // exercise
    const fields = parser.readLine('givenName,familyName')

    // assert
    expect(fields[0]).toEqual('givenName')
    expect(fields[1]).toEqual('familyName')
  })

  it('should parse models', () => {
    const headers = ['firstName', 'lastName']
    const values = ['Homer', 'Simpson']
    const parser = new CsvParser()
    const expected = {
      firstName: 'Homer',
      lastName: 'Simpson',
    }

    // exercise
    const actual = parser.readModel(headers, values)

    // assert
    expect(actual).toEqual(expected)
  })

  it('should read all lines', () => {
    const lines = ['givenName,familyName', 'Alan,Turing', 'Alanzo,Church']
    const parser = new CsvParser()
    const expected = [
      { givenName: 'Alan', familyName: 'Turing' },
      { givenName: 'Alanzo', familyName: 'Church' },
    ]

    // exercise
    const actual = parser.readLines(lines)

    // assert
    expect(actual).toEqual(expected)
  })
})
