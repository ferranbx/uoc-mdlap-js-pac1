const giveChange = (price, paid, till) => {

    // Given a price input, ensure it is a valid format (number)
    if(!price || typeof price !== "number") { return Error('Invalid price input format') };

    // Given a paid input, ensure it is a valid format (number)
    if(!paid || typeof paid !== "number") { return Error('Invalid paid input format') };

    // Given a status input, ensure it is a valid format (bidimensional array)
    if(!till || Array.isArray(till) === false || Array.isArray(till[0]) === false || till[0].length !== 2 || typeof till[0][0] !== "string" || typeof till[0][1] !== "number") { return Error('Invalid till status input format') };

    // Given a price amount and a paid amount, then the change amount shall be computed
    let changeAmount = Math.floor((paid - price)*100)/100;    
    
    // Given a till, when the total amount in the till is less than the change to return, then return "Insufficient Funds"
    let originalTillCash = totalCash(till);
    if( changeAmount > originalTillCash ) { return {
        'status': 'INSUFFICIENT_FUNDS',
        'change': []
    }};

    // Given a till with enough cash, then calculate the change
    let change = calculateChange(changeAmount, till);
    console.log(`change amount: ${changeAmount}`);
    console.log(`change: ${change}`);


    if(!change || change.length === 0) { return {
        'status': 'INSUFFICIENT_FUNDS',
        'change': []
    }};

    if( changeAmount === originalTillCash ) { return {
        'status': 'CLOSE',
        'change': change
    }};

    return {
        'status': 'OPEN',
        'change': change
    };

};

const totalCash = (till) => {

    // Given a till status, then evaluate the format (bidimensional array with each element being a currency formed by a string and the total available)
    if(!till || Array.isArray(till) === false || Array.isArray(till[0]) === false || till[0].length !== 2 || typeof till[0][0] !== "string" || typeof till[0][1] !== "number") { return Error('Invalid till status input format') };

    // Given a valid till status, sum all the cash available (stored on the second field of every currency type)
    let total = 0;
    till.forEach(currencyItem => {
        total += currencyItem[1];
    });

    return total;

}

const calculateChange = (changeAmount, till) => {

    let change = [];

    if( changeAmount === 0 ) { return change };

    till.forEach(currencyItem => {

        let currencyName = currencyItem[0];
        let currencyAmount = currencyItem[1];
        let currencyValue = currencyItemValue(currencyName);
        let quantity = Math.floor(Math.min(currencyAmount,changeAmount)/currencyValue);        

        if( quantity ) {
            let returnAmount = quantity * currencyValue;
            currencyItem[1] -= returnAmount;
            changeAmount = Math.floor( ( changeAmount - returnAmount) * 100)/100;
            change.push([currencyName,returnAmount]);
        }

    });

    if( changeAmount === 0 ) { return change };
    return [];

}

const currencyItemValue = (currencyItem) => {
    let amount = currencyItem.match(/\d*/)[0];
    switch (currencyItem.match(/[a-z,A-Z]+/)[0]) {
        case "EURO":
            return amount;

        case "EUROS":
            return amount;

        case "CENT":
            return amount/100;

        case "CENTS":
            return amount/100;
    
        default:
            return 0;
    }
}

export default giveChange;