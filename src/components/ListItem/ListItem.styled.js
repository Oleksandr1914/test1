import styled from "styled-components";

export const ListItemContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 300px;
  height: 100%;
  min-height: calc(100vh - 60px);
  background-color: #f9f9f7;
  border-right: 2px solid #e0e0de;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f9f9f7;
    border: 1px solid #e0e0de;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #e0e0de;
    border-radius: 8px;
  }
`;
