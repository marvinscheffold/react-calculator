import * as keys from "./keys";
import { Key } from "./keys";

export const stringToKey = (string: string): Key => {
    for (const [, key] of Object.entries(keys)) {
        if (key.mathFunction === string) return key;
    }
    return keys.EMPTY;
};
