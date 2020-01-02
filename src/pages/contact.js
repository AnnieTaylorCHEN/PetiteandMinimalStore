import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact</h1>
    <section className="links-text">
      <div className="links-contact">
        <h3>Online Customer Service</h3>
        <h4>service@petiteandminimal.com</h4>
      </div>

      <div className="links-contact">
        <h3>Concept Store</h3>
        <h4>Address: 124 Queen Avenue, New York, USA</h4>
        <h4>Phone: +1 876-897-23</h4>
        <h4>Email: newyork@petiteandminimal.com</h4>
      </div>

      <div className="links-contact">
        <h3>Studio</h3>
        <h4>Address: 7863 Kungsgatan, 112 76, Stockholm, Sweden</h4>
        <h4>Phone: +46 079-821-567</h4>
        <h4>Email: studio@petiteandminimal.com</h4>
      </div>

      <div className="links-contact">
        <h3>World Sale Agency</h3>
        <h4>Address: 88 Albert Embankment, Vauxhall, Lambeth, London </h4>
        <h4>Phone: +44 20 7123 1234</h4>
        <h4>Email: worldsale@petiteandminimal.com</h4>
      </div>
    </section>
  </Layout>
)

export default Contact
