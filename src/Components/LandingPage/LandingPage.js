import React from "react"
import {Link} from 'react-router-dom'

import './LandingPage.css'
import background from './meditation.png'

class LandingPage extends React.Component {
    render() {
        return(
            <div className="landingPage">
                <div className="background-img">
                    <img src={background} alt="meditation"></img>
                </div>
                <p>Journey to good habits</p>
                <br></br>
                <Link to="/register">
                    <button href="/register">Register</button>
                </Link>
                <br></br>
                <Link to="/login">
                    <a href="/">Already have an account?</a>
                </Link>
            </div>
        )
    }
}

export default LandingPage