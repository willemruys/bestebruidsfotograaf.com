import React from "react";

import Img from 'gatsby-image'
import { useStaticQuery, graphql, Link} from 'gatsby';
import './gallery.styles.css'
import Button from '../button/button.component'

export default function GalleryHomePage() {

  const data = useStaticQuery(graphql`

  query MyQuery {
    maartenEnHeiline: allFile(filter: {relativeDirectory: {eq: "gallery/Maarten_en_Heiline"}}) {
      edges {
        node {
          childImageSharp {
            fluid {
              src
              srcSet
              base64
              aspectRatio
              sizes
            }
            id
          }
        }
      }
    }
      mathijsEnNoortje: allFile(filter: {relativeDirectory: {eq: "gallery/Mathijs_en_Noortje"}}) {
      edges {
        node {
          childImageSharp {
            fluid {
              src
              srcSet
              base64
              aspectRatio
              sizes
            }
            id
          }
        }
      }
    }
      omerEnAyse: allFile(filter: {relativeDirectory: {eq: "gallery/Omer_en_Ayse"}}) {
      edges {
        node {
          childImageSharp {
            fluid {
              src
              srcSet
              base64
              aspectRatio
              sizes
            }
            id
          }
        }
      }
    }
      arthurEnYvonne: allFile(filter: {relativeDirectory: {eq: "gallery/Arthur_en_Yvonne"}}) {
      edges {
        node {
          childImageSharp {
            fluid {
              src
              srcSet
              base64
              aspectRatio
              sizes
            }
            id
          }
        }
      }
    }
      manuelEnMarleen: allFile(filter: {relativeDirectory: {eq: "gallery/Manuel_en_Marleen"}}) {
      edges {
        node {
          childImageSharp {
            fluid {
              src
              srcSet
              base64
              aspectRatio
              sizes
            }
            id
          }
        }
      }
    }
      martijnEnMarscha: allFile(filter: {relativeDirectory: {eq: "gallery/Martijn_en_Marscha"}}) {
      edges {
        node {
          childImageSharp {
            fluid {
              src
              srcSet
              base64
              aspectRatio
              sizes
            }
            id
          }
        }
      }
    }
  }
  `
)

  return (

    <div class="site-section">
      <div class="container">

      <div class="row mb-5">
        <div class="col-md-7 text-center mx-auto">
          <h2 class="serif">Trouwalbums</h2>
        </div>
      </div>
      <div class="row-gallery"> 
      <div class="column-gallery">
        <div>
          <div class="gallery-card-image-wrapper">
            <Img fluid={data.maartenEnHeiline.edges[6].node.childImageSharp.fluid} alt=""/>
            <div class="description">Maarten en Heiline</div>
          </div>
          <div>
          <Button CTA="bekijk hele album" class="btn btn-light" ctaLink="/portfolio/maarten-en-heiline"></Button>
          </div>
        </div>
      </div>
      <div class="column-gallery">
        <div>
          <div class="gallery-card-image-wrapper">
            <Img fluid={data.mathijsEnNoortje.edges[1].node.childImageSharp.fluid} alt=""/>
            <div class="description">Mathijs en Noortje</div>
          </div>
          <div>
          <Button CTA="bekijk hele album" class="btn btn-light" ctaLink="/portfolio/mathijs-en-noortje"></Button>
          </div>
        </div>
      </div>
      <div class="column-gallery">
        <div>
          <div class="gallery-card-image-wrapper">
            <Img fluid={data.omerEnAyse.edges[9].node.childImageSharp.fluid} alt=""/>
            <div class="description">Omery en Ayse</div>
          </div>
          <div>
          <Button CTA="bekijk hele album" class="btn btn-light" ctaLink="/portfolio/omer-en-ayse"></Button>
          </div>
        </div>
      </div>
      </div>
      <div class="row-gallery">
        <div class="column-gallery">
          <div>
            <div class="gallery-card-image-wrapper">
              <Img fluid={data.arthurEnYvonne.edges[19].node.childImageSharp.fluid} alt=""/>
              <div class="description">Arthur en Yvonne</div>
            </div>
            <div>
          <Button CTA="bekijk hele album" class="btn btn-light" ctaLink="/portfolio/arthur-en-yvonne"></Button>
          </div>
          </div>
        </div> 
        <div class="column-gallery">
          <div>
            <div class="gallery-card-image-wrapper">
              <Img fluid={data.manuelEnMarleen.edges[20].node.childImageSharp.fluid} alt=""/>
              <div class="description">Manuel en Marleen</div>
            </div>
            <div>
            <Button CTA="bekijk hele album" class="btn btn-light" ctaLink="/portfolio/manuel-en-marleen"></Button>
          </div>
          </div>
        </div> 
        <div class="column-gallery">
          <div>
            <div class="gallery-card-image-wrapper">
              <Img fluid={data.martijnEnMarscha.edges[20].node.childImageSharp.fluid} alt=""/>
              <div class="description">Martijn en Marscha</div>
            </div>
            <div>
            <Button CTA="bekijk hele album" class="btn btn-light" ctaLink="/portfolio/martijn-en-marscha"></Button>
          </div>
          </div>
        </div> 
      </div>
      </div>
    </div>
  )
}
