import React, { useState, useRef, useEffect } from 'react';
import ArrowTop from '../../assets/images/Arrows/ArrowTop.png';

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            contentRef.current.style.maxHeight = `400px`;
        } else {
            contentRef.current.style.maxHeight = '0px';
        }
    }, [isOpen]);

    return (
        <div className={`collapse ${isOpen ? "open" : ""}`}>
            <div className="collapse__header" onClick={() => setIsOpen(!isOpen)}>
                <h2>{title}</h2>
                <button className={`collapse__header-button ${isOpen ? "open" : ""}`}>
                    <img src={ArrowTop} alt="Chevron" className={`chevron-up`} />
                </button>
            </div>
            <div className={`collapse__content ${isOpen ? "open" : ""}`} ref={contentRef}>
                {content}
            </div>
        </div>
    );
}

export default Collapse;
