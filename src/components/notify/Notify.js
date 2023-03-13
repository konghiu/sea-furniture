import React, { useContext, useEffect } from "react";
import context from "../../common/context";
import { NOTIFY_REMOVE } from "../../common/context/reducer/actions";
import "./notify.css";

const Notify = () => {
     const consumer = useContext(context);
     const notify_for_user = consumer[0].notify_for_user;
     const dispatch = consumer[1];

     const handleRemoveNotify = (target, id) => {
          const parent = target.parentNode;
          parent.classList.add("notify_effect");
          parent.onanimationend = () => {
               dispatch(NOTIFY_REMOVE(id));
          };
     };

     useEffect(() => {
          if (notify_for_user.length > 0) {
               setTimeout(() => {
                    let stt = 0;
                    let autoRemove = setInterval(() => {
                         if (
                              !notify_for_user[stt].id ||
                              !notify_for_user[stt]
                         ) {
                              clearInterval(autoRemove);
                         }
                         dispatch(NOTIFY_REMOVE(notify_for_user[stt].id));
                         stt++;
                    }, 1000);
               }, 2000);
          }
     }, [notify_for_user]);

     return (
          <div className="container-notify">
               {notify_for_user.length > 0
                    ? notify_for_user.map((item) => (
                           <div
                                style={
                                     item.type === "success"
                                          ? { borderColor: "rgb(34, 197, 94)" }
                                          : { borderColor: "rgb(239, 68, 68)" }
                                }
                                className="notify"
                                key={item.id}
                           >
                                <span>
                                     {item.type === "success" ? (
                                          <i className="fa-solid fa-circle-check text-green-500"></i>
                                     ) : (
                                          <i className="fa-solid fa-triangle-exclamation text-red-500"></i>
                                     )}
                                </span>
                                <p className="message">{item.message}</p>
                                <i
                                     className="fa-solid fa-x"
                                     onClick={(e) =>
                                          handleRemoveNotify(e.target, item.id)
                                     }
                                ></i>
                           </div>
                      ))
                    : null}
          </div>
     );
};

export default React.memo(Notify);
