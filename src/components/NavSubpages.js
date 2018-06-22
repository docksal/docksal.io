import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const NavSubpages = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['intro', 'first', 'second', 'cta'] } currentClassName="is-active" offset={-300}>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/installation">Installation</a>
            </li>
            <li>
                <a href="/boilerplates">Boilerplates</a>
            </li>
            <li>
                <a href="https://docs.docksal.io">Docs</a>
            </li>
        </Scrollspy>
    </nav>
)

export default NavSubpages
