import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = props => (
  <Layout {...props}>
    <SEO title="404: Not found" />
    <div className="blog-container">
      <div className="glitch" data-text="404">404</div> 
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
