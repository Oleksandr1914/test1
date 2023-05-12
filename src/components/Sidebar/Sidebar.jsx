import React from "react";
import {
  SidebarContainer,
  BtnContainer,
  IconPlus,
  IconDelete,
  IconToggle,
  Wrapper,
} from "./Sidebar.styled";
import Button from "../button/Button";
import SearchBox from "../SearchBox/SearchBox";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useNotes } from "../../notesContext";
import { nanoid } from "nanoid";

const Sidebar = () => {
  const { List, changeNotesArray } = useNotes();
  const navigate = useNavigate();
  const location = useLocation();

  const addItem = () => {
    const dateNow = new Date();
    const id = nanoid();

    const newNote = List.notes.map((el) => {
      return { ...el, isActive: false };
    });
    changeNotesArray([
      ...newNote,
      {
        id: id,
        text: "",
        date: dateNow.toLocaleString(),
        isActive: true,
      },
    ]);
    navigate(`/${id}`);
  };

  const deleteItem = () => {
    let ok = window.confirm("delete this note?");
    if (!ok) {
      return;
    }
    const dateNow = new Date();
    const id = nanoid();
    const idLoc = location?.pathname.slice(1, location.pathname.length);
    const newNote = List.notes.filter((el) => idLoc !== el.id);
    const lastElement = newNote[newNote.length - 1];
    const noteIsActive = newNote.map((e) =>
      e.id === lastElement.id ? { ...e, isActive: true } : e
    );

    changeNotesArray(noteIsActive);

    if (newNote.length === 0) {
      changeNotesArray([
        {
          id: id,
          text: "",
          date: dateNow.toLocaleString(),
          isActive: true,
        },
      ]);
      return navigate(`/${id}`);
    }

    lastElement ? navigate(`/${lastElement.id}`) : navigate("/");
  };

  return (
    <>
      <SidebarContainer>
        <BtnContainer>
          <Button onClick={addItem}>
            <IconPlus />
          </Button>
          <Button>
            <IconDelete onClick={deleteItem} />
          </Button>
          <Button>
            <IconToggle />
          </Button>
        </BtnContainer>
        <SearchBox />
      </SidebarContainer>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
};

export default Sidebar;
