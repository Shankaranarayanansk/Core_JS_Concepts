//object is represented as Key Value pair
let userProfile ={
    name : "Shankar",
    age :18,
    role : "developer",
    skills : ["MERN","Java"],
    eat : function(){
        console.log("I know how to eat");
        // return 1;
    }
}
console.log(userProfile.name)
let eatting = userProfile.eat()//if no return it show undefine becoz it first checks the retrun 
console.log(eatting)
console.log(userProfile)

let bike ={
    "brand" : "NS200",//how to access this 
    "color" : "Red",
     fueltype : "petrol",//how to access this
     "Speed KM" : "900km"
}
//in key value pair using the string lit is advantage of using the space between it 
//space kudutha key can access in literals
console.log(bike["brand"])//another way of accesing(array literals)
console.log(bike["fueltype"])//also normal can be used 
console.log(bike["Speed KM"])

// ------------------------------------------
// Shorthand Assigned Property
//Dynamic
let rank1 = "Shankar"
let rank2 = "leodass"

let list ={
    rank1,
    ['rank2'] : "Ram",
    [rank2] : "paapa"
}
console.log(list.rank1)//shorthand assigned property
console.log(list.rank2)//dynamic property access if in string
console.log(list[rank2])//dynamic property access if not a string
console.log(list)
console.log(list.rank1,list[rank1])