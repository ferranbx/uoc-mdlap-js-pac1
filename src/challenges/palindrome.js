const isPalindrome = (str) => {

    // DETECT EMPTY INPUT
    // If the input is empty, return fals
    if(!str) { return false };

    // NOMRALIZE THE STRING
    // This regular expression allows us to select all the letters (including accents) and numbers
    // and skip the other characters, such as blank spaces or punctuation marks
    var re = /[^a-z0–9]/g;
    // 
    // (1) Lowercase. Allows us to compare capitalized letters
    // (2) Normalize. Allows us to compare letters with accents
    // (3) Replace. Remove "undesired" characters such as blank spaces or punctuation marks
    //     
    var normalizedString = str.toLowerCase().normalize('NFD').replace(re, '');

    // REVERSE STRING
    var reversedString = normalizedString.split('').reverse().join(''); 

    // COMPARE NORMALIZED AND REVERSED STRINGS
    return reversedString === normalizedString;
}

export default isPalindrome;