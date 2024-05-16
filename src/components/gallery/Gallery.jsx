import React from "react";
import { Link } from 'react-router-dom';
import Card from "../card/Card";
import logements from "../../datas/logements.json";

function Gallery () {
    return (
        <div className="gallery">
            {logements.map((logement) => {
                return (
                    <article key={logement.id}>
                        <Link to={`/logement/${logement.id}`}>
                            <Card image={logement.cover} title={logement.title} />
                        </Link>
                    </article>
                )
            })}
        </div>
    )
}

export default Gallery;