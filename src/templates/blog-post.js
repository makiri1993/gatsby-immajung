import React from 'react'
import PropTypes from 'prop-types'
import  kebabCase  from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

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
