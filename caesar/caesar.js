const caesar = function(str, amount) {
    var output = '';

	if (amount < 0)
		return caesar(str, amount + 26);

  	for (var i = 0; i < str.length; i ++) 
  	{
      	var c = str[i];

		    if (c.match(/[a-z]/i)) 
		    {

			
			      var code = str.charCodeAt(i);

			      if ((code >= 65) && (code <= 90))
				        c = String.fromCharCode(((code - 65 + amount) % 26) + 65);

			      else if ((code >= 97) && (code <= 122))
				        c = String.fromCharCode(((code - 97 + amount) % 26) + 97);

		    }

			output += c;

	  }

	return output;

}
console.log(caesar('A',1));
module.exports = caesar
