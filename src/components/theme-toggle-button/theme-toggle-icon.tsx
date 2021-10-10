import { ReactElement } from "react";

type Props = {
    active: boolean;
    children: ReactElement;
};

export function ThemeToggleIcon(props: Props) {
    return (
        <span
            className={`theme-toggle-icon ${
                props.active ? "theme-toggle-icon--active" : ""
            }`}
        >
            {props.children}
        </span>
    );
}
