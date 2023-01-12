import React from "react";
import { Link, useLocation } from "react-router-dom";
import list_category from "./list-category.json";

const SectionCategory = (props) => {
     const location = useLocation();

     return (
          <div className="account_category">
               <p className="title">TRANG TÀI KHOẢN</p>
               <p className="title-hello">
                    Xin chào,
                    <span> {props.account.user_name} </span>!
               </p>
               <div className="account_list-category">
                    {list_category.map((item) => (
                         <Link
                              to={item.url.replace("/", "")}
                              key={item.id}
                              className="w-fit"
                              style={
                                   location.pathname.replace(
                                        "/sea-furniture/account",
                                        ""
                                   ) === item.url
                                        ? { color: "#f7941d" }
                                        : {}
                              }
                         >
                              {item.title}
                         </Link>
                    ))}
               </div>
          </div>
     );
};

export default React.memo(SectionCategory);
