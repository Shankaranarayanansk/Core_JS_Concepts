//abs(neg to posi)
console.log(Math.abs(-1))

//sign ve- = -1,ve+ = 1 , 0 = 0
console.log(Math.sign(-2))

//sqrt

console.log(Math.sqrt(3))

//cbrt

console.log(Math.cbrt(125))

//pow

console.log(Math.pow(3,3))

//min in arr

let arr = [1,3,4,56,7,9]
console.log(Math.min(...arr,-1))
console.log(Math.max(...arr,1000))

//random
let ran = Math.random()
let ran1 = Math.random()*1000
console.log(ran)

//used to reduce the decimal points
console.log(ran.toFixed(2))
console.log(ran1.toFixed(0))

//ceil if decimal has then next digi
console.log(Math.ceil(2.02))

//floor if decimal has small num
console.log(Math.floor(-3.77))//here next small num is 4
console.log(Math.floor(3.9))

//round acts like estimation 

console.log(Math.round(8.49))
console.log(Math.round(8.50))


//trunc remove complety decimal
console.log(Math.trunc(-3.77)) // return -3
