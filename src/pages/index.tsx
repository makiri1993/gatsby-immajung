import * as React from 'react'
import styled from 'react-emotion'
import Heroimage from '../components/heroimage/Heroimage'

import Category from '../components/category/Category'
import Pretext from '../components/pretext/Pretext'

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
        <Heroimage img={img} />
        <Pretext
          pretext="Gatsbyjs is based on Reactjs, Webpack, JavaScript and CSS. So it is
		based on my favorite technologies. Ever heard about Static Progressive Web Apps?"
        />
        <Category category="Tech" />
        <Button>read more</Button>
      </MainContainer>
    )
  }
}

const MainContainer = styled('div')`
  font-size: 2.5rem;
  width: 500px;
  height: 700px;
  margin-top: 50px;
  margin-left: 100px;
`

const Button = styled('button')`
  position: absolute;
  font-size: 1.3rem;
  margin-top: 650px;
  margin-left: -450px;
  z-index: 10000;
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
