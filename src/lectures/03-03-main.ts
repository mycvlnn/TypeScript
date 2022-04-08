// 1. Default function return type.
const sayHello = () => {
  console.log('Hello Bistech')
}

const sumTwoNumber = (a: number, b: number): number => {
  return a + b
}

const sum: (a: number, b: number) => number = () => {
  return a + b
}
