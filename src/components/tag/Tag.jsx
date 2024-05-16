import React from "react";

function Tag ({ name }) {
    return (
        <div className="tag">
            <span className="tag__button">{name}</span>
        </div>
    )
}

export default Tag;