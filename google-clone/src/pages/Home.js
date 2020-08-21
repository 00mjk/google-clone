import React from 'react'
import './Home.css'
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className='home'>
      <h1>This is Homepages</h1>

      <div className='home__header'>
        <div className= 'home__headerLeft'>
          {/* Link */}
          <Link to='./about'>About</Link>
          <Link to='./store'>Store</Link>
          {/* Link */}
        </div>
        <div className='home__headerRight'>
          {/* Link */}
          <Link to='./email'>Email</Link>
          <Link to='./images'>Images</Link>
          {/* Link */}



          
          {/* Icons */}
          {/* Avatar */}
        </div>
      </div>

      <div className='home__body'>

      </div>  
    </div>
  )
}

export default Home
