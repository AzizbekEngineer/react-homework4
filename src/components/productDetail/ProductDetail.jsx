import React from "react";
import { FaStar } from "react-icons/fa";

const ProductDetail = ({ data, close }) => {
  console.log(data);
  return (
    <>
      <div onClick={() => close(null)} className="product__overly"></div>

      <div className="product__details">
        <div onClick={() => close(null)} className="product__close">
          X
        </div>
        <img src={data.img} width={300} alt="" />
        <h1>{data.title}</h1>
        <div className="starts">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <p>{data.price}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed dolorum
          quidem rem corporis, porro quibusdam?
        </p>
      </div>
    </>
  );
};

export default ProductDetail;
