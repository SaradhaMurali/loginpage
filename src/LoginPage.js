import React from "react"
import "./LoginPage.css"
import logo from './logo.jpg'
import axios from "axios"

class LoginPage extends React.Component {

    constructor() {
        super()
        this.state = {
            userName: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClick = this.loginClick.bind(this)
    }
    loginClick(event) {
        //Add a backend connect url here
        const url = ""
        axios
            .get(url)
            .then(response => {
                //get a response from back end
            }).catch(error => console.log(error));
    }
    /**
     * This method is used to save a username and password from user input 
     */
    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div className="login-page">
                <div className="login-div">
                    <img src={logo}
                        className="logo-img"
                        alt="logo" />
                    <div className="input-div">
                        <div style={{ top: 8 }} className="full-input">
                            <label name="username-label"
                                className="user-label">USERNAME</label>
                            <input className="user-input"
                                type="text"
                                name="userName"
                                id="userName"
                                onChange={this.handleChange}></input>
                        </div>
                        <div style={{ top: 24 }} className="full-input">
                            <label name="password-label"
                                className="user-label">PASSWORD</label>
                            <input className="user-input"
                                type="password"
                                name="password"
                                id="password"
                                onChange={this.handleChange}></input>
                        </div>
                        <button className="login-button"
                            onClick={this.loginClick}> LOGIN </button>
                        <div className="checkbox-div">
                            <input className="checkbox-input"
                                type="checkbox"
                                name="rememberme"
                                id="rememberme" />
                            <label name="remember-label"
                                className="checkbox-label"
                            >Remember me</label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default LoginPage