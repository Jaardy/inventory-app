import React, { useState, useEffect } from "react";
import { ItemsList } from "./ItemsList";
import { AddItem } from "./AddItem";
import { LoginPage } from "./LoginPage";
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

  async function homeButtonHandler() {
    await setIsSinglePage(false);
    await setIsUpdatePage(false);
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
    <main className="main">
      <header className="header-flex">
        <img id="logo" src={logo} onClick={homeButtonHandler}></img>
        <h1 className="header">Inventorious Inventories</h1>
      </header>
      <h2 id="subheader">All of our things</h2>
      <LoginPage />
      {/* {isAddPage ? (
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
      )} */}
    </main>
  );
};
