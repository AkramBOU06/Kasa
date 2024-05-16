import React from "react";
import Banner from "../components/banner/Banner";
import Collapse from "../components/collapse/Collapse";
import aboutBannerImage from "../assets/images/banner/aboutBanner.png";
import CollapseData from "../datas/collapses.json";
import "../pages/_about.scss"; // Chemin mis à jour pour le fichier SCSS

function About() {
    return (
        <main className="about-page">
            <Banner image={aboutBannerImage} titre="Fiabilité" />
            <section className="about-section">
                {CollapseData.map((item, index) => {
                    return (
                        <Collapse key={index} title={item.title} content={item.content} />
                    )
                })}
            </section>
        </main>
    )
}

export default About;
