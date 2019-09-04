
const repeatString = function(arg,num) {
    var res='';
    if(num==0)
    {
        return res
    }
    else if(num<=0)
    {
        return "ERROR";
    }
    else 
    {
     for(var i=1;i<=num;i++)
        {
             res=res.concat(arg);
        } 
    return res;
    }
}
console.log(repeatString('hey',1))
console.log('--------')
console.log(repeatString('hey', 3))
module.exports = repeatString
