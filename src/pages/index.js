import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from '../components/home'

const IndexPage = (props) => (
  <>
    <Layout {...props}>
   
    <SEO title="Home" />
    <Home />
    
    </Layout>

  </>
)

export default IndexPage
