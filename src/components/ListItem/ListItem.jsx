import { useState } from "react";
import { ListItemContainer } from "./ListItem.styled";
import Item from "./Item/Item";
import { Outlet } from "react-router-dom";
import { useNotes } from "../../notesContext";

const ListItem = () => {
  const { List } = useNotes();

  return (
    <>
      <ListItemContainer>
        {List.map((el) => {
          return <Item key={el.id} item={el}></Item>;
        })}
      </ListItemContainer>
      <Outlet />
    </>
  );
};

export default ListItem;
