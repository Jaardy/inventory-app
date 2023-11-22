import React from "react";
import { useNavigate } from "react-router-dom";

export const ItemsList = ({ items, setActiveItem, setItem }) => {
  const navigate = useNavigate();

  function handleClick(item) {
    setActiveItem(true);
    setItem(item);
    navigate(`${item.id}`);
  }

  function handleNewItem() {
    navigate("add-item");
  }
  return (
    <>
      {items.map((item, idx) => {
        return (
          <div
            key={idx}
            onClick={() => {
              handleClick(item);
            }}
          >
            <p>{item.name}</p>
            <img className="image" src={item.image}></img>
            <p>{item.price}</p>
            <br></br>
          </div>
        );
      })}
      <button type="button" className="button" onClick={handleNewItem}>
        Add a new item
      </button>
    </>
  );
};
