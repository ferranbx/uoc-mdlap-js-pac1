import rectangleArea from '../challenges/rectangle';

describe('RECTANGLE TESTS', () => {
    test('When nothing is given, then should return error', () => {
        expect(rectangleArea()).toEqual(Error('Empty input'));
    })
    test('When the point format is not like (x y), then should return error', () => {
        expect(rectangleArea(["(0,0)","(1 1)","(0 2)","(0 2)"])).toEqual(Error('Not a rectangle'));
    })
    test('When a triangle is given, then should return error', () => {
        expect(rectangleArea(["(0 0)","(1 1)","(0 2)"])).toEqual(Error('Not a quadrilater'));
    })
    test('When a pentagon is given, then should return error', () => {
        expect(rectangleArea(["(1 0)","(1 1)","(2 2)","(4 1)","(2 1)"])).toEqual(Error('Not a quadrilater'));
    })
    test('Given a quadrilater, when it is not a rectangle, the should return error', () => {
        expect(rectangleArea(["(0 0)","(0 5)","(1 1)","(1 0)"])).toEqual(Error('Not a rectangle'));
    })
    test('When a simple square is given, then should return the area', () => {
        expect(rectangleArea(["(0 0)","(0 1)","(1 1)","(1 0)"])).toEqual(1);
    })
    test('When a simple rectangle is given, then should return the area', () => {
        expect(rectangleArea(["(1 1)","(1 3)","(3 1)","(3 3)"])).toEqual(4);
    })
    test('When a complex rectangle is given, then should return the area', () => {
        expect(rectangleArea(["(0 2)","(1 3)","(3 1)","(2 0)"])).toEqual(4.000000000000001);
    })
    test('When a complex rectangle (with decimals) is given, then should return the area', () => {
        expect(rectangleArea(["(0 0)","(5.5 0)","(5.5 2)","(0 2)"])).toEqual(11);
    })
})