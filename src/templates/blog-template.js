import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Footer from "../components/footer"

export default ({ data, pageContext }) => {
  const { currentPage, isFirstPage, isLastPage, totalPages } = pageContext
  const nextPage = `/blog/${String(currentPage + 1)}`
  const prevPage =
    currentPage - 1 === 1 ? "/blog" : `/blog/${String(currentPage - 1)}`

  return (
    <>
      <div className="blog-container">
        <h1 className="blog__title">Petite &amp; Minimal Blog</h1>
        <h4 className="blog__count">
          {data.allMarkdownRemark.totalCount} posts
        </h4>

        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className="blog__post">
            <Link to={`/posts${node.fields.slug}`}>
              <h2 className="blog__post-title">
                {node.frontmatter.title}
                <span className="blog__post-date">
                  {" "}
                  - {node.frontmatter.date}
                </span>
              </h2>
              
              <Img
                sizes={node.frontmatter.featuredImage.childImageSharp.sizes}
              />
              
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination Links */}
      <div className="pagination">
        {!isFirstPage && (
          <Link to={prevPage} rel="prev">
            Prev
          </Link>
        )}
        {/* generate a sequence of numbers with array from ({length:num}) use index to replace the value of _ which is initialized with "undefined" on each position */}
        {Array.from({ length: totalPages }, (_, index) => (
          <Link key={index} to={`/blog/${index === 0 ? "" : index + 1}`}>
            {index + 1}
          </Link>
        ))}
        {!isLastPage && (
          <Link to={nextPage} rel="next">
            Next
          </Link>
        )}
      </div>

      <Footer />
      
    </>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark (
      skip: $skip
      limit: $limit
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {fields: {sourceName: {eq: "blog"}}}
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            title
            date(formatString: "MMM Do, YYYY")
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 630, maxHeight: 400) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
          excerpt(pruneLength: 250)
        }
      }
    }
  }
`
