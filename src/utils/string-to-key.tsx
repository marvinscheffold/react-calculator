import * as keys from "./keys";
import { Key, TEMPLATE } from "./keys";
import React from "react";

/**
 * Takes string like '-20,321' and returns a Key object
 * Which looks like that and mathematically behaves like that
 * @param string
 */
export const stringToKey = (string: string): Key => {
    const chars = string.split("");

    let appearanceReactElements = [];
    let mathFunctions = [];

    for (const char of chars) {
        for (const [, key] of Object.entries(keys)) {
            if (key.mathFunction === char) {
                appearanceReactElements.push(
                    React.cloneElement(key.appearance, { key: Math.random() })
                );
                mathFunctions.push(key.mathFunction);
            }
        }
    }

    let returnable = { ...TEMPLATE };
    returnable.appearance = <>{appearanceReactElements}</>;
    returnable.mathFunction = mathFunctions.join("");

    return returnable;
};
