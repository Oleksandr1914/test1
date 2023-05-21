import styled from "styled-components";

export const WorkspaceContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 60px);
  background-color: #f9f9f7;
  overflow-y: scroll;
`;

export const Textarea = styled.textarea`
  padding: 20px;
  width: 100%;
  font-size: 18px;
  height: calc(100vh - 60px);
  background-color: #f9f9f7;
  overflow-y: scroll;
  outline: none;
  border: 0;
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
