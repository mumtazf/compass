import React from "react";
import {Link} from 'react-router-dom'

const Login = (props) => {
    console.log(props.api_url)
    const AUTH_URL = `${props.api_url}/auth/github` //don't do just {} do ${}


    return(
        <div className="Login">
            <center>
                <h1>Career Compass Login</h1>
                    <a href = {AUTH_URL}>
                        <button className="headerBtn">
                            Login via GitHub
                        </button>
                    </a>
            </center>
            <div>
                <center>
                    <p>Are you an admin?</p>
                    <Link to = "/adminView">Log in here</Link>
                </center>
            </div>
        </div>
    )
}

export default Login