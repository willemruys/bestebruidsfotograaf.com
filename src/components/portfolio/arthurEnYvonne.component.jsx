import React from "react";
import { useStaticQuery, graphql} from 'gatsby';
import Button from "../button/button.component"
import './portfolio.styles.css';

import Gallery from '@browniebroke/gatsby-image-gallery';
import '@browniebroke/gatsby-image-gallery/dist/style.css';

export default function GalleryArthureEnYvonne (props) {
  const data = useStaticQuery (graphql`
  query ImagesForGallery {
    allFile (filter: {relativeDirectory: {eq: "gallery/Arthur_en_Yvonne"}} sort: { fields: name }) {
      edges {
        node {
          childImageSharp {
            thumb: fluid(maxWidth: 270, maxHeight: 270, quality: 5) {
              src
              srcSet
              aspectRatio
            }
            full: fluid(maxWidth: 1024, quality: 5) {
              src
              srcSet
              aspectRatio
            }
          }
        }
      }
    }
  }
  `
  );

  const images = data.allFile.edges.map(({ node }) => node.childImageSharp)

 
return (
  <div class="site-section">
  <div class="row mb-5 ">
      <div class="col-md-7 text-center mx-auto">
      <p>Trouwalbum</p>
      <h2 class="serif">Arthur en Yvonne</h2>
      </div>
  </div>
  <div className='gallery-wrapper'>
    <Gallery images={images} />
  </div>
  <div class="button-wrapper" style={{textAlign: 'center'}}>
    <h2>Benieuwd wat ik voor jou kan betekenen?</h2>
    <Button CTA="Neem contact op!" class="btn btn-light" ctaLink="/contact"></Button>   
  </div>
  </div>
)

}


/*

export default function Gallery (props) {

  const data = useStaticQuery(graphql`

  query arthurEnYvonne {
    allFile(filter: {relativeDirectory: {eq: "gallery/Arthur_en_Yvonne"}}) {
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
          }
        }
      }
    }
  }
    `
  )

return (

    <div class="site-section">
    <div class="row mb-5 ">
        <div class="col-md-7 text-center mx-auto">
        <p>Trouwalbum</p>
        <h2 class="serif">Arthur en Yvonne</h2>
        </div>
    </div>

        <div class="column">
        <div class="carousel-wrapper-mobile">
            <div class="row">
                <div class="column">
                    {data.allFile.edges.map(({node}) => (
                                <Img fluid={node.childImageSharp.fluid} 
                                />
                    ))}
                </div>
            </div>
        </div>
    </div>
    <div class="button-wrapper" style={{textAlign: 'center'}}>
            <h2>Benieuwd wat ik voor jou kan betekenen?</h2>
            <Button CTA="Neem contact op!" class="btn btn-light" ctaLink="/contact"></Button>   
        </div>
    </div>
)

}

*/
