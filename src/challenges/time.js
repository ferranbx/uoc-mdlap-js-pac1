const formatTime = (unformated) => {

    // When the input is empty, then return empty input error
    if(!unformated) { return Error('Empty input') };

    // When the input is not a number, then return invalid format error
    if(typeof unformated !== "number") { return Error('Invalid input') };

    // Given the input times in minutes, then hours and minutes shall be computed
    const hours = Math.floor(unformated/60);
    const minutes = unformated - hours * 60;

    return `${atLeast2Digits(hours)}:${atLeast2Digits(minutes)}`;
};

const atLeast2Digits = (num) => {
    // Given a single digit number, then we append a 0 digit to make it two digit string
    // otherwise, we just return the number as an string
    return num<10 ? '0' + num : num.toString();
}

export default formatTime;