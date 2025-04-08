function normalfun()
{
  console.log("hello i'm normal")   
}
normalfun();

(function (){
    console.log("I'm IIFE")
}
)();
(function (name){
    console.log("I'm IIFE "+name)
}
)("Shankar");
(function iife (){ //named naalum like so only 
    console.log("I'm IIFE")
}
)()
