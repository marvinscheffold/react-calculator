import "./theme-toggle-button.css";
import { ThemeToggleIcon } from "./theme-toggle-icon";
import { useContext } from "react";
import { ThemContext } from "../app/app";

export function ThemeToggleButton() {
    const themeContext = useContext(ThemContext);
    const theme = themeContext.theme;
    const nextTheme = theme === "light" ? "dark" : "light";

    return (
        <button
            className={"theme-toggle-button"}
            onClick={() => themeContext.setTheme(nextTheme)}
        >
            <ThemeToggleIcon active={theme === "light"}>
                <i className="far fa-sun"></i>
            </ThemeToggleIcon>
            <ThemeToggleIcon active={theme === "dark"}>
                <i className="far fa-moon"></i>
            </ThemeToggleIcon>
        </button>
    );
}
