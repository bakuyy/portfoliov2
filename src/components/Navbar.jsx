import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const links = [
        {name:"home", link:'/', id:'home'},
        {name:"resume", link:'/resume', id:'resume'},
        {name:"projects", link:'/projects', id:'projects'},
        {name:"blogs", link:'/blogs', id:'blogs'},

    ]


  return (
    <div>
        <div>
        {links.map(({name,link})=>(
            <Link
            key={name}
            to={link}
            >
                {name}
            </Link>

        ))}
        </div>
      
    </div>
  )
}

export default Navbar
