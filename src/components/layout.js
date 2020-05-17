/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from '../components/header/header'

import "./styles.css"
import "./bootstrap.css"

function showYear(){
  var dt = new Date();
  return dt.getFullYear()
}


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (

<div class="site-wrap" id="home-section">
<Header />
<main>{children}</main>
  <footer class="site-footer">
  <div class="container">
    <div class="row">
      <div class="col-lg-3">
        <h2 class="footer-heading mb-2">Asim bari bruidsfotografie</h2>
        <p style={{fontSize: '12px'}}><i>Creatief, artistiek en een tikje humor</i></p>
      </div>
      <div class="col-lg-8 ml-auto">
        <div class="row">
        </div>
      </div>
    </div>
    <div class="row pt-1 mt-1 text-center">
      <div class="col-md-12">
        <div class="border-top pt-5">
          <p>
            Copyright &copy; {showYear()} All rights reserved | Template from<a href="https://colorlib.com" target="_blank" >Colorlib</a> | web development by Willem Ruys
          </p>
        </div>
      </div>
    </div>
  </div>
</footer>
</div>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
