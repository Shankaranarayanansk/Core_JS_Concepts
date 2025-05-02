//this is used to access the property inside the function
//this refers the current object
let emp ={
    id : 12,
    name : "Ram",
    intro : function(str){//objrct kula irukura function name method
        console.log(str +this.name)
        console.log(this.id)
    }
}
console.log(emp.id)
emp.intro("Shankar")
// in arrow function the this will check only global also with undeclared 
 ename = "leobadass"
let arrow ={
    ename : "Skala",
    salary : 100000000,
    introd : (a,b)=>{
        console.log(a+b+this.ename)
    }
}
arrow.introd(2,4)

console.log("------------------------------------------------")
// call apply bind
const person = {
    pname : "leo dos",
    page : 10
}
const student = {
    pname: "Rahul",
    age: 20,
    grade: "A",
    intros : function(a,b){
        console.log(this.pname+" "+this.page+" " +(a+b))
        return("ithu bind "+this.pname+" "+this.page+" " +(a+b))
    }
  };
  //prototype la iruku this 3 method vachu tempo access tha 
  student.intros.call(person,9,5)//use a function to another object
  //call(objectname ,method ku pass pannura parameter) 
  student.intros.apply(person,[12,34])//apply need to be in array
  let lo =student.intros.bind(person,12,34)//only return if method returns
  console.log(lo())


// call() and apply() are used to invoke functions immediately with a specified context (this), while bind() is used to create a new function with a specified context that can be invoked later.