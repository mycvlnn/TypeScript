interface Person {
  id: number
  name: string
  speak: (lang: string) => void
  spend: (amount: number) => number
}

const bistech: Person = {
  id: 1,
  name: 'Bistech',
  speak: (lang: string) => console.log(lang),
  spend: (amount: number) => amount
}

const helloPerson = (person: Person): void => {
  console.log(`hello my name: ${person.name}. Id: ${person.id}`)
}

helloPerson(bistech)
