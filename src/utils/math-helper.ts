const MAX_NUMBER_OF_CHARS_IN_SOLUTION = 10;
const MAX_NUMBER_BEFORE_EXPONENTIAL = 1e9;

export const formatSolution = (solution: string): string => {
    let returnable = solution;
    returnable = roundIfNecessary(returnable);
    returnable = toExponentialIfNecessary(returnable);
    return returnable;
};

const roundIfNecessary = (solution: string): string => {
    const usable = parseFloat(solution);

    // Check if number has decimal spaces
    // If not return here
    if (usable % 1 === 0) return solution;

    const lengthBeforeDecimal = Math.round(usable).toString().length;
    const numberOfDecimalsToRoundTo = Math.max(
        MAX_NUMBER_OF_CHARS_IN_SOLUTION - lengthBeforeDecimal,
        0
    );

    return roundToDecimals(solution, numberOfDecimalsToRoundTo);
};

const toExponentialIfNecessary = (solution: string): string => {
    const usable = parseFloat(solution);

    if (usable > MAX_NUMBER_BEFORE_EXPONENTIAL) {
        const exponential = usable.toExponential(
            MAX_NUMBER_OF_CHARS_IN_SOLUTION - 4
        );
        const [beforeE, behindE] = exponential.split("e");
        const exponentialWithoutTrailingZeros =
            removeTrailingZerosAfterPeriod(beforeE) + "e" + behindE;
        return exponentialWithoutTrailingZeros;
    }
    return solution;
};

// Small helper functins

const removeTrailingZerosAfterPeriod = (number: string): string => {
    const usable = parseFloat(number);
    return usable.toString();
};

const roundToDecimals = (number: string, numberOfDecimals: number): string => {
    const usable = parseFloat(number);

    let rounded =
        Math.round(usable * Math.pow(10, numberOfDecimals)) /
        Math.pow(10, numberOfDecimals);

    return rounded.toString();
};
