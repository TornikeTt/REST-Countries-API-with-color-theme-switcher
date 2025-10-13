import data from "../../data.json";

function Countryitem({ themeStyles }) {
    return (
        <div className="country-item" style={themeStyles.elementColor}>
            <div className="image-container">
                <img src={data[0].flags.png} alt="Country flag" />
            </div>
            <div className="country-info">
                <h1 style={themeStyles.textColor}>{data[0].name}</h1>
                <div style={themeStyles.textColor}>
                    {/* This color only affects the "p" tag text, not the "span" text.*/}
                    <p>
                        Population: <span>{data[0].population}</span>
                    </p>
                    <p>
                        Region: <span>{data[0].region}</span>
                    </p>
                    <p>
                        Capital: <span>{data[0].capital}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Countryitem;
