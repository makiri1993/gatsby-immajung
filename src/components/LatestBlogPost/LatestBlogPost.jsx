import React from 'react';
import './LatestBlogPost.css';

const LatestBlogPost = ({ post }) => {
  console.log(post);
  return (
    <div className="container-latestBlogPost">
      <div className="blogPost-heading">
        <h1>{post.title}</h1>
      </div>
      <div className="blogPost-date">
        <h3>{props.post.date}</h3>
      </div>
      <div className="blogPost-Content">
        <div>{renderedText}</div>
        <Link to={`/Post/${props.id}`}>
          <p>read more</p>
        </Link>
        <img className="BlogPostPageImg" src={props.image} alt="" />
      </div>
    </div>
  );
};

export default LatestBlogPost;
