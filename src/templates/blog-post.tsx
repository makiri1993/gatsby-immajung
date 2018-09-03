import * as React from 'react'
import Helmet from 'react-helmet'
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
  return (
    <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{PostContent.markdownRemark.frontmatter.title}</title>
          <link rel="canonical" href="https://www.immajung.com" />
          <meta name="description" content={PostContent.markdownRemark.frontmatter.description} />
        </Helmet>
      <Wrapper blogpostcontent={PostContent.markdownRemark.html} />
    </div>
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
