import "./screen.css";
import { Key } from "../../utils/keys";
import { stringToKey } from "../../utils/string-to-key";
import React from "react";

type Props = {
    pressedKeys: Key[];
    solution: string;
};

export default function Screen({ pressedKeys, solution }: Props) {
    const solutionAsKeys = solution
        .split("")
        .map((string: string) => stringToKey(string));

    return (
        <div className={"screen"}>
            <h3>
                {solutionAsKeys.map((key, index) =>
                    React.cloneElement(key.appearance, { key: index })
                )}
            </h3>
            <h1>
                {pressedKeys.map((key, index) =>
                    React.cloneElement(key.appearance, { key: index })
                )}
            </h1>
        </div>
    );
}
