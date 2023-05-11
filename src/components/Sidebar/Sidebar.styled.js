import styled from "styled-components";
import { BiPlusMedical, BiTrash, BiEdit } from "react-icons/bi";

export const Wrapper = styled.div`
  display: flex;
`;

export const SidebarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  width: 100%;
  height: 60px;
  background-color: #d6d6d6;
`;

export const BtnContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const IconPlus = styled(BiPlusMedical)`
  width: 20px;
  height: 20px;
  color: #b6b6b6;
`;
export const IconDelete = styled(BiTrash)`
  width: 20px;
  height: 20px;
  color: #b6b6b6;
`;
export const IconToggle = styled(BiEdit)`
  width: 20px;
  height: 20px;
  color: #b6b6b6;
`;
