import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Blog from '../pages/Blog'
import Projects from '../pages/Projects'
import Resume from '../pages/Resume'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path="/" exact element={<Home/>}></Route>
            <Route path="/blog" exact element={<Blog/>}></Route>
            <Route path="/resume" exact element={<Resume/>}></Route>
            <Route path="/projects" exact element={<Projects/>}></Route>

        </Routes>
      
    </div>
  )
}

export default Routing
