//I. Type Alias: Đặt lại tên cho kiẻu dữ liệu bất kì

//1. Primitive type
/**
 * Trường hợp dưới đây, chỉ đơn giản là mình tạo ra một cái tên gọi khác cho kiểu primitive.
 * Cái này ít hữu dụng, vì cơ bản mình có thể dùng trực tiếp primitive type luôn cho khỏe.
 */

type StudentName = string;
type StudenAge = number;
type IsTopStudent = boolean;

//2. Object type : Định nghĩa cho một object, array, function

/*
type Student = {
  readonly id: number;
  name: string;
  age?: number;
};

const ngu: Student = {
  id: 1,
  name: 'ngu',
  age: 18,
};

*/

//Hoặc bạn có thể sử dụng như sau:

// interface Student {
//   id: number;
//   name: string;
//   age?: number;
// }

// const chris: Student = {
//   id: 1,
//   name: 'chris',
//   age: 19,
// };

//3. Union type

//+ Kết hợp 2 hoặc nhiều kiểu dữ liệu lại với nhau để tạo ra một kiểu dữ liệu mới.
//+ Cho phép giá trị có thể chấp nhận hoặc là kiểu dữ liệu này hoặc là kiểu dữ liệu kia.

type Status = 'active' | 'inactive';
type ProductStatus = 0 | 1 | 2 | 3;
type StudentId = number | string;

interface Student {
  id: number | string;
  name: string;
  gender: 'male' | 'female';
  grade: 'A' | 'B' | 'C' | 'D' | 'E';
}

let x: number | string = 1;
x = 100; //work
x = 'Hello'; //work

// x = false // error

// 4. Type Intersection : Dùng để kế thừa những tập dữ liệu có sẵn thì bạn có thể dừng cách này hoặc dùng interface extends

interface BusinessPartner {
  name: string;
  credit: number;
}

interface Identity {
  id: number;
  name: string;
}

interface Contact {
  email: string;
  phone: string;
}

// type Employee = Identity & Contact;
// type Customer = BusinessPartner & Contact;
// Ngoài cách trên bạn có thể dùng cách này.
interface Employee extends Identity, Contact {}
interface Customer extends BusinessPartner, Contact {}

const cr7: Employee = {
  name: 'Cris',
  id: 1,
  phone: '08888',
  email: 'chris@gmail.com',
};

const leesin: Customer = {
  name: 'Leesin',
  phone: '00000',
  credit: 123,
  email: 'leesin@gmail.com',
};

console.log(cr7);
console.log(leesin);

// declaration merging
// works, no error

interface Project {
  id: number;
  name: string;
}

interface Project {
  getName: () => void;
}

const capichi: Project = {
  id: 1,
  name: 'Capichi delivery',
  getName: () => {
    console.log('Capcihi');
  },
};

capichi.getName();

// Note: lưu ý không thể merge đối với type alias.

type Student = {
  id: number;
  name: string;
};
// ts error: Duplicate identifier 'Student'.
type Student = {
  age?: number;
};
