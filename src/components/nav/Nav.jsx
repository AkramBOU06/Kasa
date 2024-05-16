import React from "react";
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="nav">
            <Link className="nav__homeLink" to="/">
                ACCUEIL
            </Link>
            <Link className="nav__aboutLink" to="/about">
                A PROPOS
            </Link>
        </nav>
    )
}

export default Nav;