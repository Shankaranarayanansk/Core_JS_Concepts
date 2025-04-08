//spread is used in array and object 
let me = ["Shankar","Navee","Selva"]
let them =["Aadhi","Sathish","Aakash"]

let friends = me;
friends[0]="lee"
console.log(friends)//without spread it effects reference and actual
console.log("------------------------")
let teamAlpha = ["Shankar", "Navee", "Selva"];
let teamBeta = ["Aadhi", "Sathish", "Aakash"];
let spread = [...teamAlpha]
spread[0]="vinoth"
console.log(spread)
console.log(teamAlpha)//look by using spread it not affect on actual
let newArr = [...teamBeta,"Vegatesh","Mahesh"]//adding more by spread
console.log(newArr)

console.log("-------------object in spread----------")

let biodata ={
    name : "Shankar",
    age : 21,
    skills :["MERN","Java"]
}
let bioref = {...biodata,gender:"Male",name:"Sankar"}//advantage here we can modify the existing
console.log(bioref)
console.log(biodata)