import React from "react";

export const Page = ({ item }) => {
  return (
    <>
      <h3>{item.name}</h3>
      <img src={item.image}></img>
    </>
  );
};
