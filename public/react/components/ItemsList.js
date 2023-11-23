import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Search from "./Search";

export const ItemsList = ({ items, setActiveItem, setItem }) => {
  const navigate = useNavigate();
  const [filteredResults, setFilteredResults] = useState(items);
  const [searchInput, setSearchInput] = useState("");
  function handleClick(item) {
    setActiveItem(true);
    setItem(item);
    navigate(`${item.id}`);
  }

  function handleNewItem() {
    navigate("add-item");
  }

  const handleChange = (e) => {
    const results = items.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    console.log(results);
    setFilteredResults(results);
    setSearchInput(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search by item name"
        onChange={handleChange}
        value={searchInput}
      />
      {searchInput.length === 0
        ? items.map((item, idx) => {
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
          })
        : filteredResults.map((item, idx) => {
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
