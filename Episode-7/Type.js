// implicit
let str ="45";
let num = 90;
//anything with string is also string 
//undefind take it as not string also null as 0 
console.log(str+num)
console.log(10+ "undefined")
console.log(10+ undefined)
console.log(10+ null)
console.log(10 =='10')
console.log(10 ==='10')
console.log(10 - '4')
console.log(10 -'')
console.log(10 - 'ab')
//Explict conversion means force to convert 
console.log(10 + Number("100"))
console.log(10 + Number("ab"))
console.log(Number(""))
let a = Number(" ")
let n = Number(true)
let b = 12;
console.log(b+n)
console.log(Number({}))//object have string so string 
//using boolean
console.log(Boolean("jkas"))//boolean of anything true only false for 0 , undefind, null
console.log(Boolean(NaN))//false

//String 
// console.log(String("Sha"))
