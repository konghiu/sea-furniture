// action user's account
export const USER_LOGIN = (payload) => {
     return {
          type: "account/login",
          payload,
     };
};
export const USER_LOGOUT = (payload) => {
     return {
          type: "account/logout",
          payload,
     };
};

// action user's cart
export const ADD_PRODUCT = (payload) => {
     return {
          type: "ADD_PRODUCT",
          payload,
     };
};

export const REMOVE_PRODUCT = (payload) => {
     return {
          type: "REMOVE_PRODUCT",
          payload,
     };
};

export const CLEAR_PRODUCT = (payload) => {
     return {
          type: "CLEAR_PRODUCT",
          payload,
     };
};

export const UPDATE_INCREASE = (payload) => {
     return {
          type: "UPDATE/increase",
          payload,
     };
};
export const UPDATE_DECREASE = (payload) => {
     return {
          type: "UPDATE/decrease",
          payload,
     };
};

// addresses
export const ADDRESSES_ADD = (payload) => {
     return {
          type: "ADDRESSES/add",
          payload,
     };
};
export const ADDRESSES_CHANGE_DEFAULT = (payload) => {
     return {
          type: "ADDRESSES/changdefault",
          payload,
     };
};
export const ADDRESSES_REMOVE = (payload) => {
     return {
          type: "ADDRESSES/remove",
          payload,
     };
};
export const NOTIFY_ADD = (payload) => {
     return {
          type: "NOTIFY/add",
          payload,
     };
};
export const NOTIFY_REMOVE = (payload) => {
     return {
          type: "NOTIFY/remove",
          payload,
     };
};

export const NEWSLIST = (payload) => {
     return {
          type: "NEWSLIST",
          payload,
     };
};
export const PRODUCTSLIST = (payload) => {
     return {
          type: "PRODUCTSLIST",
          payload,
     };
};

export const QUICKVIEWPRODUCT = (payload) => {
     return {
          type: "QUICKVIEWPRODUCT",
          payload,
     };
};
export const BUYPRODUCT = (payload) => {
     return {
          type: "BUYPRODUCT",
          payload,
     };
};
export const HISTORY = (payload) => {
     return {
          type: "HISTORY",
          payload,
     };
};
