import React from 'react';
import './BlogPost.css';

const BlogPost = (style) => {
  return (
    <div className={style.className}>
      <div className="footer-item footer-left">
        <ul>
          {/* <li>
                      <a href="#">Shop</a>
                    </li>
                    <li>
                      <a href="#">Impressum</a>
                    </li>
                    <li>
                      <a href="#">Lookbook</a>
                    </li>
                    <li>
                      <a href="#">Datenschutz</a>
                    </li>
                    <li>
                      <a href="#">Sitemap</a>
                    </li> */}
        </ul>
      </div>
      <div className="footer-item footer-center">
        <h1>immajung</h1>
        <p>BERLIN BASED BRAND</p>
      </div>
      <div className="footer-item footer-right">
        <h1>Sign Up For The Newsletter</h1>
      </div>
    </div>
  );
};

export default BlogPost;
