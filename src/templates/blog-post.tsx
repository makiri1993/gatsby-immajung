import * as React from 'react'
import Wrapper from '../components/blogpost/Wrapper'

interface BlogPostTemplateProbs {
  data: {
    post: PostDetail,
  }
}

const BlogPostTemplate = ({
  data,
}) => {
  const PostContent = data
  console.log(PostContent.markdownRemark.html)
  return (
      <Wrapper blogpostcontent={PostContent.markdownRemark.html} />
  )
}
export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
