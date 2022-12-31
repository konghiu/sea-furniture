export const initStore = {
     user_cart: [],
     user_account: null,
     user_addresses: [],
     notify_for_user: [],
     news_list: [],
     products_list: [],
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
                    (product) => product.image === new_product.image
               );
               if (findToAdd === -1) {
                    list_aft_add.push(new_product);
               } else {
                    list_aft_add[findToAdd].quantity += new_product.quantity;
               }
               return {
                    ...state,
                    user_cart: [...list_aft_add],
               };
          case "REMOVE_PRODUCT":
               let findToRm = state.user_cart.findIndex((item) => {
                    return item.image === payload;
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
          case "CLEAR_PRODUCT":
               return {
                    ...state,
                    user_cart: [],
               };

          case "UPDATE/increase":
               let list_aft_increase = [...state.user_cart];
               let findToIns = list_aft_increase.findIndex(
                    (item) => item.image === payload
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
                    (item) => item.image === payload
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

          case "ADDRESSES/add":
               let address = payload;
               let list_addresses_add = [...state.user_addresses];
               console.log(address);
               return {
                    ...state,
                    user_addresses: [...list_addresses_add, address],
               };
          case "ADDRESSES/changdefault":
               let list_addresses_changedefault = [...state.user_addresses];
               let findAddressTochangedefault =
                    list_addresses_changedefault.findIndex((item, index) => {
                         return index === payload;
                    });
               console.log(findAddressTochangedefault);
               if (findAddressTochangedefault !== -1) {
                    list_addresses_changedefault.forEach((item, index) => {
                         if (index === findAddressTochangedefault) {
                              list_addresses_changedefault[
                                   index
                              ].default = true;
                         } else {
                              list_addresses_changedefault[
                                   index
                              ].default = false;
                         }
                    });
               }
               console.log(list_addresses_changedefault);
               return {
                    ...state,
                    user_addresses: [...list_addresses_changedefault],
               };
          case "ADDRESSES/remove":
               let list_addresses_remove = [...state.user_addresses];
               let findAddressIndex = list_addresses_remove.findIndex(
                    (item, index) => {
                         return index === payload;
                    }
               );
               let list_addresses_aft_rm;
               if (findAddressIndex !== -1) {
                    list_addresses_aft_rm = list_addresses_remove.filter(
                         (item, index) => index !== findAddressIndex
                    );
               }
               return {
                    ...state,
                    user_addresses: [...list_addresses_aft_rm],
               };

          case "NOTIFY/add":
               const notifies_add = [...state.notify_for_user];
               notifies_add.push(payload);
               return {
                    ...state,
                    notify_for_user: [...notifies_add],
               };
          case "NOTIFY/remove":
               let notifies_rm = [...state.notify_for_user];
               notifies_rm = notifies_rm.filter((item) => item.id !== payload);
               return {
                    ...state,
                    notify_for_user: [...notifies_rm],
               };
          case "NEWSLIST":
               let news_list = payload;
               return {
                    ...state,
                    news_list: news_list,
               };
          case "PRODUCTSLIST":
               let products_list = payload;
               return {
                    ...state,
                    products_list: products_list,
               };
          default:
               break;
     }
};

export default ReducerStore;
