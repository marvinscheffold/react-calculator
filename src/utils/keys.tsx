import { ReactElement } from "react";

export type Key = {
    appearance: ReactElement;
    mathFunction: string;
    isOperation: boolean;
    canBePressedFirst: boolean;
};

export const EMPTY: Key = {
    appearance: <span></span>,
    mathFunction: "",
    isOperation: true,
    canBePressedFirst: true,
};

export const ONE: Key = {
    appearance: <span>1</span>,
    mathFunction: "1",
    isOperation: false,
    canBePressedFirst: true,
};

export const TWO: Key = {
    appearance: <span>2</span>,
    mathFunction: "2",
    isOperation: false,
    canBePressedFirst: true,
};

export const THREE: Key = {
    appearance: <span>3</span>,
    mathFunction: "3",
    isOperation: false,
    canBePressedFirst: true,
};

export const FOUR: Key = {
    appearance: <span>4</span>,
    mathFunction: "4",
    isOperation: false,
    canBePressedFirst: true,
};

export const FIVE: Key = {
    appearance: <span>5</span>,
    mathFunction: "5",
    isOperation: false,
    canBePressedFirst: true,
};

export const SIX: Key = {
    appearance: <span>6</span>,
    mathFunction: "6",
    isOperation: false,
    canBePressedFirst: true,
};

export const SEVEN: Key = {
    appearance: <span>7</span>,
    mathFunction: "7",
    isOperation: false,
    canBePressedFirst: true,
};

export const EIGHT: Key = {
    appearance: <span>8</span>,
    mathFunction: "8",
    isOperation: false,
    canBePressedFirst: true,
};

export const NINE: Key = {
    appearance: <span>9</span>,
    mathFunction: "9",
    isOperation: false,
    canBePressedFirst: true,
};

export const ZERO: Key = {
    appearance: <span>0</span>,
    mathFunction: "0",
    isOperation: false,
    canBePressedFirst: true,
};

export const PLUS: Key = {
    appearance: <i className="fas fa-plus"></i>,
    mathFunction: "+",
    isOperation: true,
    canBePressedFirst: false,
};

export const MINUS: Key = {
    appearance: <i className="fas fa-minus"></i>,
    mathFunction: "-",
    isOperation: true,
    canBePressedFirst: false,
};

export const TIMES: Key = {
    appearance: <i className="fas fa-times"></i>,
    mathFunction: "*",
    isOperation: true,
    canBePressedFirst: false,
};

export const COMMA: Key = {
    appearance: <span>,</span>,
    mathFunction: ".",
    isOperation: true,
    canBePressedFirst: false,
};

export const DIVIDE: Key = {
    appearance: <i className="fas fa-divide"></i>,
    mathFunction: "/",
    isOperation: true,
    canBePressedFirst: false,
};

export const PERCENT: Key = {
    appearance: <i className="fas fa-percent"></i>,
    mathFunction: "/100",
    isOperation: false,
    canBePressedFirst: false,
};

export const NEGATE: Key = {
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
