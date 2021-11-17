import "./screen.css";
import { Key } from "../../utils/keys";
import React from "react";
import { DynamicTextSizer } from "./dynamic-text-sizer";

type Props = {
    pressedKeys: Key[];
    prevPressedKeys: Key[];
};

export default function Screen({ pressedKeys, prevPressedKeys }: Props) {
    console.log(pressedKeys);

    return (
        <div className={"screen"}>
            <h3>
                {prevPressedKeys.map((key, index) =>
                    React.cloneElement(key.appearance, { key: index })
                )}
            </h3>
            <h1>
                <DynamicTextSizer
                    minPercent={50}
                    changePerChar={10}
                    startAtChar={8}
                >
                    {pressedKeys.map((key, index) =>
                        React.cloneElement(key.appearance, {
                            key: index,
                        })
                    )}
                </DynamicTextSizer>
            </h1>
        </div>
    );
}
