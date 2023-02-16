//Task

// function reverseStr(str){
//     return str.split("").reverse().join("");
// }

// let str = "Salam"

// console.log(reverseStr(str));







//Practice





//String

// let date = new Date();

// console.log(date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getHours() + ":" + date.getMinutes());

// let address = "Xalqlar";

// console.log(address.length);

// function search(str) {
//     for (let i = 0; i < str.length; i++) {
//         if(str[i]=="q"){
//             return true
//         }
//     }

//     return false;
// }

// console.log(search(address) ? "Found" : "Not found");

// console.log(address.includes("q"));
// console.log(address[0])
// console.log(address.charAt(0))

// console.log(address.slice(1,3));
// console.log(address.substring(1,3))
// console.log(address.substr(1,3))

// console.log(address.replace("X", "H"));

// let str = "Muellim yuz bal verin"
// console.log(str.replace("yuz", "min"));

// console.log(address.replaceAll("l", "c"));

// console.log(address.toLocaleUpperCase());
// console.log(address.toUpperCase());

// console.log(address.toLocaleLowerCase());
// console.log(address.toLowerCase());

// let address = "Xalqlar"
// let str = " bomba yerdir"

// let result = address.concat(str)
// console.log(result);

// console.log(str.trim());
// console.log(str.trimStart());
// console.log(str.trimEnd());

// console.log(address.toLowerCase().startsWith("X".toLowerCase()));

// console.log(address.split(""));

// let text = "Hello World";

// text.charAt(0)="s"

// console.log(text);








//Array

// let names = ["Rasul", "Nicat", "Qosqar", "Lale", "Musa"];

// console.log(names[0]);
// console.log(names[names.length-1])

// names.reverse()
// console.log(names);

// let arr1 = ["Rasul", "Musa"]
// let arr2 = ["Nicat","Qosqar","Lale"]
// console.log(arr1.concat(arr2));

// names.pop()
// names.push("Mahir")

// names.shift()
// names.unshift("Anar")

// console.log(names);

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const result = fruits.entries();

// for (const iterator of result) {
//     console.log(iterator);
// }

// let nums = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(nums.every((m) => m > 5));

// nums.fill(100, 0, 2);
// console.log(nums);

// console.log(names.filter(m=>m.includes("u")));

// let result = nums.find((m) => m > 5);
// console.log(result);

// console.log(nums.findIndex(m=>m>5));

// let text = "ABCDEFG"
// console.log(text.split(""));
// const myArr = Array.from(text)
// console.log(myArr)

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// console.log(fruits.includes("Banana"));
// console.log(fruits.indexOf("Apple"));

// function search(searchText) {
//   const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
//   let result = fruits.indexOf(searchText);

//   if (result == -1) {
//     console.log("Not found");
//     return;
//   }

//   console.log("Found");
// }

// search("Apple")

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// let text = "Salam";
// let result = Array.isArray(text);

// console.log(result);

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const keys = fruits.keys();

// for (const key of keys) {
//   console.log(key);
// }

// let nums = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

// let result = nums.reduce((total, current) => total + current);
// console.log(result);

// function calculateOddNums(nums){
//     let oddNums = nums.filter(m=>m%2==1)

//     return oddNums.reduce((total, current) => total + current);
// }

// console.log(calculateOddNums(nums));