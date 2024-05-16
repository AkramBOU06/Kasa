import React from 'react';

function Host (props) {
    return (
        <div className='host'>
            <span className='host__name'>{props.name}</span>
            <img className='host__image' src={props.picture} alt="Hôte"/>    
        </div>
    )
}

export default Host;