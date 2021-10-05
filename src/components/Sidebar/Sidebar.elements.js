import styled from "styled-components";

export const SidebarContainer = styled.section`
  padding-top: 52px;
  max-width: 140px;
  position: fixed;
  z-index: 4;
  top: 0px;
  left: 0px;
  bottom: 0px;
  background: white;
  border-right: 1px solid rgb(240, 245, 247);
  @media only screen and (max-width: 480px) {
    display: ${(props) => (props.disply ? props.disply : "none")};
  }
`;

export const Side = styled.span`
  color: black;
  text-align: left;
  ul {
    li {
      display: flex;
      padding: 10px 10px 10px 10px;
      font-size: 15px;
      svg {
        padding-right: 8px;
        font-size: 20px;
        margin-top: -2px;
      }
    }
  }
`;

export const SidebarHeader = styled.div`
  font-size: 8px;
  font-weight: 700;
  color: rgb(25, 42, 50);
  padding: 18px 14px 14px;
`;
