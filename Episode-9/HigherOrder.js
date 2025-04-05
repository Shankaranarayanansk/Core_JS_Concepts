 function add(callback,a,b)
 {
     callback(7,8,9)
    console.log(a+b)
 }
 function sub(n1,n2,n3)
 {
    console.log(n1+n2-n3)
 }
 add(sub,4,6)//here sub is callback because it can use on later