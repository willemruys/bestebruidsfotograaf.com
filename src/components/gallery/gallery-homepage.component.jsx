import React from "react"

import img1 from "../../images/gallery/Ceremony-15c.jpg"
import img2 from "../../images/gallery/Ceremony-18.jpg"
import img3 from "../../images/gallery/Ceremony-22.jpg"

import img8 from "../../images/gallery/Ceremony-29.jpg"
import img9 from "../../images/gallery/Ceremony-30.jpg"
import img10 from "../../images/gallery/Ceremony-32-2.jpg"


import Button from "../button/button.component"

import "./gallery.styles.css"

const GalleryHomePage = () => (
<div class="site-section">
<div class="container">

<div class="row mb-5 ">
      <div class="col-md-7 text-center mx-auto">
        <h2 class="serif">Mijn portfolio</h2>
      </div>
</div>
<div class="row"> 
  <div class="column">
      <img class="img-fluid" src={img1} ></img>
      <img class="img-fluid" src={img2} ></img>
      <img class="img-fluid" src={img3} ></img>
  </div>
  <div class="column">
      <img class="img-fluid" src={img8} ></img>
      <img class="img-fluid" src={img9} ></img>
      <img class="img-fluid" src={img10} ></img>
  </div>
  </div>
  <div style={{textAlign: 'center', marginTop: '40px'}}>
    <Button CTA="bekijk meer foto's" ctaLink="/portfolio"/>
  </div>
</div>
</div>
)

export default GalleryHomePage;

