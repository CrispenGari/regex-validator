"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.__username__ = exports.__names__ = exports.__phoneNumber__ = exports.__passwords__ = exports.__email__ = void 0;
exports.__email__ = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
exports.__passwords__ = {
    M8L1D1: {
        type: "M8L1D1",
        expression: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    },
    M8L1D1S1: {
        type: "M8L1D1S1",
        expression: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    },
    M8L1U1D1S1: {
        type: "M8L1U1D1S1",
        expression: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    },
};
exports.__phoneNumber__ = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
exports.__names__ = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
exports.__username__ = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
//# sourceMappingURL=index.js.map