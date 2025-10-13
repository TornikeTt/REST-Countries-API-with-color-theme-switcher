import { useState } from "react";
import Header from "./Components/Header/Header.jsx";
import Body from "./Components/Body/Body.jsx";

import "./App.scss";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const themeStyles = {
        bgColor: {
            background: isDarkMode ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 99%)",
        },

        elementColor: {
            background: isDarkMode
                ? "hsl(209, 23%, 22%)"
                : "hsl(0, 100%, 100%)",
        },

        textColor: {
            color: isDarkMode ? "hsl(0, 100%, 100%)" : "hsl(200, 15%, 8%)",
        },
    };

    return (
        <div className="App" style={themeStyles.bgColor}>
            <Header
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
                themeStyles={themeStyles}
            />
            <Body themeStyles={themeStyles} />
        </div>
    );
}

export default App;
