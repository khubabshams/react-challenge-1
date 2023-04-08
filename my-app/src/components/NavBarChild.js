import React from 'react'

function NavBarChild(props) {
  return (
    <div>
      <h1>My Gallery</h1>
      {props.isLoggedin ?
        <button onClick={props.handleLogin}>Login</button>
        :
        <form>
          <lablel htmlFor="username">Username:</lablel>
          <input name="username" id="username" />
          <lablel htmlFor="password">Password:</lablel>
          <input type="password" name="password" id="password" />
          <input type="button" value="Submit" onClick={props.handleLogin} />
        </form>
      }
    </div>
  )
}

export default NavBarChild
