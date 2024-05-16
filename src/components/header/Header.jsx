import logo from "../../assets/images/logo/kasaLogo.svg";
import Nav from "../nav/Nav";

function Header () {
    return (
        <header className="header">
            <figure className="header__fig">
                <img src={logo} alt="Logo de l'agence immobilière Kasa"/>
            </figure>
            <Nav />
        </header>
    )
}

export default Header;