import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"


const HomeBlogSection = () => {

  const {
    allMarkdownRemark: { edges }
  } =useStaticQuery(graphql`
  {
    allMarkdownRemark (
      limit: 3
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {fields: {sourceName: {eq: "blog"}}}
    ) {
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            title
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 300, maxHeight: 250) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`)

  
  return (
    <>
      <div className="blog-container">
        <h4>Latest from our blog</h4>
        <div className="home__blog-grid">
        {edges.map(({ node }) => (
          <div key={node.id} className="blog__post">
            <Link to={`/posts${node.fields.slug}`}>
              <Img
                sizes={node.frontmatter.featuredImage.childImageSharp.sizes}
              />
              <h3 className="blog__post-title">
                {node.frontmatter.title}
              </h3>
            </Link>
          </div>
        ))}
        </div>
      </div>
   
    </>
  )
}

export default HomeBlogSection

// export const query = useStaticQuery(graphql`
//   {
//     allMarkdownRemark (
//       limit: 3
//       sort: { order: DESC, fields: [frontmatter___date] }
//       filter: {fields: {sourceName: {eq: "blog"}}}
//     ) {
//       edges {
//         node {
//           fields {
//             slug
//           }
//           id
//           frontmatter {
//             title
//             featuredImage {
//               childImageSharp {
//                 sizes(maxWidth: 300, maxHeight: 250) {
//                   ...GatsbyImageSharpSizes
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `)
