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

const makeArrXY = <X, Y>(x: X, y: Y) => [x, y]
console.log(m3, m4)

const m5 = makeArrXY<string, number>('Lee Chris', 2)

console.log('m5', m5)

const makeTuple = <X, Y>(x: X, y: Y): [X, Y] => [x, y]

const m6 = makeTuple(1, 2)
const m7 = makeTuple('string', null)
const m8 = makeTuple('string', 'string')
const m9 = makeTuple<string, number>('string', 1)
const m10 = makeTuple<string | null, number>(null, 1)
//...

const makeTupleWithTypeDefault = <X, Y = number>(x: X, y: Y): [X, Y] => [x, y]
const m11 = makeTupleWithTypeDefault('hello', 2)
const m12 = makeTupleWithTypeDefault<string>('string', 2001)

export {}
