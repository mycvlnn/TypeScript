//I .
// Định nghĩa với kiểu dữ liệu cụ thể ( literal type)

let a: 1;
let b: 2;
let JA: 'SOS';

//Với const, khi ommit type annotation, literal type sẽ được sử dụng. Vì const chỉ nhận được một giá trị, không thể thay đổi được

const number1 = 1; // const number1: 1
const hashtagName = 'Easy front-end'; //const hashtagName: 'Easy fron-end'
const isGood = false; //const isGood: false

//Ngược lại với let thì khác.

let number2 = 1; //let number2: number
let hashtagName2 = 'Lê Ngoại Ngữ'; // let hashtagName2: string
let isGood2 = false; // let isGood2: boolean

// Sử dụng as const đối với trường hợp object và array => những thuôc tính bên trong nó sẽ chỉ được đọc, không thể thay đổi.

/** 
 * Khi hover vào sẽ có: 
    const myCourse: {
    id: number;
    name: string;
}
  Bởi vì thuộc tính của nó có thể thay đổi. 
  myCourse.name = 'Chris lee'
  */

const myCourse = {
  id: 1,
  name: 'Lê Ngoại Ngữ',
};

/** 
    Khi sử dụng as const :
    Khi hover vào thì nó sẽ như sau:  
        const myCourse2: {
            readonly id: 1;
            readonly name: "Vip";
        }

    bạn không thể update các thuộc tính bên trong của đối tượng objec đó nữa. 
 */
const myCourse2 = {
  id: 1,
  name: 'Vip',
} as const;

//Tương tự với trường hợp khi làm việc với mảng:

const courseList = ['JavaScript', 'PHP', 1];
const courseList2 = ['Java', 'Kotlit', 'MySql'] as const;

// II . type assertion

function getStatusName(state: 'active') {
  console.log(state);
}

// let s = 'active' ; // let s: string
// getStatusName(s) // Argument of type 'string' is not assignable to parameter of type '"active"'.ts(2345)

//solution 1:

// let s: 'active' = 'active'
// getStatusName(s)

//solution 2:

let s = 'active';
getStatusName(s as 'active');

//solution 3

// const s = 'active'
// getStatusName(s)
