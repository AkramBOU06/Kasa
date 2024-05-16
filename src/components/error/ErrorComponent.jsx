import { Link } from 'react-router-dom';

function Error () {
    return (
        <div className="error">
            <p className="error__number">404</p>
            <p className="error__text">
                Oups! La page que vous demandez n'existe pas.
            </p>
            <Link className="error__link" to="/">
                Retourner sur la page d'accueil
            </Link>
        </div>
    )
}

export default Error;