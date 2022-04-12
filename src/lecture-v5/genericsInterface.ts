//=======INTERFACE GENERIC==============

interface Me<T> {
  userId: number
  name: string
  phone: number
  hobbies: T
}

interface Dog extends Me<string[]> {
  personality: {
    id: number
    name: string
  }
}

const bob: Dog = {
  userId: 1,
  name: 'Bob',
  phone: 12323123123,
  hobbies: ['Take a shower'],
  personality: {
    name: 'Happy',
    id: 2
  }
}

console.log(bob)

const me: Me<string[]> = {
  userId: 1,
  name: 'Lee Chris',
  phone: 123,
  hobbies: ['Play game', 'Code', 'Learn technology']
}

console.log('me', me)

const myDog: Me<{ id: number; name: string }> = {
  userId: 2,
  name: 'DOGGY',
  phone: 123,
  hobbies: {
    id: 1,
    name: 'Play football'
  }
}

interface List<T> {
  length: number
  [index: number]: T
}

const numbers: List<number> = [1, 2, 3]

const wordsList: List<string> = ['Bistech', 'F8', 'Cybersoft']

type UserType = {
  id: number
  name: string
}

const usersList: List<UserType> = [
  { id: 1, name: 'Lee Chris' },
  { id: 2, name: 'Dung NV' }
]

console.log(usersList)

export {}
