import "./screen.css";
import { Key } from "../../utils/keys";
import React from "react";
import { ReactFontSizeByTextLength } from "react-font-size-by-text-length";

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
                <ReactFontSizeByTextLength
                    changePerChar={8}
                    startAtChar={9}
                    stopAtChar={12}
                >
                    {pressedKeys.map((key, index) =>
                        React.cloneElement(key.appearance, {
                            key: index,
                        })
                    )}
                </ReactFontSizeByTextLength>
            </h1>
        </div>
    );
}
