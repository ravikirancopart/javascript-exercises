const sumAll = function(start,End) {
        var sum=0;
        if((start<0||End<0)||Array.isArray(start) ||Array.isArray(End)||(start.constructor===String)||(End.constructor===String))
        {
            return "ERROR";
        }
        else if(End>0 && start>End)
        {
            for(var i=start;i>=End;i--)
            {
            sum=sum+i;
            }
        return sum;
        }
        else(start>0 && start<End  )
        {
            for(var j=start;j<=End;j++)
            {
                sum=sum+j;
            }
            return sum;
        }
        
}
console.log(sumAll(1,[]));

module.exports = sumAll
