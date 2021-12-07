import { ReactElement } from "react";

export type Key = {
    id: string;
    appearance: ReactElement;
    mathFunction: string;
    isMathOperation: boolean;
    canComeFirst: boolean;
    /* Can it be the last key in array when solution is calculated? */
    canComeLast: boolean;
    canBeInSolution: boolean;
    keyboardOperations: string[];
};

export const SOLUTION: Key = {
    id: "SOLUTION",
    appearance: <span></span>,
    mathFunction: "",
    isMathOperation: false,
    canComeFirst: true,
    canComeLast: true,
    /* False because solution key cannot be inside itself */
    canBeInSolution: false,
    keyboardOperations: [],
};

export const ONE: Key = {
    id: "ONE",
    appearance: <span>1</span>,
    mathFunction: "1",
    isMathOperation: false,
    canComeFirst: true,
    canComeLast: true,
    canBeInSolution: true,
    keyboardOperations: ["1"],
};

export const TWO: Key = {
    id: "TWO",
    appearance: <span>2</span>,
    mathFunction: "2",
    isMathOperation: false,
    canComeFirst: true,
    canComeLast: true,
    canBeInSolution: true,
    keyboardOperations: ["2"],
};

export const THREE: Key = {
    id: "THREE",
    appearance: <span>3</span>,
    mathFunction: "3",
    isMathOperation: false,
    canComeFirst: true,
    canComeLast: true,
    canBeInSolution: true,
    keyboardOperations: ["3"],
};

export const FOUR: Key = {
    id: "FOUR",
    appearance: <span>4</span>,
    mathFunction: "4",
    isMathOperation: false,
    canComeFirst: true,
    canComeLast: true,
    canBeInSolution: true,
    keyboardOperations: ["4"],
};

export const FIVE: Key = {
    id: "FIVE",
    appearance: <span>5</span>,
    mathFunction: "5",
    isMathOperation: false,
    canComeFirst: true,
    canComeLast: true,
    canBeInSolution: true,
    keyboardOperations: ["5"],
};

export const SIX: Key = {
    id: "SIX",
    appearance: <span>6</span>,
    mathFunction: "6",
    isMathOperation: false,
    canComeFirst: true,
    canComeLast: true,
    canBeInSolution: true,
    keyboardOperations: ["6"],
};

export const SEVEN: Key = {
    id: "SEVEN",
    appearance: <span>7</span>,
    mathFunction: "7",
    isMathOperation: false,
    canComeFirst: true,
    canComeLast: true,
    canBeInSolution: true,
    keyboardOperations: ["7"],
};

export const EIGHT: Key = {
    id: "EIGHT",
    appearance: <span>8</span>,
    mathFunction: "8",
    isMathOperation: false,
    canComeFirst: true,
    canComeLast: true,
    canBeInSolution: true,
    keyboardOperations: ["8"],
};

export const NINE: Key = {
    id: "NINE",
    appearance: <span>9</span>,
    mathFunction: "9",
    isMathOperation: false,
    canComeFirst: true,
    canComeLast: true,
    canBeInSolution: true,
    keyboardOperations: ["9"],
};

export const ZERO: Key = {
    id: "ZERO",
    appearance: <span>0</span>,
    mathFunction: "0",
    isMathOperation: false,
    canComeFirst: true,
    canComeLast: true,
    canBeInSolution: true,
    keyboardOperations: ["0"],
};

export const E_NOTATION: Key = {
    id: "E_NOTATION",
    appearance: <span>e</span>,
    mathFunction: "e",
    isMathOperation: false,
    canComeFirst: false,
    canComeLast: false,
    canBeInSolution: true,
    keyboardOperations: [],
};

export const PLUS: Key = {
    id: "PLUS",
    appearance: <i className="fas fa-plus"></i>,
    mathFunction: "+",
    isMathOperation: true,
    canComeFirst: false,
    canComeLast: false,
    canBeInSolution: true,
    keyboardOperations: ["+"],
};

export const MINUS: Key = {
    id: "MINUS",
    appearance: <i className="fas fa-minus"></i>,
    mathFunction: "-",
    isMathOperation: true,
    canComeFirst: true,
    canComeLast: false,
    canBeInSolution: true,
    keyboardOperations: ["-"],
};

export const TIMES: Key = {
    id: "TIMES",
    appearance: <i className="fas fa-times"></i>,
    mathFunction: "*",
    isMathOperation: true,
    canComeFirst: false,
    canComeLast: false,
    canBeInSolution: false,
    keyboardOperations: ["*"],
};

export const DIVIDE: Key = {
    id: "DIVIDE",
    appearance: <i className="fas fa-divide"></i>,
    mathFunction: "/",
    isMathOperation: true,
    canComeFirst: false,
    canComeLast: false,
    canBeInSolution: false,
    keyboardOperations: ["shift+7"],
};

export const PERCENT: Key = {
    id: "PERCENT",
    appearance: <i className="fas fa-percent"></i>,
    mathFunction: "/100",
    isMathOperation: true,
    canComeFirst: false,
    canComeLast: true,
    canBeInSolution: false,
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
    isMathOperation: true,
    canComeFirst: false,
    canComeLast: true,
    canBeInSolution: false,
    keyboardOperations: ["shift+1"],
};

export const COMMA: Key = {
    id: "COMMA",
    appearance: <span>,</span>,
    mathFunction: ".",
    isMathOperation: false,
    canComeFirst: false,
    canComeLast: false,
    canBeInSolution: true,
    keyboardOperations: [",", "."],
};

export const BACKSPACE: Key = {
    id: "BACKSPACE",
    appearance: <i className="fas fa-undo"></i>,
    mathFunction: "",
    isMathOperation: false,
    canComeFirst: false,
    canComeLast: false,
    canBeInSolution: false,
    keyboardOperations: ["backspace"],
};

export const EQUALS: Key = {
    id: "EQUALS",
    appearance: <i className="fas fa-equals"></i>,
    mathFunction: "",
    isMathOperation: true,
    canComeFirst: false,
    canComeLast: true,
    canBeInSolution: false,
    keyboardOperations: ["shift+0", "enter"],
};

export const ALL_CLEAR: Key = {
    id: "ALL_CLEAR",
    appearance: <span>AC</span>,
    mathFunction: "",
    isMathOperation: false,
    canComeFirst: false,
    canComeLast: false,
    canBeInSolution: false,
    keyboardOperations: ["esc"],
};

export const ANS: Key = {
    id: "ANS",
    appearance: <span>Ans = 0</span>,
    mathFunction: "0",
    isMathOperation: false,
    canComeFirst: true,
    canComeLast: true,
    canBeInSolution: false,
    keyboardOperations: [""],
};
