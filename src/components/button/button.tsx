import { ReactElement } from "react";
import "./button.css";

type Props = {
    callback: Function;
    color: "primary" | "secondary" | "normal";
    children: ReactElement;
};

export function Button(props: Props) {
    let className = "";
    if (props.color !== "normal") {
        className = `button--${props.color}`;
    }
    return (
        <button
            onClick={() => props.callback()}
            className={`button ${className}`}
        >
            {props.children}
        </button>
    );
}
