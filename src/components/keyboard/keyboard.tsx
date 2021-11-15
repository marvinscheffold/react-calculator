import KeyboardUi from "./keyboard-ui";
import { KeyboardHardwareEvents } from "./keyboard-hardware-events";

type Props = {
    addKey: Function;
    deleteLastKey: Function;
    allClear: Function;
    equal: Function;
};

export default function Keyboard({
    addKey,
    deleteLastKey,
    allClear,
    equal,
}: Props) {
    return (
        <>
            <KeyboardUi
                addKey={addKey}
                deleteLastKey={deleteLastKey}
                allClear={allClear}
                equal={equal}
            />
            <KeyboardHardwareEvents
                addKey={addKey}
                deleteLastKey={deleteLastKey}
                allClear={allClear}
                equal={equal}
            />
        </>
    );
}
