let arr7 = [200, 150, 100, 50, 0, -50];
let arr8 = [11, 22, 33, 44, "55l", 66,'100',true];
//will affect original array
// sort in asce
// normal sort sort in ascci
// but here
//"56h" is NAN so no swap
// all will accept 3 parameter but this will only 2
let clg = arr7.sort((a,b)=>{
   return a-b//for asce
   
})
let clh = arr8.sort((a,b)=>
{
    return b-a
})
console.log(clh)
console.log(clg)
console.log("-----Sum and Every-----")
//it also accept 3 arguments
//it acts like logical or any one true then tru
let arr3 = [101, 202, 303, 404, 505, 606];
let val = arr3.some((cur,arr,tot)=>
{
    return cur%2==0
})
//it acts like logical AND no all must true then only true
console.log(val)
let val4 = arr3.every((cur,arr,tot)=>
    {
        return cur%2==0
    })
console.log(val4)
