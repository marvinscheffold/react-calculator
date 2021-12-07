import { ReactElement } from "react";

export type Key = {
    id: string;
    appearance: ReactElement;
    mathFunction: string;
    isOperation: boolean;
    canBePressedFirst: boolean;
    keyboardOperations: string[];
};

export const TEMPLATE: Key = {
    id: "TEMPLATE",
    appearance: <span></span>,
    mathFunction: "",
    isOperation: false,
    canBePressedFirst: true,
    keyboardOperations: [],
};

export const ONE: Key = {
    id: "ONE",
    appearance: <span>1</span>,
    mathFunction: "1",
    isOperation: false,
    canBePressedFirst: true,
    keyboardOperations: ["1"],
};

export const TWO: Key = {
    id: "TWO",
    appearance: <span>2</span>,
    mathFunction: "2",
    isOperation: false,
    canBePressedFirst: true,
    keyboardOperations: ["2"],
};

export const THREE: Key = {
    id: "THREE",
    appearance: <span>3</span>,
    mathFunction: "3",
    isOperation: false,
    canBePressedFirst: true,
    keyboardOperations: ["3"],
};

export const FOUR: Key = {
    id: "FOUR",
    appearance: <span>4</span>,
    mathFunction: "4",
    isOperation: false,
    canBePressedFirst: true,
    keyboardOperations: ["4"],
};

export const FIVE: Key = {
    id: "FIVE",
    appearance: <span>5</span>,
    mathFunction: "5",
    isOperation: false,
    canBePressedFirst: true,
    keyboardOperations: ["5"],
};

export const SIX: Key = {
    id: "SIX",
    appearance: <span>6</span>,
    mathFunction: "6",
    isOperation: false,
    canBePressedFirst: true,
    keyboardOperations: ["6"],
};

export const SEVEN: Key = {
    id: "SEVEN",
    appearance: <span>7</span>,
    mathFunction: "7",
    isOperation: false,
    canBePressedFirst: true,
    keyboardOperations: ["7"],
};

export const EIGHT: Key = {
    id: "EIGHT",
    appearance: <span>8</span>,
    mathFunction: "8",
    isOperation: false,
    canBePressedFirst: true,
    keyboardOperations: ["8"],
};

export const NINE: Key = {
    id: "NINE",
    appearance: <span>9</span>,
    mathFunction: "9",
    isOperation: false,
    canBePressedFirst: true,
    keyboardOperations: ["9"],
};

export const ZERO: Key = {
    id: "ZERO",
    appearance: <span>0</span>,
    mathFunction: "0",
    isOperation: false,
    canBePressedFirst: true,
    keyboardOperations: ["0"],
};

export const E_NOTATION: Key = {
    id: "E_NOTATION",
    appearance: <span>e</span>,
    mathFunction: "e",
    isOperation: false,
    canBePressedFirst: false,
    keyboardOperations: [],
};

export const PLUS: Key = {
    id: "PLUS",
    appearance: <i className="fas fa-plus"></i>,
    mathFunction: "+",
    isOperation: true,
    canBePressedFirst: false,
    keyboardOperations: ["+"],
};

export const MINUS: Key = {
    id: "MINUS",
    appearance: <i className="fas fa-minus"></i>,
    mathFunction: "-",
    isOperation: true,
    canBePressedFirst: true,
    keyboardOperations: ["-"],
};

export const TIMES: Key = {
    id: "TIMES",
    appearance: <i className="fas fa-times"></i>,
    mathFunction: "*",
    isOperation: true,
    canBePressedFirst: false,
    keyboardOperations: ["*"],
};

export const COMMA: Key = {
    id: "COMMA",
    appearance: <span>,</span>,
    mathFunction: ".",
    isOperation: true,
    canBePressedFirst: false,
    keyboardOperations: [",", "."],
};

export const DIVIDE: Key = {
    id: "DIVIDE",
    appearance: <i className="fas fa-divide"></i>,
    mathFunction: "/",
    isOperation: true,
    canBePressedFirst: false,
    keyboardOperations: ["shift+7"],
};

export const PERCENT: Key = {
    id: "PERCENT",
    appearance: <i className="fas fa-percent"></i>,
    mathFunction: "/100",
    isOperation: false,
    canBePressedFirst: false,
    keyboardOperations: ["shift+5"],
};

export const NEGATE: Key = {
    id: "NEGATE",
    appearance: (
        <>
            <i className="fas fa-times"></i>
            <i className="fas fa-minus"></i>
            <span>1</span>
        </>
    ),
    mathFunction: "*-1",
    isOperation: false,
    canBePressedFirst: false,
    keyboardOperations: ["shift+1"],
};

export const BACKSPACE: Key = {
    id: "BACKSPACE",
    appearance: <i className="fas fa-undo"></i>,
    mathFunction: "",
    isOperation: true,
    canBePressedFirst: false,
    keyboardOperations: ["backspace"],
};

export const EQUALS: Key = {
    id: "EQUALS",
    appearance: <i className="fas fa-equals"></i>,
    mathFunction: "",
    isOperation: true,
    canBePressedFirst: false,
    keyboardOperations: ["shift+0", "enter"],
};

export const ALL_CLEAR: Key = {
    id: "ALL_CLEAR",
    appearance: <span>AC</span>,
    mathFunction: "",
    isOperation: true,
    canBePressedFirst: false,
    keyboardOperations: ["esc"],
};

export const ANS: Key = {
    id: "ANS",
    appearance: <span>Ans = 0</span>,
    mathFunction: "0",
    isOperation: false,
    canBePressedFirst: true,
    keyboardOperations: [""],
};
