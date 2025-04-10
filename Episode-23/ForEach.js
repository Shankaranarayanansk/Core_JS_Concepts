let names = ["Alice", "Bob", "Charlie", "David", "Eve"];
names.forEach(print)
function print(current,index,total)
{
  console.log(current,index,total)
}
names.forEach(function(a,b,c){//using Ananomous
    console.log(a,b,c)
})
console.log("------------")
//using map :) 
let countries = ["India", "USA", "Canada", "Germany", "Japan"];
countries.map(mapp)
function mapp(a,b,c)
{
    console.log(a,b,c)
}
console.log("------------------")
//foreach won't return new Arrays but map will
let newarr=names.forEach((current)=>{
    return current;
})
console.log(newarr)//see the same in map will return 
console.log("--------map will return---------")
let newArr2 = names.map((key)=>
{
    return {Country : key}
    // return key;//if not return it iterate each and give undefined 
})
console.log(newArr2)//its returns the new Arrays
console.log("-------------")
//key with index 
let products = ["Laptop", "Smartphone", "Tablet", "Camera", "Headphones"];
let newPro = products.map((key,index)=>
{
    return {id : index+1,key}
})
console.log(newPro)

console.log("--------Modify obtained using forEach----------")
let subjects = ["Math", "Science", "History", "Geography", "English"];
let sub = subjects.forEach((key)=>{
    console.log(key.toUpperCase())
})
//Chaining Method
console.log("------chaining--------")
let skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
let newVar = skills.map(key =>key.toUpperCase()).sort().fill("XML",2,4)
console.log(newVar)
//will not work becoz chain will work for returned one will through typeerror
let cities = ["Chennai", "Delhi", "Mumbai", "Bangalore", "Hyderabad"];
// let newCit = cities.forEach(key=>key.toUpperCase()).sort().fill()
// console.log(newCit)

console.log("------Condition Based------")
let musicGenres = ["Pop", "Rock", "Jazz", "Classical", "Hip Hop"];
let a = "Jazz"
let newMu = musicGenres.map(key=>key==a)
//for each new va return pannathu so nama athulaye clg potu panniranum
let newCit = cities.forEach((key=>console.log(key=="Mumbai")))
console.log(newMu)
