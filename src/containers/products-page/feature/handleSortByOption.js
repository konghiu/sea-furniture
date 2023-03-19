// import list_product from "../../../mocks/products_api";

export const handleSortByOption = (array, option) => {
     if (option === "A-Z") {
          for (let i = 0; i < array.length; i++) {
               for (let j = i + 1; j < array.length; j++) {
                    if (
                         array[i].name[0].charCodeAt() <
                         array[j].name[0].charCodeAt()
                    ) {
                         let swap = array[i];
                         array[i] = array[j];
                         array[j] = swap;
                    }
               }
          }
     } else if (option === "Z-A")
          for (let i = 0; i < array.length; i++) {
               for (let j = i + 1; j < array.length; j++) {
                    if (
                         array[i].name[0].charCodeAt() >
                         array[j].name[0].charCodeAt()
                    ) {
                         let swap = array[i];
                         array[i] = array[j];
                         array[j] = swap;
                    }
               }
          }
     else if (option === "Increase")
          for (let i = 0; i < array.length; i++) {
               for (let j = i + 1; j < array.length; j++) {
                    if (array[i].price > array[j].price) {
                         let swap = array[i];
                         array[i] = array[j];
                         array[j] = swap;
                    }
               }
          }
     else if (option === "Decrease")
          for (let i = 0; i < array.length; i++) {
               for (let j = i + 1; j < array.length; j++) {
                    if (array[i].price < array[j].price) {
                         let swap = array[i];
                         array[i] = array[j];
                         array[j] = swap;
                    }
               }
          }
     console.log(array);
     return array;
};
