import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/download.png";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userSlice";
import { toast } from "react-toastify";

const navList = [
  "categories",
  "brands",
  "luxe",
  "nykaa fashion",
  "beauty advice",
];

const NavBar = () => {
  const cart = useSelector((state) => state.cart);
  const { token } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout successful!");
    window.location.reload();
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="w-full border-b border-[#e6dede] bg-white  h-17 flex items-center ">
      <div className="w-11/12 m-auto flex justify-between items-center">
        <div className="flex items-center gap-x-5">
          <Link to={"/"}>
            <img className="w-20" src={Logo} alt="Logo" />
          </Link>
          <div className="flex items-center gap-x-5">
            {navList.map((nav, i) => (
              <Link
                className="hover:text-pink-500 font-bold capitalize"
                key={i}
              >
                {nav}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-x-5">
          <div className="flex items-center gap-x-3 border border-pink-500 py-2 pl-3 pr-10 rounded-md">
            <CiSearch className="text-pink-500" />
            <input
              type="text"
              placeholder="search on Nykaa"
              className="outline-none text-pink-500"
            />
          </div>
          {token ? (
            <Link
              to={"/"}
              className="border border-pink-500 bg-pink-600 py-2 px-3 rounded-md cursor-pointer text-white"
              onClick={handleLogout}
            >
              Logout
            </Link>
          ) : (
            <Link
              to="/login"
              className="border border-pink-500 bg-pink-600 py-2 px-3 rounded-md cursor-pointer text-white"
            >
              Sign in
            </Link>
          )}

          <a href="/cart" className="relative">
            <div className="flex justify-center items-center p-2 absolute top-[-15px] right-[-20px] text-2xl  bg-pink-600 w-6 h-6 rounded-full">
              <span className="text-sm text-white">{totalItems}</span>
            </div>
            <div>
              {" "}
              <FaShoppingCart className="text-xl text-pink-600" />
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
