import React, { useContext } from 'react';
import Blog from '../components/Blog';
import { ThemeContext } from '../components/util/ThemeContext';

const Blogs = () => {
  const { theme } = useContext(ThemeContext);
  const lightTheme = theme === 'light';

  const blogPosts = [
    {
      Title: 'Speedrunning this site',
      Desc: 'Wow my back hurts right now!!',
      Date: 'October 15, 2024',
    },
    {
      Title: 'Your guide to awesome charizzma',
      Desc: 'You just gotta be born wit it',
      Date: 'October 12, 2024',
    },
    {
      Title: 'LinkedIn: A Complete Guide',
      Desc: 'Awesome sauce guide that will teach you about coffee chats and connecting woooo this is so awesome wow im so impressed',
      Date: 'October 10, 2024',
    },
  ]

  return (
    <div className='ledger'> 
      <div className='bl-title text-center my-16 noto-home text-2xl'>blogs</div>
      <div className="text-center text-lg noto-normal">
        In progress right now, check soon!
      </div>
      {/* {blogPosts.map((post, index) => (
        <Blog key={index} Title={post.Title} Desc={post.Desc} Date={post.Date} />
      ))} */}
    </div>
  )
}

export default Blogs;
