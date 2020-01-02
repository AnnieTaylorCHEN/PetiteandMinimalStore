import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data: post }) => (
  <Layout>
    <div>
      <h1 className="blog__post-title">
        {post.markdownRemark.frontmatter.title}
      </h1>
      <h4 className="blog__post-date">
        posted {post.markdownRemark.frontmatter.date} -{" "}
        {post.markdownRemark.timeToRead}{" "}
        {post.markdownRemark.timeToRead > 1 ? "minutes" : "minute"} to read
      </h4>

      <div
        className="blog__post-text"
        dangerouslySetInnerHTML={{ __html: post.markdownRemark.html }}
      />
    </div>
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        date(fromNow: true)
      }
    }
  }
`
