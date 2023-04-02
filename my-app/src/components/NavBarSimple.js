import React from "react";
import css from "./css/NavBarSimple.module.css"

class NavbarSimple extends React.Component {

    constructor() {
        super()
        this.state = {
            btnText: "Login",
            message: "Hello, guest!"
        }
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            return {
                btnText: prevState.btnText === "Login" ? "Logout" : "Login",
                message: prevState.message === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
            }
        })
    }

    render() {
        return <div className={css.NavBar}>
            <h1>My Gallery</h1>
            <div>
                <span>{this.state.message}</span>
                <button onClick={() => this.handleClick()}>{this.state.btnText}</button>
            </div>
        </div>
    }
}

export default NavbarSimple