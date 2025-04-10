let arr1 = [12, 34, 56, 78, 90, 21];
let a=0;//ithu tha reducer la acculatror
for(let i=0;i<=arr1.length-1;i++)
{
   
    a+=arr1[i]
}
console.log(a)
//above is normal 
console.log("-----------------------")
//it accepts 4 argu
let arr2 = [5, 15, 25, 35, 45, 55];
let toVal = arr2.reduce((acc,current,index,array)=>{
    return acc+current;
},0)
console.log(toVal)

//using array of objects
let products = [
    { id: 101, name: "Laptop", price: 75000, inStock: true },
    { id: 102, name: "Phone", price: 25000, inStock: false },
    { id: 103, name: "Tablet", price: 15000, inStock: true },
    { id: 104, name: "Monitor", price: 12000, inStock: true },
    { id: 105, name: "Keyboard", price: 2000, inStock: false }
  ];
let mem = products.reduce((acc,cur,index,arr)=>{
    return acc+cur.price;
},0)
console.log(mem)