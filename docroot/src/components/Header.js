import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo-docksal-2.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Docksal</h1>
        <p>All-purpose web-development environment <br/>based on <a href="https://docker.com">Docker</a> and Docker Compose.</p>
    </header>
)

export default Header
