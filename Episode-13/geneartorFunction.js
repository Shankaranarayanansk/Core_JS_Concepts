function* generator()
{
  yield "1st val"//if yield  means it shows false
  yield "2st val"
  yield "3st val"
  return "final"//ithu varum ithuku aduthu varathu
}
let generato = generator()
console.log(generato.next())
console.log("I will execute the balance of generator")
console.log(generato.next().value)//value mattum varum
console.log(generato.next())
console.log(generato.next())//only 3 but we access four 
// ---------------------------------------------
function* url()
{
    yield "https:/"
    yield "shankaranarayanansk.web"
    yield ".app"
}
let origin = url()
console.log(origin.next().value)
console.log(origin.next().value)
console.log(origin.next().value)