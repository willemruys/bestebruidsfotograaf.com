import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql} from 'gatsby';
import Carousel from 'react-bootstrap/Carousel';
import Button from "../button/button.component"
import './portfolio.styles.css'


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
        <div class="row"> 
                <div class="column">
                    <div class="carousel-wrapper">
                    <Carousel>
                        {data.allFile.edges.map(({node}) => (
                        <Carousel.Item>
                            <Img fluid={node.childImageSharp.fluid} 
                            className="d-block w-90"
                            />
                        </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
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
        </div>
        <div class="button-wrapper" style={{textAlign: 'center'}}>
            <h2>Benieuwd wat ik voor jou kan betekenen?</h2>
            <Button CTA="Neem contact op!" class="btn btn-light" ctaLink="/contact"></Button>   
        </div>
    </div>
)

}
