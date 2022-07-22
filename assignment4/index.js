
//Q1, create an array empty/some elements
var arr = [];

arr[0] = 10;
arr[1] = 12;
arr[2] = "str1";
arr[3] = "str2";

//Q2, update an array, change the value of an array element at nth position
//Updated an element at position 2
arr[2] = 13;
//Q3, delete an element at 3rd position
arr.splice(3,1);
//Q3, delete array
arr2 = arr;
arr = [];

console.log(arr.length);
console.log(arr2.length);
arr2.length = 0;
console.log(arr2.length);

//Q5, get subset of array
var arr3 = [6,4,"str1","str2",7,9];
var arr4 = arr3.splice(3,2);
console.log(arr4);
var arr5 = arr3.splice(1,3);
console.log(arr5);
//Q6, get length of array
var arr3 = [6,4,"str1","str2",7,"str3"];
console.log(arr3.length);

//Q7, splice/slice/concat
//Q7.1, splice
var arr3 = [6,4,"str1","str2",7,"str3"];
var arr4 = arr3.splice(2,3); //elements starting from index 2 to index 3 (index 3 not included)
console.log(arr3);
console.log(arr4)
var arr5 = arr3.splice(1,2);
console.log(arr5)
var arr6 = arr3.splice(0,2);
console.log(arr6);
console.log(arr3);

//Q7.2, slice
var arr3 = [6,4,"str1","str2",7,"str3"];
var arr4 = arr3.slice(2,3); //elements starting from index 2 to index 3 (index 3 not included)
console.log(arr4)
console.log(arr3)
var arr5 = arr3.slice(3,3);
console.log(arr5)
var arr6 = arr3.slice(4,5);
console.log(arr6);
console.log(arr3);//original array will not be modified

//Q7.3, concate
var arr3 = [6,4,"str1","str2",7,"str3"];
var arr4 = arr3.concat(3,4);
var arr5 = arr3.concat(1,2,arr3);
console.log(arr3);
console.log(arr4);
console.log(arr5);










