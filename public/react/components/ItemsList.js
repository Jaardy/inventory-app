import React from "react";
import { Item } from "./Item";

export const ItemsList = ({ items, getPage }) => {
  return (
    <>
      {items.map((item, idx) => {
        return <Item getPage={getPage} item={item} key={idx} />;
      })}
    </>
  );
};
