//noImplicitAny
const isEmpty = (numbers: number[]) => {
  return numbers.length === 0;
};

console.log(isEmpty([1, 2, 3]));

//strictNullChecks

let message;

if (Math.random() > 1.5) {
  message = 'hello';
}

if (message) {
  console.log(message.toString());
}

//strictPropertyInitialization

// class UserAccount {
//   name: string;
//   accountType = 'user';
//   email: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }

//Fix:
class UserAccount {
  name: string;
  accountType = 'user';
  email: string;
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}
