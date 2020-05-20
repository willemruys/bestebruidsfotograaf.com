import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero/hero.component"
import Gallery from "../components/gallery/gallery.component"
import backgroundImage from "../images/header/Ceremony.jpg"

const GalleryPage = () => (
    <Layout>
        <Hero h1="Mijn portfolio" subheader="Ik wil elk moment van jullie dag zo goed mogelijk vastleggen" background={backgroundImage}/>
        <Gallery />
    </Layout>    
)

export default GalleryPage;