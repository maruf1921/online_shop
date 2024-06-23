import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/nav-logo.svg'
import navProfile from '../../assets/nav-profile.svg'
import navlogonew from '../../assets/logo.png'
const Navbar = () => {
  return (
    // <div className='navbar'>
    //   <div className='navbar-logo'>
    //     <img src={navlogonew} alt="" />
    //     </div>
    //     <div className='navbar-name'>
    //       <h1>eBayFair</h1>
    //       <p>admin panel</p>
    //     </div>
    //     <img src={navProfile} className='nav-profile' alt="" />
    // </div>
    <div class="navbar">
    <div class="left-side">
      <div>
        <img src={navlogonew} class="nav-logo" alt="Logo"></img>
      </div>
        <div class="navbar-name">
            <h1>eBayFair</h1>
            <p>admin panel</p>
        </div>
    </div>
    <img src={navProfile} class="nav-profile" alt="Profile">
    </img>
</div>

  )
}

export default Navbar