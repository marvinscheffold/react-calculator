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
                handleKeys={keys.ONE.keyboardOperations}
                onKeyEvent={(key, e) => onAddKey(keys.ONE)}
            />
            <KeyboardEventHandler
                handleKeys={keys.TWO.keyboardOperations}
                onKeyEvent={(key, e) => onAddKey(keys.TWO)}
            />
            <KeyboardEventHandler
                handleKeys={keys.THREE.keyboardOperations}
                onKeyEvent={(key, e) => onAddKey(keys.THREE)}
            />
            <KeyboardEventHandler
                handleKeys={keys.FOUR.keyboardOperations}
                onKeyEvent={(key, e) => onAddKey(keys.FOUR)}
            />
            <KeyboardEventHandler
                handleKeys={keys.FIVE.keyboardOperations}
                onKeyEvent={(key, e) => onAddKey(keys.FIVE)}
            />
            <KeyboardEventHandler
                handleKeys={keys.SIX.keyboardOperations}
                onKeyEvent={(key, e) => onAddKey(keys.SIX)}
            />
            <KeyboardEventHandler
                handleKeys={keys.SEVEN.keyboardOperations}
                onKeyEvent={(key, e) => onAddKey(keys.SEVEN)}
            />
            <KeyboardEventHandler
                handleKeys={keys.EIGHT.keyboardOperations}
                onKeyEvent={(key, e) => onAddKey(keys.EIGHT)}
            />
            <KeyboardEventHandler
                handleKeys={keys.NINE.keyboardOperations}
                onKeyEvent={(key, e) => onAddKey(keys.NINE)}
            />
            <KeyboardEventHandler
                handleKeys={keys.ZERO.keyboardOperations}
                onKeyEvent={(key, e) => onAddKey(keys.ZERO)}
            />
            <KeyboardEventHandler
                handleKeys={keys.MINUS.keyboardOperations}
                onKeyEvent={(key, e) => onAddKey(keys.MINUS)}
            />
            <KeyboardEventHandler
                handleKeys={keys.DIVIDE.keyboardOperations}
                onKeyEvent={(key, e) => onAddKey(keys.DIVIDE)}
            />
            <KeyboardEventHandler
                handleKeys={["all"]}
                onKeyEvent={(key, e) => {
                    if (keys.PLUS.keyboardOperations.includes(e.key))
                        onAddKey(keys.PLUS);
                }}
            />
            <KeyboardEventHandler
                handleKeys={["all"]}
                onKeyEvent={(key, e) => {
                    if (keys.TIMES.keyboardOperations.includes(e.key))
                        onAddKey(keys.TIMES);
                }}
            />
            <KeyboardEventHandler
                handleKeys={keys.ALL_CLEAR.keyboardOperations}
                onKeyEvent={(key, e) => onAllClear()}
            />
            <KeyboardEventHandler
                handleKeys={keys.EQUALS.keyboardOperations}
                onKeyEvent={(key, e) => onEqual()}
            />
            <KeyboardEventHandler
                handleKeys={keys.BACKSPACE.keyboardOperations}
                onKeyEvent={(key, e) => onDeleteLastKey()}
            />
            <KeyboardEventHandler
                handleKeys={keys.NEGATE.keyboardOperations}
                onKeyEvent={(key, e) => onAddKey(keys.NEGATE)}
            />
            <KeyboardEventHandler
                handleKeys={keys.COMMA.keyboardOperations}
                onKeyEvent={(key, e) => onAddKey(keys.COMMA)}
            />
            <KeyboardEventHandler
                handleKeys={keys.PERCENT.keyboardOperations}
                onKeyEvent={(key, e) => onAddKey(keys.PERCENT)}
            />
        </>
    );
}
