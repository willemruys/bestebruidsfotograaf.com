import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql} from 'gatsby';
import Button from "../button/button.component"
import './portfolio.styles.css'


export default function Gallery (props) {

  const data = useStaticQuery(graphql`

  query maartenEnHeiline {
    allFile(filter: {relativeDirectory: {eq: "gallery/Maarten_en_Heiline"}}) {
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
        <h2 class="serif">Maarten en Heiline</h2>
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
