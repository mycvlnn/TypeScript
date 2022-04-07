const sayHello = () => {
  console.log('hello') //ts: const sayHello: () => void
}

//function with param
//c1: inference return type
function getFullName(firstName: string, lastName: string) {
  return firstName + lastName
}

//c2: explicit return type
//ts: const sum: (a: number, b: number) => number
const sum = (a: number, b: number): number => {
  return a + b
}

//Optional and default parameter

//1. Optional parameter

// const getLength = (numbersList?: number[]): number => {
//   return Array.isArray(numbersList) ? numbersList.length : 0;
// };

// console.log(getLength([1, 2, 3]));

//2. default parameter

const getLength = (numberList: number[] = []) => {
  return numberList.length
}

console.log(getLength())

//3. destructuring parameter

//common used

interface User {
  id: number
  name: string
  age?: number
}

//or

// type User = {
//   id: number
//   name: string
//   age?: number
// }

const createNewUser = (user: User) => {
  const { id, name, age } = user
  console.log(id, name, age)
}

createNewUser({
  id: 1,
  name: 'lee chris',
  age: 18
})
