import * as React from 'react'
import styled from 'react-emotion'
import Slider from '../components/slider/Slider';
import SliderItem from '../components/slider/SliderItem';
import { margins } from '../styles/variables'



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
        <h1>immajung</h1>
        <SliderContainerMobile>
          <Slider>
            <SliderItem/>
            <SliderItem/>
            <SliderItem/>
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
