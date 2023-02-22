import { Avatar } from '@mui/material'
import React from 'react'
import "./Sidebar.css"

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src="https://images.unsplash.com/photo-1676763133944-1738fb369107?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
        <Avatar className='sidebar_avatar' />
        <h2>Raunak Raj Singh</h2>
        <h4>raunakrajsingh620@gmail.com</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className='sidebar__statNumber'>2,543</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className='sidebar__statNumber'>2,448</p>
        </div>
      </div>

      <div className="sidebar_bottom">
      <p>Recent</p>
      </div>



    </div>
  )
}

export default Sidebar
