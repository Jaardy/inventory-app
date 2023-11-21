import React from "react";

export const Item = ({ getPage, item }) => {
  return (
    <div className="item" onClick={() => getPage(item)}>
      <h3>{`${item.name.slice(0, 20)}...`}</h3>
      <img className="image" src={item.image} alt={item.name} />
      <p>Price: £{item.price}</p>
    </div>
  );
};
