let arr6 = [3, 6, 9, 12, 15, 18];
let newind = arr6.indexOf(15)//left to right looks  1st occurence
let newind2 = arr6.indexOf(3,-6)//2nd paar is start index of search
console.log(newind)
console.log(newind2)

//lastIndexof right to left
let arr7 = [200,-50, 100, 50, 0, -50];
let last = arr7.lastIndexOf(-50)
let neg = arr7.lastIndexOf(-50,-1)
let first = arr7.indexOf(-50)
console.log(last)
console.log(neg)
console.log(first)
