var f1=1;
var f2=1;
var f3;
const fibonacci =function(Arg) {
    for(var i=2;i<=Arg;i++)
    {
      f3=f1+f2;
      f1=f2;
      f2=f3;
      
    }
     console.log(f1) 
}
fibonacci(4);
module.exports = fibonacci

 
