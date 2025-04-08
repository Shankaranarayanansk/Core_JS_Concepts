function add(a,b,c)
{
    console.log(a+b+c)
}
add(2,3,5)//uncurrying

function sub(a)
{
    return function(b)
    {
        return function(c)
        {
            console.log(a+b+c)
        }
    }
}
// sub(10)(2)(3)//this way is called chaining call(calling more in single line)

let curry1 = sub(100)
let curry2 = curry1(200)
curry2(300)
// console.log(curry3)