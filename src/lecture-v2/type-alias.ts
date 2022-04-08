//TYPE ALIAS

type StringOrNumber = string | number

type Lecture = {
  id: number
  name: string
}

const theName: StringOrNumber = 'Lee Chris'

const myGrades: StringOrNumber = 1

const getLecture = (lecture: Lecture) => {
  console.log(lecture)
}

getLecture({ id: 1, name: 'Learn Typescript' })
