import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <section className="links-text">
      <p>
        Established in 2020, by Annie Taylor Chen, Petite &amp; Minimal makes
        eco-friendly clothes for petite ladies to be seen in, and to believe in.{" "}
      </p>

      <p>
        Our label is inspired by minimal Scandinavian style, but also made with
        care, craftsmanship and quality. Instead of focusing on seasonal trends
        Petite &amp; Minimal collections stay true to our philosophy. We believe
        that fashion should be comfortable, lasting, an extension of our natural
        world. That is why we source the best materials and process them in the
        most environment friendly way.{" "}
      </p>

      <p>
        We also believe that technology can change the world for the better, so
        we have a brand new business model. We make clothes only for you, our
        dear customers. Our clothes will truly fit you, made to order and we
        have confidence it will accompany you for a long time before we take it
        back and make it into something new again.{" "}
      </p>
    </section>
  </Layout>
)

export default About
