let arr = [1,2,3,4];

// ============ For Each ===============

// Callback Function -> 1st argument (Element or Item) 2md - Index
arr.forEach((ele, index)=>{
    console.log("Index " + index + " Element ", ele);
})

/* Index 0 Element  1
Index 1 Element  2
Index 2 Element  3
Index 3 Element  4 */
// simple arrray iteration

// =============== Map ===================

let mapArr = arr.map((ele)=>{
    return "Map Element - " + ele; 
})
// console.log(mapArr); /* [
//     'Map Element - 1',
//     'Map Element - 2',
//     'Map Element - 3',
//     'Map Element - 4'
//   ]*/

let mapArr2 = arr.map((ele, index)=>{
    return ele*index;
})
console.log(mapArr2); // [ 0, 2, 6, 12 ]
// // Iterates over map and return a map -> jiska logic callback function m hota h
// Callback Fxn - 1st argument - element or item 2md - Index

// =========== Filter ==================

let odd = arr.filter((ele)=>{
    return ele%2!=0;
})
console.log(odd); //[ 1, 3 ]

let even = arr.filter((ele)=>{
    return ele%2==0;
})
console.log(even);  //[ 2, 4 ]

let empty = arr.filter((ele)=>{
    return ele>5;
})
console.log(empty);  //[]

// filter -> returns a array agar callback fxn ki cond true ho
// returned array m vo elements honge jinpe cond true aai thi

// ============ Reduce ===================

let sum = arr.reduce((result, ele)=>{
    return result+ele;
},10)
console.log(sum); // 20 // increment will start from 10

let sum1 = arr.reduce((result, ele)=>{
    return result+ele;
},0)
console.log(sum1); // 10 // increment will start from 0

let sum2 = arr.reduce((result, ele)=>{
    return result+ele;
})
console.log(sum2); // 10 // increment will start from arr[0]

// reduce try to perform opp on ele of array with access to result of prev array iteration opp
// callback fxn - 1st argument result of prev array oppn and rest are same

// =========== Some ==================

let someAns = arr.some((ele)=>{
    return ele > 3;
})
console.log(someAns); // true

let someAns2 = arr.some((ele)=>{
    return ele > 5;
})
console.log(someAns2); // false

// return true/false based on cond - if cond is true once it'll return true else false

// ============== Every ================

let everyAns = arr.every((ele)=>{
    return ele > 1;
})
console.log(everyAns); // false

let everyAns2 = arr.every((ele)=>{
    return ele > 0;
})
console.log(everyAns2); // true

// return true if all elements of array satisfies the condition else false

// ========== Find ============

let found = arr.find((ele)=>{
    return ele===3
})
console.log(found); //3 return firstvalue of element where cond satisfied

let found2 = [{x:10},{x:3},{x:8}].find((ele)=>{
    return ele.x===8;
})
console.log(found2); // { x: 8 }

let found3 = [{x:10},{x:3},{x:8}].find((ele)=>{
    return ele.x===100;
})
console.log(found3); // undefined

// findIndex 

let foundI = arr.findIndex((ele)=>{
    return ele===3
})
console.log(foundI); //2 return firstIndex of element where cond satisfied

let foundI2 = [{x:8},{x:3},{x:8}].findIndex((ele)=>{
    return ele.x===8;
})
console.log(foundI2); // 0 - index


let foundI3 = [{x:8},{x:3},{x:8}].findIndex((ele)=>{
    return ele.x===10;
})
console.log(foundI3); // -1 - not found in the array