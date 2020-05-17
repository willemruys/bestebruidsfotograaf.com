import React from "react" 
import img1 from "../../images/img_1.jpg"

const Video = () => (
    <div class="site-section">
  <div class="container">
    <div class="row mb-5 ">
      <div class="col-md-7 text-center mx-auto">
        <span class="subtitle-39293">sfeer impressie</span>
        <h2 class="serif">Bekijk mijn video</h2>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <a href="" data-fancybox  class="btn-video_38929">
          <span><span class="icon-play"></span></span>
          <img src={img1} alt="Image" class="img-fluid"></img>
        </a>
      </div>
    </div>
  </div>
</div>
)

export default Video;