import formatTime from '../challenges/time';

describe('TIME TESTS', () => {
    test('Shall detect unvalid format', () => {
        expect(formatTime("")).toEqual(Error('Empty input'));
        expect(formatTime("a")).toEqual(Error('Invalid input'));
    });
    test('Shall convert minutes', () => {
        expect(formatTime(1)).toEqual("00:01");
        expect(formatTime(5)).toEqual("00:05");
        expect(formatTime(25)).toEqual("00:25");
        expect(formatTime(43)).toEqual("00:43");
        expect(formatTime(59)).toEqual("00:59");
    });
    test('Shall convert hours', () => {
        expect(formatTime(60)).toEqual("01:00");
        expect(formatTime(75)).toEqual("01:15");
        expect(formatTime(155)).toEqual("02:35");
        expect(formatTime(800)).toEqual("13:20");
        expect(formatTime(2000)).toEqual("33:20");
    });
})