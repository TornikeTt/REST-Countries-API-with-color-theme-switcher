function Countryitem({
    imageSrc,
    countryName,
    population,
    region,
    capital,
    themeStyles,
}) {
    return (
        <div className="country-item" style={themeStyles.elementColor}>
            <div className="image-container">
                <img src={imageSrc} alt="Country flag" />
            </div>
            <div className="country-info">
                <h1 style={themeStyles.textColor}>{countryName}</h1>
                <div style={themeStyles.textColor}>
                    {/* This color only affects the "p" tag text, not the "span" text.*/}
                    <p>
                        Population: <span>{population.toLocaleString()}</span>
                    </p>
                    <p>
                        Region: <span>{region}</span>
                    </p>
                    <p>
                        Capital: <span>{capital}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Countryitem;
