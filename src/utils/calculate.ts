import { Key } from "./keys";
import * as keys from "./keys";

export const calculate = (pressedKeys: Key[]): string => {
    let solution = "";
    let currentNumber = "";
    let nextNumber = "";

    pressedKeys.forEach((key) => {
        if (!key.isOperation) {
            solution += key.mathFunction;
        } else {
            switch (key.id) {
                case keys.MINUS.id:
                    
                    break;
                case keys.PLUS.id:
                    break;
            }
        }
    });

    return "";
};
