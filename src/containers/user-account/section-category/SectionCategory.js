import React from "react";
import { Link } from "react-router-dom";
import list_category from "./list-category.json";

const SectionCategory = (props) => {
     return (
          <div className="account_category">
               <p className="title">TRANG TÀI KHOẢN</p>
               <p className="title-hello">
                    Xin chào,
                    <span> {props.account.user_name} </span>!
               </p>
               <div className="account_list-category">
                    {list_category.map((item) => (
                         <Link to={item.url} key={item.id}>
                              {item.title}
                         </Link>
                    ))}
               </div>
          </div>
     );
};

export default SectionCategory;
