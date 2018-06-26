import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import HeaderInstallation from '../components/HeaderBoilerplates'
import NavSubpages from '../components/NavSubpages'

import imgVirtualBoxKext from '../assets/images/virtualbox-kernel-extension.png'
import imgDockerWinDrives from '../assets/images/docker-for-win-share-drives.png'

class Boilerplates extends React.Component {
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
    const pageTitle = "Boilerplates"
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = get(this.props, 'data.site.siteMetadata.description')

    return (
      <div>
        <Helmet
          title={`${siteTitle} ${pageTitle}`}
          meta={[{name: "description", content: `${siteDescription}`}]}
        />

        <HeaderInstallation />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <NavSubpages sticky={this.state.stickyNav} />

        <div id="main">
        <section id="second" className="main special">
            <header className="major">
              <h2>Create Project from Boilerplate</h2>
            </header>
            <p>
              <codeblock>fin project create</codeblock>
            </p>
        </section>

        <section id="list" className="main special">
            <header className="major">
              <h2>List</h2>
            </header>
            <ul className="statistics">
              <li className="style5">
                <a className="icon" href="https://github.com/docksal/drupal8">
                  <span className="fab fa-drupal fa-3x"></span>
                  <strong>Drupal</strong> 8
                </a>
              </li>
              <li className="style4">
                <a className="icon" href="https://github.com/docksal/drupal7">
                  <span className="fab fa-drupal fa-3x"></span>
                  <strong>Drupal</strong> 7
                </a>
              </li>
              <li className="style2">
                <a className="icon" href="https://github.com/docksal/wordpress">
                  <span className="fab fa-wordpress fa-3x"></span>
                  <strong>Wordpress</strong> With wp-cli
                </a>
              </li>
              <li className="style3">
                <a className="icon" href="https://github.com/docksal/example-laravel">
                  <span className="fab fa-laravel fa-3x"></span>
                  <strong>Laravel</strong> Easy install
                </a>
              </li>
              <li className="style1">
                <a className="icon" href="https://github.com/docksal/magento-demo">
                  <span className="fab fa-magento fa-3x"></span>
                  <strong>Magento</strong> with sample content
                </a>
              </li>
            </ul>
            <ul className="statistics">
              <li className="style1">
                <a className="icon" href="https://github.com/docksal/example-backdrop">
                  <span className="fas fa-file fa-3x"></span>
                  <strong>Backdrop</strong>
                </a>
              </li>
              <li className="style3">
                <a className="icon" href="https://github.com/docksal?utf8=✓&q=symfony&type=&language=">
                  <span className="fab fa-php fa-3x"></span>
                  <strong>Symfony</strong> Skeleton, Webapp
                </a>
              </li>
              <li className="style5">
                <a className="icon" href="https://github.com/docksal/example-grav">
                  <span className="fab fa-grav fa-3x"></span>
                  <strong>Grav CMS</strong>
                </a>
              </li>
              <li className="style4">
                <a className="icon" href="https://github.com/docksal/example-gatsby">
                  <span className="fab fa-node-js fa-3x"></span>
                  <strong>GatsbyJS</strong>
                </a>
              </li>
              <li className="style2">
                <a className="icon" href="https://github.com/docksal/example-hugo">
                  <span className="fab fa-node-js fa-3x"></span>
                  <strong>Hugo</strong> 
                </a>
              </li>
            </ul>
          </section>

        </div>
      </div>
    )
  }
}

export default Boilerplates

export const pageQuery = graphql`
  query BoilerplatesQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
