import React from "react";
import { useStaticQuery, graphql} from 'gatsby';
// background header
import Button from "../button/button.component"

export default function Hero(props) {

    const data = useStaticQuery(graphql`

    query Hero {
        header: allFile(filter: {relativePath: {eq: "gallery/Arthur_en_Yvonne/Ceremony-49.jpg"}}) {
          nodes {
            childImageSharp {
              fluid(jpegQuality: 100) {
                src
                srcSet
              }
            }
          }
        }
      }
      
    `
    )

    return (
        <div class="ftco-blocks-cover-1">
            <div class="site-section-cover overlay" style={{ backgroundImage: `url(${data.header.nodes[0].childImageSharp.fluid.src})`, display:'flex', justifyContent:'center' }} >
                <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-7">
                    <p>{props.title}</p>
                        <h1 class="mb-3 text-primary">{props.h1}</h1>
                        <p>{props.subheader}</p>
                        <Button CTA={props.CTA} ctaLink={props.ctaLink} class="btn btn-primary"/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

