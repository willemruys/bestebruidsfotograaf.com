import React from "react";

import Img from 'gatsby-image'
import { useStaticQuery, graphql, Link} from 'gatsby';
import './gallery.styles.css'
import Button from '../button/button.component'

export default function GalleryHomePage() {

  const data = useStaticQuery(graphql`

  query MyQuery {
    arthurEnYvonne: allFile(filter: {relativePath: {eq: "gallery/Arthur_en_Yvonne/Ceremony-2.jpg"}}) {
      edges {
        node {
          id
          childImageSharp {
            fluid {
              src
              srcSet
              base64
              aspectRatio
            }
          }
        }
      }
    }
    maartenEnHeiline: allFile(filter: {relativePath: {eq: "gallery/Maarten_en_Heiline/Ceremony-6.jpg"}}) {
      edges {
        node {
          id
          childImageSharp {
            fluid {
              src
              srcSet
              base64
              aspectRatio
            }
          }
        }
      }
    }
    manuelEnMarleen: allFile(filter: {relativePath: {eq: "gallery/Manuel_en_Marleen/Ceremony-2.jpg"}}) {
      edges {
        node {
          id
          childImageSharp {
            fluid {
              src
              srcSet
              base64
              aspectRatio
            }
          }
        }
      }
    }
    martijnEnMarscha: allFile(filter: {relativePath: {eq: "gallery/Martijn_en_Marscha/Ceremony-2.jpg"}}) {
      edges {
        node {
          id
          childImageSharp {
            fluid {
              src
              srcSet
              base64
              aspectRatio
            }
          }
        }
      }
    }
    mathijsEnNoortje: allFile(filter: {relativePath: {eq: "gallery/Mathijs_en_Noortje/Ceremony-5.jpg"}}) {
      edges {
        node {
          id
          childImageSharp {
            fluid {
              src
              srcSet
              base64
              aspectRatio
            }
          }
        }
      }
    }
    omerEnAyse: allFile(filter: {relativePath: {eq: "gallery/Omer_en_Ayse/Ceremony-3.jpg"}}) {
      edges {
        node {
          id
          childImageSharp {
            fluid {
              src
              srcSet
              base64
              aspectRatio
            }
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
            <Img fluid={data.maartenEnHeiline.edges[0].node.childImageSharp.fluid} alt=""/>
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
            <Img fluid={data.mathijsEnNoortje.edges[0].node.childImageSharp.fluid} alt=""/>
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
            <Img fluid={data.omerEnAyse.edges[0].node.childImageSharp.fluid} alt=""/>
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
              <Img fluid={data.arthurEnYvonne.edges[0].node.childImageSharp.fluid} alt=""/>
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
              <Img fluid={data.manuelEnMarleen.edges[0].node.childImageSharp.fluid} alt=""/>
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
              <Img fluid={data.martijnEnMarscha.edges[0].node.childImageSharp.fluid} alt=""/>
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
