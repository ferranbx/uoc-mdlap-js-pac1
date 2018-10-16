import pairChain from '../challenges/adn';

describe('ADN TESTS', () => {
    test('Should return paired chain for a short chain', () => {
        expect(pairChain("GCGA")).toEqual([["G","C"],["C","G"],["G","C"],["A","T"]]);
    })
    test('Should return paired chain for a short chain', () => {
        expect(pairChain("AGCA")).toEqual([["A","T"],["G","C"],["C","G"],["A","T"]]);
    })
    test('Should return paired chain for a short chain', () => {
        expect(pairChain("AG3CA")).toEqual([["A","T"],["G","C"],["C","G"],["A","T"]]);
    })
})