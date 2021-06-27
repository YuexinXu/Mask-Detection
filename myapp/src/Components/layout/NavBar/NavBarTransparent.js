import React, {useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";


const Navbar = (props) => {
  const [isOpen, setCollapse] = useState(false);

  const toggleCollapse = () => {
    setCollapse((prev) => !prev);
  };


  return (
    <>
      <MDBNavbar
        color="bg-dark"
        dark
        expand="md"
        scrolling
        transparent
        fixed="top"
      >
        <MDBNavbarBrand>
          <img
            alt=""
            src="rocket.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
        </MDBNavbarBrand>
        <MDBNavLink to="/" className="white-text bold">
            <strong className="white-text bold">Rocket Science API</strong>
          </MDBNavLink>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink to="/Home">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/About">About</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/Pricing">Pricing</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
          {props.logged_in ? (
              <>
                <MDBNavItem>
                <MDBNavLink onClick= {props.handle_logout} to="/Home">Log Out</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                <MDBNavLink to="/MyProfile">My Profile</MDBNavLink>
                </MDBNavItem>
              </>

          ):(
            <MDBNavItem>
            < MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Login Or Signup</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="/users/login">Log In</MDBDropdownItem>
                  <MDBDropdownItem href="/users/signup">Sign Up</MDBDropdownItem>
                </MDBDropdownMenu>
             </MDBDropdown>
            </MDBNavItem>

          )}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </>
  );
};

export default Navbar;



