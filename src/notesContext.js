import { createContext, useContext, useState } from "react";

const NotesContext = createContext();

export const useNotes = () => useContext(NotesContext);

export const NotesProvider = ({ children }) => {
  const [List, setList] = useState({ filter: "", notes: [] });

  const changeNotesArray = (newNote) => {
    return setList({ ...List, notes: [...newNote] });
  };

  const changeFilterState = (data) => {
    return setList({ ...List, filter: data });
  };
  return (
    <NotesContext.Provider
      value={{ List, setList, changeNotesArray, changeFilterState }}
    >
      {children}
    </NotesContext.Provider>
  );
};
