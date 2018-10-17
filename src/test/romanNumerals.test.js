import arabic2roman from '../challenges/romanNumerals';

describe('ROMAN NUMS TESTS', () => {
    test('Should detect invalid inputs', () => {
        expect(arabic2roman('AAA')).toEqual(Error('Invalid format'));
    })
    test('When nothing is given, then should return an empty string', () => {
        expect(arabic2roman()).toEqual("");
    });
    test('When 0 is given, then should return an empty string', () => {
        expect(arabic2roman(0)).toEqual("");
    });
    test('Should convert basic numeration', () => {
        expect(arabic2roman(1)).toEqual("I");
        expect(arabic2roman(5)).toEqual("V");
        expect(arabic2roman(10)).toEqual("X");
        expect(arabic2roman(50)).toEqual("L");
        expect(arabic2roman(100)).toEqual("C");
        expect(arabic2roman(500)).toEqual("D");
        expect(arabic2roman(1000)).toEqual("M");
    });
    test('Should convert additive numeration', () => {
        expect(arabic2roman(3)).toEqual("III");
        expect(arabic2roman(22)).toEqual("XXII");
        expect(arabic2roman(120)).toEqual("CXX");
        expect(arabic2roman(138)).toEqual("CXXXVIII");
        expect(arabic2roman(300)).toEqual("CCC");
        expect(arabic2roman(550)).toEqual("DL");
        expect(arabic2roman(2033)).toEqual("MMXXXIII");
    });
    test('Should convert substractive numeration', () => {
        expect(arabic2roman(4)).toEqual("IV");
        expect(arabic2roman(9)).toEqual("IX");
        expect(arabic2roman(19)).toEqual("XIX");
        expect(arabic2roman(45)).toEqual("XLV");
        expect(arabic2roman(449)).toEqual("CDXLIX");
        expect(arabic2roman(999)).toEqual("CMXCIX");
    });
});