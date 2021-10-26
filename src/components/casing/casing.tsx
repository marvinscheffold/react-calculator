import "./casing.css";
import { ToggleButton } from "../toggle-button/toggle-button";
import Screen from "../screen/screen";
import Keyboard from "../keyboard/keyboard";
import Bar from "../bar/bar";
import { Key } from "../../utils/keys";

type Props = {
    pressedKeys: Key[];
    solution: string;
    addKey: Function;
    deleteLastKey: Function;
    allClear: Function;
    equal: Function;
};

export default function Casing({
    pressedKeys,
    solution,
    addKey,
    deleteLastKey,
    allClear,
    equal,
}: Props) {
    return (
        <div className={"casing"}>
            <ToggleButton />
            <Screen pressedKeys={pressedKeys} solution={solution} />
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
