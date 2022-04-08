export class Employee {
  private name: string
  readonly age: number
  public male: boolean

  constructor(name: string, age: number, male: boolean) {
    this.name = name
    this.age = age
    this.male = male
  }

  print() {
    console.log(`Hello I'm ${this.name} and am ${this.age} , Male: ${this.male}`)
  }
}

const ngu = new Employee('Ngu', 12, true)
console.log(ngu)

console.log(ngu.male)
ngu.print()

// Ban co the viet tat nhu the nay:

class Student {
  constructor(public name: string, readonly age: number) {
    this.name = name
    this.age = age
  }
}

const thanhdom = new Student('Lee Chris', 18)

console.log(thanhdom)
