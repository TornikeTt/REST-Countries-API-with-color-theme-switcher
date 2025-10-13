import BodyHeader from "./BodyHeader";
import Main from "./Main";

import "./Body.scss";

function Body({ themeStyles }) {
    return (
        <div className="Body">
            <div className="Body-container">
                <BodyHeader themeStyles={themeStyles} />
                <Main themeStyles={themeStyles} />
            </div>
        </div>
    );
}

export default Body;
