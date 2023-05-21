import styled from "styled-components";
import { BiPlusMedical, BiTrash, BiEdit } from "react-icons/bi";
import { device } from "../../utils/mixins";

export const Wrapper = styled.div`
  display: flex;
`;

export const SidebarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  width: 100%;
  height: 40px;
  background-color: #d6d6d6;
  ${device.mobile} {
    height: 50px;
  }
  ${device.tablet} {
    height: 60px;
  }
`;

export const BtnContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  ${device.mobile} {
    gap: 20px;
  }
`;

export const IconPlus = styled(BiPlusMedical)`
  width: 12px;
  height: 12px;
  color: #b6b6b6;
  ${device.mobile} {
    width: 15px;
    height: 15px;
  }
  ${device.tablet} {
    width: 20px;
    height: 20px;
  }
`;
export const IconDelete = styled(BiTrash)`
  width: 12px;
  height: 12px;
  color: #b6b6b6;
  ${device.mobile} {
    width: 15px;
    height: 15px;
  }
  ${device.tablet} {
    width: 20px;
    height: 20px;
  }
`;

export const IconToggle = styled(BiEdit)`
  width: 12px;
  height: 12px;
  color: #b6b6b6;
  ${device.mobile} {
    width: 15px;
    height: 15px;
  }
  ${device.tablet} {
    width: 20px;
    height: 20px;
  }
`;
