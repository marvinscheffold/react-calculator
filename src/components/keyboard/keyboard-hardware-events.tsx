import KeyboardEventHandler from "react-keyboard-event-handler";
import * as keys from "../../utils/keys";

type Props = {
    onAddKey: Function;
    onDeleteLastKey: Function;
    onAllClear: Function;
    onEqual: Function;
};

export function KeyboardHardwareEvents({
    onAddKey,
    onDeleteLastKey,
    onAllClear,
    onEqual,
}: Props) {
    return (
        <>
            <KeyboardEventHandler
                handleKeys={keys.ONE.keyStrings}
                onKeyEvent={(key, e) => onAddKey(keys.ONE)}
            />
            <KeyboardEventHandler
                handleKeys={keys.TWO.keyStrings}
                onKeyEvent={(key, e) => onAddKey(keys.TWO)}
            />
            <KeyboardEventHandler
                handleKeys={keys.THREE.keyStrings}
                onKeyEvent={(key, e) => onAddKey(keys.THREE)}
            />
            <KeyboardEventHandler
                handleKeys={keys.FOUR.keyStrings}
                onKeyEvent={(key, e) => onAddKey(keys.FOUR)}
            />
            <KeyboardEventHandler
                handleKeys={keys.FIVE.keyStrings}
                onKeyEvent={(key, e) => onAddKey(keys.FIVE)}
            />
            <KeyboardEventHandler
                handleKeys={keys.SIX.keyStrings}
                onKeyEvent={(key, e) => onAddKey(keys.SIX)}
            />
            <KeyboardEventHandler
                handleKeys={keys.SEVEN.keyStrings}
                onKeyEvent={(key, e) => onAddKey(keys.SEVEN)}
            />
            <KeyboardEventHandler
                handleKeys={keys.EIGHT.keyStrings}
                onKeyEvent={(key, e) => onAddKey(keys.EIGHT)}
            />
            <KeyboardEventHandler
                handleKeys={keys.NINE.keyStrings}
                onKeyEvent={(key, e) => onAddKey(keys.NINE)}
            />
            <KeyboardEventHandler
                handleKeys={keys.ZERO.keyStrings}
                onKeyEvent={(key, e) => onAddKey(keys.ZERO)}
            />
            <KeyboardEventHandler
                handleKeys={keys.MINUS.keyStrings}
                onKeyEvent={(key, e) => onAddKey(keys.MINUS)}
            />
            <KeyboardEventHandler
                handleKeys={keys.DIVIDE.keyStrings}
                onKeyEvent={(key, e) => onAddKey(keys.DIVIDE)}
            />
            <KeyboardEventHandler
                handleKeys={["all"]}
                onKeyEvent={(key, e) => {
                    if (keys.PLUS.keyStrings.includes(e.key))
                        onAddKey(keys.PLUS);
                }}
            />
            <KeyboardEventHandler
                handleKeys={["all"]}
                onKeyEvent={(key, e) => {
                    if (keys.TIMES.keyStrings.includes(e.key))
                        onAddKey(keys.TIMES);
                }}
            />
            <KeyboardEventHandler
                handleKeys={keys.ALL_CLEAR.keyStrings}
                onKeyEvent={(key, e) => onAllClear()}
            />
            <KeyboardEventHandler
                handleKeys={keys.EQUALS.keyStrings}
                onKeyEvent={(key, e) => onEqual()}
            />
            <KeyboardEventHandler
                handleKeys={keys.BACKSPACE.keyStrings}
                onKeyEvent={(key, e) => onDeleteLastKey()}
            />
            <KeyboardEventHandler
                handleKeys={keys.NEGATE.keyStrings}
                onKeyEvent={(key, e) => onAddKey(keys.NEGATE)}
            />
            <KeyboardEventHandler
                handleKeys={keys.COMMA.keyStrings}
                onKeyEvent={(key, e) => onAddKey(keys.COMMA)}
            />
            <KeyboardEventHandler
                handleKeys={keys.PERCENT.keyStrings}
                onKeyEvent={(key, e) => onAddKey(keys.PERCENT)}
            />
        </>
    );
}
