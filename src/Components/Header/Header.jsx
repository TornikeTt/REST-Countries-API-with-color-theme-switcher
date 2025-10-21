import { FaRegMoon } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import "./Header.scss";

function Header({ isDarkMode, setIsDarkMode, themeStyles }) {
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <header className="header-container" style={themeStyles.elementColor}>
            <div className="header">
                <h1 style={themeStyles.textColor}>Where in the world?</h1>
                <button onClick={toggleTheme}>
                    {isDarkMode ? <FaMoon color="white" /> : <FaRegMoon />}
                    <span style={themeStyles.textColor}>Dark Mode</span>
                </button>
            </div>
        </header>
    );
}

export default Header;
