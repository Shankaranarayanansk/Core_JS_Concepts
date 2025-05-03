let arr1 = [9,3,4,6]
let arr2 = arr1
arr2[0]=2
console.log(arr1)


// here reason is that is the same memory address
// Objects & Arrays → ✅ Call by Reference (technically, object references are passed by value, but the object itself can be modified)