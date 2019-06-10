class CSVParser {

    constructor(fileData) {
        this.fileData = fileData;
    }

    parse(fileData = this.fileData) {
        const lines = fileData.split('\n')
        if (lines.length === 1) {
            return []
        }

        const fieldNames = lines.shift().split(',')

        return lines
            .map((line) => line.split(','))
            .map((fields) => fields.concat(new Array(fieldNames.length - fields.length).fill(undefined)))
            .map((fields) => {
                return fields.reduce((record, fieldValue, index) => {
                    record[fieldNames[index]] = fieldValue ? fieldValue : undefined;
                    return record
                }, {})
            })
    }
}

module.exports = CSVParser