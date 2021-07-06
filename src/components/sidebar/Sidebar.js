import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";
import { Link } from "react-router-dom";

const Sidebar = ({ toggle, isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <Link to="/">
            <SidebarLink onClick={toggle}>About</SidebarLink>
          </Link>
          <Link to="/services">
            <SidebarLink onClick={toggle}>Services</SidebarLink>
          </Link>
          <Link to="/contact">
            <SidebarLink onClick={toggle}>Contact</SidebarLink>
          </Link>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
