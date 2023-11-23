import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Item = ({ item, setIsSinglePage, setSinglePageData }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  async function getPage(item) {
    const response = await fetch(`${apiURL}/items/${item.id}`);
    const data = await response.json();
    setIsSinglePage(true);
    setSinglePageData(data);
  }
  useEffect(() => {
    getPage();
  }, []);
  
  return (
    <div className="item" onClick={() => getPage(item)}>
      <h3>{`${item.name.slice(0, 20)}...`}</h3>
      <img className="image" src={item.image} alt={item.name} />
      <p>Price: £{item.price}</p>
    </div>
  );
};

//use effect in this page with the get page funcction? with id from params

//set item data in use state here?
