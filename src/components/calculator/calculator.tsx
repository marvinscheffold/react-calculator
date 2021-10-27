import { useState } from "react";

import Casing from "../casing/casing";
import { Key, ZERO } from "../../utils/keys";
import { stringToKey } from "../../utils/string-to-key";

export default function Calculator() {
    const [pressedKeys, setPressedKeys] = useState<Key[]>([]);

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
            allClear={() => setPressedKeys([])}
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
    if (solution.length === 0) return [];
    return solution.split("").map((string: string) => stringToKey(string));
};

const deleteLastKey = (pressedKeys: Key[]): Key[] => {
    let nextPressedKeys = [...pressedKeys];

    if (pressedKeys.length >= 1) nextPressedKeys.pop();

    if (pressedKeys.length === 2 && pressedKeys[0].isOperation) return [];

    return nextPressedKeys;
};

const getNextPressedKeys = (currentPressedKeys: Key[], newKey: Key): Key[] => {
    let nextPressedKeys = [...currentPressedKeys];

    // If it´s the first key-stroke only add key if it can be pressed first
    if (currentPressedKeys.length === 0 && !newKey.canBePressedFirst)
        return nextPressedKeys;

    // If first pressed key is a ZERO replace it with newKey
    if (
        currentPressedKeys.length === 1 &&
        currentPressedKeys[0].id === ZERO.id &&
        !newKey.isOperation
    ) {
        nextPressedKeys[nextPressedKeys.length - 1] = newKey;
        return nextPressedKeys;
    }

    // If last pressed key is operation and new key is operation, replace it
    if (
        currentPressedKeys.length >= 1 &&
        currentPressedKeys[currentPressedKeys.length - 1].isOperation &&
        newKey.isOperation
    ) {
        nextPressedKeys[nextPressedKeys.length - 1] = newKey;
        return nextPressedKeys;
    }

    // If a comma has already been pressed prevent

    nextPressedKeys.push(newKey);
    return nextPressedKeys;
};

// Remove trailing operations
const getKeysToCalculate = (pressedKeys: Key[]): Key[] => {
    let keysToCalculate = [...pressedKeys];

    if (pressedKeys.length === 0) return pressedKeys;

    if (pressedKeys[pressedKeys.length - 1].isOperation) {
        keysToCalculate.pop();
        return keysToCalculate;
    }
    return keysToCalculate;
};
