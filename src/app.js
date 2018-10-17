import arabic2roman from './challenges/romanNumerals';
let arabics = [1,2,3,4,5,6,7,8,9,10,44,444,9999];
arabics.map(arabic => {
    console.log(`${arabic} => ${arabic2roman(arabic)}`);
});
