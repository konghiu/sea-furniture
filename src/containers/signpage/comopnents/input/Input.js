import React, { useEffect, useState } from "react";
import "./input.css";

const Input = (props) => {
     const [value, setValue] = useState("");

     const handleEnter = () => {
          props.handleEnter(true);
     };

     useEffect(() => {
          props.handleSetValue(value);
     }, [value, props]);
     const handleRemoveWarning = (target) => {
          if (target.value === value) {
               props.handleRemoveWarning(true);
          }
     };

     const handleHidePassword = (target) => {
          const parent = target.parentElement;
          const input = parent.childNodes[0];
          input.type = "password";
     };
     const handleShowPassword = (target) => {
          const parent = target.parentElement;
          const input = parent.childNodes[0];
          input.type = "text";
     };

     return (
          <div className="pattern-input">
               <input
                    style={
                         props.warning && !props.warning.allowed
                              ? { borderColor: "var(--main-color)" }
                              : null
                    }
                    type={props.type}
                    placeholder={props.placeholder}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onFocus={(e) => handleRemoveWarning(e.target)}
                    onKeyDown={(e) => {
                         if (e.key === "Enter" && props.type === "password")
                              handleEnter();
                    }}
               />
               {props.type === "password" ? (
                    <i
                         className="fa-solid fa-eye"
                         onMouseDown={(e) => handleShowPassword(e.target)}
                         onMouseUp={(e) => handleHidePassword(e.target)}
                         onMouseMove={(e) => handleHidePassword(e.target)}
                    ></i>
               ) : null}
               {props.warning ? <span>{props.warning.message}</span> : null}
          </div>
     );
};

export default Input;
