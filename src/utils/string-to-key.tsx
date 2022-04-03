import * as keys from "./keys";
import { Key, SOLUTION, ANS } from "./keys";
import React, { ReactElement } from "react";

/**
 * Takes string like '-20,321' or 'Infinity' and returns a Key object
 * Which looks like that and mathematically behaves like that
 * @param string
 */
export const stringToSolutionKey = (solution: string): Key => {
    let appearanceReactElements: ReactElement[] = [];
    let mathFunctions: string[] = [];

    const createReturnable = (
        appearanceReactElements: ReactElement[],
        mathFunctions: string[]
    ): Key => {
        let returnable = { ...SOLUTION };
        returnable.appearance = <>{appearanceReactElements}</>;
        returnable.mathFunction = mathFunctions.join("");

        return returnable;
    };

    // First check if whole solution matches a key
    for (const [, key] of Object.entries(keys)) {
        if (key.mathFunction === solution && key.canBeInSolution) {
            appearanceReactElements.push(
                React.cloneElement(key.appearance, { key: key.id })
            );
            mathFunctions.push(key.mathFunction);
            return createReturnable(appearanceReactElements, mathFunctions);
        }
    }

    // Otherwise create solution key out of every single char of solution
    const chars = solution.split("");
    chars.forEach((char, index) => {
        for (const [, key] of Object.entries(keys)) {
            if (key.mathFunction === char && key.canBeInSolution) {
                appearanceReactElements.push(
                    React.cloneElement(key.appearance, { key: index + key.id })
                );
                mathFunctions.push(key.mathFunction);
            }
        }
    });

    return createReturnable(appearanceReactElements, mathFunctions);
};

export const stringToAnsKey = (string: string): Key => {
    let returnable = { ...ANS };
    returnable.mathFunction = string;
    return returnable;
};
