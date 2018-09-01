import * as React from 'react'
import styled from 'react-emotion'
import Slider from '../components/slider/Slider';
import SliderItem from '../components/slider/SliderItem';


interface IndexProps {}

interface IndexState {}

const img: string = require('../img/test_bild.jpg')

export default class Index extends React.Component<IndexProps, IndexState> {
  constructor(props: IndexProps) {
    super(props)
    this.state = {}
  }
  public render() {
    return (
      <MainContainer>
        <Slider>
          <SliderItem><h1>1</h1></SliderItem>
          <SliderItem><h1>2</h1></SliderItem>
          <SliderItem><h1>3</h1></SliderItem>
        </Slider>
      </MainContainer>
    )
  }
}

const MainContainer = styled('div')`
  background-color: red;
  overflow: hidden;
  height: auto;
`

// IndexPage.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       edges: PropTypes.array
//     })
//   })
// };

// export const pageQuery = graphql`
//   query IndexQuery {
//     allMarkdownRemark(
//       sort: { order: DESC, fields: [frontmatter___date] }
//       filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
//     ) {
//       edges {
//         node {
//           excerpt(pruneLength: 400)
//           id
//           htmlAst
//           fields {
//             slug
//           }
//           frontmatter {
//             title
//             templateKey
//             date(formatString: "MMMM DD, YYYY")
//           }
//         }
//       }
//     }
//   }
// `;
