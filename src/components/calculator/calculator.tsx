import { useState } from "react";
import Casing from "../casing/casing";
import {
    Key,
    ZERO,
    MINUS,
    EQUALS,
    ANS,
    SOLUTION,
    COMMA,
} from "../../utils/keys";
import { stringToSolutionKey, stringToAnsKey } from "../../utils/string-to-key";
import { formatSolution } from "../../utils/format-solution";

export default function Calculator() {
    const [pressedKeys, setPressedKeys] = useState<Key[]>([ZERO]);
    const [prevPressedKeys, setPrevPressedKeys] = useState<Key[]>([]);
    const [lastSolution, setLastSolution] = useState("0");

    const solution = formatSolution(
        calculate(
            getKeysToCalculate(pressedKeys).reduce<string>(
                (acc: string, cur) => {
                    return acc + cur.mathFunction;
                },
                ""
            )
        ).toString()
    );

    const onAnsKey = () => {
        onAddKey(stringToAnsKey(lastSolution));
    };

    const onAddKey = (key: Key) => {
        setPressedKeys(getNextPressedKeys(pressedKeys, key));
        setPrevPressedKeys([ANS, EQUALS, stringToSolutionKey(lastSolution)]);
    };

    const onDeleteLastKey = () => {
        if (pressedKeys.length <= 1) {
            onAllClear();
            return;
        }

        const nextPressedKeys = [...pressedKeys];
        nextPressedKeys.pop();
        setPressedKeys(nextPressedKeys);
    };

    const onAllClear = () => {
        setPrevPressedKeys([]);
        setPressedKeys([ZERO]);
    };

    const onEqual = () => {
        if (pressedKeys.length <= 1) return;
        setLastSolution(solution);
        setPrevPressedKeys([...pressedKeys, EQUALS]);
        setPressedKeys([stringToSolutionKey(solution)]);
    };

    console.log(lastSolution, pressedKeys);

    return (
        <Casing
            onAnsKey={onAnsKey}
            onAddKey={onAddKey}
            onDeleteLastKey={onDeleteLastKey}
            onAllClear={onAllClear}
            onEqual={onEqual}
            pressedKeys={pressedKeys}
            prevPressedKeys={prevPressedKeys}
        />
    );
}

const calculate = (calculatable: string): string => {
    return calculatable.length === 0
        ? ""
        : Function(`;return ${calculatable}`)();
};

const getNextPressedKeys = (currentPressedKeys: Key[], newKey: Key): Key[] => {
    let nextPressedKeys = [...currentPressedKeys];

    // If it´s the first key-stroke only add key if it can be pressed first
    if (currentPressedKeys.length === 0 && !newKey.canComeFirst)
        return nextPressedKeys;

    // If first pressed key is SOLUTION and new key can come first
    // -> Replace SOLUTION with new key
    if (
        currentPressedKeys.length === 1 &&
        currentPressedKeys[0].id === SOLUTION.id &&
        newKey.canComeFirst
    ) {
        return [newKey];
    }

    // If first pressed key is a ZERO replace it with newKey
    if (
        currentPressedKeys.length === 1 &&
        currentPressedKeys[0].id === ZERO.id &&
        newKey.canComeFirst
    ) {
        return [newKey];
    }

    // If first pressed key is minus and new key
    // is operation but not minus do nothing
    if (
        currentPressedKeys.length === 1 &&
        currentPressedKeys[0].id === MINUS.id &&
        newKey.isMathOperation
    ) {
        return nextPressedKeys;
    }

    // If last pressed key is operation or SOLUTION and new key is COMMA
    // -> Do nothing
    if (
        (currentPressedKeys[currentPressedKeys.length - 1].isMathOperation ||
            currentPressedKeys[currentPressedKeys.length - 1].id ==
                SOLUTION.id) &&
        newKey.id === COMMA.id
    ) {
        return nextPressedKeys;
    }

    // If last pressed key is operation and new key is operation, replace it
    if (
        currentPressedKeys.length >= 1 &&
        currentPressedKeys[currentPressedKeys.length - 1].isMathOperation &&
        newKey.isMathOperation
    ) {
        nextPressedKeys[nextPressedKeys.length - 1] = newKey;
        return nextPressedKeys;
    }

    // If a comma has already been pressed prevent
    // todo: Prevent multiple commas
    nextPressedKeys.push(newKey);
    return nextPressedKeys;
};

// Remove trailing operations
const getKeysToCalculate = (pressedKeys: Key[]): Key[] => {
    let keysToCalculate = [...pressedKeys];

    if (pressedKeys.length === 0) return pressedKeys;

    if (!pressedKeys[pressedKeys.length - 1].canComeLast) {
        keysToCalculate.pop();
        return keysToCalculate;
    }
    return keysToCalculate;
};
