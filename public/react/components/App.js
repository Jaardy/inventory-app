import React, { useState, useEffect } from "react";
import { ItemsList } from "./ItemsList";
import { AddItem } from "./AddItem";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [items, setItems] = useState([]);

  const [isAddPage, setIsAddPage] = useState(false);

  async function fetchItems() {
    try {
      const response = await fetch(`${apiURL}/items`);
      const itemsData = await response.json();

      setItems(itemsData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <main>
      <h1>Items</h1>
      <h2>All things</h2>
      <ItemsList items={items} />
      <AddItem fetchItems={fetchItems} setIsAddPage={setIsAddPage} />
    </main>
  );
};
