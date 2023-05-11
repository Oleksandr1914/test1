import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
`;

export const InputSearch = styled.input`
  padding: 4px 8px;
  width: 250px;
  height: 25px;
  border-radius: 3px;
  border: 0;
  outline: none;
  background-color: #f3f3f3;
  ::-webkit-input-placeholder {
    text-align: center;
  }
`;
