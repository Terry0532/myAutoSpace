import React from "react";

function Ancestor(props) {
    return (
        <div >
            <div className="tile is-ancestor">
                <div {...props} className="tile is-vertical is-8">

                </div>
            </div>
        </div>

    )
}

export default Ancestor;