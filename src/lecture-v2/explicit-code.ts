let hobbies: 'Play game' | 'Play piano'

hobbies = 'Play game'
hobbies = 'Play piano'

// hobbies = 'Hihih' //Not working

let yourPhone: string | number

yourPhone = '001'
yourPhone = 123
// yourPhone = false //Not working

let person: {
  id: number
  name: string
  age: number
}

person = {
  id: 1,
  name: 'lee chris',
  age: 18
  //   isActive: false, not working
}

let project: object

project = {
  id: 1,
  name: 'capichi delivery web'
}

project = [1, 2, 3]

// project = false //not working
