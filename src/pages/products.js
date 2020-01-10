import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"


const Products = props => {
  const { data, shop, lang, categorySlug } = props
  const env = process.env.NODE_ENV

  return (
  
  <Layout>
  
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {/* Product list */}
        {data.map((product, index) => {
          const srcImg = `https:${product.image.file.url}?fm=jpg&q=70`
          const productSlug = product.name.trim().toLowerCase().replace(/\s/gm, '-')
          const productLink = env!== 'production' ? `/${shop}/${lang}/${categorySlug}/${productSlug}` : `/${lang}/${categorySlug}/${productSlug}`
          return (
            <div
              key={index}
              style={{
                margin: "1em",
              }}
            >
              <Link to={productLink} aria-label={product.name}>
                <img 
                style={{ maxWidth: 500 }} 
                src={srcImg} 
                alt={product.name} />
                <h3>{product.name}</h3>
                <p>Reference: {product.reference}</p>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  </Layout>)
}

// export const query = graphql`
//   {
//     allContentfulProduct {
//       edges {
//         node {
//           id
//           slug
//           name
//           image {
//             fluid(maxWidth: 800) {
//               ...GatsbyContentfulFluid_tracedSVG
//             }
//           }
//         }
//       }
//     }
//   }
// `

export default Products
