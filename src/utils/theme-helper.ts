import { Themes } from "./constants/themes";

export const getUserPreferredTheme = (): string => {
    if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        return Themes.DARK;
    }

    return Themes.LIGHT;
};
