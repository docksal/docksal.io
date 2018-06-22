import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/docksal-logo.png';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Docksal</h1>
        <h3>All-purpose web-development environment <br/>based on Docker and Docker Compose.</h3>
    </header>
)

export default Header
