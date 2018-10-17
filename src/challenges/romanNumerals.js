const arabic2roman = (arabic) => {
    if( !arabic ) { return "" }
    if( typeof arabic !== "number" ) { return Error('Invalid format') };
    if( arabic === 0 ) { return "" };
    
    const lookup = { M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1 };
    let roman = '';
    
    for ( var key of Object.keys(lookup) ) {
        let quantity = Math.floor(arabic/lookup[key]);
        arabic -= lookup[key] * quantity;
        roman += key.repeat(quantity);
    }
    return roman;
}

export default arabic2roman;