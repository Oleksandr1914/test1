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
  text-decoration: none;
`;

export const ItemBlock = styled.div`
  padding: 5px;
  padding-bottom: 0;
  padding-left: 10px;
  &.active {
    background-color: #e0e0de75;
  }
`;

export const Title = styled.p`
  color: #000;
  font-size: 16px;
  font-weight: 600;
`;

export const Date = styled.p`
  color: #000;
  font-size: 16px;
  font-weight: 400;
`;
