import KeyboardUi from "./keyboard-ui";
import { KeyboardHardwareEvents } from "./keyboard-hardware-events";

type Props = {
    onAddKey: Function;
    onDeleteLastKey: Function;
    onAllClear: Function;
    onEqual: Function;
};

export default function Keyboard({
    onAddKey,
    onDeleteLastKey,
    onAllClear,
    onEqual,
}: Props) {
    return (
        <>
            <KeyboardUi
                onAddKey={onAddKey}
                onDeleteLastKey={onDeleteLastKey}
                onAllClear={onAllClear}
                onEqual={onEqual}
            />
            <KeyboardHardwareEvents
                onAddKey={onAddKey}
                onDeleteLastKey={onDeleteLastKey}
                onAllClear={onAllClear}
                onEqual={onEqual}
            />
        </>
    );
}
