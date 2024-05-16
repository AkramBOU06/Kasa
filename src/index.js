/* Importation de la bibliothèque React */
import React from 'react';

/* Importation de la fonction ReactDOM du package 'react-dom' */
import ReactDOM from "react-dom/client";

/* Importation de BrowserRouter, Routes et Route depuis 'react-router-dom' */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* Importation des composants de pages */
import Home from './pages/Home';
import PageLogement from "./pages/PageLogement";
import About from "./pages/About";
import Error from './pages/Error';

/* Importation des composants d'en-tête et de pied de page */
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

/* Importation des styles */
import "./styles/index.scss"; 

/* Création d'un point de départ ReactDOM dans la div avec l'identifiant "root" */
const root = ReactDOM.createRoot(document.getElementById("root"));

/* Rendu du composant principal */
root.render(
    /* Utilisation de StrictMode pour effectuer des vérifications supplémentaires */
    <React.StrictMode>
        {/* Utilisation du composant Router pour gérer la navigation */}
        <Router>
            <div>
                {/* Affichage du composant d'en-tête */}
                <Header />
                {/* Définition des routes avec le composant Routes */}
                <Routes>
                    {/* Route pour la page d'accueil */}
                    <Route path="/" element={<Home />} />
                    {/* Route pour les pages de logement avec un paramètre d'identifiant */}
                    <Route path="/logement/:id" element={<PageLogement />} />
                    {/* Route pour la page À propos */}
                    <Route path="/about" element={<About />} />
                    {/* Route par défaut en cas de correspondance de route incorrecte */}
                    <Route path="*" element={<Error />} />
                    <Route path="/logement/*" element={<Error />} />
{/* Route par défaut pour les autres cas */}
<Route path="*" element={<Error />} />
                    
                </Routes>
                {/* Affichage du composant de pied de page */}
                <Footer />
            </div>
        </Router>
    </React.StrictMode>
);
