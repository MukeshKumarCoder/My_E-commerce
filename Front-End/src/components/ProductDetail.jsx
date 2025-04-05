import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  const getDataDetails = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      const data = await res.data;
      setProduct(data);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getDataDetails();
  }, [id]);

  if (!product) return <p className="text-center text-5xl mt-20">Loading...</p>;

  return (
    <div className="w-[60%] h-full shadow m-auto p-5 mt-10 flex items-center justify-between gap-x-20 ">
      <img src={product.image} alt={product.title} className="w-50" />
      <div className="flex flex-col gap-y-3 justify-start">
        <h2 className="text-pink-500 text-2xl">
          Title: <span className="text-black text-base ">{product.title}</span>
        </h2>
        <p>Price: ${product.price}</p>
        <p>
         Description: {product.description}
        </p>
        <p>
         Rating: {product.rating.rate}
        </p>
        <button
          onClick={() => dispatch(addToCart(product))}
          className="border border-pink-500 w-fit bg-pink-600 py-2 px-3 rounded-md cursor-pointer text-white"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
