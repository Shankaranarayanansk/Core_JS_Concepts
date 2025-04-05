// window in browser
// global in server
var globalscope = "I'm var keyword'";
let blockscope = "I'm let keyword";
const blockscope1 = "I'm const keyword";
// console.log(window.globalscope) // it only access not let and const can

var a = 10;
let b = 20;
const c = 30;
function accessGlobalVariable() {
  var a  = 100;
  let b = 200;
  const c  = 300;
  function innerfunction() {  
    var a = 100;
    let b = 200;
    const c = 300;
    console.log(a+b+c)
  }
  innerfunction()
  console.log(a + b + c);
}
accessGlobalVariable();
console.log(a + b + c);
