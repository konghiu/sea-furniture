import React, { useEffect, useState } from "react";
import "./addresses.css";

const Input = (props) => {
     const [text, setText] = useState("");

     useEffect(() => {
          props.handleSetText(text);
     }, [text]);

     return (
          <React.Fragment>
               <div className="container-input">
                    <input
                         type="text"
                         required
                         value={text}
                         onChange={(e) => setText(e.target.value)}
                    />
                    <label>{props.title}</label>
               </div>
          </React.Fragment>
     );
};

export default React.memo(Input);
