//it is came because of to iterate the object
let bio ={
    "name" : "Shankar",
    age : 22,
    Skills : ["MERN","Java"],
    "Academic details" : {
         Dege : "Btech",
         Subject : ["CN","OOPS","DBMS","OS"]
    },
    action()
    {
        console.log("I code eat gym sleep")
    }
}

for(let key in bio)
{
    console.log(key)//just return the key
}
console.log("---------------------------------");
for(let key in bio)
{
    console.log(bio[key])//just return the key
}
console.log("---------------------------")
//Access array in for in loop 
let arr = [1,2,3,4,5]
for(let n in arr)
{
    console.log(arr[n])
}
console.log("----------------------------")
let str = "Shankarlee"
for(let n in str)
{
    // console.log(str[n])
    console.log(n+1)
}