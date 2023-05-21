import styled from "styled-components";
import { device } from "../../utils/mixins";

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 18px;
  border-radius: 3px;
  background-color: #f3f3f3;
  cursor: pointer;
  ${device.mobile} {
    width: 40px;
    height: 20px;
  }
  ${device.tablet} {
    width: 50px;
    height: 25px;
  }
`;
