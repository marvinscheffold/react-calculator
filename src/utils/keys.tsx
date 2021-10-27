import { ReactElement } from "react";

export type Key = {
    id: string;
    appearance: ReactElement;
    mathFunction: string;
    isOperation: boolean;
    canBePressedFirst: boolean;
};

export const ONE: Key = {
    id: "ONE",
    appearance: <span>1</span>,
    mathFunction: "1",
    isOperation: false,
    canBePressedFirst: true,
};

export const TWO: Key = {
    id: "TWO",
    appearance: <span>2</span>,
    mathFunction: "2",
    isOperation: false,
    canBePressedFirst: true,
};

export const THREE: Key = {
    id: "THREE",
    appearance: <span>3</span>,
    mathFunction: "3",
    isOperation: false,
    canBePressedFirst: true,
};

export const FOUR: Key = {
    id: "FOUR",
    appearance: <span>4</span>,
    mathFunction: "4",
    isOperation: false,
    canBePressedFirst: true,
};

export const FIVE: Key = {
    id: "FIVE",
    appearance: <span>5</span>,
    mathFunction: "5",
    isOperation: false,
    canBePressedFirst: true,
};

export const SIX: Key = {
    id: "SIX",
    appearance: <span>6</span>,
    mathFunction: "6",
    isOperation: false,
    canBePressedFirst: true,
};

export const SEVEN: Key = {
    id: "SEVEN",
    appearance: <span>7</span>,
    mathFunction: "7",
    isOperation: false,
    canBePressedFirst: true,
};

export const EIGHT: Key = {
    id: "EIGHT",
    appearance: <span>8</span>,
    mathFunction: "8",
    isOperation: false,
    canBePressedFirst: true,
};

export const NINE: Key = {
    id: "NINE",
    appearance: <span>9</span>,
    mathFunction: "9",
    isOperation: false,
    canBePressedFirst: true,
};

export const ZERO: Key = {
    id: "ZERO",
    appearance: <span>0</span>,
    mathFunction: "0",
    isOperation: false,
    canBePressedFirst: true,
};

export const PLUS: Key = {
    id: "PLUS",
    appearance: <i className="fas fa-plus"></i>,
    mathFunction: "+",
    isOperation: true,
    canBePressedFirst: false,
};

export const MINUS: Key = {
    id: "MINUS",
    appearance: <i className="fas fa-minus"></i>,
    mathFunction: "-",
    isOperation: true,
    canBePressedFirst: false,
};

export const TIMES: Key = {
    id: "TIMES",
    appearance: <i className="fas fa-times"></i>,
    mathFunction: "*",
    isOperation: true,
    canBePressedFirst: false,
};

export const COMMA: Key = {
    id: "COMMA",
    appearance: <span>,</span>,
    mathFunction: ".",
    isOperation: true,
    canBePressedFirst: false,
};

export const DIVIDE: Key = {
    id: "DIVIDE",
    appearance: <i className="fas fa-divide"></i>,
    mathFunction: "/",
    isOperation: true,
    canBePressedFirst: false,
};

export const PERCENT: Key = {
    id: "PERCENT",
    appearance: <i className="fas fa-percent"></i>,
    mathFunction: "/100",
    isOperation: false,
    canBePressedFirst: false,
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
};
