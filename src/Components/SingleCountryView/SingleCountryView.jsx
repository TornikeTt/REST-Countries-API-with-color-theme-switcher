import "./SingleCountryView.scss";
import data from "../../data.json";

import { FaArrowLeftLong } from "react-icons/fa6";

function SingleCountryView({ themeStyles, countryName, setIsViewChanged }) {
    const selectedCountry = data.find((each) => each.name === countryName);

    if (!selectedCountry) {
        return <div>Country Not Found</div>;
    }

    return (
        <div className="singleCountryView-container">
            <div className="singleCountryView">
                <button
                    style={{
                        ...themeStyles.elementColor,
                        ...themeStyles.textColor,
                    }}
                    onClick={() => setIsViewChanged(false)}
                    className="singleCountryView-backButton"
                >
                    <FaArrowLeftLong />
                    Back
                </button>

                <div className="singleCountryView-details">
                    <div className="singleCountryView-flag-container">
                        <img
                            src={selectedCountry.flags?.svg}
                            alt={`Flag of ${selectedCountry.name}`}
                            className="singleCountryView-flag"
                        />
                    </div>

                    <div className="singleCountryView-info">
                        <h1 style={themeStyles.textColor}>
                            {selectedCountry.name}
                        </h1>

                        <div className="singleCountryView-info-meta">
                            <ul className="singleCountryView-info-list-left">
                                <li>
                                    <span style={themeStyles.textColor}>
                                        Native Name:{" "}
                                    </span>
                                    {selectedCountry.nativeName}
                                </li>
                                <li>
                                    <span style={themeStyles.textColor}>
                                        Population:{" "}
                                    </span>
                                    {selectedCountry.population?.toLocaleString()}
                                </li>
                                <li>
                                    <span style={themeStyles.textColor}>
                                        Region:{" "}
                                    </span>
                                    {selectedCountry.region}
                                </li>
                                <li>
                                    <span style={themeStyles.textColor}>
                                        Sub Region:
                                    </span>{" "}
                                    {selectedCountry.subregion}
                                </li>
                                <li>
                                    <span style={themeStyles.textColor}>
                                        Capital:
                                    </span>{" "}
                                    {selectedCountry.capital || "N/A"}
                                </li>
                            </ul>
                            <ul className="singleCountryView-info-list-right">
                                <li>
                                    <span style={themeStyles.textColor}>
                                        Top Level Domain:{" "}
                                    </span>
                                    {selectedCountry.topLevelDomain}
                                </li>
                                <li>
                                    <span style={themeStyles.textColor}>
                                        Currencies:{" "}
                                    </span>
                                    {selectedCountry.currencies?.[0]?.name}
                                </li>
                                <li>
                                    <span style={themeStyles.textColor}>
                                        Languages:{" "}
                                    </span>
                                    {selectedCountry.languages
                                        ?.map((lang) => lang.name)
                                        .join(", ")}
                                </li>
                            </ul>
                        </div>

                        <div className="singleCountryView-info-borders">
                            <span style={themeStyles.textColor}>
                                Border Countries:
                            </span>

                            <div className="singleCountryView-info-borders-list">
                                {selectedCountry.borders?.map((border) => (
                                    <span
                                        key={border}
                                        style={{
                                            ...themeStyles.elementColor,
                                            ...themeStyles.textColor,
                                        }}
                                        className="border-country-item"
                                    >
                                        {border}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleCountryView;
