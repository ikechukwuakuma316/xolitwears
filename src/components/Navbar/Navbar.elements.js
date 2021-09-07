import styled from "styled-components";
import { FaMagento } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";

export const Nav = styled.nav`
  background: white;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: relative;
  top: 0;
  padding: 10px 0;
  z-index: 999;
  border-bottom: 1px solid rgb(240, 245, 247);
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 50px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: blue;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const NavbarSearch = styled.div`
  height: 100%;
  padding: 5px;
  box-shadow: 1px 1px 1px 1px #ddd;
  form {
    border: 1px solid #ddd;
    padding: 0 0 0 5px;
    display: flex;
    align-items: center;
    height: 100%;
  }
`;
export const SearchIcon = styled.span`
  border: none;
  padding: 10px;
`;
export const InputBox = styled.input`
  border: none;
  height: 100%;
`;

export const SearchButton = styled.input`
  border: none;
  cursor: pointer;
  font-size: 16px;
  height: 100%;
  min-width: 40px;
  background-color: rgb(47, 183, 236);
  color: rgb(255, 255, 255);
  font-weight: bold;
  display: inline;
  align-items: end;
  justify-content: center;
  border-radius: 0px 4px 4px 0px;
  padding: 0px 16px;
  transition: background-color 0.2s ease 0s;
  width: 100px;
  line-height: 1.15;
`;
export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
  color: black;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 12px;
    right: 25px;
    transform: translate(-100, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #4b59f7;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
    }
  }
`;
