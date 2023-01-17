import React from 'react'
import './Nav.css'
import MenuIcon from '@mui/icons-material/Menu';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

function Nav() {
  return (
    <div className='nav_container'>
        <div className='nav_logo'>
            <MenuIcon className='nav_menuicon'/>
            <img src="https://www.xentice.com/static/media/woxlandlogo.2adca2c7.png" width={150} alt="" />
        </div>
        <div className='nav_option'>
          <a href="">
            <CampaignOutlinedIcon/>
            <p>Post Ad</p>
          </a>
          <a href="">
            <LocationOnOutlinedIcon/>
            <p>Near Me</p>
          </a>
          <a href="">
            <LoginOutlinedIcon/>
            <p>Login/Sign Up</p>
          </a>
        </div>
    </div>
  )
}

export default Nav