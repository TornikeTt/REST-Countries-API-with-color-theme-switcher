import Countryitem from "./CountryItem";
import data from "../../data.json";

function Main({ themeStyles }) {
    console.log(data);
    return (
        <main>
            {data.slice(0, 8).map((country) => (
                <Countryitem
                    key={country.name}
                    themeStyles={themeStyles}
                    imageSrc={country.flags.png}
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
