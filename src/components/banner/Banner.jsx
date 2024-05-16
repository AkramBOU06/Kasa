import React from "react";

function Banner({ image, text }) {
    return (
        <div className="banner">
            <img className="banner__img" src={image} alt="Bannière" />
            <div className="banner__darken"></div>
            <span className="banner__text">{text}</span>
        </div>
    )
}

export default Banner;