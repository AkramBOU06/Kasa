import React, { useState } from "react";

function Carrousel ({ slides }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const nextImage = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevImage = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    return (
        <section className="carrousel">
            {length > 1 && (
                <p className="leftArrow" onClick={prevImage}>
                    <i className="fa-solid fa-chevron-left"></i>
                </p>
            )}
            {length > 1 && (
                <p className="rightArrow" onClick={nextImage}>
                    <i className="fa-solid fa-chevron-right"></i>
                </p>
            )}
            {slides.map((image, index) => {
                return (
                    <div key={index} className={index === current ? "slideShow active" : "slideShow"}>
                        {index === current && (
                            <img className="slideShow__image" src={image} alt="Logement de location"/>
                        )}
                        {index === current && length > 1 && (
                            <span className="slideShow__number">
                                {current + 1} / {length}
                            </span>
                        )}
                    </div>
                )
            })}
        </section>
    )
}

export default Carrousel;