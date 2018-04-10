import React from 'react';
import ChildNav from './childNav.js';
import SubNav from './SubNav';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const NavWrapper = props => {
    return (
        <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto"></NavbarBrand>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">Mac</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">iPod</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">iPhone</NavLink>
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