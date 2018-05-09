import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Header from '../components/Header'
import Nav from '../components/Nav'
import finInit from '../assets/images/fin-init-600-1.png'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Comprehensive automation</h2>
                </header>
                <p>Create custom command to initialize your project in one step, run builds, compile or pack
                  your projects files. Commands execute on your host or inside special cli container. Automate
                using Bash, PHP or Node out of the bix or any other language with some additional work.</p>
                <ul className="actions">
                  <li><Link to="/generic" className="button">Learn More</Link></li>
                </ul>
              </div>
              <span className="image"><img src={finInit} alt="" /></span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>OS Support</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style-macos fab fa-apple"></span>
                <h3>macOS</h3>
                <p>Docker for Mac or Boot2Docker supported</p>
              </li>
              <li>
                <span className="icon major style-linux fab fa-linux"></span>
                <h3>Ubuntu Linux</h3>
                <p>Ubuntu and Ubuntu-based distributions are supported out of the box.</p>
              </li>
              <li>
                <span className="icon major style5 fab fa-windows"></span>
                <h3>Windows</h3>
                <p>Babun or Ubuntu app for Windows 10. Docker for Windows or Boot2Docker.</p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Boilerplates</h2>
              <p>Existing boilerplates for many Content Management Systems<br/> that you can spin up with one command within minutes.</p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="fab fa-drupal fa-3x"></span>
                <strong>Drupal</strong> 7, 8
              </li>
              <li className="style2">
                <span className="fab fa-magento fa-3x"></span>
                <strong>Magento</strong> with sample content
              </li>
              <li className="style3">
                <span className="fab fa-wordpress fa-3x"></span>
                <strong>Wordpress</strong> With wp-cli
              </li>
              <li className="style4">
                <span className="fab fa-laravel fa-3x"></span>
                <strong>Laravel</strong> Easy install
              </li>
              <li className="style5">
                <span className="fab fa-node fa-3x"></span>
                <strong>Grav,</strong>Gatsby, Hugo
              </li>
            </ul>
            <p className="content">There is plenty of existing boilerplates or recipes, that you can use right away.
              Say you always wanted to try out Drupal, Wordpress or Laravel. But installing them might be a major difficulty.
            CMS installation process is usually pretty involving, even if the distributor makes an effort to make it easier.
            With a single <span className="codeblock"><span className="fa fa-terminal fa-xs"></span>  fin project create</span> command you can easily spin up any of the above.</p>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/boilerplates" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Get Started</h2>
              <p>Start with installing Docksal for your OS<br />
              or check for more information on GitHub or Gitter.</p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/installation" className="button special">
                    <i className="fas fa-sliders-h fa-sm"></i> Install Docksal
                  </Link>
                </li>
              </ul>
              <ul className="actions">
                <li>
                  <a href="https://github.com/docksal/docksal" className="button small">
                    <i className="fab fa-github-square fa-sm"></i> GitHub
                  </a>
                </li>
                <li>
                  <a href="https://gitter.im/docksal/community-support" className="button small">
                    <i className="fab fa-gitter fa-sm"></i> Chat on Gitter
                  </a>
                </li>
              </ul>
            </footer>
          </section>

        </div>

      </div>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object,
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
