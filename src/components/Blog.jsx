import React from 'react';
import '../styling/Blog.css'
const Blog = ({ Title, Desc, Date }) => {
  return (
    <div className="blog-card">
      <h2 className="blog-title">{Title}</h2>
      <p className="blog-desc">{Desc}</p>
      <p className="blog-date">{Date}</p>
    </div>
  );
};

export default Blog;
