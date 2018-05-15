import React from "react"

export default ({data}) => {
  return (
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
    <div key={node.id}>
      <h5>
        {node.frontmatter.title}{" "}
        <span color="#BBB">— {node.frontmatter.date}</span>
      </h5>
      <p>{node.excerpt}</p>
    </div>
  ))}
    </div>
  )
}

export const query = graphql`
query IndexQuery{
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          path
          date
          _PARENT
          parent
        }
        excerpt
      }
    }
  }
  }
`;