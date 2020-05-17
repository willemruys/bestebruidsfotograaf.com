import React from "react"

//about images 
import profielFoto from "../../images/asim-profiel/asim.jpg"

const About = () => (

<div class="site-section bg-black about-me">
<div class="container">
  <div class="row align-items-center">
    <div class="col-md-6 mb-5 mb-md-0">
      <img src={profielFoto} alt="Image" class="img-fluid"></img>
    </div>
    <div class="col-md-5 ml-auto">
      <h3 class="text-white mb-5">Over mij</h3>
      <blockquote class="quote-29281">
       <p>Ik ben een artistieke en creatieve fotograaf met een tikje humor. </p>
      </blockquote>
      <p>Ik probeer elk moment van een huwelijk zo goed mogelijk vast te leggen. Ik sta bekend om het gebruik van natuurlijk licht, en een mooie combinatie tussen de personen en natuur</p>
      <div class="social_29128 white mt-5">
       <a href="https://www.facebook.com/pages/category/Artist/Asim-Bari-Fotografie-357552164298168/"><span class="icon-facebook"></span></a>  
       <a href="https://www.instagram.com/asimbarifotografie/?hl=en"><span class="icon-instagram"></span></a>  
      </div>
    </div>
  </div>
</div>
</div>

)

export default About;
