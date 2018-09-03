import * as React from 'react'
import styled from 'react-emotion'
import Helmet from 'react-helmet'
import Slider from '../components/slider/Slider';
import SliderItem from '../components/slider/SliderItem';
import { margins } from '../styles/variables'

interface IndexProps {
  data: {
    allMarkdownRemark: {
      edges: PostExcerptNode[];
    }
  }
}

interface IndexState {}

const img: string = require('../img/test_bild.jpg')

export default class Index extends React.Component<IndexProps, IndexState> {
  constructor(props: IndexProps) {
    super(props)
    this.state = {}
  }

  data: {
    allMarkdownRemark: { edges }
  }
  
  public render() {
    for(var i = 0; i < this.props.data.allMarkdownRemark.edges.length; i++ ) {
      console.log("Data: " + this.props.data.allMarkdownRemark.edges[i].node.frontmatter.title)
    }
    return (
      <MainContainer>
              <Helmet>
        <meta charSet="utf-8" />
        <title>Blog | immajung - when streetwear meets it</title>
        <link rel="canonical" href="https://www.immajung.com" />
        <meta name="description" content="immajung  streetwear brand from germany."></meta>
      </Helmet>
        <h1>immajung</h1>
        <SliderContainerMobile>
          <Slider>
         { this.props.data.allMarkdownRemark.edges.map((post, index) => (
            <SliderItem title={post.node.frontmatter.title} preText={post.node.excerpt} link={post.node.fields.slug}/>
          ))}
          </Slider>
        </SliderContainerMobile>
      </MainContainer>
    )
  }
}

const MainContainer = styled('div')`
  overflow-x: hidden;
  margin-left: ${margins.small}px;
  margin-right: ${margins.small}px;
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
          date(formatString: "MMMM DD, YYYY")
          title
        }
      }
    }
  }
}
`;
