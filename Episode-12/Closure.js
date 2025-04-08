function outer()
{
    let name = "Leodass"
    function inner(){
        console.log(name)
    }
    return inner;
}
// outer()
let name = outer()
name()