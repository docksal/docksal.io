import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import HeaderInstallation from '../components/HeaderInstallation'
import NavSubpages from '../components/NavSubpages'

class Installation extends React.Component {
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

        <HeaderInstallation />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <NavSubpages sticky={this.state.stickyNav} />

        <div id="main">
          <section id="first" className="main special">
            <header className="major">
              <h2>Choose your OS</h2>
            </header>
            <ul className="features">
              <li>
                <a href="#macos" className="icon major style-macos fab fa-apple a"></a>
                <a href="#macos">
                  <h3>macOS</h3>
                  <p>Docker Machine and Docker for Mac supported</p>
                </a>
              </li>
              <li>
                <a href="#linux" className="icon major style-linux fab fa-linux a"></a>
                <a href="#linux">
                  <h3>Ubuntu Linux</h3>
                  <p>Ubuntu and Ubuntu-based distributions are supported out of the box.</p>
                </a>
              </li>
              <li>
                <a href="#windows" className="icon major style5 fab fa-windows a"></a>
                <a href="#windows">
                  <h3>Windows</h3>
                  <p>Babun or Ubuntu app for Windows 10. Docker for Windows or Boot2Docker.</p>
                </a>
              </li>
            </ul>
          </section>

          <section id="macos" className="main special">
            <header className="major">
              <h2>
                <a className="icon fas fa-arrow-circle-left fa-xs" title="Back" href="#first"></a>&nbsp;
                Choose macOS installation option
              </h2>
            </header>
            <ul className="features">
              <li>
                <a href="#macos-virtualbox" className="icon major style1 fas fa-box-open a"></a>
                <a href="#macos-virtualbox">
                  <h3>VirtualBox</h3>
                  <p>Less convenient but 10-20% faster</p>
                </a>
              </li>
              <li>
                <a href="#macos-docker-for-mac" className="icon major style5 fab fa-docker a"></a>
                <a href="#macos-docker-for-mac">
                  <h3>Docker for Mac</h3>
                  <p>A bit slower, but easier to use, maintain and update.</p>
                </a>
              </li>
            </ul>
          </section>

          <section id="windows" className="main special">
            <header className="major">
              <h2>
                <a className="icon fas fa-arrow-circle-left fa-xs" title="Back" href="#first"></a>&nbsp;
                Choose Linux shell for Windows
              </h2>
            </header>
            <p>Windows requires a Linux-type shell to run Docksal</p>
            <ul className="features">
              <li>
                <a href="#babun" className="icon major style5 far fa-window-maximize a"/>
                <a href="#babun">
                  <h3>Babun</h3>
                  <p>Easier to install but less Linux-native. <br/>Windows 7, Windows 10.</p>
                </a>
              </li>
              <li>
                <a href="#windows-ubuntu" className="icon major style-ubuntu fab fa-linux a"/>
                <a href="#windows-ubuntu">
                  <h3>Ubuntu App (WSL)</h3>
                  <p>Longer install but better Linux shell.<br/>Windows 10</p>
                </a>
              </li>
            </ul>
          </section>

          <section id="babun" className="main special">
            <header className="major">
              <h2>
                <a className="icon fas fa-arrow-circle-left fa-xs" title="Back" href="#windows"></a>&nbsp;
                Choose Windows installation option
              </h2>
            </header>
            <p>You are going to use <a href="http://babun.github.io/">Babun</a> as Linux-type shell</p>
            <ul className="features">
              <li>
                <a href="#windows-babun-virtualbox" className="icon major style1 fas fa-box-open a"></a>
                <a href="#windows-babun-virtualbox">
                  <h3>VirtualBox</h3>
                  <p>Less convenient but ~20% faster</p>
                </a>
              </li>
              <li>
                <a href="#windows-babun" className="icon major style5 fab fa-docker a"></a>
                <a href="#windows-babun">
                  <h3>Docker for Win</h3>
                  <p>Somewhat slower, but easier to use, maintain and update.</p>
                </a>
              </li>
            </ul>
          </section>

          <section id="linux" className="main special">
            <header className="major">
              <h2>
                <a className="icon fas fa-arrow-circle-left fa-xs" title="Back" href="#first"></a>&nbsp;
                Linux options
              </h2>
            </header>
            <ul className="features">
              <li>
                <a href="#linux-ubuntu" className="icon major style-ubuntu fab fa-linux a"/>
                <a href="#linux-ubuntu">
                  <h3>Ubuntu Linux</h3>
                  <p>Everything supported and automated.</p>
                </a>
              </li>
              <li>
                <a href="#linux-other" className="icon major style-linux fab fa-linux a"/>
                <a href="#linux-other">
                  <h3>Other distributions</h3>
                  <p>Not fully supported. May involve manual steps</p>
                </a>
              </li>
            </ul>
          </section>

          <section id="macos-virtualbox" className="main">
            <h2>
              <a className="icon fas fa-arrow-circle-left fa-xs" title="Back" href="#macos"></a>&nbsp;
              macOS with VirtualBox
            </h2>
            <p>1. Download and Install VirtualBox</p>
            <p>2. Enable Kernel extension </p>
            <p>3. Install Docksal </p>
          </section>

          <section id="macos-docker-for-mac" className="main">
            <h2>
              <a className="icon fas fa-arrow-circle-left fa-xs" title="Back" href="#macos"></a>&nbsp;
              macOS with Docker for Mac
            </h2>
            <p>1. Download and Install Docker for Mac</p>
            <p>2. Start Docker for Mac</p>
            <p>3. Install Docksal</p>
          </section>

          <section id="linux-ubuntu" className="main">
            <h2>
              <a className="icon fas fa-arrow-circle-left fa-xs" title="Back" href="#first"></a>&nbsp;
              Ubuntu Linux
            </h2>
            <p>1. Check pre-requisites</p>
            <p>2. Install Docksal</p>
          </section>

          <section id="windows-babun-virtualbox" className="main">
            <h2>
              <a className="icon fas fa-arrow-circle-left fa-xs" title="Back" href="#windows"></a>&nbsp;
              Windows with Babun and VirtualBox
            </h2>
            <p>1. Download and Install Babun</p>
            <p>2. Download and Install VirtualBox</p>
            <p>3. Install Docksal </p>
          </section>

          <section id="windows-babun" className="main">
            <h2>
              <a className="icon fas fa-arrow-circle-left fa-xs" title="Back" href="#windows"></a>&nbsp;
              Windows with Babun and Docker for Mac
            </h2>
            <p>1. Download and Install Docker for Mac</p>
            <p>2. Start Docker for Mac</p>
            <p>3. Install Docksal </p>
          </section>

          <section id="windows-ubuntu" className="main">
            <h2>
              <a className="icon fas fa-arrow-circle-left fa-xs" title="Back" href="#windows"></a>&nbsp;
              Windows with Ubuntu App and Docker for Mac
            </h2>
            <p>1. Install Ubuntu App</p>
            <p>
            Part 1<br/>
            <iframe width="700" height="525" src="https://www.youtube.com/embed/2Mk_wprFpzQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <br/>
            Part 2<br/>
            <iframe width="700" height="525" src="https://www.youtube.com/embed/44UCMVZQT80" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </p>
            <p>2. Install and configure Docker for Windows</p>
            <p><iframe width="700" height="525" src="https://www.youtube.com/embed/bQgaEUcuJ98" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></p>
            <p>3. Install Docksal</p>
            <iframe width="700" height="525" src="https://www.youtube.com/embed/FJBN9-dGhyc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </section>

        </div>
      </div>
    )
  }
}

export default Installation

export const pageQuery = graphql`
  query InstallationQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
