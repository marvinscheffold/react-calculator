import { useState } from "react";

import Casing from "../casing/casing";
import { EMPTY, Key } from "../../utils/keys";

export default function Calculator() {
    const [pressedKeys, setPressedKeys] = useState<Key[]>([EMPTY]);

    const input = pressedKeys.reduce<string>((acc: string, cur: Key) => {
        return acc + cur.appearance;
    }, "");

    const solution = calculate(
        getKeysToCalculate(pressedKeys).reduce<string>((acc: string, cur) => {
            return acc + cur.mathFunction;
        }, "")
    );

    return (
        <Casing
            addKey={(key: Key) =>
                setPressedKeys(getNextPressedKeys(pressedKeys, key))
            }
            deleteLastKey={() => setPressedKeys(deleteLastKey(pressedKeys))}
            allClear={() => setPressedKeys([EMPTY])}
            equal={() =>
                setPressedKeys([
                    { ...EMPTY, appearance: solution, mathFunction: solution },
                ])
            }
            input={input}
            solution={solution}
        />
    );
}

const calculate = (calculatable: string) => {
    return Function(`"use strict";return ${calculatable}`)();
};

const deleteLastKey = (pressedKeys: Key[]): Key[] => {
    let nextPressedKeys = [...pressedKeys];
    if (pressedKeys.length > 1) {
        nextPressedKeys.pop();
    }
    return nextPressedKeys;
};

const getNextPressedKeys = (pressedKeys: Key[], key: Key): Key[] => {
    let nextPressedKeys = [...pressedKeys];
    if (pressedKeys[pressedKeys.length - 1].isOperation && key.isOperation) {
        nextPressedKeys[nextPressedKeys.length - 1] = key;
        return nextPressedKeys;
    }
    nextPressedKeys.push(key);
    return nextPressedKeys;
};

const getKeysToCalculate = (pressedKeys: Key[]): Key[] => {
    let keysToEvaluate = [...pressedKeys];
    if (pressedKeys[pressedKeys.length - 1].isOperation) {
        keysToEvaluate.pop();
        return keysToEvaluate;
    }
    return keysToEvaluate;
};
