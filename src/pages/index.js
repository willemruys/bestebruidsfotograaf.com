import React from "react";
import Layout from "../components/layout";
import About from "../components/about/about.component";
import HeroHomepage from "../components/hero-homepage/hero-homepage";
// import Video from "../components/video/video.component"
import GalleryHomePage from "../components/gallery/gallery-homepage.component.jsx";
import Review from "../components/review/review.component";
//import BlogHomePageComponent from "../components/blog-homepage/blog-homepage.component"

const IndexPage = () => (
<Layout>
  <HeroHomepage h1="Bruidsfotograaf en huwelijksreportages" subheader="Ook benieuwd wat ik voor je kan betekenen?" CTA="Neem contact op" ctaLink="/contact"></HeroHomepage>
  <GalleryHomePage />
  <About />
  <Review />
</Layout>
)

export default IndexPage;
