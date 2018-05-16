import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Header from '../components/Header'
import Nav from '../components/Nav'
import finInit from '../assets/images/fin-init-600-1.png'
import imgKeepCalm from '../assets/images/keep-calm-and-raise-a.png'

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
                <p>Create your own cross-platform custom commands to
                  <ul>
                    <li>initialize local copy of the project in one step</li>
                    <li>run several complex builds in a sequence</li>
                    <li>compile and pack your theme</li>
                    <li>automate deployments to dev, stage or CI server</li>
                  </ul>
                  Use  <i className="fas fa-terminal fa-xs"></i> Bash, <i className="fab fa-php fa-sm"></i> PHP
                  or <i className="fab fa-node-js fa-sm"></i> Node out of the box, or extend Dockal stock
                  images with your custom Dockerfile and pre-install your favorite tool.</p>
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
                <p>Virtual Box and Docker for Mac supported</p>
              </li>
              <li>
                <span className="icon major style-linux fab fa-linux"></span>
                <h3>Ubuntu Linux</h3>
                <p>Ubuntu and Ubuntu-based distributions are supported out of the box.</p>
              </li>
              <li>
                <span className="icon major style5 fab fa-windows"></span>
                <h3>Windows</h3>
                <p>Babun Shell or Ubuntu App (WSL). <br/>Virtual Box or Docker for Windows.</p>
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
              <p>Ready to launch boilerplates for popular Content Management Systems.<br/> Spin up with a single command.</p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="fab fa-drupal fa-3x"></span>
                <strong>Drupal</strong> 7, 8
              </li>
              <li className="style2">
                <span className="fab fa-wordpress fa-3x"></span>
                <strong>Wordpress</strong> With wp-cli
              </li>
              <li className="style3">
                <span className="fab fa-laravel fa-3x"></span>
                <strong>Laravel</strong> Easy install
              </li>
              <li className="style4">
                <span className="fab fa-magento fa-3x"></span>
                <strong>Magento</strong> with sample content
              </li>
              <li className="style5">
                <span className="fab fa-node fa-3x"></span>
                <strong>Grav,</strong>Gatsby, Hugo, JAM
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
              <p>Check that your OS is compatible<br />
              and select preferred install option</p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/installation" className="button special">
                    <i className="fas fa-sliders-h fa-sm"></i> Docksal Installation
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

          <section id="contribute" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>You can help</h2>
                </header>
                <p>Docksal is the result of collective effort of people 
                  contributing their time and dedication and organizations, 
                  supporting those contributions. <br/>
                  Something is not working? Missing a feature? You can help by
                </p>
                <ul>
                  <li>testing Docksal in different environments</li>
                  <li>reporting bugs in the <a href="https://github.com/docksal/docksal/issues">issue queue</a></li>
                  <li>raising <a href="https://github.com/docksal/docksal/pulls?q=is%3Apr+is%3Aclosed">pull requests</a> to contribute code or documentation</li>
                  <li>creating a <a href="https://github.com/docksal/addons">custom addon</a> and share it with a community</li>
                </ul>
                <ul className="actions">
                  <li>
                    <Link to="/contributors" className="button">
                    <i className="fas fa-users fa-sm"></i> Contributors
                    </Link>
                    </li>
                </ul>
              </div>
              <span className="image"><img src={imgKeepCalm} alt="" /></span>
            </div>
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
