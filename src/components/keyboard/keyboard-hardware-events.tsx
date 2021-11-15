import KeyboardEventHandler from "react-keyboard-event-handler";
import * as keys from "../../utils/keys";

type Props = {
    addKey: Function;
    deleteLastKey: Function;
    allClear: Function;
    equal: Function;
};

export function KeyboardHardwareEvents({
    addKey,
    deleteLastKey,
    allClear,
    equal,
}: Props) {
    return (
        <>
            <KeyboardEventHandler
                handleKeys={keys.ONE.keyStrings}
                onKeyEvent={(key, e) => addKey(keys.ONE)}
            />
            <KeyboardEventHandler
                handleKeys={keys.TWO.keyStrings}
                onKeyEvent={(key, e) => addKey(keys.TWO)}
            />
            <KeyboardEventHandler
                handleKeys={keys.THREE.keyStrings}
                onKeyEvent={(key, e) => addKey(keys.THREE)}
            />
            <KeyboardEventHandler
                handleKeys={keys.FOUR.keyStrings}
                onKeyEvent={(key, e) => addKey(keys.FOUR)}
            />
            <KeyboardEventHandler
                handleKeys={keys.FIVE.keyStrings}
                onKeyEvent={(key, e) => addKey(keys.FIVE)}
            />
            <KeyboardEventHandler
                handleKeys={keys.SIX.keyStrings}
                onKeyEvent={(key, e) => addKey(keys.SIX)}
            />
            <KeyboardEventHandler
                handleKeys={keys.SEVEN.keyStrings}
                onKeyEvent={(key, e) => addKey(keys.SEVEN)}
            />
            <KeyboardEventHandler
                handleKeys={keys.EIGHT.keyStrings}
                onKeyEvent={(key, e) => addKey(keys.EIGHT)}
            />
            <KeyboardEventHandler
                handleKeys={keys.NINE.keyStrings}
                onKeyEvent={(key, e) => addKey(keys.NINE)}
            />
            <KeyboardEventHandler
                handleKeys={keys.ZERO.keyStrings}
                onKeyEvent={(key, e) => addKey(keys.ZERO)}
            />
            <KeyboardEventHandler
                handleKeys={keys.MINUS.keyStrings}
                onKeyEvent={(key, e) => addKey(keys.MINUS)}
            />
            <KeyboardEventHandler
                handleKeys={keys.DIVIDE.keyStrings}
                onKeyEvent={(key, e) => addKey(keys.DIVIDE)}
            />
            <KeyboardEventHandler
                handleKeys={["all"]}
                onKeyEvent={(key, e) => {
                    if (keys.PLUS.keyStrings.includes(e.key)) addKey(keys.PLUS);
                }}
            />
            <KeyboardEventHandler
                handleKeys={["all"]}
                onKeyEvent={(key, e) => {
                    if (keys.TIMES.keyStrings.includes(e.key))
                        addKey(keys.TIMES);
                }}
            />
            <KeyboardEventHandler
                handleKeys={keys.ALL_CLEAR.keyStrings}
                onKeyEvent={(key, e) => allClear()}
            />
            <KeyboardEventHandler
                handleKeys={keys.EQUALS.keyStrings}
                onKeyEvent={(key, e) => equal()}
            />
            <KeyboardEventHandler
                handleKeys={keys.BACKSPACE.keyStrings}
                onKeyEvent={(key, e) => deleteLastKey()}
            />
            <KeyboardEventHandler
                handleKeys={keys.NEGATE.keyStrings}
                onKeyEvent={(key, e) => addKey(keys.NEGATE)}
            />
            <KeyboardEventHandler
                handleKeys={keys.COMMA.keyStrings}
                onKeyEvent={(key, e) => addKey(keys.COMMA)}
            />
            <KeyboardEventHandler
                handleKeys={keys.PERCENT.keyStrings}
                onKeyEvent={(key, e) => addKey(keys.PERCENT)}
            />
        </>
    );
}
