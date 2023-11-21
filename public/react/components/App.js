import React, { useState, useEffect } from "react";
import { ItemsList } from "./ItemsList";
import { AddItem } from "./AddItem";
import Details from "./Details";
import logo from "../../images/logo.jpeg";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [items, setItems] = useState([]);
  const [isSinglePage, setIsSinglePage] = useState(false);
  const [singlePageData, setSinglePageData] = useState({});
  const [isAddPage, setIsAddPage] = useState(false);
  const [isUpdatePage, setIsUpdatePage] = useState(false);

  async function fetchItems() {
    try {
      const response = await fetch(`${apiURL}/items`);
      const itemsData = await response.json();

      setItems(itemsData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  async function getPage(item) {
    const response = await fetch(`${apiURL}/items/${item.id}`);
    const data = await response.json();
    setIsSinglePage(true);
    setSinglePageData(data);
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <main>
      <img src={logo}></img>
      <h1>Items</h1>
      <h2>All things</h2>
      {isAddPage ? (
        <AddItem fetchItems={fetchItems} setIsAddPage={setIsAddPage} />
      ) : !isSinglePage ? (
        <ItemsList
          getPage={getPage}
          items={items}
          setIsAddPage={setIsAddPage}
        />
      ) : (
        <Details
          singlePageData={singlePageData}
          setIsSinglePage={setIsSinglePage}
          fetchItems={fetchItems}
          setIsUpdatePage={setIsUpdatePage}
          isUpdatePage={isUpdatePage}
        />
      )}
    </main>
  );
};
