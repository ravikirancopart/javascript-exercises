const palindromes = function(str) {
    str = str.toLowerCase().replace(/\W/g, "");
    var len = str.length - 1
    for (var i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - i]) {
        return false;
      }
    }
    return true;

}
console.log(palindromes('Animal loots foliated detail of stool lamina.'))
module.exports = palindromes



// function palindrome(str) {
//     str = str.toLowerCase().replace(/\W/g, "");
//     for (var i = 0, len = str.length - 1; i < len / 2; i++) {
//       if (str[i] !== str[len - i]) {
//         return false;
//       }
//     }
//     return true;
//   }
//    console.log(palindrome('racecar'));
  