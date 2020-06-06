import React from "react";
import { useStaticQuery, graphql} from 'gatsby';
import Button from "../button/button.component"
import './portfolio.styles.css';

import Gallery from '@browniebroke/gatsby-image-gallery';
import '@browniebroke/gatsby-image-gallery/dist/style.css';

export default function GallerymathijsEnNoortje (props) {
  const data = useStaticQuery (graphql`
  query ImagesForGallerymathijsEnNoortje {
    allFile (filter: {relativeDirectory: {eq: "gallery/Mathijs_en_Noortje"}} sort: { fields: name }) {
      edges {
        node {
          childImageSharp {
            thumb: fluid(maxWidth: 270, maxHeight: 270) {
              src
              srcSet
              aspectRatio
              base64
              sizes
              originalImg
            }
            full: fluid(maxWidth: 1024) {
              src
              srcSet
              aspectRatio
              base64
              sizes
              originalImg
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
      <h2 class="serif">Mathijs en Noortje</h2>
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

};
