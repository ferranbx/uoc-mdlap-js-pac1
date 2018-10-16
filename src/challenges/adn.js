const pairChain = (chain) => {
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
}

export default pairChain;