import * as React from 'react'
import styled from 'react-emotion'
import Helmet from 'react-helmet'
import BlogPostCard from '../components/blogpostItemDesktop/BlogPostItemDesktop'
import Slider from '../components/slider/Slider'
import SliderItem from '../components/slider/SliderItem'
import { margins } from '../styles/variables'

interface IndexProps {
  data: {
    allMarkdownRemark: {
      edges: PostExcerptNode[];
    },
  }
}

interface IndexState {}

export default class Index extends React.Component<IndexProps, IndexState> {
  constructor(props: IndexProps) {
    super(props)
    this.state = {}
  }
  data: {
    allMarkdownRemark: { edges }
  }
  public render() {
    return (
      <MainContainer>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Blog | immajung - when streetwear meets it</title>
          <link rel="canonical" href="https://www.immajung.com" />
          <meta name="description" content="immajung  streetwear brand from germany."></meta>
        </Helmet>
        <SliderContainerMobile>
          <Slider>
         { this.props.data.allMarkdownRemark.edges.map((post, index) => (
            <SliderItem cat={post.node.frontmatter.category} imgsrc={post.node.frontmatter.featuredImage} title={post.node.frontmatter.title} preText={post.node.excerpt} link={post.node.fields.slug}/>
          ))}
          </Slider>
        </SliderContainerMobile>
          <BlogContainerDesktop>
          { this.props.data.allMarkdownRemark.edges.map((post, index) => (
            <BlogPostCard cat={post.node.frontmatter.category} imgsrc={post.node.frontmatter.featuredImage} title={post.node.frontmatter.title} preText={post.node.excerpt} link={post.node.fields.slug}/>
          ))}
          </BlogContainerDesktop>
      </MainContainer>
    )
  }
}

const MainContainer = styled('div')`
  overflow-x: hidden;
  margin-left: ${margins.small}px;
  margin-right: ${margins.small}px;
  @media (min-width: 485px) {
    overflow: visible;
  }
  @media (max-height: 570px) {
    margin-left: ${margins.extrasmall}px;
    margin-right: ${margins.extrasmall}px;
  }

`
/* Show the slider on mobile only */
const SliderContainerMobile = styled('div')`
  @media (min-width: 485px) {
    display: none;
  }
 `

const BlogContainerDesktop = styled('div')`
  margin-top: ${margins.small}px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media (max-width: 485px) {
    display: none;
  }
 `

// IndexPage.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       edges: PropTypes.array
//     })
//   })
// };

export const pageQuery = graphql`
query IndexQuery {
  allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] }
  ) {
    edges {
      node {
        id
        fields {
          slug
        }
        excerpt(pruneLength: 250)
        frontmatter {
          category
          featuredImage
          date(formatString: "MMMM DD, YYYY")
          title
        }
      }
    }
  }
}
`;
