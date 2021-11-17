import "./screen.css";
import { Key } from "../../utils/keys";
import React from "react";
import { TextSizeByStringLength } from "./text-size-by-string-length";

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
                <TextSizeByStringLength
                    minPercent={50}
                    changePerChar={10}
                    startAtChar={8}
                >
                    {pressedKeys.map((key, index) =>
                        React.cloneElement(key.appearance, {
                            key: index,
                        })
                    )}
                </TextSizeByStringLength>
            </h1>
        </div>
    );
}
