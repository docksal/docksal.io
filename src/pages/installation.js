import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import HeaderInstallation from '../components/HeaderInstallation'
import NavSubpages from '../components/NavSubpages'

import imgVirtualBoxKext from '../assets/images/virtualbox-kernel-extension.png'
import imgDockerWinDrives from '../assets/images/docker-for-win-share-drives.png'
import imgDockerWinExpose from '../assets/images/docker-for-win-expose-network.png'

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
    const pageTitle = "Installation"
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = get(this.props, 'data.site.siteMetadata.description')

    return (
      <div id="page-installation">
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
          <section id="first" className="main special">
            <header className="major">
              <h2>Choose your OS</h2>
            </header>
            <ul className="features">
              <li>
                <a href="#macos" className="icon major style-macos fab fa-apple a"></a>
                <a href="#macos">
                  <h3>macOS</h3>
                  <p>VirtualBox or Docker Desktop</p>
                </a>
              </li>
              <li>
                <a href="#linux" className="icon major style-linux fab fa-linux a"></a>
                <a href="#linux">
                  <h3>Linux</h3>
                  <p>Debian and Fedora based distributions are supported out of the box</p>
                </a>
              </li>
              <li>
                <a href="#windows" className="icon major style5 fab fa-windows a"></a>
                <a href="#windows">
                  <h3>Windows</h3>
                  <p>VirtualBox or Docker Desktop</p>
                </a>
              </li>
            </ul>
          </section>

          <section id="macos" className="main special">
            <header className="major">
              <h2>
                <a className="icon fas fa-arrow-circle-left fa-xs" title="Back" href="#first"></a>&nbsp;
                Docker installation options on macOS
              </h2>
            </header>
            <ul className="features">
              <li>
                <a href="#macos-virtualbox" className="icon major style1 fas fa-box-open a"></a>
                <a href="#macos-virtualbox">
                  <h3>VirtualBox</h3>
                  <p>Old school method</p>
                </a>
              </li>
              <li>
                <a href="#macos-docker-desktop" className="icon major style5 fab fa-docker a"></a>
                <a href="#macos-docker-desktop">
                  <h3>Docker Desktop</h3>
                  <p><b>Recommended.</b> Easier to use</p>
                </a>
              </li>
            </ul>
          </section>

          <section id="windows" className="main special">
            <header className="major">
              <h2>
                <a className="icon fas fa-arrow-circle-left fa-xs" title="Back" href="#windows"></a>&nbsp;
                Docker installation options on Windows
              </h2>
            </header>
            <p>Choose how you want to use Docker</p>
            <ul className="features">
              <li>
                <a href="#windows-virtualbox" className="icon major style1 fas fa-box-open a"></a>
                <a href="#windows-virtualbox">
                  <h3>VirtualBox</h3>
                  <p><b>Recommended.</b> Faster, allows launching Vagrant alongside</p>
                </a>
              </li>
              <li>
                <a href="#windows-docker-desktop" className="icon major style5 fab fa-docker a"></a>
                <a href="#windows-docker-desktop">
                  <h3>Docker Desktop</h3>
                  <p>Easier to use, but you cannot use Virtualbox or VmWare with it.</p>
                </a>
              </li>
            </ul>
          </section>

          <section id="linux" className="main special">
            <header className="major">
              <h2>
                <a className="icon fas fa-arrow-circle-left fa-xs" title="Back" href="#first"></a>&nbsp;
                Choose your distribution
              </h2>
            </header>
            <ul className="features">
            <li>
                <a href="#linux-supported" className="icon major style-ubuntu fab fa-linux a"/>
                <a href="#linux-supported">
                  <h3>Ubuntu</h3>
                </a>
              </li>
              <li>
                <a href="#linux-supported" className="icon major style-mint fab fa-linux a"/>
                <a href="#linux-supported">
                  <h3>Mint</h3>
                </a>
              </li>
              <li>
                <a href="#linux-supported" className="icon major style-debian fab fa-linux a"/>
                <a href="#linux-supported">
                  <h3>Debian</h3>
                </a>
              </li>
              <li>
                <a href="#linux-supported" className="icon major style5 fab fa-linux a"/>
                <a href="#linux-supported">
                  <h3>Fedora</h3>
                </a>
              </li>
              <li>
                <a href="#linux-supported" className="icon major style-linux fab fa-linux a"/>
                <a href="#linux-supported">
                  <h3>CentOS</h3>
                </a>
              </li>
              <li>
                <a href="#linux-other" className="icon major style-linux fab fa-linux a"/>
                <a href="#linux-other">
                  <h3>Other distributions</h3>
                </a>
              </li>

            </ul>
          </section>

          {/*-- macOS with Virtualbox --*/}
          <section id="macos-virtualbox" className="main">
            <h2>
              <a className="icon fas fa-arrow-circle-left fa-xs" title="Back" href="#macos"></a>&nbsp;
              macOS with VirtualBox
            </h2>
            <p>With this method, Docker will run inside a VirtualBox VM</p>
            <h3>1. Download and Install VirtualBox</h3>
            <p>
              <a href="https://download.virtualbox.org/virtualbox/6.1.10/VirtualBox-6.1.10-138449-OSX.dmg" className="button special">
                    <i className="fas fa-download fa-sm"></i> VirtualBox v6.1.10
              </a>
            </p>
            <h3>2. Enable Kernel extension</h3>
            <p>System Preferences > Security & Privacy<br/> 
            If you do not see the Allow button it means the extension is already enabled.
            <img src={imgVirtualBoxKext} width="100%" />
            </p>
            <h3>3. Install Docksal </h3>
            <p>
              Open Terminal app and run
              <codeblock>bash &lt;(curl -fsSL https://get.docksal.io)</codeblock>
            </p>
            <h3>4. Start Dosksal</h3>
            <codeblock>fin system start</codeblock>
          </section>

          {/*-- macOS with Docker Desktop --*/}
          <section id="macos-docker-desktop" className="main">
            <h2>
              <a className="icon fas fa-arrow-circle-left fa-xs" title="Back" href="#macos"></a>&nbsp;
              macOS with Docker Desktop
            </h2>
            <h3>1. Download and Install Docker Desktop for Mac</h3>
            <p>
              <a href="https://download.docker.com/mac/stable/45519/Docker.dmg" className="button special ">
                    <i className="fas fa-download fa-sm"></i> Docker Desktop for Mac v2.3.0.3
              </a>
            </p>
            <h3>2. Start Docker Desktop</h3>
            <p>Wait until it says "Docker is running" in the menubar icon menu.</p>
            <h3>3. Install Docksal</h3>
            Open Terminal app and run:
            <codeblock>DOCKER_NATIVE=1 bash &lt;(curl -fsSL https://get.docksal.io)</codeblock>
          </section>

          {/*-- Linux --*/}
          <section id="linux-supported" className="main">

            <h2>
              <a className="icon fas fa-arrow-circle-left fa-xs" title="Back" href="#first"></a>&nbsp;
              Supported Linux distribution
            </h2>
            <h3>1. Check pre-requisites</h3>
            <ol>
              <li>By default, Apache listens on <code>0.0.0.0:80</code> and <code>0.0.0.0:443</code>. This will prevent Docksal reverse proxy from running properly. You can resolve it an any of the following ways:
                <ul>
                  <li>Reconfigure Apache to listen on different host (e.g., <code>127.0.0.1:80</code> and <code>127.0.0.1:443</code>).</li>
                  <li>Reconfigure Apache to listen on different ports (e.g., <code>8080</code> and <code>4433</code>) </li>
                  <li>Stop and disable Apache</li>
                </ul>
              </li>
              <li>Software. Check that you have:
                <ul>
                  <li>curl</li>
                  <li>sudo</li>
                </ul>
              </li>
            </ol>
            <h3>2. Install Docksal</h3>
            Open Terminal app and run:
            <codeblock>bash &lt;(curl -fsSL https://get.docksal.io)</codeblock>
          </section>

          {/*-- Linux --*/}
          <section id="linux-other" className="main">
            <h2>
              <a className="icon fas fa-arrow-circle-left fa-xs" title="Back" href="#first"></a>&nbsp;
              Other Linux distributions
            </h2>
            <h3>Compatibility</h3>
            <p>If you cannot find your distribution, it does not mean it is not supported! Less known Debian or Fedora derivatives are most likely supported.</p>
            <p>
              Docker on Linux is installed using the official <a href="https://get.docker.com/">get.docker.com</a> script. If your distribution is not in the
              list above, but <a href="https://get.docker.com/">get.docker.com</a> supports it, then it <b>is</b> supported.
            </p>
            <h3>Incompatible distributions</h3>
            In case your distribution in not compatible with <a href="https://get.docker.com/">get.docker.com</a>, you need to install the latest stable Docker
            for you distribution first, and then <a href="#linux-supported">follow the steps for compatible distributions</a>.
          </section>


          {/*-- Windows with Virtual Box --*/}
          <section id="windows-virtualbox" className="main">
            <h2>
              <a className="icon fas fa-arrow-circle-left fa-xs" title="Back" href="#windows"></a>&nbsp;
              Windows with VirtualBox
            </h2>
            <h3>1. Enable Windows Subsystem for Linux and install <b>Ubuntu 18.04</b></h3>
            <p>
              1.1. <a href="https://docs.microsoft.com/en-us/windows/wsl/install-win10">
                Enable WSL on Windows 10
              </a>
              <br/>
              1.2. <a href="https://www.microsoft.com/en-us/p/ubuntu-1804-lts/9n9tngvndl3q">
                Install Ubuntu 18.04 app from Windows Store
              </a>
            </p>
            <h3>2. Install Docksal </h3>
            <p>
              Open <b>Ubuntu</b> shell and run:
              <codeblock>bash &lt;(curl -fsSL https://get.docksal.io)</codeblock>
            </p>
            <h3>3. Start Docksal</h3>
            <codeblock>fin system start</codeblock>
          </section>

          {/*-- Windows with WSL --*/}
          <section id="windows-docker-desktop" className="main">
            <h2>
              <a className="icon fas fa-arrow-circle-left fa-xs" title="Back" href="#windows"></a>&nbsp;
              Windows with Docker Desktop
            </h2>
            <h3>1. Enable Windows Subsystem for Linux and install <b>Ubuntu 18.04</b></h3>
            <p>
              1.1. <a href="https://docs.microsoft.com/en-us/windows/wsl/install-win10">
                Enable WSL on Windows 10
              </a>
              <br/>
              1.2. <a href="https://www.microsoft.com/en-us/p/ubuntu-1804-lts/9n9tngvndl3q">
                Install Ubuntu 18.04 app from Windows Store
              </a>
            </p>
            <h3>2. Download and Install Docker Desktop for Windows</h3>
            <p></p>
            <p>
              <a href="https://download.docker.com/win/stable/45519/Docker%20Desktop%20Installer.exe" className="button special ">
                    <i className="fas fa-download fa-sm"></i> Docker Desktop for Windows v2.3.0.3
              </a>
            </p>
            <h3>3. Configure Docker Desktop on Windows </h3>
            <p>
              3.1. Share your local drives with Docker Desktop:
              <center><img src={imgDockerWinDrives} width="80%" /></center>
              <br/>
              3.2. Share Docker Desktop port to the local network.
              <center><img src={imgDockerWinExpose} width="80%" /></center>
            </p>
            <h3>4. Install Docksal </h3>
            <p>
              Open <b>Ubuntu</b> shell and run:
              <codeblock>DOCKER_NATIVE=1 bash &lt;(curl -fsSL https://get.docksal.io)</codeblock>
            </p>
            <h3>5. Start Docksal</h3>
            <codeblock>fin system start</codeblock>
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
        description
      }
    }
  }
`
