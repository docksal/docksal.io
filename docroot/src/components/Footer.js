import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>Our Contributors</h2>
            <p>Docksal is the result of the collective effort of people contributing their time and skills and companies supporting those contributions.</p>
            <ul className="actions">
                <li><Link to="/contributors" className="button">Docksal Contributors</Link></li>
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
                <dt>Email</dt>
                <dd>Leonid Makarov<br/><a href="mailto:todo@email.com">todo@email.com</a></dd>
                <dd>Oleksii Chekulaiev<br/><a href="mailto:achekulaev@gmail.com">achekulaev@gmail.com</a></dd>
                <dd>David Hernandez<br/><a href="mailto:todo@email.com">todo@email.com</a></dd>
            </dl>
            <ul className="icons">
                <li><a href="https://twitter.com/docksalio" className="icon fab fa-twitter alt"><span className="label">Twitter</span></a></li>
                {/*<li><a href="#" className="icon fab fa-facebook alt"><span className="label">Facebook</span></a></li>*/}
                {/*<li><a href="#" className="icon fab fa-instagram alt"><span className="label">Instagram</span></a></li>*/}
                <li><a href="http://github.com/docksal" className="icon fab fa-github alt"><span className="label">GitHub</span></a></li>
                <li><a href="https://gitter.im/docksal/community-support" className="icon fab fa-gitter alt"><span className="label">Gitter</span></a></li>
            </ul>
        </section>
        <p className="copyright">&copy; Docksal. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
    </footer>
)

export default Footer
