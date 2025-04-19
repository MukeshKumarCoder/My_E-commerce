import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { toast } from "react-toastify";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const data = await response.data;
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClick = (product) => {
    dispatch(addToCart(product));
    toast.success("Item Added Successfully");
  };

  return (
    <div className="w-full flex justify-center mt-5 py-5">
      <div className="w-11/12 grid grid-cols-5 gap-5 m-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-md shadow flex flex-col gap-y-2 p-3 justify-center items-center"
          >
            <Link to={`/product/${product.id}`}>
              <img className=" w-40 h-40" src={product.image} />
              <h2 className="text-center">{product.title.split(" ")[0]}</h2>
            </Link>
            <p>Price: ${product.price}</p>
            <button
              onClick={() => handleClick(product)}
              className="border border-pink-500 w-fit bg-pink-600 py-2 px-3 rounded-md cursor-pointer text-white"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
