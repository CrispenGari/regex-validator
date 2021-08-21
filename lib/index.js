"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidPassword = exports.passwordSalts = exports.isValidPhoneNumber = exports.isValidUsername = exports.isValidEmail = void 0;
const constants_1 = require("./constants");
const isValidEmail = (email) => constants_1.__email__.test(email);
exports.isValidEmail = isValidEmail;
const isValidUsername = (username) => constants_1.__username__.test(username);
exports.isValidUsername = isValidUsername;
const isValidPhoneNumber = (phoneNumber) => constants_1.__phoneNumber__.test(phoneNumber);
exports.isValidPhoneNumber = isValidPhoneNumber;
exports.passwordSalts = {
    M8L1D1: "M8L1D1",
    M8L1D1S1: "M8L1D1S1",
    M8L1U1D1S1: "M8L1U1D1S1",
};
const isValidPassword = (password, passwordType = "M8L1D1") => {
    if (passwordType === exports.passwordSalts.M8L1D1) {
        return constants_1.__passwords__.M8L1D1.expression.test(password);
    }
    if (passwordType === exports.passwordSalts.M8L1D1S1) {
        return constants_1.__passwords__.M8L1D1S1.expression.test(password);
    }
    if (passwordType === exports.passwordSalts.M8L1U1D1S1) {
        return constants_1.__passwords__.M8L1U1D1S1.expression.test(password);
    }
    return false;
};
exports.isValidPassword = isValidPassword;
//# sourceMappingURL=index.js.map