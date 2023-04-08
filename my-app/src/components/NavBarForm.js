import React, { Component } from 'react'
import css from './css/NavBarForm.module.css'
import NavBarChild from './NavBarChild'

export class NavBarForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedin: true,
        }
    }

    handleLogin = () => {
        this.setState((prevstate) => ({
            isLoggedin: prevstate.isLoggedin ? false : true,
        }), () => console.log(this.state.isLoggedin))
    }
    render() {
        return (
            <div className={css.NavBar}>
                <NavBarChild
                    isLoggedin={this.state.isLoggedin}
                    handleLogin={this.handleLogin} />
            </div>
        )
    }
}

export default NavBarForm