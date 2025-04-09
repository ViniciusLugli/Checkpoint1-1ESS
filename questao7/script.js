let a = true;//ok
let b = false;//ok
let x = 10;//ok
let y = 5;//ok

console.log("true && false:", a && b); //ok
console.log("10 > 5 && 5 > 4:", x > y && y > 4); //ok

console.log("true || false:", a || b); //ok
console.log("10 < 5 || 10 > 5:", x < y || x > y);//ok

console.log("!true:", !a);//ok
console.log("!false:", !b);//ok