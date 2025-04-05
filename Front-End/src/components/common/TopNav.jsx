import React from "react";
import { Link } from "react-router-dom";
import { FaMobileScreen, FaGift, FaLocationDot } from "react-icons/fa6";
import { MdOutlineHelpOutline } from "react-icons/md";

const TopNav = () => {
  return (
    <div className="w-full h-10 flex items-center bg-[#fc2779]">
      <div className="w-11/12 m-auto flex justify-between items-center">
        <h1 className="hover:text-white">
          BEAUTY BONANZA Get Your Amazing Deals!{" "}
        </h1>
        <div className="flex items-center gap-x-5">
          <Link
            to={"https://www.nykaa.com/installApp"}
            target="_blank"
            className="flex items-center gap-x-1 hover:text-white"
          >
            <FaMobileScreen />
            Get App
          </Link>
          <Link
            to={"https://www.nykaa.com/stores-n-events-desktop"}
            target="_blank"
            className="flex items-center gap-x-1 hover:text-white"
          >
            <FaLocationDot />
            Store & Events
          </Link>
          <Link
            to={"https://www.nykaa.com/giftcard/list"}
            target="_blank"
            className="flex items-center gap-x-1 hover:text-white"
          >
            <FaGift />
            Gift Card
          </Link>
          <Link
            to={"https://www.nykaa.com/help-center?dl_type=help_center"}
            target="_blank"
            className="flex items-center gap-x-1 hover:text-white"
          >
            <MdOutlineHelpOutline />
            Help
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
