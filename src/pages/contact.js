import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero/hero.component"
import ContactForm from "../components/contact-form/contact-form.component"
import backgroundImage from "../images/header/Ceremony-20.jpg"

const ContactPage = () => (
    <Layout >
        <Hero h1="Benieuwd wat ik voor je kan betekenen?" subheader="Neem vrijblijvend contact met me op" background={backgroundImage}/>
        <ContactForm />
    </Layout>
)

export default ContactPage;