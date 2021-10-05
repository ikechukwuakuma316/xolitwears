import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import {
  FaBars,
  FaTimes,
  FaRegBell,
  FaShoppingCart,
  FaHeart,
  FaUserAlt,
  FaSearch,
} from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavbarContainer,
  NavbarSearch,
  NavLogo,
  SearchIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  InputBox,
  SearchButton,
} from "./Navbar.elements";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  const [showSide, setShowSide] = useState(false);

  const handleShowBtn = (active) => setShowSide(active);

  return (
    <>
      <IconContext.Provider value={{ color: "blue" }}>
        <Sidebar showSideBar={showSide} />

        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <img src={logo} alt="logo" />
            </NavLogo>
            <MobileIcon onClick={() => handleShowBtn(showSide ? false : true)}>
              {showSide ? <FaTimes /> : <FaBars />}
            </MobileIcon>{" "}
            <NavMenu>
              <NavbarSearch>
                <form>
                  <SearchIcon>
                    <FaSearch />
                  </SearchIcon>

                  <InputBox
                    type="text"
                    placeholder="What do you want to find?"
                    name="name"
                  />
                  <SearchButton type="submit" value="Search" />
                </form>
              </NavbarSearch>
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
