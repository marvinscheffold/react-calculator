import { useState } from "react";

import Casing from "../casing/casing";
import { EMPTY, Key, ZERO } from "../../utils/keys";
import { stringToKey } from "../../utils/string-to-key";

export default function Calculator() {
    const [pressedKeys, setPressedKeys] = useState<Key[]>([EMPTY]);

    const solution = calculate(
        getKeysToCalculate(pressedKeys).reduce<string>((acc: string, cur) => {
            return acc + cur.mathFunction;
        }, "")
    ).toString();

    return (
        <Casing
            addKey={(key: Key) =>
                setPressedKeys(getNextPressedKeys(pressedKeys, key))
            }
            deleteLastKey={() => setPressedKeys(deleteLastKey(pressedKeys))}
            allClear={() => setPressedKeys([EMPTY])}
            equal={() => setPressedKeys(solutionToKeys(solution))}
            pressedKeys={pressedKeys}
            solution={solution}
        />
    );
}

const calculate = (calculatable: string): string => {
    return calculatable.length === 0
        ? ""
        : Function(`;return ${calculatable}`)();
};

const solutionToKeys = (solution: string): Key[] => {
    if (solution.length === 0) return [EMPTY];
    return solution.split("").map((string: string) => stringToKey(string));
};

const deleteLastKey = (pressedKeys: Key[]): Key[] => {
    let nextPressedKeys = [...pressedKeys];

    if (pressedKeys.length > 1) nextPressedKeys.pop();

    return nextPressedKeys;
};

const getNextPressedKeys = (currentPressedKeys: Key[], key: Key): Key[] => {
    let nextPressedKeys = [...currentPressedKeys];

    // If it´s the first key-stroke only add key if it can be pressed first
    if (currentPressedKeys.length <= 1 && !key.canBePressedFirst)
        return nextPressedKeys;

    // If the first key is a zero and new key is a zero, don´t add the zero
    if (
        currentPressedKeys.length <= 2 &&
        currentPressedKeys[currentPressedKeys.length - 1].mathFunction ===
            ZERO.mathFunction &&
        key.mathFunction === ZERO.mathFunction
    ) {
        return nextPressedKeys;
    }

    if (
        currentPressedKeys[currentPressedKeys.length - 1].isOperation &&
        key.isOperation
    ) {
        // If last pressed key is operation and new key is operation, replace it
        nextPressedKeys[nextPressedKeys.length - 1] = key;
        return nextPressedKeys;
    }

    nextPressedKeys.push(key);
    return nextPressedKeys;
};

const getKeysToCalculate = (pressedKeys: Key[]): Key[] => {
    let keysToCalculate = [...pressedKeys];

    if (pressedKeys[pressedKeys.length - 1].isOperation) {
        keysToCalculate.pop();
        return keysToCalculate;
    }
    return keysToCalculate;
};
