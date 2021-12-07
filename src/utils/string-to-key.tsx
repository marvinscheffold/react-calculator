import * as keys from "./keys";
import { Key, SOLUTION, ANS } from "./keys";
import React from "react";

/**
 * Takes string like '-20,321' and returns a Key object
 * Which looks like that and mathematically behaves like that
 * @param string
 */
export const stringToSolutionKey = (string: string): Key => {
    const chars = string.split("");

    let appearanceReactElements = [];
    let mathFunctions = [];

    for (const [index, char] of Object.entries(chars)) {
        for (const [, key] of Object.entries(keys)) {
            if (key.mathFunction === char && key.canBeInSolution) {
                appearanceReactElements.push(
                    React.cloneElement(key.appearance, { key: index + key.id })
                );
                mathFunctions.push(key.mathFunction);
            }
        }
    }

    let returnable = { ...SOLUTION };
    returnable.appearance = <>{appearanceReactElements}</>;
    returnable.mathFunction = mathFunctions.join("");

    return returnable;
};

export const stringToAnsKey = (string: string): Key => {
    let returnable = { ...ANS };
    returnable.appearance = <span>Ans = {string}</span>;
    returnable.mathFunction = string;

    return returnable;
};
