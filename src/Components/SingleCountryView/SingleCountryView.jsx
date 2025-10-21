import "./SingleCountryView.scss";
import { FaArrowLeftLong } from "react-icons/fa6";

function SingleCountryView({
    data,
    themeStyles,
    countryName,
    setIsViewChanged,
}) {
    // Find selected country
    const selectedCountry = data.find(
        (each) => each.name.common === countryName
    );

    if (!selectedCountry) {
        return <div>Country Not Found</div>;
    }

    // --- Preprocess country data into simple variables ---
    const flag = selectedCountry.flags?.svg;
    const flagAlt = selectedCountry.flags?.alt;

    const countryNameCommon = selectedCountry.name?.common || "N/A";
    const nativeNames = selectedCountry.name?.nativeName
        ? Object.values(selectedCountry.name.nativeName)
              .map((n) => n.common)
              .join(", ")
        : "N/A";

    const population = selectedCountry.population?.toLocaleString() || "N/A";
    const region = selectedCountry.region || "N/A";
    const subregion = selectedCountry.subregion || "N/A";
    const capital = selectedCountry.capital?.[0] || "N/A";
    const topLevelDomain = selectedCountry.tld?.[0] || "N/A";

    const currencies = selectedCountry.currencies
        ? Object.values(selectedCountry.currencies).map((c) => c.name)
        : "N/A";

    const languages = selectedCountry.languages
        ? Object.values(selectedCountry.languages).join(", ")
        : "N/A";

    const borders =
        selectedCountry.borders?.length > 0 ? selectedCountry.borders : ["N/A"];

    // --- JSX ---
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
                    type="button"
                >
                    <FaArrowLeftLong /> Back
                </button>

                <div className="singleCountryView-details">
                    <div className="singleCountryView-flag-container">
                        <img
                            src={flag}
                            alt={flagAlt}
                            className="singleCountryView-flag"
                        />
                    </div>

                    <div className="singleCountryView-info">
                        <h1 style={themeStyles.textColor}>
                            {countryNameCommon}
                        </h1>

                        <div className="singleCountryView-info-meta">
                            <ul className="singleCountryView-info-list-left">
                                <li>
                                    <span style={themeStyles.textColor}>
                                        Native Name:{" "}
                                    </span>
                                    {nativeNames}
                                </li>
                                <li>
                                    <span style={themeStyles.textColor}>
                                        Population:{" "}
                                    </span>
                                    {population}
                                </li>
                                <li>
                                    <span style={themeStyles.textColor}>
                                        Region:{" "}
                                    </span>
                                    {region}
                                </li>
                                <li>
                                    <span style={themeStyles.textColor}>
                                        Sub Region:{" "}
                                    </span>
                                    {subregion}
                                </li>
                                <li>
                                    <span style={themeStyles.textColor}>
                                        Capital:{" "}
                                    </span>
                                    {capital}
                                </li>
                            </ul>

                            <ul className="singleCountryView-info-list-right">
                                <li>
                                    <span style={themeStyles.textColor}>
                                        Top Level Domain:{" "}
                                    </span>
                                    {topLevelDomain}
                                </li>
                                <li>
                                    <span style={themeStyles.textColor}>
                                        Currencies:{" "}
                                    </span>
                                    {currencies}
                                </li>
                                <li>
                                    <span style={themeStyles.textColor}>
                                        Languages:{" "}
                                    </span>
                                    {languages}
                                </li>
                            </ul>
                        </div>

                        <div className="singleCountryView-info-borders">
                            <span style={themeStyles.textColor}>
                                Border Countries:
                            </span>
                            <div className="singleCountryView-info-borders-list">
                                {borders.map((border) => (
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
