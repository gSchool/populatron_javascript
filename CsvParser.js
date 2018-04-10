class CsvParser {
    readLine(line) {
        const terms = line.split(","); // parsing
        return terms;
    }

    readModel(headers, values) {
        let result = {};
        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const value = values[i];
            result[header] = value;
        }
        return result;
    }

    readLines(lines) {
        let result = [];
        const headers = this.readLine(lines[0]);
        for (let i = 1; i < lines.length; i++) {
            const values = this.readLine(lines[i]);
            const model = this.readModel(headers, values);
            result.push(model);
        }
        return result;
    }
}

module.exports = CsvParser;