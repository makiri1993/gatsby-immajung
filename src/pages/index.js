import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import LatestBlogPost from '../components/LatestBlogPost/LatestBlogPost';
import BlogPost from '../components/BlogPost/BlogPost';
import './index.css';

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageProperties: null
    };
  }
  searchForImg(children) {
    children.forEach(element => {
      if (element.tagName == 'img') {
        this.state.imageProperties = element.properties;
        return;
      }
      if (element.children != null) {
        this.searchForImg(element.children);
      }
    });
  }

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const latestPost = posts[1].node;
    console.log(latestPost);
    const childrenLatestPost = latestPost.htmlAst.children;
    this.searchForImg(childrenLatestPost);

    return (
      <div className="container-layout">
        <div className="latestBlogPostComp">
          <p>
            <Link className="" to={latestPost.fields.slug}>
              {latestPost.frontmatter.title}
            </Link>
            <span> &bull; </span>
            <small>{latestPost.frontmatter.date}</small>
          </p>
          <img className="blogpost-img" src={this.state.imageProperties.src} />
          {latestPost.excerpt}
          <br />
          <br />
          <Link className="button is-small" to={latestPost.fields.slug}>
            Keep Reading →
          </Link>
        </div>
        <div className="blogPostsComp">
          {posts.map(
            ({ node: post }, index) =>
              index < 1 ? null : (
                <div className="blogpost-container">
                  <p>
                    <Link className="blog-heading" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <small>{post.frontmatter.date}</small>
                  </p>
                  <p className="blog-Content">
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="blog-Detailbutton" to={post.fields.slug}>
                      Keep Reading →
                    </Link>
                  </p>
                </div>
              )
          )}
        </div>
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

// (
//   <div
//     className="content"
//     style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
//     key={post.id}
//   >
//     <p>
//       <Link className="has-text-primary" to={post.fields.slug}>
//         {post.frontmatter.title}
//       </Link>
//       <span> &bull; </span>
//       <small>{post.frontmatter.date}</small>
//     </p>
//     <p>
//       {post.excerpt}
//       <br />
//       <br />
//       <Link className="button is-small" to={post.fields.slug}>
//         Keep Reading →
//       </Link>
//     </p>
//   </div>
// )
