import styled from "styled-components";
import { device } from "../../utils/mixins";

export const InputSearch = styled.input`
  padding: 4px 8px;
  width: 100px;
  height: 18px;
  border-radius: 3px;
  border: 0;
  outline: none;
  background-color: #f3f3f3;
  ::-webkit-input-placeholder {
    text-align: center;
  }
  ${device.mobile} {
    width: 150px;
    height: 20px;
  }
  ${device.tablet} {
    width: 250px;
    height: 25px;
  }
  ${device.desktop} {
    width: 300px;
    height: 30px;
  }
`;
