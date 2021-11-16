import "./screen.css";
import { Key } from "../../utils/keys";
import React from "react";

type Props = {
    pressedKeys: Key[];
    prevPressedKeys: Key[];
};

export default function Screen({ pressedKeys, prevPressedKeys }: Props) {
    return (
        <div className={"screen"}>
            <h3>
                {prevPressedKeys.map((key, index) =>
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
