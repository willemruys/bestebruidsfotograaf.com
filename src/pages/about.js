import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero/hero.component"
import About from "../components/about/about.component"
import Video from "../components/video/video.component"
import backgroundImage from "../images/header/img_3.jpg"

const AboutPage = () => (
    <Layout>
        <Hero h1="Asim Bari" subheader="Creatief, artistiek en een tintje humor" background={backgroundImage}/>
        <About />
    </Layout>
)

export default AboutPage;