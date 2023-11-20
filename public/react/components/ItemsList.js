import React from "react";
import { Item } from "./Item";

export const ItemsList = ({ items, getPage, setIsAddPage }) => {
  return (
    <>
      {items.map((item, idx) => {
        return <Item getPage={getPage} item={item} key={idx} />;
      })}
      <button
        type="button"
        className="button"
        onClick={() => setIsAddPage(true)}
      >
        Add a new item
      </button>
    </>
  );
};
