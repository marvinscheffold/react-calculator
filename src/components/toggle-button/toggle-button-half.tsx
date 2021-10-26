import { ReactElement } from "react";

type Props = {
    active: boolean;
    children: ReactElement;
    callback: Function;
};

export function ToggleButtonHalf({ active, children, callback }: Props) {
    return (
        <button
            onClick={() => callback()}
            className={`toggle-button-half ${
                active ? "toggle-button-half--active" : ""
            }`}
        >
            {children}
        </button>
    );
}
