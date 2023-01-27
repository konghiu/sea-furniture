import React from "react";
import { Link, useLocation } from "react-router-dom";
import headerBar from "./headerBar.json";

const Nav = () => {
     const location = useLocation();

     return (
          <>
               {headerBar.map((item, index) => {
                    return (
                         <li className="sub-link sub-link-level0" key={index}>
                              <Link
                                   className="main-link"
                                   to={item.to}
                                   style={
                                        location.pathname.includes(item.to)
                                             ? { color: "#f7941d" }
                                             : { color: "black" }
                                   }
                              >
                                   {item.title}
                              </Link>
                              {item.isContent && (
                                   <React.Fragment>
                                        <div className="sub-open-button"></div>
                                        <ul className="sub-menu sub-menu-level0">
                                             {item.content.map(
                                                  (child, inChild) => (
                                                       <Link
                                                            key={inChild}
                                                            className="sub-link sub-link-level1"
                                                            to={
                                                                 item.to +
                                                                 child.to
                                                            }
                                                       >
                                                            {child.title}
                                                       </Link>
                                                  )
                                             )}
                                        </ul>
                                   </React.Fragment>
                              )}
                         </li>
                    );
               })}
          </>
     );
};

export default Nav;
