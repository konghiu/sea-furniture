import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const InputSearch = () => {
     const navigate = useNavigate();

     const [warning, setWarning] = useState(null);
     const [searchText, setSearchText] = useState("");

     const handleSearchProducts = () => {
          if (searchText.trim() === "") {
               setWarning(true);
               return;
          }
          navigate("/sea-furniture/products/search/" + searchText.trim());
     };

     return (
          <div className="search-input">
               {warning && (
                    <span className="warning">Yêu cầu nhập thông tin</span>
               )}
               <input
                    className=""
                    placeholder="Nhập từ khóa tìm kiếm"
                    value={searchText}
                    onFocus={() => setWarning(null)}
                    onChange={(e) => setSearchText(e.target.value)}
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

export default InputSearch;
