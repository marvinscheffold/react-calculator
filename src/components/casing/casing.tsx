import "./casing.css";
import { ToggleButton } from "../toggle-button/toggle-button";
import Screen from "../screen/screen";
import Keyboard from "../keyboard/keyboard";
import Bar from "../bar/bar";
import { Key } from "../../utils/keys";

type Props = {
    pressedKeys: Key[];
    prevPressedKeys: Key[];
    onAddKey: Function;
    onDeleteLastKey: Function;
    onAllClear: Function;
    onEqual: Function;
};

export default function Casing({
    pressedKeys,
    prevPressedKeys,
    onAddKey,
    onDeleteLastKey,
    onAllClear,
    onEqual,
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
                    onAddKey={onAddKey}
                    onDeleteLastKey={onDeleteLastKey}
                    onAllClear={onAllClear}
                    onEqual={onEqual}
                />
                <Bar />
            </div>
        </div>
    );
}
