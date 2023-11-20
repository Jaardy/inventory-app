import React from "react";
import apiURL from "../api";

export default function Details({ singlePageData }) {
  console.log(singlePageData);

  async function deleteItem(item) {
    const response = await fetch(`${apiURL}/${item.id}`, {
      method: "DELETE",
    });
    const data = await response.json();
  }

  return (
    <>
      <h1>{singlePageData.name}</h1>
      <img src={singlePageData.image}></img>
      <p>{singlePageData.description}</p>
      <button>Update item</button>
      <button
        onClick={() => {
          deleteItem(singlePageData);
        }}
      >
        Delete item
      </button>
    </>
  );
}
