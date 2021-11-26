import "./toggle-button.css";
import { ToggleButtonHalf } from "./toggle-button-half";
import { useContext } from "react";
import { FullScreenContext, ThemContext } from "../app/app";
import { Themes } from "../../utils/constants/themes";

export function ToggleButton() {
    const themeContext = useContext(ThemContext);
    const theme = themeContext.theme;
    const nextTheme = theme === Themes.light ? Themes.dark : Themes.light;

    const fullScreenContext = useContext(FullScreenContext);
    const isFullScreen = fullScreenContext.isFullScreen;
    const setIsFullScreen = fullScreenContext.setIsFullScreen;

    return (
        <div className={"toggle-button"}>
            <ToggleButtonHalf
                active={theme === "dark"}
                callback={() => themeContext.setTheme(nextTheme)}
            >
                <i className="far fa-moon"></i>
            </ToggleButtonHalf>
            <ToggleButtonHalf
                active={isFullScreen}
                callback={() => {
                    setIsFullScreen(!isFullScreen);
                }}
            >
                <i className="fas fa-expand"></i>
            </ToggleButtonHalf>
        </div>
    );
}
