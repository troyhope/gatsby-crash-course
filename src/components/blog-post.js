import React from "react"
import { graphql } from "gatsby"
import Link from "gatsby-link"

export default function Template({ data: { markdownRemark } }) {
  return (
    <div>
      <Link to="/blog">Go Back</Link>
      <hr />
      <h1>{markdownRemark.frontmatter.title}</h1>
      <h4>
        Posted by {markdownRemark.frontmatter.author} on{" "}
        {markdownRemark.frontmatter.date}
      </h4>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </div>
  )
}

export const pageBlogQuery = graphql`
  query BlogPostQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`
