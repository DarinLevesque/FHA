import React from "react";
import { slide as Menu } from "react-burger-menu";
import Link, { navigateTo } from "gatsby-link";

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "26px",
    height: "20px",
    right: "20px",
    top: "20px"
  },
  bmBurgerBars: {
    background: "#fff"
  },
  bmCrossButton: {
    height: "24px",
    width: "24px"
  },
  bmCross: {
    background: "#bdc3c7"
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em"
  },
  bmMorphShape: {
    fill: "#373a47"
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em"
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)"
  },
  menuList: {
    color: "#72b7c7"
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false });
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    return (
      <Menu
        right
        styles={styles}
        isOpen={this.state.menuOpen}
        onStateChange={state => this.handleStateChange(state)}
      >
        <aside className="menu">
          <ul className="menu-list">
            <li onClick={() => this.closeMenu()}>
              <Link to="/">
                <span className="icon">
                  <i className="fas fa-home" />
                </span>{" "}
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => this.closeMenu()}>
                About
              </Link>
            </li>
            <li>
              <Link to="/faq" onClick={() => this.closeMenu()}>
                FAQ
              </Link>
            </li>
          </ul>
          <p className="menu-label" onClick={() => this.closeMenu()}>
            Property Services
          </p>
          <ul className="menu-list">
            <li>
              <Link to="/property-services/hoa">Homeowners Associations</Link>
            </li>
            <li>
              <Link to="/property-services/rentals">Rental Properties</Link>
            </li>
          </ul>
        </aside>
      </Menu>
    );
  }
}

export default Navbar;
