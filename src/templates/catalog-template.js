import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Products from '../components/products'
import SEO from '../components/seo'

export default props => {
    const {
        pageContext: {
            language, shipping, pageTitle, categorySlug},
            data } = props

     return (
         <Layout>
             <SEO title={pageTitle} />
             <Products 
                shop={shipping.toLowerCase()}
				lang={language.toLowerCase()}
                categorySlug={categorySlug}
				data={data.contentfulCountry.catalog.categories.products} />
         </Layout>
     )
}

export const query = graphql`
	query ($shipping: String!, $language: String!)  {
  contentfulCountry (node_locale: { eq: $language }, code: { eq: $shipping }) {
    node_locale
    code
    catalog {
      categories {
        name
        node_locale
        contentful_id
        products {
            id
          name
          reference
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
}
`
