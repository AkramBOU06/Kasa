import React from 'react';
import logo from "../../assets/images/logo/footerLogo.png";

function Footer () {
    return (
        <footer className="footer">
            <img className="footer__logo" src={logo} alt="Logo de l'agence immobilière Kasa"/>
            <p className="footer__copyrightText">
                © 2020 Kasa. All rights reserved
            </p>
        </footer>
    )
}

export default Footer;