import pairChain from '../challenges/dna';

describe('DNA TESTS', () => {
    test('Should return an empty string if the original chain is empty', () => {
        expect(pairChain()).toEqual([]);
    })
    test('Should return paired chain for a short chain', () => {
        expect(pairChain("GCGA")).toEqual([["G","C"],["C","G"],["G","C"],["A","T"]]);
    })
    test('Should not be affected by lowercase letters', () => {
        expect(pairChain("AGcA")).toEqual([["A","T"],["G","C"],["C","G"],["A","T"]]);
    })
    test('Should remove the numbers or unvaild letters from the initiall array', () => {
        expect(pairChain("A G3 CA..G")).toEqual([["A","T"],["G","C"],["C","G"],["A","T"],["G","C"]]);
    })
})