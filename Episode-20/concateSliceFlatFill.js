let arr5 = [87, 65, 43, 21, 10, 0];
let arr6 = [3, 6, 9, 12, 15, 18];
//es6 ku munadi use pannuna methods la original la affect pannuchu 
//merge two Arrays
let newArr = arr5.concat(arr6)
let newVa = arr5.concat(8,9,10)//adding in back 
let mini = [2,3,90].concat(arr5)//add in front
console.log(mini)
console.log(arr5)//orginal not affected
console.log(newArr)
console.log(newVa)
console.log("--------------")
//slice
let arr1 = [12, 34, 56, 78, 90, 21];

let sliceVal = arr1.slice()
let sliceVal2 = arr1.slice(1)//start,end
let sliceVal3 = arr1.slice(1,4)//start,end-1
sliceVal[0]=102
console.log(sliceVal)
console.log(sliceVal2)
console.log(sliceVal3)
console.log(arr1)//not affected
console.log("--------------------------")
//Flat used to remove the nested array
let arr3 = [101, 202, [303, 404, 505], 606,[900,89],89];
let arr10 = [7, [14,[ 21, 28],35], 42];
let arr7 = [200, [150, [100,[ 50], 0], -50]];
let newVal = arr3.flat()
let newVal2 = arr10.flat(2)
let newVal3 = arr7.flat(Infinity)
console.log(newVal3)
console.log(newVal2)
console.log(newVal)
console.log(arr3)

//Fill
//used to replace all element by element 
let arr4 = [9, 18, 27, 36, 45, 54];
let newVal4 = arr4.fill(1,2,4)
console.log(newVal4)