import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import HeaderInstallation from '../components/HeaderInstallation'
import NavSubpages from '../components/NavSubpages'

import imgVirtualBoxKext from '../assets/images/virtualbox-kernel-extension.png'
import imgDockerWinDrives from '../assets/images/docker-for-win-share-drives.png'

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
                  <p>Boot2Docker or Docker for Mac</p>
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
                  <p>Boot2Docker or Docker for Windows</p>
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
                  <p><b>Recommended.</b> Faster, but less convenient</p>
                </a>
              </li>
              <li>
                <a href="#macos-docker-for-mac" className="icon major style5 fab fa-docker a"></a>
                <a href="#macos-docker-for-mac">
                  <h3>Docker for Mac</h3>
                  <p>Somewhat slower, but easier to use and update</p>
                </a>
              </li>
            </ul>
          </section>

          <section id="windows" className="main special">
            <header className="major">
              <h2>
                <a className="icon fas fa-arrow-circle-left fa-xs" title="Back" href="#first"></a>&nbsp;
                Windows needs Linux type Shell
              </h2>
            </header>
            <p>Choose your Linux-type shell</p>
            <ul className="features">
              <li>
                <a href="#babun" className="icon major style5 far fa-window-maximize a"/>
                <a href="#babun">
                  <h3>Babun</h3>
                  <p><b>Recommended</b>. Easier to install. <br/>Windows 7, Windows 10.</p>
                </a>
              </li>
              <li>
                <a href="#windows-ubuntu" className="icon major style-ubuntu fab fa-linux a"/>
                <a href="#windows-ubuntu">
                  <h3>Ubuntu App (WSL)</h3>
                  <p>Longer to install, but a real Unix shell.<br/>Windows 10</p>
                </a>
              </li>
            </ul>
          </section>

          <section id="babun" className="main special">
            <header className="major">
              <h2>
                <a className="icon fas fa-arrow-circle-left fa-xs" title="Back" href="#windows"></a>&nbsp;
                Docker installation options on Windows
              </h2>
            </header>
            <p>Choose how you want to use Docker</p>
            <ul className="features">
              <li>
                <a href="#windows-babun-virtualbox" className="icon major style1 fas fa-box-open a"></a>
                <a href="#windows-babun-virtualbox">
                  <h3>VirtualBox</h3>
                  <p><b>Recommended.</b> Faster, but less convenient</p>
                </a>
              </li>
              <li>
                <a href="#windows-babun" className="icon major style5 fab fa-docker a"></a>
                <a href="#windows-babun">
                  <h3>Docker for Win</h3>
                  <p>Somewhat slower, but easier to use and update.</p>
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
              <a href="http://download.virtualbox.org/virtualbox/5.2.20/VirtualBox-5.2.20-125813-OSX.dmg" className="button special">
                    <i className="fas fa-download fa-sm"></i> VirtualBox 5.2.20
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
              <codeblock>curl -fsSL get.docksal.io | bash</codeblock>
            </p>
            <h3>4. Start the VM</h3>
            <codeblock>fin vm start</codeblock>
          </section>

          {/*-- macOS with Docker for Mac --*/}
          <section id="macos-docker-for-mac" className="main">
            <h2>
              <a className="icon fas fa-arrow-circle-left fa-xs" title="Back" href="#macos"></a>&nbsp;
              macOS with Docker for Mac
            </h2>
            <h3>1. Download and Install Docker for Mac</h3>
            <p>
              <a href="https://download.docker.com/mac/stable/Docker.dmg" className="button special ">
                    <i className="fas fa-download fa-sm"></i> Docker for Mac
              </a>
            </p>
            <h3>2. Start Docker for Mac</h3>
            <p>Wait until it says "Docker is running" in the menubar icon menu.</p>
            <h3>3. Install Docksal</h3>
            Open Terminal app and run:
            <codeblock>curl -fsSL get.docksal.io | DOCKER_NATIVE=1 bash</codeblock>
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
            <codeblock>curl -fsSL get.docksal.io | bash</codeblock>
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
          <section id="windows-babun-virtualbox" className="main">
            <h2>
              <a className="icon fas fa-arrow-circle-left fa-xs" title="Back" href="#windows"></a>&nbsp;
              Windows with Babun and VirtualBox
            </h2>
            <h3>1. Download and Install Babun</h3>
            <p>
              <a href="http://babun.github.io/" className="button">
                    <i className="fas fa-external-link-alt fa-sm"></i> Babun Site
              </a>
            </p>
            <h3>2. Windows 10. Enable SMB1 (<a href="https://docs.docksal.io/en/master/troubleshooting-smb/#windows-10-fall-creators-update-1709">Why?</a>)</h3>
            <p>
              This step will require reboot. On Windows 10 open Window Command Prompt as  Administrator and run:
              <codeblock>dism /online /enable-feature /all /featurename:SMB1Protocol-Server</codeblock>
            </p>
            {/*<h3>2. Download and Install VirtualBox</h3>
            <p>
              <a href="http://download.virtualbox.org/virtualbox/5.2.2/VirtualBox-5.2.2-119230-Win.exe" className="button special ">
                    <i className="fas fa-download fa-sm"></i> VirtualBox 5.2.2
              </a>
            </p>*/}
            <h3>3. Install Docksal </h3>
            <p>
              Open <b>Babun</b> and run:
              <codeblock>curl -fsSL get.docksal.io | bash</codeblock>
            </p>
            <h3>4. Start the VM</h3>
            In <b>Babun</b>:
            <codeblock>fin vm start</codeblock>
          </section>

          {/*-- Windows with Docker for Windows --*/}
          <section id="windows-babun" className="main">
            <h2>
              <a className="icon fas fa-arrow-circle-left fa-xs" title="Back" href="#windows"></a>&nbsp;
              Windows with Babun and Docker for Windows
            </h2>
            <h3>1. Download and Install Babun</h3>
            <p>
              <a href="http://babun.github.io/" className="button">
                    <i className="fas fa-external-link-alt fa-sm"></i> Babun Site
              </a>
            </p>
            <h3>2. Download and Install Docker for Windows</h3>
            <p></p>
            <p>
              <a href="https://download.docker.com/win/stable/Docker%20for%20Windows%20Installer.exe" className="button special ">
                    <i className="fas fa-download fa-sm"></i> Docker for Windows
              </a>
              </p>
              <b>Installing Docker for Windows</b>
              <p>
                Windows will require a logout and restart during the installation. <a href="https://youtu.be/bQgaEUcuJ98"><i className="fas fa-external-link-alt fa-xs"></i> See this screen recording</a> to know what to expect.
              </p>
            <h3>3. Configure Docker for Windows </h3>
            <p>
              Share your local drives with Docker for Windows:
              <center><img src={imgDockerWinDrives} width="80%" /></center>
            </p>
            <h3>4. Install Docksal </h3>
            Open <b>Babun</b> app and run:
            <codeblock>curl -fsSL get.docksal.io | bash</codeblock>
          </section>

          {/*-- Windows with WSL --*/}
          <section id="windows-ubuntu" className="main">
            <h2>
              <a className="icon fas fa-arrow-circle-left fa-xs" title="Back" href="#windows"></a>&nbsp;
              Windows with Ubuntu App and Docker for Mac
            </h2>
            <p>Ubuntu application was previously known as Windows Subsystem for Linux (WSL)</p>
            <h3>1. Install Ubuntu app</h3>
            Part 1. Start installation
            <div className="videoWrapper">
              <iframe width="700" height="525" src="https://www.youtube.com/embed/2Mk_wprFpzQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <br/>
            Part 2. Finish Ubuntu app installation
            <div className="videoWrapper">
              <iframe width="700" height="525" src="https://www.youtube.com/embed/44UCMVZQT80" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <br/>
            <h3 id="configure-docker-for-win">2. Install and configure Docker for Windows</h3>
            <div className="videoWrapper">
              <iframe width="700" height="525" src="https://www.youtube.com/embed/bQgaEUcuJ98" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <br/>
            <h3>3. Install Docksal</h3>
            <div className="videoWrapper">
              <iframe width="700" height="525" src="https://www.youtube.com/embed/FJBN9-dGhyc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <br/>
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
