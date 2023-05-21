import { createContext, useContext, useEffect, useState } from "react";

const idb =
  window.indexedDB ||
  window.mozIndexdDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB ||
  window.shimIndexedDB;

const createCollectionsIndexdDB = () => {
  if (!idb) {
    console.log("This browser doesn`t support IndexdDb");
    return;
  }

  const request = idb.open("test-db-notes", 2);

  request.onerror = (event) => {
    console.log("Error", event);
    console.log("An error occured with IndexdDB");
  };

  request.onupgradeneeded = (event) => {
    const db = request.result;

    if (!db.objectStoreNames.contains("notesData")) {
      db.createObjectStore("notesData", { keyPath: "id" });
    }
  };

  request.onsuccess = () => {
    console.log("Database opened successfuly");
  };
};

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

  const getAllData = async () => {
    const dbPromise = idb.open("test-db-notes", 2);

    dbPromise.onsuccess = () => {
      const db = dbPromise.result;
      const tx = db.transaction("notesData", "readonly");
      const userData = tx.objectStore("notesData");
      const users = userData.getAll();

      users.onsuccess = (query) => {
        setList({ ...List, notes: [...query.srcElement.result] });
      };

      users.onerror = () => {
        console.log("Error occured while loading initial data");
      };
    };
  };

  const addNoteData = (note) => {
    const dbPromise = idb.open("test-db-notes", 2);
    dbPromise.onsuccess = () => {
      const db = dbPromise.result;
      const tx = db.transaction("notesData", "readwrite");
      const notesData = tx.objectStore("notesData");

      List.notes.map((el) => {
        return notesData.put({ ...el, isActive: false });
      });
      const notes = notesData.put(note);

      notes.onsuccess = () => {
        tx.oncomplete = () => {
          db.close();
        };
        getAllData();
      };

      notes.onerror = (e) => {
        console.log(e);
        alert("Error occured");
      };
    };
  };

  const deleteUserHandler = (note) => {
    const dbPromise = idb.open("test-db-notes", 2);

    dbPromise.onsuccess = () => {
      const db = dbPromise.result;
      const tx = db.transaction("notesData", "readwrite");
      const notesData = tx.objectStore("notesData");
      const deletedUser = notesData.delete(note?.id);

      deletedUser.onsuccess = (query) => {
        getAllData();
      };

      deletedUser.onerror = () => {
        console.log("Error occured while loading initial data");
      };
    };
  };

  const objectEdit = (note) => {
    const dbPromise = idb.open("test-db-notes", 2);

    dbPromise.onsuccess = () => {
      const db = dbPromise.result;
      const tx = db.transaction("notesData", "readwrite");
      const notesData = tx.objectStore("notesData");
      const deletedUser = notesData.put(note);

      deletedUser.onsuccess = (query) => {
        getAllData();
      };

      deletedUser.onerror = (e) => {
        console.log(e);
        alert("Error occured");
      };
    };
  };

  useEffect(() => {
    createCollectionsIndexdDB();
    getAllData();
  }, []);

  return (
    <NotesContext.Provider
      value={{
        List,
        setList,
        changeNotesArray,
        changeFilterState,
        addNoteData,
        deleteUserHandler,
        objectEdit,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};
