import React from 'react'
import { graphql } from 'gatsby'

import  useShoppingBag  from '../hooks'

import Layout from '../components/layout'
import AllProducts from '../components/allproducts'
import SEO from '../components/seo'

export default props => {
    const {
        pageContext: {
            language, shipping, pageTitle},
            data } = props
    const [ status, setStatus ] = useShoppingBag()

     return (
         <Layout 
            {...props}
            shoppingBagStatus={status}
		      	setShoppingBagStatus={setStatus}
         >
             <SEO title={pageTitle} />
             <AllProducts 
                shop={shipping.toLowerCase()}
				        lang={language.toLowerCase()}
				        data={data.allContentfulProduct.edges} />
         </Layout>
     )
}

export const query = graphql`
	query ($shipping: String, $language: String)  {
    allContentfulProduct(filter: {category: {elemMatch: {catalog: {elemMatch: {country: {elemMatch: {code: {eq: $shipping }}}}}}}, node_locale: {eq: $language}}) 
        {
          edges {
            node {
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
`


