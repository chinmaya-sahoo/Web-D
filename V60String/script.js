console.log("This is string tutorial");
let a = "Harry";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a.length);

let his_name = "Harry";
let friend = "Rohan";
console.log("his name is " + his_name + " and his friends name is " + friend);
console.log(`his name is ${his_name} and his friends name is ${friend}`);

let b = "Chinmaya";
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.length);
console.log(b.slice(1,5));  // will get character from 1 - 5 & 5 is not included
console.log(b.slice(1));    // will get 1 to last index character
console.log(b.replace("Ch" , "69")); // the first occurance of "Ch" only is replaced by "69"
console.log(b.concat(a));
console.log(b.concat(a , "Astha Gill"));

console.log(b);  // string is immutable


