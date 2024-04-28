import React from "react";
import { BsSearch } from "react-icons/bs";
import Style from "../search/Search.module.css";

export const Searchbar = () => {
  return (
    <div className={"Style.searchbar"}>
      <div className={Style.navbar_container_left_box_input}>
        <div className={Style.navbar_container_left_box_input_box}>
          <input type="text" placeholder="Search NFT" />
          <BsSearch onClick={() => {}} className={Style.search_icon} />
        </div>
      </div>
    </div>
  );
};
