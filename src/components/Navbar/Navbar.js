import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaRegBell,
  FaShoppingCart,
  FaHeart,
  FaUserAlt,
} from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./Navbar.elements";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              XOLIT
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick}>
              <NavItem>
                <NavLinks to="/user">
                  <FaUserAlt />
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/">
                  <FaRegBell />
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/Shop">
                  <FaShoppingCart />
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/love">
                  <FaHeart />
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
