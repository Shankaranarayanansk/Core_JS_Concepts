let arr = [1,2,3,4,5,6]
let arr1 = [1,2,3,4,5,6,7,8,9,10]
// let [a,b,c,d,e,f] = arr;//destructuring all val 
// let [a,,,d] = arr;//destruring 2 values
//if more value the use the rest for destructuring
//rest can pass in last parameter
let [a1,b1,c1,...d1] =arr1;
console.log(d1)
console.log("-----Destructure the nestedArr-----")
let nesArr = [1,2,3,4,5,[10,23,[45,56]]]
let [a,,,,,[f,,[,...d]]] = nesArr
console.log(d)