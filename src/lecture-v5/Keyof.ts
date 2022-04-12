// ============== KEY OF AND  TYPEOF OPERATOR ===================

interface Student {
  id: number | string
  name: string
}

type StudentType = keyof Student

const ngu: StudentType = 'id'

type MappedTypes = {
  [Key in keyof Student]: boolean
}

const dung: MappedTypes = {
  id: true,
  name: false,
  gender: false,
  grade: false
}

//=================DEMO==============

interface Chris {
  name: string
  age: number
  location: string
}

type Getters<T> = {
  [Property in keyof T as `get${Capitalize<string & Property>}`]: () => T[Property]
}

type LazyPerson = Getters<Chris>
