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

    it('parse returns an array with {do: undefined, re: undefined, mi: undefined}', () => {
        // Setup
        const parser = new CSVParser()
        const fileData = 'do,re,mi\n'
        const expected = [{do: undefined, re: undefined, mi: undefined}]

        // Exercise
        const actual = parser.parse(fileData)

        // Assert
        expect(Object.keys(actual[0])).toEqual(Object.keys(expected[0]))

        // Teardown
    });

    it('parse returns an array with {a: undefined, b: undefined, c: undefined}', () => {
        // Setup
        const parser = new CSVParser()
        const fileData = 'a,b,c\n'
        const expected = [{a: undefined, b: undefined, c: undefined}]

        // Exercise
        const actual = parser.parse(fileData)

        // Assert
        expect(Object.keys(actual[0])).toEqual(Object.keys(expected[0]))

        // Teardown
    });
});