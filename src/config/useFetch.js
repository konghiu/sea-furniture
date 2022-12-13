import { useEffect, useState } from "react";

const useFetch = (url) => {
     const [state, setState] = useState("answer return");

     useEffect(() => {
          fetch(url, {
               method: "GET",
          })
               .then((res) => res.json())
               .then((res) => setState(res));
     }, []);

     return state;
};

export default useFetch;
