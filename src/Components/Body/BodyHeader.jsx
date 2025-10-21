import { useState, useEffect, useRef } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function BodyHeader({
    themeStyles,
    dropdownOption,
    setDropdownOption,
    inputValue,
    setInputValue,
}) {
    const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);

    const dropdownRef = useRef(null);

    const options = ["Africa", "Americas", "Asia", "Europe", "Oceania"].filter(
        (option) => option !== dropdownOption
    );

    const handleSelected = (option) => {
        setDropdownOption(option);
        setIsDropdownMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
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
        <section className="Body-header" role="search-filter">
            <div className="input-wrapper" style={themeStyles.elementColor}>
                <IoIosSearch
                    className="search-icon"
                    style={themeStyles.textColor}
                />
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Search for a country..."
                    style={themeStyles.textColor}
                />
            </div>
            <div
                className="dropdown-container"
                ref={dropdownRef}
                style={{
                    "--placeholder-color": themeStyles.textColor.color,
                    ...themeStyles.elementColor,
                }}
            >
                <button
                    type="button"
                    className="selected"
                    onClick={() => setIsDropdownMenuOpen(!isDropdownMenuOpen)}
                >
                    <span style={themeStyles.textColor}>{dropdownOption}</span>
                    <MdOutlineKeyboardArrowDown style={themeStyles.textColor} />
                </button>

                {isDropdownMenuOpen && (
                    <div className="options" style={themeStyles.elementColor}>
                        <ul style={themeStyles.textColor}>
                            {options.map((option) => (
                                <li
                                    key={option}
                                    onClick={() => handleSelected(option)}
                                >
                                    <button type="button">{option}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </section>
    );
}

export default BodyHeader;
