import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero/hero.component';
import TarievenComponent from '../components/tarieven/tarieven.component'
import backgroundImage from '../images/header/Ceremony-38-min.jpg'

const TarievenPage = () => (
    <Layout>
        <Hero h1="Mijn tarieven" subheader="Mijn tarieven gaan van €995 tot €2000" background={backgroundImage}/>
        <TarievenComponent />
    </Layout>
)

export default TarievenPage