import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductDetailList from "./ProductDetailList";
// import ProductData from "../../data/ProductData";
import "./productdetial.css";
import axios from "axios";

export default function ProductDetail() {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/getproducts"
        );
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const product = products.find((product) => product.id === +id);

  if (!product) {
    return <div>Error: Product not found</div>;
  }

  return (
    <div className="container">
      <div className="cards">
        <div className="container-fliud">
          <ProductDetailList key={product.id} {...product} />
        </div>
      </div>
    </div>
  );
}
