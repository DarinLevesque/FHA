import React from 'react';
import { scaleRotate as Menu } from 'react-burger-menu'
import Link from 'gatsby-link';

import github from '../img/github-icon.svg';
import logo from '../img/logo.svg';

const styles = {
  scaleRotate: {
    margin: '0 auto',
    padding: '2em 1em',
    color: 'rgba(0, 0, 0, 0.4)',
    boxshadow: 'inset 0 -1px rgba(0, 0, 0, 0.2)'
  },
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const Navbar = () => (
  <div>
    <Menu 
    pageWrapId={ "page-wrap" }
    outerContainerId={ "outer-container" }
    styles={ styles }
  >
      <Link id="about" className="menu-item" to="/about">
        About
      </Link>
      <Link id="blog" className="menu-item" to="/blog">
        Blog
      </Link>
      <Link id="faq" className="menu-item" to="/faq">
        FAQ
      </Link>
      <Link id="property-services" className="menu-item" to="/property-services">
        Property Services
      </Link>
    </Menu>
  </div>
)



export default Navbar
