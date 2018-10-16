import isPalindrome from '../challenges/palindrome';

test('Should return false on empty input', () => {
    expect(isPalindrome("")).toBeFalsy();
})

test('Should return true with a simple palindrome', () => {
    expect(isPalindrome("asdsa")).toBeTruthy();
})

test('Should return true with a complex palindrome (with numbers)', () => {
    expect(isPalindrome("2de5r5ed2")).toBeTruthy();
})

test('Should return true with a complex palindrome (with punctuation marks)', () => {
    expect(isPalindrome("as..ds a")).toBeTruthy();
})

test('Should return true with a long palindrome expression', () => {
    expect(isPalindrome("Dábale arroz a la zorra el abad")).toBeTruthy();
})