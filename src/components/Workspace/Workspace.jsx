import React, { useState } from "react";
import { Textarea } from "./Workspace.styled";

const Workspace = () => {
  const [notesText, setNotesText] = useState("");

  return (
    <>
      <Textarea
        value={notesText}
        onChange={(e) => {
          setNotesText(e.target.value);
        }}
      />
    </>
  );
};

export default Workspace;
