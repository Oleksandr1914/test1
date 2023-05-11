import React from "react";
import {
  SidebarContainer,
  BtnContainer,
  IconPlus,
  IconDelete,
  IconToggle,
  Wrapper,
} from "./Sidebar.styled";
import Button from "../button/Button";
import SearchBox from "../SearchBox/SearchBox";
import { Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <SidebarContainer>
        <BtnContainer>
          <Button>
            <IconPlus />
          </Button>
          <Button>
            <IconDelete />
          </Button>
          <Button>
            <IconToggle />
          </Button>
        </BtnContainer>
        <SearchBox />
      </SidebarContainer>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
};

export default Sidebar;
