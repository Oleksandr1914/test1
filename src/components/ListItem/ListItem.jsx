import React, { useState } from "react";
import { ListItemContainer } from "./ListItem.styled";
import Item from "./Item/Item";
import { Outlet } from "react-router-dom";
const array = ["styled-components", "react", "ListItem"];

const ListItem = () => {
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
