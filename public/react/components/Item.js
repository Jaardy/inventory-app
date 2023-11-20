import React from "react";

export const Item = ({ item }) => {
  return (
    <>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>Price: £{item.price}</p>
      <p>{item.category}</p>
      <img className="image" src={item.image} alt={item.name} />
    </>
  );
};
