export type Key = {
    appearance: string;
    mathFunction: string;
    isOperation: boolean;
};

export const EMPTY: Key = {
    appearance: "",
    mathFunction: "",
    isOperation: false,
};

export const ONE: Key = {
    appearance: "1",
    mathFunction: "1",
    isOperation: false,
};

export const TWO: Key = {
    appearance: "2",
    mathFunction: "2",
    isOperation: false,
};

export const THREE: Key = {
    appearance: "3",
    mathFunction: "3",
    isOperation: false,
};

export const FOUR: Key = {
    appearance: "4",
    mathFunction: "4",
    isOperation: false,
};

export const FIVE: Key = {
    appearance: "5",
    mathFunction: "5",
    isOperation: false,
};

export const SIX: Key = {
    appearance: "6",
    mathFunction: "6",
    isOperation: false,
};

export const SEVEN: Key = {
    appearance: "7",
    mathFunction: "7",
    isOperation: false,
};

export const EIGHT: Key = {
    appearance: "8",
    mathFunction: "8",
    isOperation: false,
};

export const NINE: Key = {
    appearance: "9",
    mathFunction: "9",
    isOperation: false,
};

export const ZERO: Key = {
    appearance: "0",
    mathFunction: "0",
    isOperation: false,
};

export const PLUS: Key = {
    appearance: " + ",
    mathFunction: "+",
    isOperation: true,
};

export const MINUS: Key = {
    appearance: " - ",
    mathFunction: "-",
    isOperation: true,
};

export const TIMES: Key = {
    appearance: " x ",
    mathFunction: "*",
    isOperation: true,
};

export const COMMA: Key = {
    appearance: ",",
    mathFunction: ".",
    isOperation: true,
};

export const DIVIDE: Key = {
    appearance: " ÷ ",
    mathFunction: "/",
    isOperation: true,
};

export const PERCENT: Key = {
    appearance: " % ",
    mathFunction: "/100",
    isOperation: false,
};

export const NEGATE: Key = {
    appearance: " +/- ",
    mathFunction: "*-1",
    isOperation: false,
};
