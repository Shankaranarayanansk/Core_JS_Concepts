let arr = ["one","two","three"]
console.log(arr[1])
console.log(arr.length)
console.log(arr[arr.length-1])
//  Array Constructor
let arr_cons = new Array()
arr_cons[0] = "Shankar"
arr_cons[1] = "Manoj"
arr_cons[2] = "Sathish"

console.log(arr_cons)
console.log(arr_cons.length)

//Dense & Sparse Array

let denseArray = [1,2,3,4]//no gaps
//formula = baseAddress + (index*size)
let SparseArray = [1,2,,3] 
console.log(SparseArray)