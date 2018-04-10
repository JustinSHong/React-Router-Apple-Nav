import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import ChildNav from './childNav.js';
import SubNav from './SubNav';
import "./NavWrapper.css";

// renders the main navigation bar
const NavWrapper = props => {
  return (
    <div className="NavWrapper">
      <Navbar className="Navbar" color="faded" light>
        {/* apple icon */}
        <NavbarBrand href="/" className="logo">AppleLogo</NavbarBrand>
        <Nav className="Nav">
          <NavItem>
            <NavLink href="/components/"><Mac /></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href=""><Ipod /></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/components/"><Iphone /></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/components/">Watch</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/components/">TV</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/components/">Music</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/components/">Support</NavLink>
          </NavItem>
        </Nav>
       </Navbar>
      </div>
  );
};

export default NavWrapper;