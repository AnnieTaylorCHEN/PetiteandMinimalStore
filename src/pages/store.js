 
import React from 'react'
import {graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'

const Store = (props) => {

  const {
    allContentfulCountry: { edges }
  } = useStaticQuery(graphql`
    {
      allContentfulCountry {
        edges {
          node {
            name
            node_locale
            code
          }
        }
      }
    }
  `)

  return (
    <Layout {...props}>
        <div className="store">
        <h1>Choose your region:</h1>
        {edges.map((country, index) => {
              const href = `/${country.node.code.toLowerCase()}/${country.node.node_locale.toLowerCase()}/`
                
              return (
                <div key={index}  >
                    <a title={country.node.name} href={href}>
                       <h2 className="country"> {country.node.name} </h2>
                    </a>  
                </div>
              )
            })}
        </div>
    </Layout>
    )
}

// export const query = graphql `
//  {
//   allContentfulProduct {
//     edges {
//       node {
//         id
//         name
//         image {
//           fluid {
//             tracedSVG
//             sizes
//           }
//         }
//       }
//     }
//   }
// }
// `

export default Store