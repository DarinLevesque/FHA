import React from "react";
import { slide as Menu } from "react-burger-menu";
import {
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Glyphicon
} from "react-bootstrap";
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
  }
};

function handleSelect(selectedKey) {
  event.preventDefault();
}

const Navbar = () => (
  <Menu right styles={styles} className="is-hidden-desktop">
    <Nav bsStyle="pills" stacked activeKey={1} onSelect={handleSelect}>
      <NavItem eventKey={1} onClick={() => navigateTo("/")}>
        <Glyphicon glyph="home" /> Home
      </NavItem>
      <NavItem eventKey={2} onClick={() => navigateTo("/about")}>
        About
      </NavItem>
      <NavItem eventKey={3} onClick={() => navigateTo("/blog")}>
        Blog
      </NavItem>
      <NavItem eventKey={4} onClick={() => navigateTo("/faq")}>
        FAQ
      </NavItem>
      <NavDropdown eventKey="5" title="Property Services" id="nav-dropdown">
        <MenuItem
          eventKey="5.1"
          onClick={() => navigateTo("/property-services/hoa")}
        >
          For Homeowners Assoc.
        </MenuItem>
        <MenuItem
          eventKey="5.2"
          onClick={() => navigateTo("/property-services/rentals")}
        >
          For Rental Properties
        </MenuItem>
      </NavDropdown>
    </Nav>
  </Menu>
);

export default Navbar;
