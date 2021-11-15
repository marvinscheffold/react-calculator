import "./keyboard.css";
import { Button } from "../button/button";
import * as keys from "../../utils/keys";

type Props = {
    addKey: Function;
    deleteLastKey: Function;
    allClear: Function;
    equal: Function;
};

export default function KeyboardUi({
    addKey,
    deleteLastKey,
    allClear,
    equal,
}: Props) {
    return (
        <div className={"keyboard"}>
            <Button callback={() => allClear()} color={"primary"}>
                <span>AC</span>
            </Button>
            <Button callback={() => addKey(keys.NEGATE)} color={"primary"}>
                <span>+/-</span>
            </Button>
            <Button callback={() => addKey(keys.PERCENT)} color={"primary"}>
                <i className="fas fa-percent"></i>
            </Button>
            <Button callback={() => addKey(keys.DIVIDE)} color={"secondary"}>
                <i className="fas fa-divide"></i>
            </Button>
            <Button callback={() => addKey(keys.SEVEN)} color={"normal"}>
                <span>7</span>
            </Button>
            <Button callback={() => addKey(keys.EIGHT)} color={"normal"}>
                <span>8</span>
            </Button>
            <Button callback={() => addKey(keys.NINE)} color={"normal"}>
                <span>9</span>
            </Button>
            <Button callback={() => addKey(keys.TIMES)} color={"secondary"}>
                <i className="fas fa-times"></i>
            </Button>
            <Button callback={() => addKey(keys.FOUR)} color={"normal"}>
                <span>4</span>
            </Button>
            <Button callback={() => addKey(keys.FIVE)} color={"normal"}>
                <span>5</span>
            </Button>
            <Button callback={() => addKey(keys.SIX)} color={"normal"}>
                <span>6</span>
            </Button>
            <Button callback={() => addKey(keys.MINUS)} color={"secondary"}>
                <i className="fas fa-minus"></i>
            </Button>
            <Button callback={() => addKey(keys.ONE)} color={"normal"}>
                <span>1</span>
            </Button>
            <Button callback={() => addKey(keys.TWO)} color={"normal"}>
                <span>2</span>
            </Button>
            <Button callback={() => addKey(keys.THREE)} color={"normal"}>
                <span>3</span>
            </Button>
            <Button callback={() => addKey(keys.PLUS)} color={"secondary"}>
                <i className="fas fa-plus"></i>
            </Button>
            <Button callback={() => deleteLastKey()} color={"normal"}>
                <i className="fas fa-undo"></i>
            </Button>
            <Button callback={() => addKey(keys.ZERO)} color={"normal"}>
                <span>0</span>
            </Button>
            <Button callback={() => addKey(keys.COMMA)} color={"normal"}>
                <span>,</span>
            </Button>
            <Button callback={() => equal()} color={"secondary"}>
                <i className="fas fa-equals"></i>
            </Button>
        </div>
    );
}
