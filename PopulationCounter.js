class PopulationCounter {
    constructor(parser) {
        this.parser = parser
    }

    count(fileData) {
        const parsedData = this.parser.parse(fileData)
        if(!parsedData.length){
            return 0
        }
    }
}

module.exports = PopulationCounter