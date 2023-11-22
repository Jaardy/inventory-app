import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ItemsList } from "../components/ItemsList";
import { Page } from "../components/Details";
import { AddItem } from "./AddItem";
import Details from "./Item";
import logo from "../../images/logo.jpeg";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const Homepage = () => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState({});
  const [activeItem, setActiveItem] = useState(false);

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
      <img src={logo}></img>
      <h1>Items</h1>
      <h2>All things</h2>
      {!activeItem ? (
        <ItemsList
          items={items}
          setActiveItem={setActiveItem}
          setItem={setItem}
        />
      ) : (
        <Page item={item} />
      )}
    </main>
  );
};
