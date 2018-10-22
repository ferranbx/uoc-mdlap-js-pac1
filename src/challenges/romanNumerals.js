const arabic2roman = (arabic) => {
    
    // When the input is empty, then return an empty string
    if( !arabic ) { return "" }

    // When the input is not a number, then return invalid format error
    if( typeof arabic !== "number" ) { return Error('Invalid format') };

    // When the input is 0, then return empty string
    if( arabic === 0 ) { return "" };
    
    // Define a lookup with the basic numbers. Included the substractive numbers to speed up the conversion
    const lookup = { M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1 };

    // Define string for roman number
    let roman = '';
    
    // For every key in the lookup
    for ( var key of Object.keys(lookup) ) {

        // Calculate the amount of times we could substract the keys amount from the arabic counter
        let quantity = Math.floor(arabic/lookup[key]);

        // Substract this amount from the arabic counter
        arabic -= lookup[key] * quantity;

        // Append the amount, translated, into the roman string
        roman += key.repeat(quantity);
    }

    // Return the translated string
    return roman;
}

export default arabic2roman;