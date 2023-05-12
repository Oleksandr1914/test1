import React from "react";
import { ItemLink, ItemBlock } from "./Item.styled";
import { useNotes } from "../../../notesContext";

const Item = ({ item }) => {
  const { List, changeNotesArray } = useNotes();
  const itemText =
    item.text.slice(0, 19) + (item.text.length > 20 ? "..." : "");
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
        <p>{itemText}</p>
        <p>{item.date}</p>
      </ItemLink>
    </ItemBlock>
  );
};

export default Item;
