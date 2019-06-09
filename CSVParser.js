class CSVParser {

    parse(fileData) {
        const lines = fileData.split('\n')
        if (lines.length === 1) {
            return []
        }
        const headers = lines[0]
        const fields = headers.split(',')
        if(fields.length > 1){
            return [fields.reduce((record, field) => {
                record[field] = undefined;
                return record
            }, {})]
        }

        const values = lines[1]
        const record = {}
        record[headers] = values ? values : undefined
        return [record]
    }
}

module.exports = CSVParser