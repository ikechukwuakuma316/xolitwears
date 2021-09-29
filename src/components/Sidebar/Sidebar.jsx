import React from "react";
import { SidebarContainer, Side, SidebarHeader } from "./Sidebar.elements";
import { SidebarData } from "./SidebarData";

const Sidebar = () => {
  return (
    <>
      <SidebarContainer>
        <SidebarHeader>
          <div>
            <h1>Top Features</h1>
          </div>
        </SidebarHeader>
        <Side>
          <ul>
            {SidebarData.map((val, key) => {
              return (
                <li
                  key={key}
                  onClick={() => {
                    window.location.pathname = val.link;
                  }}
                >
                  <div>{val.icon}</div>
                  <div>{val.title}</div>
                </li>
              );
            })}
          </ul>
        </Side>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
