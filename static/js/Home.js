import React from 'react'
import {Link} from 'react-router-dom'


function home() {
  return (
    <div>
      <Link to='/movie' className="btn" >movie</Link>
      <Link to='/todolist' className="btn">todolist</Link>

    </div>
  )
}

export default home
