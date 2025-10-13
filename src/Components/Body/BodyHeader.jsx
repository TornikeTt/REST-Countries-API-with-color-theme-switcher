import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function BodyHeader({ themeStyles }) {
    const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
    const [dropdownOption, setDropdownOption] = useState("Filter by Region");

    const options = ["Africa", "America", "Asia", "Europe", "Oceania"];

    const handelSelected = (option) => {
        setDropdownOption(option);
        setIsDropdownMenuOpen(!isDropdownMenuOpen);
    };

    return (
        <div className="Body_header">
            <div className="input-wrapper" style={themeStyles.elementColor}>
                <IoIosSearch
                    className="search_icon"
                    style={themeStyles.textColor}
                />
                <input
                    type="text"
                    placeholder="Search for a country..."
                    style={{
                        "--placeholder-color": themeStyles.textColor?.color,
                        ...themeStyles.textColor,
                    }}
                />
            </div>
            <div
                className="dropdown_container"
                style={themeStyles.elementColor}
            >
                <button
                    className="selected"
                    onClick={() => setIsDropdownMenuOpen(!isDropdownMenuOpen)}
                >
                    <span style={themeStyles.textColor}>{dropdownOption}</span>
                    <MdOutlineKeyboardArrowDown style={themeStyles.textColor} />
                </button>

                {isDropdownMenuOpen && (
                    <div className="options" style={themeStyles.elementColor}>
                        <ul style={themeStyles.textColor}>
                            {options.map((option, index) => (
                                <li
                                    key={index}
                                    onClick={() => handelSelected(option)}
                                >
                                    <button>{option}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default BodyHeader;
