import React, { useState } from "react";

export const Search = ({ items }) => {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.input.value);
  };

  if (searchInput > 0) {
    items.filter((item) => {
      return item.name.match(searchInput);
    });
  }

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        onChange={handleChange}
        value={searchInput}
      />
    </>
  );
};
