//charAt
let str = "hello world"
console.log(str.charAt(0))
console.log(str.charAt(str.length-1))//last character
console.log(str.charAt(-1))//no returns

//charCodeAt
let str1 = "JAVA&MErN"
console.log(str1.charCodeAt(1))//out of will be NAN

//concate
let news = str.concat(" ",str1)
console.log(news)

//includes
let str2 = "AWS"
console.log(str2.includes("A",0))//character , index

//indexOf
let n1 = "Sankar"
console.log(n1.indexOf('a',3))//left to right ('char',start index)
//lastIndexOf
console.log(n1.lastIndexOf('a'))//Right to left 

//repeate
let nes = "Shankar";
console.log(nes.repeat(3))

//replace & replace all

let str3 = "I'm full Stack Web developer/ Web Dev"
console.log(str3.replace("Web","App"))//first irukuratha mattum 
console.log(str3.replaceAll("Web","App"))//existing ellam maathum 

//slice 
let sli = "Single Thread"
// console.log(sli.slice(3,7))//where to where a copy 
// console.log(sli.slice(3))//where to end
console.log(sli.slice(-3))//inga apudi illa

//substring & sub str
let subs = "Single Thread"
// console.log(subs.substring(3,7))//ve+ same as slice
console.log(subs.substring(-3))//here if negative means always 0 only 
console.log(subs.substring(4,0))//if end small means it swaps the order

//split 
let words = "My Name is Hee-man"
console.log(words.split(" "))//word array
console.log(words.split(""))//letter array
console.log(words.split("",4))//letter array (char , to )

//startsWith ( check the char at given index or not )
let words2 = "My name is billa"
console.log(words2.startsWith("M",0))//based on index 
console.log(words2.startsWith("name",3))

//endsWith
console.log(words2.endsWith('a',5))//not index it based on position(starts with 1)

//lowercase & uppercase 
console.log(words2.toLowerCase())
console.log(words2.toUpperCase())

//trim 
let ke = " My name is Vadaku "
console.log(ke)
console.log(ke.trim())
//left & start  trim1
console.log(ke.trimStart())
console.log(ke.trimEnd())

