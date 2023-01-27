import React from "react";
import { HOTLINE } from "../../../assets/auth/auth";
import "./headerBar.css";
import Nav from "./Nav";
import BlockTittle from "./BlockTittle";

const HeaderBar = () => {
     return (
          <div className="header-bar flex justify-between">
               <BlockTittle />
               <ul className="nav">
                    <Nav />
                    {/* navbar */}
               </ul>
               <div className="hotline">
                    <p className="">Hotline:</p>
                    <h2>{HOTLINE}</h2>
               </div>
          </div>
     );
};

export default HeaderBar;
