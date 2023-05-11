import { createContext, useContext, useState } from "react";

const NotesContext = createContext();

export const useNotes = () => useContext(NotesContext);

export const NotesProvider = ({ children }) => {
  const [List, setList] = useState([
    {
      id: 1,
      title: "title1",
      text: "text1",
      data: 2333,
    },
    {
      id: 2,
      title: "title2",
      text: "text2",
      data: 2333,
    },
    {
      id: 3,
      title: "title3",
      text: "text3",
      data: 2333,
    },
  ]);

  return (
    <NotesContext.Provider value={{ List, setList }}>
      {children}
    </NotesContext.Provider>
  );
};
