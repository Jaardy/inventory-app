import React from "react";
import apiURL from "../api";
import { UpdateForm } from "./UpdateItemPage";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import UpdateForm from "../components/UpdateForm";

export default function Item() {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [update, setUpdate] = useState(false);

  async function getPage() {
    const response = await fetch(`${apiURL}/items/${id}`);
    const data = await response.json();
    setItem(data);
  }

  useEffect(() => {
    getPage();
  }, []);

  async function deleteItem() {
    const response = await fetch(`${apiURL}/items/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
  }

  return (
    <>
      {!update ? (
        <>
          <div className="main">
            <h1>{item.name}</h1>
            <img className="image" src={item.image}></img>
            <p className="item-description">{item.description}</p>
            <button
              onClick={() => {
                setUpdate(true);
              }}
            >
              Update item
            </button>
            <button onClick={deleteItem}>Delete item</button>
          </div>
        </>
      ) : (
        <UpdateForm item={item} />
      )}
    </>
  );
}
