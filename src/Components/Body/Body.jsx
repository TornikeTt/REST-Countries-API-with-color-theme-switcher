import { useState } from "react";

import BodyHeader from "./BodyHeader";
import Main from "./Main";

import "./Body.scss";

function Body({ themeStyles }) {
    const [inputValue, setInputValue] = useState("");
    const [dropdownOption, setDropdownOption] = useState("Filter by Region");

    return (
        <div className="Body">
            <div className="Body-container">
                <BodyHeader
                    themeStyles={themeStyles}
                    dropdownOption={dropdownOption}
                    setDropdownOption={setDropdownOption}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                />
                <Main
                    themeStyles={themeStyles}
                    dropdownOption={dropdownOption}
                    setDropdownOption={setDropdownOption}
                    inputValue={inputValue}
                />
            </div>
        </div>
    );
}

export default Body;
