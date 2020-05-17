import React from "react"

import img1 from "../../images/img_1.jpg"
import img2 from "../../images/img_2.jpg"
import img3 from "../../images/img_3.jpg"

const Blog = () => (
<div class="site-section bg-white">
  <div class="container">
    <div class="row mb-5 ">
      <div class="col-md-7 text-center mx-auto">
        <h2 class="serif">Blog</h2>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="post-entry-1 h-100">
          <a href="single.html">
            <img src={img1} alt="Image"
             class="img-fluid"></img>
          </a>
          <div class="post-entry-1-contents">
            
            <h2><a href="single.html">Lorem ipsum dolor sit amet</a></h2>
            <span class="meta d-inline-block mb-3">July 17, 2019 <span class="mx-2">by</span> <a href="#">Asim</a></span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="post-entry-1 h-100">
          <a href="single.html">
            <img src={img2} alt="Image"
             class="img-fluid"></img>
          </a>
          <div class="post-entry-1-contents">
            
            <h2><a href="single.html">Lorem ipsum dolor sit amet</a></h2>
            <span class="meta d-inline-block mb-3">July 17, 2019 <span class="mx-2">by</span> <a href="#">Asim</a></span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.</p>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="post-entry-1 h-100">
          <a href="single.html">
            <img src={img3} alt="Image"
             class="img-fluid"></img>
          </a>
          <div class="post-entry-1-contents">
            
            <h2><a href="single.html">Lorem ipsum dolor sit amet</a></h2>
            <span class="meta d-inline-block mb-3">July 17, 2019 <span class="mx-2">by</span> <a href="#">Asim</a></span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
)

export default Blog;

