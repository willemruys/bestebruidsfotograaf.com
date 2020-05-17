import React from "react"

// background header
import background from "../../images/header/Ceremony-49.jpg"
import Button from "../button/button.component"

const Hero = (props) => (
    <div class="ftco-blocks-cover-1">
        <div class="site-section-cover overlay" style={{ backgroundImage: `url(${background})`, display:'flex', justifyContent:'center' }} >
            <div class="container">
            <div class="row align-items-center">
                <div class="col-md-7">
                <p>{props.title}</p>
                    <h1 class="mb-3 text-primary">{props.h1}</h1>
                    <p>{props.subheader}</p>
                    <Button CTA={props.CTA} ctaLink={props.ctaLink}/>
                </div>
            </div>
            </div>
        </div>
    </div>
)
export default Hero;