import React from "react";
import { ItemLink, ItemBlock, Title, Date } from "./Item.styled";
import { useNotes } from "../../../notesContext";

const Item = ({ item }) => {
  const { List, changeNotesArray } = useNotes();
  const itemText =
    item.text.slice(0, 12) + (item.text.length > 13 ? "..." : "");
  const onActive = () => {
    const newNotes = List.notes.map((el) => {
      if (el.id.toString() === item.id) {
        return { ...el, isActive: true };
      }
      return { ...el, isActive: false };
    });
    changeNotesArray(newNotes);
  };

  return (
    <ItemBlock onClick={onActive} className={item.isActive && "active"}>
      <ItemLink to={`${item.id}`}>
        <Title>{itemText}</Title>
        <Date>{item.date}</Date>
      </ItemLink>
    </ItemBlock>
  );
};

export default Item;
