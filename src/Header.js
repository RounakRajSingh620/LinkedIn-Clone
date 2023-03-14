import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from "@mui/icons-material/Home"
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount"
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter"
import ChatIcon from "@mui/icons-material/Chat"
import NotificationsIcon from "@mui/icons-material/Notifications"


function Header() {
    return (
        <div className='header'>
            <div className="header_left">
                <img src="https://cdn-icons-png.flaticon.com/512/2504/2504923.png" alt="" />
                <div className="header_search">
                    <SearchIcon />
                    <input placeholder='Search' type="text" />

                </div>
            </div>
            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOption Icon={ChatIcon} title='Messaging' />
                <HeaderOption Icon={NotificationsIcon} title='Notifications' />
                <HeaderOption avatar="https://media.licdn.com/dms/image/D5603AQEw_vOIyBs0gQ/profile-displayphoto-shrink_800_800/0/1669486040370?e=1682553600&v=beta&t=TunEkkMpuzc3o5-NDgm01TlLhc7_6L1lGZ4BtGsvP4U" title='me' />

            </div>
        </div>
    )
}

export default Header
