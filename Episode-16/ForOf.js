//no need initial & end limit 
let arr = [10,100,200,400]
for(let n of arr)
{
   console.log(n)
}
let str = "Vinoth"
for(let n of str)
{
    console.log(n)
}
// ----------------------------
function* get()
{
    yield 1
    yield 2
    yield 3
}
let n = get()
for(let val of n)
{
    console.log(val)
}
//for loops are not works in keyvalue  for that we use the for in loop