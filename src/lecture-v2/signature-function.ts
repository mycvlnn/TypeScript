// SIGNATURE FUNCTION

// let greet: (a: string, b: string) => void //This is signature function
// greet = (name: string, phone) => {
//   console.log(`Hello my name is: ${name} and my phone is: ${phone}`)
// }

// greet('Lee Chris', '0001')

// let sumNumber: (a: number, b: number) => number
// sumNumber = (number1, number2) => {
//   return number1 + number2
// }

// console.log(sumNumber(1, 2))

type Student = {
  id: number
  name: string
}

let getStudent: (student: Student) => string

getStudent = ({ id, name }: Student) => {
  return `id: ${id} name : ${name}`
}
console.log(getStudent({ id: 1, name: 'Lee Chris' }))

export {}
