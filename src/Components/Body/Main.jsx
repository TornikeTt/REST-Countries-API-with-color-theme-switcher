import Countryitem from "./CountryItem";
import data from "../../data.json";

function Main({ themeStyles, dropdownOption, setDropdownOption, inputValue }) {
    let filteredData;

    if (inputValue !== "") {
        filteredData = data.filter((country) => {
            return country.name
                .toLowerCase()
                .includes(inputValue.toLowerCase());
        });
        setDropdownOption("Filter by Region");
    } else {
        if (dropdownOption === "Filter by Region") {
            filteredData = data;
        } else {
            filteredData = data.filter((country) => {
                return country.region === dropdownOption;
            });
        }
    }

    return (
        <main>
            {filteredData.slice(0, 8).map((country) => (
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
    );
}

export default Main;
