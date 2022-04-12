//=======================GENERICS EXTENDS==============================

const makeFullNameConstraint = (objInfo: { firstName: string; lastName: string }) => {
  return {
    ...objInfo,
    fullName: `${objInfo.firstName} ${objInfo.lastName}`
  }
}

const m1 = makeFullNameConstraint({ firstName: 'Lee', lastName: 'Chris' })
console.log('m1', m1)

const makeFullNameGenerics = <T extends { firstName: string; lastName: string }>(objInfo: T) => {
  return {
    ...objInfo,
    fullName: `${objInfo.firstName} ${objInfo.lastName}`
  }
}

const m2 = makeFullNameGenerics({
  age: 12,
  gender: 'male',
  firstName: 'Lee chris',
  lastName: 'Wan'
})
console.log('m2', m2)

const addNewEmployeeT = <T extends object>(employee: T) => {
  const usrId = Math.floor(Math.random() * 100)
  return {
    ...employee,
    usrId
  }
}

const newEmployee = addNewEmployeeT({ name: 'Chris', lasName: 'Lee', phoneNumber: 1 })

newEmployee.usrId = 1
newEmployee.name = 'Dung Lai Lap Trinh'
console.log(newEmployee)

export {}
