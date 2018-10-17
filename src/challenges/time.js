const formatTime = (unformated) => {

    // DETECT EMPTY STRINGS
    if(!unformated) { return Error('Empty input') };

    // DETECT INVALID INPUT
    if(typeof unformated !== "number") { return Error('Invalid input') };

    // FORMAT
    const hours = Math.floor(unformated/60);
    const minutes = unformated - hours * 60;

    return `${atLeast2Digits(hours)}:${atLeast2Digits(minutes)}`;
};

const atLeast2Digits = (num) => {
    if(num<10) { return '0' + num }
    else{ return num.toString() }
}

export default formatTime;