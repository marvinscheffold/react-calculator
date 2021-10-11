import { useState } from "react";

import Casing from "../casing/casing";
import { EMPTY, Key } from "../../utils/keys";

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
            equal={() =>
                setPressedKeys([
                    {
                        ...EMPTY,
                        appearance: <span>{solution.replace(".", ",")}</span>,
                        mathFunction: solution,
                    },
                ])
            }
            pressedKeys={pressedKeys}
            solution={solution}
        />
    );
}

const calculate = (calculatable: string): string => {
    return calculatable.length === 0
        ? ""
        : Function(`"use strict";return ${calculatable}`)();
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
    let keysToCalculate = [...pressedKeys];
    if (pressedKeys[pressedKeys.length - 1].isOperation) {
        keysToCalculate.pop();
        return keysToCalculate;
    }
    return keysToCalculate;
};
