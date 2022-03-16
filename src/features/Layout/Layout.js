import React from 'react'
import { Link } from 'react-router-dom'
import './Layout.css'
import logo from '../../images/qobuz.png'
import back from '../../images/back.jpg'
const Layout = () => {
  return (
    <div className="container">
    <div className="header">
        <Link><img src={logo} className="logo"/></Link>
        <nav>
        <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Products</a></li>
                    <li><a href="">Community</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
        </nav>
        <button class="btn1" >Log In</button>
            <button class="btn2" >Sign Up</button>
    </div>
    <div className="content">
        <div className="text">
        <h1>BRING MUSIC TO LIFE</h1>
        <p>Let music flow in your heart and enrich your soul.
        </p>
        <button className="btn3">
          <Link to="/albums" style={{ textDecoration: "none", color:"white" }}>
          Get Albums
          </Link>
        </button>
       </div>
    <div className="music-pic">
    <img src={back} alt=""/>
    </div>
   </div>
</div>
  )
}

export default Layout