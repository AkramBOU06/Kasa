import React from 'react';
import emptyStar from "../../assets/images/stars/emptyStar.png";
import fullStar from "../../assets/images/stars/fullStar.png";

function Rating (props) {
    const rating = props.score;
    const stars = [1, 2, 3, 4, 5];
    return (
        <div className='starsContainer'>
            {stars.map((star) =>
                rating >= star ? (<img className='stars' key={star.toString()} src={fullStar} alt="Étoile remplie"/>) : (<img className='stars' key={star.toString()} src={emptyStar} alt="Étoile vide"/>)
            )}
        </div>
    )
}

export default Rating;