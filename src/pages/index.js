import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {

    return (
      <div className="test">
        <h1>INDEX.JS</h1>
      </div>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          htmlAst
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
