const CSVParser = require('../CSVParser')

describe('CSVParser', () => {
    it('parse returns empty array if data is empty', () => {
        // Setup
        const parser = new CSVParser()
        const fileData = ''
        const expected = []

        // Exercise
        const actual = parser.parse(fileData)

        // Assert
        expect(actual).toEqual(expected)

        // Teardown
    });

    it('parse returns empty array if data is empty', () => {
        // Setup
        const fileData = ''
        const parser = new CSVParser(fileData)
        const expected = []

        // Exercise
        const actual = parser.parse()

        // Assert
        expect(actual).toEqual(expected)

        // Teardown
    });

    it('parse returns an array with { foo: "bar"} ', () => {
        // Setup
        const parser = new CSVParser()
        const fileData = 'foo\nbar'
        const expected = [{foo: 'bar'}]

        // Exercise
        const actual = parser.parse(fileData)

        // Assert
        expect(actual).toEqual(expected)

        // Teardown
    });

    it('parse returns an empty array if no records exist', () => {
        // Setup
        const parser = new CSVParser()
        const fileData = 'sudo-make-me-a-sandwich'
        const expected = []

        // Exercise
        const actual = parser.parse(fileData)

        // Assert
        expect(actual).toEqual(expected)

        // Teardown
    });

    it('parse returns an empty array if no records exist', () => {
        // Setup
        const parser = new CSVParser()
        const fileData = 'usaa'
        const expected = []

        // Exercise
        const actual = parser.parse(fileData)

        // Assert
        expect(actual).toEqual(expected)

        // Teardown
    });


    it('parse returns an array with { bar: "foo"} ', () => {
        // Setup
        const parser = new CSVParser()
        const fileData = 'bar\nfoo'
        const expected = [{bar: 'foo'}]

        // Exercise
        const actual = parser.parse(fileData)

        // Assert
        expect(actual).toEqual(expected)

        // Teardown
    });


    it('parse returns an array with {company: "galvanize"} ', () => {
        // Setup
        const parser = new CSVParser()
        const fileData = 'company\ngalvanize'
        const expected = [{company: 'galvanize'}]

        // Exercise
        const actual = parser.parse(fileData)

        // Assert
        expect(actual).toEqual(expected)

        // Teardown
    });

    it('parse returns an array with {missing: undefined}', () => {
        // Setup
        const parser = new CSVParser()
        const fileData = 'missing\n'
        const expected = [{missing: undefined}]

        // Exercise
        const actual = parser.parse(fileData)

        // Assert
        expect(actual).toEqual(expected)

        // Teardown
    });

    it('parse returns an array with {one: undefined, two: undefined}', () => {
        // Setup
        const parser = new CSVParser()
        const fileData = 'one,two\n'
        const expected = [{one: undefined, two: undefined}]

        // Exercise
        const actual = parser.parse(fileData)

        // Assert
        expect(Object.keys(actual[0])).toEqual(Object.keys(expected[0]))

        // Teardown
    });

    it('parse returns an array with {do: undefined, re: undefined}', () => {
        // Setup
        const parser = new CSVParser()
        const fileData = 'do,re\n'
        const expected = [{do: undefined, re: undefined}]

        // Exercise
        const actual = parser.parse(fileData)

        // Assert
        expect(Object.keys(actual[0])).toEqual(Object.keys(expected[0]))

        // Teardown
    });

    it('parse returns an array with {a: undefined, b: undefined}', () => {
        // Setup
        const parser = new CSVParser()
        const fileData = 'a,b\n'
        const expected = [{a: undefined, b: undefined}]

        // Exercise
        const actual = parser.parse(fileData)

        // Assert
        expect(Object.keys(actual[0])).toEqual(Object.keys(expected[0]))

        // Teardown
    });

    it('parse returns an array with {c: "charlie", d: "delta"}', () => {
        // Setup
        const parser = new CSVParser()
        const fileData = 'c,d\ncharlie,delta'
        const expected = [{c: "charlie", d: "delta"}]

        // Exercise
        const actual = parser.parse(fileData)

        // Assert
        expect(actual).toEqual(expected)

        // Teardown
    });

    it('parse returns an array with {baba: "yetu", michael: "jackson"}', () => {
        // Setup
        const parser = new CSVParser()
        const fileData = 'baba,michael\nyetu,jackson'
        const expected = [{baba: "yetu", michael: "jackson"}]

        // Exercise
        const actual = parser.parse(fileData)

        // Assert
        expect(actual).toEqual(expected)

        // Teardown
    });


    it('parse returns an array with {f: "foxtrot", g: "golf"}, {f: "hotel", g: "india"}' , () => {
        // Setup
        const parser = new CSVParser()
        const fileData = 'f,g\nfoxtrot,golf\nhotel,india'
        const expected = [{f: "foxtrot", g: "golf"}, {f: "hotel", g: "india"}]

        // Exercise
        const actual = parser.parse(fileData)

        // Assert
        expect(actual).toEqual(expected)

        // Teardown
    });

    it('parse returns an array with {f: "foxtrot", g: "golf"}, {f: "hotel", g: undefined}' , () => {
        // Setup
        const parser = new CSVParser()
        const fileData = 'f,g\nfoxtrot,golf\nhotel,'
        const expected = [{f: "foxtrot", g: "golf"}, {f: "hotel", g: undefined}]

        // Exercise
        const actual = parser.parse(fileData)

        // Assert
        expect(actual).toEqual(expected)

        // Teardown
    });
});