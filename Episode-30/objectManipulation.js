//prototype is blueprint of objects
// when we run in bowser we hear this 
let person = {
    pName : "Johu",
    age : 30 
}
// console.log(person)

let arr = [10,89,78,67]
// console.log(arr)

//object create 

// let newObj = Object.create(person)
// newObj.location = "Tamil"
Object.assign(person,{job : "BDE"})
// console.log(Object.getPrototypeOf(newObj))
// console.log(newObj.__proto__)
// console.log(newObj)
console.log(person)
// console.log(newObj.age)

//object Assign - used to add more to key and  value

let person2 = {
    id:"AWS9212",
    name1 : "Leo"
}
// person2.school = "XHSS"
Object.assign(person2,{role :"SDE",salary:1000})
console.log(person2)

//Object.entriesObject.entries() returns an array of an object's own enumerable 
// string-keyed property [key, value] pairs.
let product = {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 999.99,
    inStock: true
  };
let multiArr = Object.entries(product)
multiArr.push(["name","leo"])
Object.assign(product,{name :"Leodas"})
console.log(multiArr)
console.log(product)

//Object From entires

let change_nor = Object.fromEntries(multiArr)
console.log(change_nor)
//only keys
let only_key = Object.keys(change_nor)
console.log(only_key)

//values
let only_obj = Object.values(change_nor)
console.log(only_obj)

//freeze - no property can created
const meo ={
    name :"Killer"
}
let freze  = Object.freeze(meo)
meo.name1 = "leo"//not added
meo.name = "muu"
console.log(freze)
console.log(meo)

//isFrozen checks wheater freeze or not 
console.log(Object.isFrozen(meo))


