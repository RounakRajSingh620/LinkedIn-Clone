import React from 'react'
import "./Feed.css"
import CreateIcon from "@mui/icons-material/Create"

function Feed() {
  return (
    <div className="feed__inputContainer">
      <div className="feed_input">
        <CreateIcon />
        <form>
        <input type="text" />
        <button type="submit">Send</button>
        </form>
      </div>

    </div>
  )
}

export default Feed
