import giveChange from '../challenges/till';

describe('TILL TESTS', () => {
    test('Shall detect insufficient funds', () => {
        const price = 50.5;
        const paid = 60;
        const till = [
            ["1CENT", 1.01],
            ["10CENTS", 3.10],
            ["25CENTS", 4.25],
            ["1EURO", 20],
            ["5EUROS", 25],
            ["10ERUOS", 60],
            ["20EUROS", 60],
            ["50EUROS", 100]
        ];
        expect(giveChange(price, paid, till)).toEqual({
            "status": 'INSUFFICIENT_FUNDS',
            "change": []
        });
    });
    test('Shall detect not enough funds', () => {
        const price = 10.75;
        const paid = 25;
        const till = [
            ["1CENT", 1.01],
            ["10CENTS", 3.10]
        ];
        expect(giveChange(price, paid, till)).toEqual({
            "status": 'INSUFFICIENT_FUNDS',
            "change": []
        });
    });
    test('Shall detect when the change amount and the till funds are the same', () => {
        const price = 5.60;
        const paid = 10;
        const till = [
            ["1CENT", 2.00],
            ["10CENTS", 0.40],
            ["1EURO", 2]
        ];
        console.log("------------------------");
        
        expect(giveChange(price, paid, till)).toEqual({
            "status": 'CLOSE',
            "change": [
                ["1CENT", 2.00],
                ["10CENTS", 0.40],
                ["1EURO", 2]
            ]
        });
    });
    test('Shall calculate the change', () => {
        const price = 5.60;
        const paid = 6;
        const till = [
            ["1CENT", 2.00],
            ["10CENTS", 0.40],
            ["1EURO", 2]
        ];
        console.log("------------------------");
        
        expect(giveChange(price, paid, till)).toEqual({
            "status": 'OPEN',
            "change": [
                ["1CENT", 0.40]
            ]
        });
    });
})