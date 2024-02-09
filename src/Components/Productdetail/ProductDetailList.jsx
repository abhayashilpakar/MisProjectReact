import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

function ProductDetailList({ _id, img, price, title }) {
  const { addToCart } = useContext(ShopContext);
  console.log(img);

  return (
    <>
      <div className="wrapper  flex md:flex-row max-[640px]:flex-col ">
        <div className="preview col-md-6 pr-10 ">
          <div className="preview-pic tab-content ">
            <div className="tab-pane active" id="pic-1">
              <img src={img} alt="imagee" />
            </div>
          </div>
        </div>
        <div className="details col-md-6">
          <h3 className="product-title">{title}</h3>

          <p className="product-description">
            Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia
            sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus
            posuere.
          </p>
          <h4 className="price">
            current price: <span className="font-bold text-lg">${price}</span>
          </h4>
          <p className="vote">
            <strong>91%</strong> of buyers enjoyed this product!
            <strong>(87 votes)</strong>
          </p>
          <h5 className="sizes">
            sizes:
            <span
              className="size inline-block px-2 py-1 mr-2 bg-gray-200 rounded-full"
              data-toggle="tooltip"
              title="small"
            >
              s
            </span>
            <span
              className="size inline-block px-2 py-1 mr-2 bg-gray-200 rounded-full"
              data-toggle="tooltip"
              title="medium"
            >
              m
            </span>
            <span
              className="size inline-block px-2 py-1 mr-2 bg-gray-200 rounded-full"
              data-toggle="tooltip"
              title="large"
            >
              l
            </span>
            <span
              className="size inline-block px-2 py-1 mr-2 bg-gray-200 rounded-full"
              data-toggle="tooltip"
              title="xtra large"
            >
              xl
            </span>
          </h5>

          <div className="action">
            <button
              className="add-to-carts btn btn-default bg-orange-500"
              type="button"
              onClick={() => addToCart(_id)}
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetailList;
