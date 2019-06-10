class PopulationCounter {
    constructor(parser) {
        this.parser = parser
    }

    count() {
        const parsedData = this.parser.parse()
        if(!parsedData.length){
            return 0
        }

        return +parsedData[0].population
    }
}

module.exports = PopulationCounter