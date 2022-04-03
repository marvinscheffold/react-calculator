import "./app.css";
import Calculator from "../calculator/calculator";
import React, { useEffect, useState } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { getUserPreferredTheme } from "../../utils/theme-helper";

type ThemeContextType = {
    theme: string;
    setTheme: Function;
};

type FullScreenContextType = {
    isFullScreen: boolean;
    setIsFullScreen: Function;
};

export const ThemContext = React.createContext<ThemeContextType>(
    {} as ThemeContextType
);

export const FullScreenContext = React.createContext<FullScreenContextType>(
    {} as FullScreenContextType
);

export function App() {
    const [theme, setTheme] = useState(getUserPreferredTheme());
    const [isFullScreen, setIsFullScreen] = useState(false);
    const handle = useFullScreenHandle();

    useEffect(() => {
        isFullScreen ? handle.enter() : handle.exit();
    }, [isFullScreen, handle]);

    return (
        <FullScreen handle={handle}>
            <div className="app" data-theme={theme}>
                <ThemContext.Provider value={{ theme, setTheme }}>
                    <FullScreenContext.Provider
                        value={{ isFullScreen, setIsFullScreen }}
                    >
                        <Calculator />
                    </FullScreenContext.Provider>
                </ThemContext.Provider>
            </div>
        </FullScreen>
    );
}
