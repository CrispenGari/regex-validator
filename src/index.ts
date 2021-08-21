import {
  __email__,
  __passwords__,
  __phoneNumber__,
  __username__,
} from "./constants";

export const isValidEmail = (email: string): boolean => __email__.test(email);
export const isValidUsername = (username: string): boolean =>
  __username__.test(username);
export const isValidPhoneNumber = (phoneNumber: string): boolean =>
  __phoneNumber__.test(phoneNumber);

export const passwordSalts = {
  M8L1D1: "M8L1D1",
  M8L1D1S1: "M8L1D1S1",
  M8L1U1D1S1: "M8L1U1D1S1",
};
// type PasswordType = "M8L1D1" | "M8L1D1S1" | "M8L1U1D1S1";

export const isValidPassword = (
  password: string,
  passwordType: string = "M8L1D1"
): boolean => {
  if (passwordType === passwordSalts.M8L1D1) {
    return __passwords__.M8L1D1.expression.test(password);
  }
  if (passwordType === passwordSalts.M8L1D1S1) {
    return __passwords__.M8L1D1S1.expression.test(password);
  }
  if (passwordType === passwordSalts.M8L1U1D1S1) {
    return __passwords__.M8L1U1D1S1.expression.test(password);
  }
  return false;
};
