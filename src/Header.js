import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';


function Header() {
    return (
        <div className='header'>
            <div className="header_left">
                <img src="https://cdn-icons-png.flaticon.com/512/2504/2504923.png" alt="" />
                <div className="header_search">
                    <SearchIcon />
                    <input type="text" />

                </div>
            </div>
            <div className="header_right">

            </div>
        </div>
    )
}

export default Header
