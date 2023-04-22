import React from 'react'

function NavBarChild(props) {
  return (
    <div>
      <h1>My Gallery</h1>
      {props.isLoggedin ?
        <button onClick={props.handleLogin}>Login</button>
        :
        <form>
          <label htmlFor="username">Username:</label>
          <input name="username" id="username" />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" />
          <input type="button" value="Submit" onClick={props.handleLogin} />
        </form>
      }
    </div>
  )
}

export default NavBarChild
