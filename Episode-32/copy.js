// by this deep copy we fix the issue of call by reference 
 //we use the spread operator to fix that 
 let obj1 = {
    name : "Leo",
    age : 18,
    skills : ["MERN","JAVA"]
 }
 let obj2 = {...obj1}
 obj2.skills = ["AWS","Postman"]
 console.log(obj2)
 console.log(obj1)

 //shallow Copy 
let person = {
    name : "kavi",
    age : 23,
    skills :{
        Dev : "MERN",
        DSA : "JAVA"
    } 
}
let p2 = {...person}//achiving here 
let p3 = {...person,skills:{...person.skills}} 
person.name = "Shankar"
p3.skills.DSA = "C++"
console.log(person,p3)

// another way to use deep copy using JSON 
let persons = {
    name : "leodass",
    age : 67 ,
    skills : {
        DSA : "Python",
        Cloud : "AWS"
    }
}
let p5 = JSON.parse(JSON.stringify(persons))

p5.skills.Cloud ="Azure"
console.log(persons,p5)

//stringfy converts to json and parse converts to on=bject 
let arr = [9,8,0,7,[8,0,7,4]]
// let arr2 = [...arr]
let arr2 = JSON.parse(JSON.stringify(arr))
arr2[4][2]="lo"
console.log(arr,arr2)
//Object la shallow Copy 
//Array la deep copy 
