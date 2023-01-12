import React from "react";
import not_found from "../../../assets/profile/rgb_creative_404.png";

const NotFound = () => {
     return (
          <div className="not-found">
               <div className="table-404">
                    <div>
                         <img src={not_found} alt="" />
                    </div>
               </div>
               {/* <div className="">
                    <p className="text-center">
                         THE PAGE YOU WERE LOOKING FOR DOESN'T EXIST
                    </p>
                    <p className="text-center">
                         YOU MAY HAVE MISTYPED THE ADDRESS OR THE PAGE MAY HAVE
                         MOVED
                    </p>
               </div> */}
          </div>
     );
};

export default NotFound;
