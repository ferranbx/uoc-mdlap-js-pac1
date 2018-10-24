import giveChange from './challenges/till';

const price = 50.5;
const paid = 60;
const till = [
    ["1CENTIMO", 1.01],
    ["10CENTIMOS", 3.10],
    ["25CENTIMOS", 4.25],
    ["1EURO", 20],
    ["5EUROS", 25],
    ["10ERUOS", 60],
    ["20EUROS", 60],
    ["50EUROS", 100]
];

console.log(giveChange(price, paid, till));

