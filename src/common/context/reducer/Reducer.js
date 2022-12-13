export const initStore = {
     user_cart: [],
     user_account: {},
};

const ReducerStore = (state = initStore, action) => {
     const { type, payload } = action;

     switch (type) {
          // executed user's account
          case "account/login":
               let new_account = payload;
               console.log(payload);
               return {
                    ...state,
                    user_account: new_account,
               };
          case "account/logout":
               return {
                    ...state,
                    user_account: {},
               };

          // executed user's cart
          case "ADD_PRODUCT":
               let list_aft_add = [...state.user_cart];
               const new_product = payload;
               let findToAdd = list_aft_add.findIndex(
                    (item) => item.id === new_product.id
               );
               if (findToAdd === -1) {
                    list_aft_add.push(new_product);
                    console.log("chua co trong gio hang");
               } else {
                    list_aft_add[findToAdd].quantity += new_product.quantity;
               }
               return {
                    ...state,
                    user_cart: [...list_aft_add],
               };
          case "REMOVE_PRODUCT":
               let findToRm = state.user_cart.findIndex((item, index) => {
                    return index === payload;
               });
               let new_user_cart = [...state.user_cart];
               if (findToRm !== -1) {
                    new_user_cart = state.user_cart.filter(
                         (item, index) => index !== findToRm
                    );
               }
               return {
                    ...state,
                    user_cart: [...new_user_cart],
               };

          case "UPDATE/increase":
               let list_aft_increase = [...state.user_cart];
               let findToIns = list_aft_increase.findIndex(
                    (item) => item.id === payload
               );
               if (findToIns !== -1) {
                    list_aft_increase[findToIns].quantity += 1;
               }
               return {
                    ...state,
                    user_cart: [...list_aft_increase],
               };
          case "UPDATE/decrease":
               let list_aft_decrease = [...state.user_cart];
               let findTodes = list_aft_decrease.findIndex(
                    (item) => item.id === payload
               );
               if (
                    findTodes !== -1 &&
                    list_aft_decrease[findTodes].quantity > 1
               ) {
                    list_aft_decrease[findTodes].quantity -= 1;
               }
               return {
                    ...state,
                    user_cart: [...list_aft_decrease],
               };
          default:
               break;
     }
};

export default ReducerStore;
