import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Products from '../components/products'
import SEO from '../components/seo'

export default props => {
    const {
        pageContext: {
            language, shipping, pageTitle},
            data } = props

     return (
         <Layout>
             <SEO title={pageTitle} />
             <Products 
                shop={shipping.toLowerCase()}
				        lang={language.toLowerCase()}
				        data={data.allContentfulProduct.edges} />
         </Layout>
     )
}

export const query = graphql`
	query Catalog($shipping: String!, $language: String!)  {
    allContentfulProduct(filter: {category: {elemMatch: {catalog: {elemMatch: {country: {elemMatch: {marketId: {eq: $shipping}}}, node_locale: {eq: $language}}}}}}) {
    edges {
      node {
        id
        name
        reference
        category {
          name
        }
        image {
          file {
            url
          }
        }
      }
    }
  }
}
`
