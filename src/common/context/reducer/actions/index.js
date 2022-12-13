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
