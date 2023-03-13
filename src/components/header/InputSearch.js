import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const InputSearch = () => {
     const navigate = useNavigate();
     const location = useLocation();

     const [warning, setWarning] = useState(null);
     const [searchText, setSearchText] = useState(
          sessionStorage.getItem("inputSearch") || ""
     );

     const handleSearchProducts = () => {
          if (searchText.trim() === "") {
               setWarning(true);
               return;
          }
          navigate("/sea-furniture/products/search/" + searchText.trim());
     };

     React.useEffect(() => {
          return () => {
               setWarning(false);
          };
     }, [location.pathname]);

     return (
          <div className="search-input">
               {warning && (
                    <span className="warning">Yêu cầu nhập thông tin</span>
               )}
               <input
                    placeholder="Nhập từ khóa tìm kiếm"
                    value={searchText}
                    onFocus={() => setWarning(null)}
                    onChange={(e) => {
                         sessionStorage.setItem("inputSearch", e.target.value);
                         setSearchText(e.target.value);
                    }}
                    onKeyDown={(e) => {
                         if (warning) setWarning(null);
                         if (e.key === "Enter") handleSearchProducts();
                    }}
               />
               <span
                    className="cursor-pointer icon_search"
                    onClick={() => handleSearchProducts()}
               >
                    <i className="fa-solid fa-magnifying-glass "></i>
               </span>
          </div>
     );
};

export default React.memo(InputSearch);
