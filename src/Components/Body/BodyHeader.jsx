import { useState, useEffect, useRef } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function BodyHeader({ themeStyles }) {
    const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
    const [dropdownOption, setDropdownOption] = useState("Filter by Region");

    const dropdownRef = useRef(null);

    const options = ["Africa", "America", "Asia", "Europe", "Oceania"].filter(
        (option) => option !== dropdownOption
    );

    const handleSelected = (option) => {
        setDropdownOption(option);
        setIsDropdownMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            console.log(dropdownRef.current);
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsDropdownMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

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
                ref={dropdownRef}
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
                                    key={option}
                                    onClick={() => handleSelected(option)}
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
