//============GENERIC===============

const listStudent: Array<string> = ['Lee Chris', 'Tran Thuc', 'Hoang']
// type myArr = number[]
type strArr = Array<string>
type numArr = Array<number>

const last = (arr: Array<number>) => arr[arr.length - 1]

const value = last([1, 2, 3])

const lastT = <T>(arr: Array<T>) => arr[arr.length - 1]

const l1 = lastT([1, 2, 3]) // return 3
const l2 = lastT<string>(['a', 'b', 'c']) //return c
const l3 = lastT<boolean>([true, false, true]) // return true

// truong hop la function
const makeArrT = <T>(x: T) => [x]
const m3 = makeArrT(1)
const m4 = makeArrT('a')

console.log(m3, m4)
