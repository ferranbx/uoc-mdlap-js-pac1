const pairChain = (chain) => {

    // DETECT EMPTY INPUT
    // If the input is empty, return false
    if(!chain) { return [] }

    // NORMALIZE AND PAIR
    // DNA can only contain 4 types of nucleotides. They are cytosine [C], guanine [G], adenine [A] and thymine [T].
    // Adenine pairs with Thymine and Guanine pairs with Cytosine forming the A-T base pairs and G-C base pairs.
    // (1) Uppercase: to avoid upper-lowercase conflicts.
    // (2) Match Regular Expression: to sort only the valid characters. This will return an arrey with all the nucleotides.
    // (3) Pairing: switchs the nucleotides to return the array of pairs.
    const regex = /(A|T|G|C)/g;
    return chain.toUpperCase().match(regex).map((nucleotide) => {
        switch (nucleotide) {
            case "A":
                return ["A","T"];
            case "A":
                return ["T","A"];
            case "G":
                return ["G","C"];
            case "C":
                return ["C","G"];
            default:
                return undefined;
        }
    });

};

export default pairChain;