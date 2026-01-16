import axios from "axios";
import React from "react";

const productsPage = async () => {
  const res = await axios.get("../../data/products-data.json");
 return res.json();

  return <div>products</div>;
};

export default productsPage;
