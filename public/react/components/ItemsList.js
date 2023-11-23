import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Search from "./Search";

export const ItemsList = ({ items, setActiveItem, setItem }) => {
  const navigate = useNavigate();
  const [filteredResults, setFilteredResults] = useState(items);
  const [searchInput, setSearchInput] = useState("");
  const [cartItem, setCartItem] = useState([]);

  function handleClick(item) {
    setActiveItem(true);
    setItem(item);
    navigate(`${item.id}`);
  }

  function handleNewItem() {
    navigate("add-item");
  }

  const handleChange = (e) => {
    const results = items.filter(
      (item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.category.toLowerCase().includes(e.target.value.toLowerCase())
    );
    console.log(results);
    setFilteredResults(results);
    setSearchInput(e.target.value);
  };

  return (
    <>
      <input
        id="search-bar"
        type="text"
        placeholder="Search by item name"
        onChange={handleChange}
        value={searchInput}
      />
      {searchInput.length === 0 ? (
        <div className="items-list-flex">
          <div className="item-list">
            {items.map((item, idx) => (
              <div
                className="item"
                key={idx}
                onClick={() => {
                  handleClick(item);
                }}
              >
                <p>{item.name.slice(0, 20)}...</p>
                <img className="image" src={item.image} alt={item.name} />
                <p>£ {item.price}</p>
                <br />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="items-list-flex">
          <div className="item-list">
            {filteredResults.map((item, idx) => (
              <div
                className="item"
                key={idx}
                onClick={() => {
                  handleClick(item);
                }}
              >
                <p>{item.name.slice(0, 20)}</p>
                <img className="image" src={item.image} alt={item.name} />
                <p>£ {item.price}</p>
                <br />
              </div>
            ))}
          </div>
        </div>
      )}

      <button type="button" className="button" onClick={handleNewItem}>
        Add a new item
      </button>
    </>
  );
};
