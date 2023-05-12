import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ItemLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding-left: 10px;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #e0e0de;
`;

export const ItemBlock = styled.div`
  padding: 5px;
  padding-bottom: 0;
  padding-left: 10px;
  &.active {
    background-color: #e0e0de75;
  }
`;
