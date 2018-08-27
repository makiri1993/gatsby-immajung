import * as React from 'react'

interface BlogPostTemplateProbs {
  contentComponent?: any;
}

const BlogPostTemplate = ({
  contentComponent
}) => {
  const PostContent = contentComponent

  return (
    <section className="section">
      <h1>BLOGPOST</h1>
    </section>
  )
}
export default BlogPostTemplate

// export const pageQuery = graphql`
//   query BlogPostByID($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       id
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         title
//         description
//         tags
//       }
//     }
//   }
// `
