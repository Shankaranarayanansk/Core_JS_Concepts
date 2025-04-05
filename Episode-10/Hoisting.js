
console.log(a)
var a =10;
samp()

 function samp()
 {
    console.log("hoist in function")
 }
 samp1()//only the hoist is possible for named function
 var samp1 = function()
 {
    console.log("hoist in ananomous function")
 }