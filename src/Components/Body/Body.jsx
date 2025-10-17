import { useCountries } from "./useCountries";

import BodyHeader from "./BodyHeader";
import Countryitem from "./CountryItem";

import "./Body.scss";

import { IoIosArrowDropleftCircle } from "react-icons/io";

function Body({ themeStyles }) {
    const {
        paginatedData,
        totalPages,
        currentPage,
        setCurrentPage,
        inputValue,
        setInputValue,
        dropdownOption,
        setDropdownOption,
        animationDirection,
        setAnimationDirection,
    } = useCountries();

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setAnimationDirection("right");
            setCurrentPage((prev) => prev - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setAnimationDirection("left");
            setCurrentPage((prev) => prev + 1);
        }
    };

    return (
        <div className="Body">
            <button className="PreviousPage">
                <IoIosArrowDropleftCircle
                    style={themeStyles.textColor}
                    className="rightArrow"
                    onClick={handlePreviousPage}
                />
            </button>

            <div className="Body-container">
                <BodyHeader
                    themeStyles={themeStyles}
                    dropdownOption={dropdownOption}
                    setDropdownOption={setDropdownOption}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                />
                <main
                    /* 
                        We use the `key` here to force React to treat the <main> element 
                        as new every time the right or left arrow is clicked, 
                        so the animation can run again.
                    */
                    key={currentPage + animationDirection}
                    className={animationDirection}
                >
                    {paginatedData.map((country) => (
                        <Countryitem
                            key={country.name}
                            themeStyles={themeStyles}
                            imageSrc={country.flags.svg}
                            countryName={country.name}
                            population={country.population}
                            region={country.region}
                            capital={country.capital}
                        />
                    ))}
                </main>
            </div>

            <button className="nextPage">
                <IoIosArrowDropleftCircle
                    style={themeStyles.textColor}
                    className="leftArrow"
                    onClick={handleNextPage}
                />
            </button>
        </div>
    );
}

export default Body;
