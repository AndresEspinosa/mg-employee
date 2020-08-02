// @scripts
import {
    filterArray,
    getMaxFromArray,
    getMinFromArray,
    groupArray,
    paginateArray,
    sortArray
} from '../../util';

describe('sortArray', () => {
    const source = [
        { name: 'Andrés' },
        { name: 'León' },
        { name: 'Ana' },
        { name: 'Ámeno' }
    ];

    test('sortArray (null source)', () => {
        const result = sortArray({
            source: null
        });
        const expected = null;
        expect(result).toEqual(expected);
    });

    test('sortArray (default ascending)', () => {
        const result = sortArray({
            sortKey: 'name',
            source
        });
        const expected = [source[3], source[2], source[0], source[1]];
        expect(result).toEqual(expected);
    });

    test('sortArray (descending)', () => {
        const result = sortArray({
            sortDirection: 'desc',
            sortKey: 'name',
            source
        });
        const expected = [source[1], source[0], source[2], source[3]];
        expect(result).toEqual(expected);
    });

    test('sortArray (with a null element)', () => {
        const result = sortArray({
            sortDirection: 'desc',
            sortKey: 'name',
            source: [null, ...source]
        });
        const expected = [source[1], source[0], source[2], source[3], null];
        expect(result).toEqual(expected);
    });

    test('sortArray (with two null elements)', () => {
        const result = sortArray({
            sortDirection: 'desc',
            sortKey: 'name',
            source: [null, ...source, null]
        });
        const expected = [source[1], source[0], source[2], source[3], null, null];
        expect(result).toEqual(expected);
    });
});

describe('filterArray', () => {
    const source = [
        { name: 'Andrés' },
        { name: 'León' },
        { name: 'Ana' },
        { name: 'Juan' }
    ];

    test('filterArray (null source)', () => {
        const result = filterArray({
            source: null
        });
        const expected = null;
        expect(result).toEqual(expected);
    });

    test('filterArray (simple filter)', () => {
        const result = filterArray({
            filterKey: 'name',
            filterValue: 'J',
            source
        });
        const expected = [source[3]];
        expect(result).toEqual(expected);
    });

    test('filterArray (case insensitive)', () => {
        const result = filterArray({
            filterKey: 'name',
            filterValue: 'a',
            source
        });
        const expected = [source[0], source[2], source[3]];
        expect(result).toEqual(expected);
    });

    test('filterArray (accent insensitive)', () => {
        const result = filterArray({
            filterKey: 'name',
            filterValue: 'é',
            source
        });
        const expected = [source[0], source[1]];
        expect(result).toEqual(expected);
    });

    test('filterArray (null filter)', () => {
        const result = filterArray({
            filterKey: 'name',
            filterValue: null,
            source
        });
        const expected = source;
        expect(result).toEqual(expected);
    });

    test('filterArray (with a null element)', () => {
        const result = filterArray({
            filterKey: 'name',
            filterValue: 'J',
            source: [null, ...source]
        });
        const expected = [source[3]];
        expect(result).toEqual(expected);
    });
});

describe('paginateArray', () => {
    const source = [
        { a: 1, b: 'A' },
        { a: 2, b: 'BA' },
        { a: 3, b: 'CBA' },
        { a: 4, b: 'DCBA' },
        { a: 5, b: 'EDCBA' }
    ];

    test('paginateArray (null source)', () => {
        const result = paginateArray({
            source: null
        });
        const expected = null;
        expect(result).toEqual(expected);
    });

    test('paginateArray (default sortDirection=asc and pageNumber = 1)', () => {
        const result = paginateArray({
            pageSize: 3,
            sortKey: 'a',
            source
        });
        const expected = [source[0], source[1], source[2]];
        expect(result).toEqual(expected);
    });

    test('paginateArray (unexisting sortKey)', () => {
        const result = paginateArray({
            pageSize: 2,
            sortKey: 'c',
            source
        });
        const expected = [source[0], source[1]];
        expect(result).toEqual(expected);
    });

    test('paginateArray (sort descending and complex page number)', () => {
        const result = paginateArray({
            pageNumber: 2,
            pageSize: 2,
            sortDirection: 'desc',
            sortKey: 'b',
            source
        });
        const expected = [source[2], source[1]];
        expect(result).toEqual(expected);
    });

    test('paginateArray (without sortKey)', () => {
        const result = paginateArray({
            pageNumber: 2,
            pageSize: 2,
            source
        });
        const expected = [source[2], source[3]];
        expect(result).toEqual(expected);
    });
});

describe('groupArray', () => {
    test('groupArray (empty source)', () => {
        const result = groupArray({
            groupKey: 'a',
            source: []
        });
        const expected = [];
        expect(result).toEqual(expected);
    });

    test('groupArray (no empty array)', () => {
        const source = [
            { a: 'uno', b: 'A' },
            { a: 'uno', b: 'BA' },
            { a: 'dos', b: 'CBA' },
            { a: 'dos', b: 'DCBA' },
            { a: 'dos', b: 'EDCBA' }
        ];
        const result = groupArray({
            groupKey: 'a',
            source
        });
        const expected = [{
            groupKey: 'uno',
            items: [
                { a: 'uno', b: 'A' },
                { a: 'uno', b: 'BA' }
            ]
        }, {
            groupKey: 'dos',
            items: [
                { a: 'dos', b: 'CBA' },
                { a: 'dos', b: 'DCBA' },
                { a: 'dos', b: 'EDCBA' }
            ]
        }];
        expect(result).toEqual(expected);
    });

    test('groupArray (with null elements)', () => {
        const source = [
            { a: 'uno', b: 'A' },
            null,
            { a: 'uno', b: 'BA' },
            null,
            { a: 'dos', b: 'CBA' },
            null,
            { a: 'dos', b: 'DCBA' },
            null,
            { a: 'dos', b: 'EDCBA' }
        ];
        const result = groupArray({
            groupKey: 'a',
            source
        });
        const expected = [{
            groupKey: 'uno',
            items: [
                { a: 'uno', b: 'A' },
                { a: 'uno', b: 'BA' }
            ]
        }, {
            groupKey: 'dos',
            items: [
                { a: 'dos', b: 'CBA' },
                { a: 'dos', b: 'DCBA' },
                { a: 'dos', b: 'EDCBA' }
            ]
        }];
        expect(result).toEqual(expected);
    });
});

describe('getMinFromArray', () => {
    test('getMinFromArray (empty array, no passing defaultValue )', () => {
        const result = getMinFromArray({
            minKey: 'a',
            source: []
        });
        const expected = 0;
        expect(result).toEqual(expected);
    });

    test('getMinFromArray (empty array, passing defaultValue )', () => {
        const result = getMinFromArray({
            defaultValue: -1,
            minKey: 'a',
            source: []
        });
        const expected = -1;
        expect(result).toEqual(expected);
    });

    test('getMinFromArray (no empty array)', () => {
        const result = getMinFromArray({
            minKey: 'a',
            source: [
                { a: 100 },
                { a: 255 },
                { a: 200 },
                { a: 50 },
                { a: 201 }
            ]
        });
        const expected = 50;
        expect(result).toEqual(expected);
    });

    test('getMinFromArray (with a null element)', () => {
        const result = getMinFromArray({
            minKey: 'a',
            source: [
                null,
                { a: 100 },
                { a: 255 },
                { a: 200 },
                { a: 50 },
                { a: 201 }
            ]
        });
        const expected = 50;
        expect(result).toEqual(expected);
    });
});

describe('getMaxFromArray', () => {
    test('getMaxFromArray (empty array, no passing defaultValue )', () => {
        const result = getMaxFromArray({
            maxKey: 'a',
            source: []
        });
        const expected = 0;
        expect(result).toEqual(expected);
    });

    test('getMaxFromArray (empty array, passing defaultValue )', () => {
        const result = getMaxFromArray({
            defaultValue: -1,
            maxKey: 'a',
            source: []
        });
        const expected = -1;
        expect(result).toEqual(expected);
    });

    test('getMaxFromArray (no empty array)', () => {
        const result = getMaxFromArray({
            maxKey: 'a',
            source: [
                { a: 100 },
                { a: 255 },
                { a: 200 },
                { a: 50 },
                { a: 201 }
            ]
        });
        const expected = 255;
        expect(result).toEqual(expected);
    });

    test('getMaxFromArray (with a null element)', () => {
        const result = getMaxFromArray({
            maxKey: 'a',
            source: [
                null,
                { a: 100 },
                { a: 255 },
                { a: 200 },
                { a: 50 },
                { a: 201 }
            ]
        });
        const expected = 255;
        expect(result).toEqual(expected);
    });
});
