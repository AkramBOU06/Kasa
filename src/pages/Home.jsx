import React from "react";
import Banner from "../components/banner/Banner";
import Gallery from "../components/gallery/Gallery";
import imgHomeBanner from "../assets/images/banner/homeBanner.png";

function Home () {
    return (
        <main>
        <Banner image={imgHomeBanner} text="Chez vous, partout et ailleurs" />
        <Gallery />
        </main>
    )
}

export default Home;