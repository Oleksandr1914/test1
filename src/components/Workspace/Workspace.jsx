import React, { useEffect, useState } from "react";
import { Textarea } from "./Workspace.styled";
import { useLocation } from "react-router-dom";
import { useNotes } from "../../notesContext";

const Workspace = () => {
  const [notesText, setNotesText] = useState("");
  const location = useLocation();
  const id = location.pathname.slice(1, location.pathname.length);

  const { List, changeNotesArray, objectEdit } = useNotes();

  useEffect(() => {
    List.notes.forEach((el) => {
      if (el.id.toString() === id) {
        setNotesText(el.text);
      }
    });
  }, [id]);

  useEffect(() => {
    const newNote = List.notes.map((el) => {
      if (el.id.toString() === id) {
        objectEdit({ ...el, text: notesText, isActive: true });
        return { ...el, text: notesText };
      }
      return objectEdit({ ...el, isActive: false });
    });
    // changeNotesArray(newNote);
  }, [notesText]);

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
