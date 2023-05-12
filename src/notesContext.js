import { createContext, useContext, useState } from "react";

const NotesContext = createContext();

export const useNotes = () => useContext(NotesContext);

export const NotesProvider = ({ children }) => {
  const [List, setList] = useState([
    // {
    //   id: 1,
    //   text: "text1",
    //   data: 2333,
    //   isActive: false,
    // },
    // {
    //   id: 2,
    //   text: "text2",
    //   data: 2333,
    //   isActive: false,
    // },
    // {
    //   id: 3,
    //   text: "text3",
    //   data: 2333,
    //   isActive: false,
    // },
  ]);

  return (
    <NotesContext.Provider value={{ List, setList }}>
      {children}
    </NotesContext.Provider>
  );
};
