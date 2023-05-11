import React from "react";
import { ItemBlock } from "./Item.styled";

const Item = ({ item }) => {
  return (
    <ItemBlock to={`${item.id}`}>
      <p>{item.title}</p>
      <p>{item.data}</p>
    </ItemBlock>
  );
};

export default Item;
