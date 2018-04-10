class MockFileReader {
    constructor(lines) {
        this.lines = lines;
    }

    readAllLines(path) {
        this.path = path;
        return this.lines;
    }
}

module.exports = MockFileReader;