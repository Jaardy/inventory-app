import React from "react";
import { Item } from "./Item";

export const ItemsList = ({ getPage, items, setIsAddPage }) => {
  return (
    <div>
      <div className="item-list">
        {items.map((item, idx) => {
          return <Item getPage={getPage} item={item} key={idx} />;
        })}
      </div>
      <button
        type="button"
        className="add-item-button"
        onClick={() => setIsAddPage(true)}
      >
        Add a new item
      </button>
    </div>
  );
};
