import "./casing.css";
import { ToggleButton } from "../toggle-button/toggle-button";
import Screen from "../screen/screen";
import Keyboard from "../keyboard/keyboard";
import Bar from "../bar/bar";
import { Key } from "../../utils/keys";

type Props = {
    pressedKeys: Key[];
    prevPressedKeys: Key[];
    addKey: Function;
    deleteLastKey: Function;
    allClear: Function;
    equal: Function;
};

export default function Casing({
    pressedKeys,
    prevPressedKeys,
    addKey,
    deleteLastKey,
    allClear,
    equal,
}: Props) {
    return (
        <div className={"casing"}>
            <ToggleButton />
            <Screen
                pressedKeys={pressedKeys}
                prevPressedKeys={prevPressedKeys}
            />
            <div className={"casing__bottom"}>
                <Keyboard
                    addKey={addKey}
                    deleteLastKey={deleteLastKey}
                    allClear={allClear}
                    equal={equal}
                />
                <Bar />
            </div>
        </div>
    );
}
