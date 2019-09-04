const leapYears = function(year) {
    
    return (year%100==0)?((year%400==0)?true:false):((year%4==0)?true:false);
}
console.log(leapYears(400));
module.exports = leapYears

