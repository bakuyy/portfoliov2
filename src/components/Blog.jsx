import React, { useState } from 'react';
import '../styling/Blog.css';

const Blog = ({ Title, Desc, Date }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 100;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const descLength = Desc ? Desc.length : 0;

  return (
    <div className="blog-card noto-normal">
      <h2 className="blog-title">{Title}</h2>
      <div className={`blog-desc ${isExpanded ? 'expanded' : ''}`}>
        {isExpanded || descLength <= maxLength
          ? Desc
          : `${Desc.substring(0, maxLength)}...`}
      </div>
      {descLength > maxLength && (
        <button 
          onClick={toggleExpand} 
          className=' read-more'
        >
          {isExpanded ? 'Show Less' : 'Read More'}
        </button>
      )}
      <p className="blog-date">{Date}</p>
    </div>
  );
};

export default Blog;
