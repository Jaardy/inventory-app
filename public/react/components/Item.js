import React from "react";

export const Item = ({ getPage, item }) => {
  return (
    <div onClick={() => getPage(item)}>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>Price: {item.price}</p>
      <p></p>
      <p>{item.category}</p>
      <img className="image" src={item.image} alt={item.name} />
    </div>
  );
};
