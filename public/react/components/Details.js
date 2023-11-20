import React from "react";
import apiURL from "../api";
import { UpdateForm } from "./UpdateForm";

export default function Details({
  singlePageData,
  setIsSinglePage,
  fetchItems,
  setIsUpdatePage,
  isUpdatePage,
}) {
  console.log(singlePageData);

  async function deleteItem(item) {
    const response = await fetch(`${apiURL}/items/${item.id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    setIsSinglePage(false);
    fetchItems();
  }

  return (
    <>
      {!isUpdatePage ? (
        <>
          <h1>{singlePageData.name}</h1>
          <img className="image" src={singlePageData.image}></img>
          <p>{singlePageData.description}</p>
          <button
            onClick={() => {
              setIsUpdatePage(true);
            }}
          >
            Update item
          </button>
          <button
            onClick={() => {
              deleteItem(singlePageData);
            }}
          >
            Delete item
          </button>
        </>
      ) : (
        <UpdateForm
          setIsUpdatePage={setIsUpdatePage}
          singlePageData={singlePageData}
          fetchItems={fetchItems}
        />
      )}
    </>
  );
}
