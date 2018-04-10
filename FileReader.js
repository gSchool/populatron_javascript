const fs = require('fs');

class FileReader {
    readAllLines(filename) {
        const text = fs.readFileSync(filename, 'utf-8'); // file IO
        const lines = text.split('\n'); // file IO
        return lines;
    }
}

module.exports = FileReader;