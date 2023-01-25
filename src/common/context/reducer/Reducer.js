import products_api from "../../../mocks/products_api";
import users_api from "../../../mocks/users_api";
import news_api from "../../../mocks/news_api";

export const initStore = {
     user_cart: [],
     user_account: null,
     user_addresses: [],
     notify_for_user: [],
     users_list: users_api,
     news_list: news_api,
     products_list: products_api,
     quick_view_product: null,
     buy_product: null,
     history: null,
};

const ReducerStore = (state = initStore, action) => {
     const { type, payload } = action;

     switch (type) {
          // executed user's account
          case "account/login":
               let account_login = payload;
               let cart_on_computer = [...state.user_cart];
               if (cart_on_computer.length > 0) {
                    let user_cart_avai = [...account_login.user_cart];
                    if (user_cart_avai.length > 0) {
                         user_cart_avai.forEach((item) => {
                              let findToAdd = cart_on_computer.findIndex(
                                   (product) => product.image === item.image
                              );
                              if (findToAdd === -1) {
                                   cart_on_computer.push(item);
                              } else {
                                   cart_on_computer[findToAdd].quantity +=
                                        item.quantity;
                              }
                         });
                    }
                    account_login.user_cart = cart_on_computer;
               }
               console.log(account_login.user_cart);
               return {
                    ...state,
                    user_account: account_login,
               };
          case "account/register":
               let new_account = { ...payload };
               let new_user_list = [...state.users_list];
               new_account.user_ID =
                    new_user_list[new_user_list.length - 1].user_ID + 1;
               new_user_list.push(new_account);
               return {
                    ...state,
                    users_list: new_user_list,
               };
          case "account/logout":
               return {
                    ...state,
                    user_account: null,
                    user_cart: [],
               };
          case "account/changepassword":
               let info_cpass = { ...payload };
               let users_list_change_pass = [...state.users_list];
               let findUserChangePass = users_list_change_pass.findIndex(
                    (user) => user.user_ID === info_cpass.user_ID
               );
               let user_change_pass;
               if (findUserChangePass !== -1) {
                    user_change_pass =
                         users_list_change_pass[findUserChangePass];
                    user_change_pass.password = info_cpass.newPassword;
               }
               return {
                    ...state,
                    users_list: users_list_change_pass,
                    user_account: user_change_pass,
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
               let info_adr = { ...payload };
               let users_list_address = [...state.users_list];
               let findUserAddress = users_list_address.findIndex(
                    (user) => user.user_ID === info_adr.user_ID
               );
               let user_add_adr;
               if (findUserAddress !== -1) {
                    user_add_adr = users_list_address[findUserAddress];
                    user_add_adr.user_list_address.push(info_adr.address);
               }
               return {
                    ...state,
                    users_list: users_list_address,
                    user_account: user_add_adr,
               };
          case "ADDRESSES/changdefault":
               let info_cg = { ...payload };
               let users_list_cg_adr = [...state.users_list];
               let findUserCgAdr = users_list_cg_adr.findIndex(
                    (user) => user.user_ID === info_cg.user_ID
               );
               let user_cg_adr_df;
               if (findUserCgAdr !== -1) {
                    user_cg_adr_df = users_list_cg_adr[findUserCgAdr];
                    user_cg_adr_df.user_list_address =
                         user_cg_adr_df.user_list_address.map((adr, index) => {
                              if (index === info_cg.index_adr) {
                                   adr.default = true;
                              } else {
                                   adr.default = false;
                              }
                              return adr;
                         });
               }
               return {
                    ...state,
                    users_list: users_list_cg_adr,
                    user_account: user_cg_adr_df,
               };
          case "ADDRESSES/remove":
               let info_rm = { ...payload };
               let users_list_rm_adr = [...state.users_list];
               let findUserRmAdr = users_list_rm_adr.findIndex(
                    (user) => user.user_ID === info_rm.user_ID
               );
               let user_rm_adr;
               if (findUserRmAdr !== -1) {
                    user_rm_adr = users_list_rm_adr[findUserRmAdr];
                    user_rm_adr.user_list_address =
                         user_rm_adr.user_list_address.filter(
                              (a, index) => index !== info_rm.index_adr
                         );
               }
               return {
                    ...state,
                    users_list: users_list_rm_adr,
                    user_account: user_rm_adr,
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

          // reducer news
          case "NEWSLIST":
               let news_list = payload;
               return {
                    ...state,
                    news_list: news_list,
               };

          case "news/comment":
               let info_cmt = payload;
               let news_list_cmt = [...state.news_list];
               let news_after_cmt = news_list_cmt.map((news) => {
                    if (news.id === info_cmt.id) {
                         return news.comments.push(info_cmt.user_comment);
                    } else {
                         return news;
                    }
               });

               return {
                    ...state,
                    news_list: news_after_cmt,
               };

          // reducer products
          case "PRODUCTSLIST":
               let products_list = payload;
               return {
                    ...state,
                    products_list: products_list,
               };
          case "QUICKVIEWPRODUCT":
               return {
                    ...state,
                    quick_view_product: payload,
               };
          case "BUYPRODUCT":
               return {
                    ...state,
                    buy_product: payload,
               };

          case "HISTORY":
               return {
                    ...state,
                    history: payload,
               };
          default:
               break;
     }
};

export default ReducerStore;
