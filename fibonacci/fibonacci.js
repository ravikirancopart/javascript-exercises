
const fibonacci =function(Arg) {
var f1=1;
var f2=1;
var f3;
  if(Arg<0)
  {
    return "OOPS";
  }
  else{
    for(var i=2;i<=Arg;i++)
    {
      f3=f1+f2;
      f1=f2;
      f2=f3;
      
    }
      return f1
  }
}
console.log(fibonacci("8"));
module.exports = fibonacci

 
