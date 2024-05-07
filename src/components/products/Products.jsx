import React, { useState } from "react";
import { ProductsData } from "../../static";
import { FaStar } from "react-icons/fa";
import "./products.scss";
import ProductDetail from "../productDetail/ProductDetail";

const Products = () => {
  const [product, setProduct] = useState(null);

  const products = ProductsData?.map((product) => (
    <div className="products__card" key={product.id}>
      <div className="products__img">
        <img onClick={() => setProduct(product)} src={product.img} alt="" />
      </div>
      <div className="products__icons">
        <div className="products__icon"></div>
      </div>
      <div className="products__infos">
        <h4 className="products__name">{product.title}</h4>
        <div className="products__stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <p className="products__price">
          <span>{product.oldPrice}</span> {product.price}
        </p>
      </div>
    </div>
  ));
  return (
    <section className="products container">
      <h4 className="products__info">Find your favourite smart watch.</h4>
      <h2 className="products__title">Our Latest Products</h2>
      <div className="products__cards">{products}</div>
      {product ? <ProductDetail data={product} close={setProduct} /> : <></>}
      <button className="products__btn">View More</button>
    </section>
  );
};

export default Products;
