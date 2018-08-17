
class FileReader {
  constructor (fs) {
    this.fs = fs
  }
  read (filename) {
    return this.fs.readFileSync(filename, 'utf-8') // file IO
  }
}

module.exports = FileReader
