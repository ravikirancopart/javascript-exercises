
const reverseString= (str) =>{
    var newStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}
console.log(reverseString("123! abc!"))
module.exports = reverseString



