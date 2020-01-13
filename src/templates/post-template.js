import React from "react"
import { graphql, Link } from "gatsby"
import Footer from "../components/footer"

export default ({ data: post }) => (
  <>
    <div className="blog-container">
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
      <div className="blog__links">
        <Link to="/blog"><h1>Blog</h1></Link>
        <Link to="/"><h1>Home</h1></Link>
      </div>
    </div>
    
    <Footer />
  </>
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
