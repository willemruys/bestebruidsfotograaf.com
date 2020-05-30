import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./header.styles.css"

import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav"

const Header = ({ siteTitle }) => (

<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Navbar.Brand href="/">Asim Bari bruidsfotografie</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Link to="/about" activeStyle={{textDecoration: 'underline' }}>About</Link>
      <Link to="/portfolio" activeStyle={{textDecoration: 'underline' }}>Portfolio</Link>
      <Link to="/contact" activeStyle={{textDecoration: 'underline' }}>Contact</Link>
      <Link to="/tarieven" activeStyle={{textDecoration: 'underline' }}>Tarieven</Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
