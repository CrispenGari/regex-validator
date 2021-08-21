### Regex Valiador.

This is a package that validate basic strings using regular expressions. This package is used to validate strings like passwords, username, phone-numbers or and email.

### Installation

### yarn

```
yarn add @crispen/regex-validator
```

### npm

```
npm install @crispen/regex-validator
```

### TypeScript

You don't have to explicitly install the types for this package because it was created using typescript.

### Basic usage

```ts
import {
  isValidEmail,
  isValidUsername,
  isValidPhoneNumber,
  isValidPassword,
} from "@crispen/regex-validator";

console.log(isValidEmail("test@gmail.com")); // true
console.log(isValidUsername("username_9")); // true
console.log(isValidPhoneNumber("+98 778 901 7890")); // true
console.log(isValidPassword("this_is9t@")); // true
```

### Password `salts`.

We have some 3 basic password `salts` that we can validate which are:

<table>
  <thead>
    <tr>
      <th>Salt</th>
      <th>Description</th>
      <th>Value</th>
      <th>Is Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>M8L1D1</td>
      <td>Minimum eight characters, at least one letter and one number</td>
      <td>"M8L1D1"</td>
      <td>true</td>
    </tr>
    <tr>
      <td>M8L1D1S1</td>
      <td>
        Minimum eight characters, at least one letter, one number and one
        special character
      </td>
      <td>"M8L1D1S1"</td>
      <td>false</td>
    </tr>
    <tr>
      <td>M8L1U1D1S1</td>
      <td>
        Minimum eight characters, at least one uppercase letter, one lowercase
        letter and one number
      </td>
      <td>"M8L1U1D1S1"</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

### Changing the password `salt` to validate.

You can change the password salt easily by passing the following the salt as the second argument to the ``:

```ts
import { isValidPassword } from "@crispen/regex-validator";

console.log(isValidPassword("this_is9t@", passwordSalts.M8L1D1));
```
