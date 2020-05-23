import React from "react"

const Hero = (props) => (
  <div class="ftco-blocks-cover-1">
  <div class="site-section-cover overlay" style={{ backgroundImage: `url(${props.background})` }} >
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-7">
          <p>{props.title}</p>
            <h1 class="mb-3 text-primary">{props.h1}</h1>
            <p>{props.subheader}</p>
        </div>
      </div>
    </div>
  </div>
</div>
)

export default Hero;