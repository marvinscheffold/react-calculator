import "./casing.css";
import { ThemeToggleButton } from "../theme-toggle-button/theme-toggle-button";
import Screen from "../screen/screen";
import Keyboard from "../keyboard/keyboard";
import Bar from "../bar/bar";

type Props = {
    input: string;
    solution: string;
    addKey: Function;
    deleteLastKey: Function;
    allClear: Function;
    equal: Function;
};

export default function Casing({
    input,
    solution,
    addKey,
    deleteLastKey,
    allClear,
    equal,
}: Props) {
    return (
        <div className={"casing"}>
            <ThemeToggleButton />
            <Screen input={input} solution={solution} />
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
