import React from "react";

import Img from 'gatsby-image'
import { useStaticQuery, graphql, Link} from 'gatsby';
import './gallery.styles.css'
import Button from '../button/button.component'

export default function GalleryHomePage() {

  const data = useStaticQuery(graphql`

  query MyQuery {
    # Arthur_en_Yvonne
    arthurEnYvonne: file(relativePath: { eq: "gallery/Arthur_en_Yvonne/Ceremony-7.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          src
          srcSet
          aspectRatio
          base64
          sizes
        }
      }
    }
    # end
    # Maarten_en_Heiline
    maartenEnHeiline: file(relativePath: { eq: "gallery/Maarten_en_Heiline/Ceremony-28.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          src
          srcSet
          aspectRatio
          base64
          sizes
        }
      }
    }
    # end 
    # Manuel_en_Marleen
    manuelEnMarleen: file(relativePath: { eq: "gallery/Manuel_en_Marleen/Ceremony-30.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          src
          srcSet
          aspectRatio
          base64
          sizes
        }
      }
    }
    # end 
    # Martijn_en_Marscha
    martijnEnMarscha: file(relativePath: { eq: "gallery/Martijn_en_Marscha/Ceremony-40.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          src
          srcSet
          aspectRatio
          base64
          sizes
        }
      }
    }
    # end 
    # Mathijs_en_Noortje
    mathijsEnNoortje: file(relativePath: { eq: "gallery/Mathijs_en_Noortje/Ceremony-25.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          src
          srcSet
          aspectRatio
          base64
          sizes
        }
      }
    }
    # end 
    # Omer_en_Ayse
    omerEnAyse: file(relativePath: { eq: "gallery/Omer_en_Ayse/Ceremony-2.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          src
          srcSet
          aspectRatio
          base64
          sizes
        }
      }
    }
  }
    # end 
    # end all queries
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
            <Img fluid={data.maartenEnHeiline.childImageSharp.fluid} alt=""/>
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
            <Img fluid={data.mathijsEnNoortje.childImageSharp.fluid} alt=""/>
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
            <Img fluid={data.omerEnAyse.childImageSharp.fluid} alt=""/>
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
              <Img fluid={data.arthurEnYvonne.childImageSharp.fluid} alt=""/>
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
              <Img fluid={data.manuelEnMarleen.childImageSharp.fluid} alt=""/>
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
              <Img fluid={data.martijnEnMarscha.childImageSharp.fluid} alt=""/>
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
