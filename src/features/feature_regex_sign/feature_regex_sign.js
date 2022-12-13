let format_special_letter = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
let format_special_letter_not_space = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
let format_lower_case_letters = /[a-z]/;
let format_upper_case_letters = /[A-Z]/;
let format_numbers = /[0-9]/;
let format_length = 8;

export const format_null_input = {
     allowed: false,
     message: "Yêu cầu nhập thông tin.",
};

export const format_has_input = {
     allowed: true,
     message: "",
};

let message_null_input = "Yêu cầu nhập thông tin.";

export const validUserName = (input) => {
     let numbers = format_numbers.test(input);
     let special_letter_not_space = format_special_letter_not_space.test(input);
     let strlen = input.length >= format_length;

     if (!numbers && !special_letter_not_space && strlen) {
          return format_has_input;
     } else {
          return {
               allowed: false,
               message: "Tên người dùng có ít nhất 8 ký tự, không chứa số và các ký tự đặc biệt",
          };
     }
};

export const validEmailOrPhone = (input) => {
     if (input.length === 0) {
          return {
               allowed: false,
               message: message_null_input,
          };
     } else return format_has_input;
};

export const validPassword = (input) => {
     let lower_case_letters = format_lower_case_letters.test(input);
     let upper_case_letters = format_upper_case_letters.test(input);
     let numbers = format_numbers.test(input);
     let special_letter = format_special_letter.test(input);
     let strlen = input.length >= format_length;

     let error_message =
          "Mật khẩu có ít nhất 8 ký tự bao gồm ký tự thường, ký tự in hoa, số và không chứa ký tự đặc biệt.";

     if (
          lower_case_letters &&
          upper_case_letters &&
          numbers &&
          !special_letter &&
          strlen
     ) {
          return format_has_input;
     } else {
          return {
               allowed: false,
               message: error_message,
          };
     }
};
