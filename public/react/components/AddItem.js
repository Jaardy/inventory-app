import React, { useState } from "react";
import apiURL from "../api";

export const AddItem = ({ fetchItems, setIsAddPage }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(null);
  const [image, setImage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const page = await fetch(`${apiURL}/items/`, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        description: description,
        category: category,
        price: price,
        image: image,
      }),
      headers: {
        "content-type": "applicaiton/json",
      },
    });
    setName("");
    setDescription("");
    setCategory("");
    setPrice(null);
    setImage("");
    setIsAddPage(false);
    fetchItems();
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Add a new item below:</h2>
        <input
          className="input"
          type="text"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        ></input>
        <input
          className="input"
          type="text"
          placeholder="Item description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></input>
        <input
          className="input"
          type="text"
          placeholder="Item category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        ></input>
        <input
          className="input"
          type="number"
          placeholder="Item price (number)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        ></input>
        <input
          className="input"
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        ></input>
        <button className="button" type="submit">
          Add Item
        </button>
      </form>
    </>
  );
};
