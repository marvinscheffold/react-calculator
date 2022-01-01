import "./keyboard.css";
import { Button } from "../button/button";
import * as keys from "../../utils/keys";

type Props = {
    onAnsKey: Function;
    onAddKey: Function;
    onDeleteLastKey: Function;
    onAllClear: Function;
    onEqual: Function;
};

export default function KeyboardUi({
    onAnsKey,
    onAddKey,
    onDeleteLastKey,
    onAllClear,
    onEqual,
}: Props) {
    return (
        <div className={"keyboard"}>
            <Button callback={() => onAllClear()} color={"primary"}>
                <span>AC</span>
            </Button>
            <Button callback={() => onAddKey(keys.NEGATE)} color={"primary"}>
                <span>+/-</span>
            </Button>
            <Button callback={() => onAnsKey()} color={"primary"}>
                <span>Ans</span>
            </Button>
            <Button callback={() => onAddKey(keys.DIVIDE)} color={"secondary"}>
                <i className="fas fa-divide"></i>
            </Button>
            <Button callback={() => onAddKey(keys.SEVEN)} color={"normal"}>
                <span>7</span>
            </Button>
            <Button callback={() => onAddKey(keys.EIGHT)} color={"normal"}>
                <span>8</span>
            </Button>
            <Button callback={() => onAddKey(keys.NINE)} color={"normal"}>
                <span>9</span>
            </Button>
            <Button callback={() => onAddKey(keys.TIMES)} color={"secondary"}>
                <i className="fas fa-times"></i>
            </Button>
            <Button callback={() => onAddKey(keys.FOUR)} color={"normal"}>
                <span>4</span>
            </Button>
            <Button callback={() => onAddKey(keys.FIVE)} color={"normal"}>
                <span>5</span>
            </Button>
            <Button callback={() => onAddKey(keys.SIX)} color={"normal"}>
                <span>6</span>
            </Button>
            <Button callback={() => onAddKey(keys.MINUS)} color={"secondary"}>
                <i className="fas fa-minus"></i>
            </Button>
            <Button callback={() => onAddKey(keys.ONE)} color={"normal"}>
                <span>1</span>
            </Button>
            <Button callback={() => onAddKey(keys.TWO)} color={"normal"}>
                <span>2</span>
            </Button>
            <Button callback={() => onAddKey(keys.THREE)} color={"normal"}>
                <span>3</span>
            </Button>
            <Button callback={() => onAddKey(keys.PLUS)} color={"secondary"}>
                <i className="fas fa-plus"></i>
            </Button>
            <Button callback={() => onDeleteLastKey()} color={"normal"}>
                <i className="fas fa-undo"></i>
            </Button>
            <Button callback={() => onAddKey(keys.ZERO)} color={"normal"}>
                <span>0</span>
            </Button>
            <Button callback={() => onAddKey(keys.COMMA)} color={"normal"}>
                <span>,</span>
            </Button>
            <Button callback={() => onEqual()} color={"secondary"}>
                <i className="fas fa-equals"></i>
            </Button>
        </div>
    );
}
