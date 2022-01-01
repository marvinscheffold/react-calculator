import KeyboardUi from "./keyboard-ui";
import { KeyboardHardwareEvents } from "./keyboard-hardware-events";

type Props = {
    onAnsKey: Function;
    onAddKey: Function;
    onDeleteLastKey: Function;
    onAllClear: Function;
    onEqual: Function;
};

export default function Keyboard({
    onAnsKey,
    onAddKey,
    onDeleteLastKey,
    onAllClear,
    onEqual,
}: Props) {
    return (
        <>
            <KeyboardUi
                onAnsKey={onAnsKey}
                onAddKey={onAddKey}
                onDeleteLastKey={onDeleteLastKey}
                onAllClear={onAllClear}
                onEqual={onEqual}
            />
            <KeyboardHardwareEvents
                onAnsKey={onAnsKey}
                onAddKey={onAddKey}
                onDeleteLastKey={onDeleteLastKey}
                onAllClear={onAllClear}
                onEqual={onEqual}
            />
        </>
    );
}
