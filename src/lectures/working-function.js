var sayHello = function () {
    console.log('hello'); //ts: const sayHello: () => void
};
//function with param
//c1: inference return type
function getFullName(firstName, lastName) {
    return firstName + lastName;
}
//c2: explicit return type
//ts: const sum: (a: number, b: number) => number
var sum = function (a, b) {
    return a + b;
};
//Optional and default parameter
var getLength = function (numbersList) {
    return numbersList.length;
};
getLength([1, 2, 3]);
