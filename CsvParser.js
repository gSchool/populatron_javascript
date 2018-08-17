class CsvParser {
  parse (text) {
    const lines = text.split('\n')
    const keys = lines[0].split(',')
    const values = lines.slice(1)

    return values.map(ele =>
      ele.split(',')
        .reduce((acc, ele, index) =>
          ({ ...acc, [keys[index]]: ele }), {}
        )
    )
  }
}

module.exports = CsvParser
