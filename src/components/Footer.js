import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>Official Blog</h2>
            <p>Great tutorials and tips on using Docksal and updates. Subscribe not to skip the new story!</p>
            <ul className="actions">
                <li><a href="https://blog.docksal.io" className="button">Docksal Blog</a></li>
            </ul>
        </section>
        <section>
            <h2>Contact Us</h2>
            <dl className="alt">
                {/*<dt>Address</dt>*/}
                {/*<dd>1234 Somewhere Road &bull; Nashville, TN 00000 &bull; USA</dd>*/}
                {/*<dt>Phone</dt>*/}
                {/*<dd>(000) 000-0000 x 0000</dd>*/}
                <dt>Gitter</dt>
                <dd><a href="https://gitter.im/docksal/community-support">Docksal Community Support</a></dd>
                <dt>E-mail</dt>
                <dd><a href="mailto:hello@docksal.io">hello@docksal.io</a></dd>
            </dl>
            <ul className="icons">
                <li><a href="https://twitter.com/docksalio" className="icon fab fa-twitter alt"><span className="label">Twitter</span></a></li>
                <li><a href="https://www.youtube.com/docksal" className="icon fab fa-youtube alt"><span className="label">YouTube</span></a></li>
                <li><a href="http://github.com/docksal" className="icon fab fa-github alt"><span className="label">GitHub</span></a></li>
                <li><a href="https://gitter.im/docksal/community-support" className="icon fab fa-gitter alt"><span className="label">Gitter</span></a></li>
            </ul>
        </section>
        <p className="copyright">&copy; Docksal 2015-2018. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
    </footer>
)

export default Footer
