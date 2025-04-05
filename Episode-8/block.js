//var can used anywhere in the function so it is function Scope
//let and const is a block scope
function belo()
{
    if(true)
    {

        var def = "hello"//function scope
    }
    console.log(def)
}
belo()
///---------------------------------///
function block()
{
   if(true)
   {
    let blocky = "blockVariable"; 
    const blocky1 = "Hello"
    console.log(blocky)
    console.log(blocky1)
}
}
block();
