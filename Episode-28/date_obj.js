//get fullyear
let year = new Date()
console.log(year)
console.log(year.getMonth()+1)
console.log(year.getTime())
console.log(year.getDate())
console.log(year.getMinutes())

//set will affect the 
// year.setFullYear(year,month,day)
year.setFullYear(2003,11,30)//this to modify way
console.log(year)

//'to' convert local india
console.log(year.toLocaleDateString())//30/12/2003
console.log(year.toDateString())//Tue Dec 30 2003
console.log(year.toLocaleString())//30/12/2003, 2:05:16 pm
console.log(year.toLocaleTimeString())//2:05:16 pm

