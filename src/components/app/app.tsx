import "./app.css";
import Calculator from "../calculator/calculator";
import React, { useState } from "react";

export const ThemContext = React.createContext<ThemeContextType>({
    theme: "light",
    setTheme: () => {},
});

type ThemeContextType = {
    theme: string;
    setTheme: Function;
};

function App() {
    const [theme, setTheme] = useState("light");

    return (
        <div className="app" data-theme={theme}>
            <ThemContext.Provider value={{ theme, setTheme }}>
                <Calculator />
            </ThemContext.Provider>
        </div>
    );
}

export default App;
