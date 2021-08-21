export const __email__: RegExp =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const __passwords__ = {
  M8L1D1: {
    // Minimum eight characters, at least one letter and one number:
    type: "M8L1D1",
    expression: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  },
  M8L1D1S1: {
    // Minimum eight characters, at least one letter, one number and one special character:
    type: "M8L1D1S1",
    expression:
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  },
  M8L1U1D1S1: {
    // Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
    type: "M8L1U1D1S1",
    expression: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
  },
};

export const __phoneNumber__: RegExp =
  /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

export const __names__: RegExp =
  /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;

export const __username__: RegExp =
  /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
