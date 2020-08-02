// @scripts
import {
    removeTime,
    toLongDateTimeString,
    toShortDateString,
    toShortDateTimeString,
    toShortTimeString
} from '../../util';

test('toShortDateString', () => {
    const originalDate = new Date(2019, 0, 31);
    const formatedDate = toShortDateString(originalDate);
    const expectedDate = '01/31/2019';
    expect(formatedDate).toEqual(expectedDate);
});

test('toShortTimeString', () => {
    const originalTime = new Date(2018, 1, 2, 3, 4, 5);
    const formatedTime = toShortTimeString(originalTime);
    const expectedTime = '03:04:05';
    expect(formatedTime).toEqual(expectedTime);
});

test('toShortDateTimeString', () => {
    const originalTime = new Date(2018, 1, 2, 3, 4, 5);
    const formatedTime = toShortDateTimeString(originalTime);
    const expectedTime = '02/02/2018 3:04:05 am';
    expect(formatedTime).toEqual(expectedTime);
});

test('toLongDateTimeString', () => {
    const originalDate = new Date(2019, 1, 1);
    const formatedDate = toLongDateTimeString(originalDate);
    const expectedDate = 'Friday, February 1, 2019 12:00 AM';
    expect(formatedDate).toEqual(expectedDate);
});

test('removeTime', () => {
    const originalDate = new Date(2018, 1, 2, 3, 4, 5);
    const trimedDate = removeTime(originalDate);
    const expectedDate = new Date(2018, 1, 2);
    expect(trimedDate).toEqual(expectedDate);
});
