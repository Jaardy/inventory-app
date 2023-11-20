import React from "react";

export default function Details({ singlePageData }) {
  console.log(singlePageData);
  return (
    <>
      <h1>{singlePageData.name}</h1>
      <img src={singlePageData.image}></img>
      <p>{singlePageData.description}</p>
      <button>Update item</button>
      <button>Delete item</button>
    </>
  );
}
