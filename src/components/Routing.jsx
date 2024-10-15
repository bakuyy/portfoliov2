import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Blogs from '../pages/Blogs'
import Projects from '../pages/Projects'
import Resume from '../pages/Resume'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path="/" exact element={<Home/>}></Route>
            <Route path="/blogs" exact element={<Blogs/>}></Route>
            <Route path="/resume" exact element={<Resume/>}></Route>
            <Route path="/projects" exact element={<Projects/>}></Route>

        </Routes>
      
    </div>
  )
}

export default Routing
