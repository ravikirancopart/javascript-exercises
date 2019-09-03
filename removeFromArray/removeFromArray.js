//arrayEle=["hey", 2, 3, "ho"]   ...removeEle=   "hey", 3
//first we will filter arrayEle
//we will compare each ele(arrayEle) with removeEle 
// we will return the ele when it is not present in removeEle


const removeFromArray = function(arrayEle,...removeEle) {
    return arrayEle.filter(ele=>{
      return !removeEle.includes(ele);
    });
 }
var result=removeFromArray(["hey", 2, 3, "ho"], "hey", 3);            // output: [2,"ho"]
console.log("result",result);
module.exports = removeFromArray







