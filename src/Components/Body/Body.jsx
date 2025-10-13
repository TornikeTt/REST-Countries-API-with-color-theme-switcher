import BodyHeader from "./BodyHeader";

import "./Body.scss";

function Body({ themeStyles }) {
    return (
        <div className="Body">
            <div className="Body_container">
                <BodyHeader themeStyles={themeStyles} />
            </div>
        </div>
    );
}

export default Body;
