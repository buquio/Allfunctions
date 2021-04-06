
// Have the function CodelandUsernameValidation(str) take the str parameter being passed 
// and determine if the string is a valid username according to the following rules:
// 1. The username is between 4 and 25 characters.
// 2. It must start with a letter.
// 3. It can only contain letters, numbers, and the underscore character.
// 4. It cannot end with an underscore character.
// If the username is valid then your program should return the string true, otherwise return the string false.

//////////////////////
function CodelandUsernameValidation(str) { 
// 1. The username is between 4 and 25 characters.
  if (str.length < 4 || str.length > 25) { //??
    return false;
  }
// 2. It must start with a letter.
  if (!str[0].match(/[a-z]/i)) { 
    return false;
  }
// 3. It can only contain letters, numbers, and the underscore character.
  if (!str.match(/^[0-9a-zA-Z_]+$/)) { 
    return false;
  }
// 4. It cannot end with an underscore character.
  if (str[str.length -1] === '_') { 
    return false;
  }
  return true;//valid then your program should return the string true
}
   
console.log(CodelandUsernameValidation("twenty_24"));



////////////////////
function CodelandUsernameValidation(str) { 
  var len = str.length
  if (len >= 4 && len <= 25) {
    if (str.match(/^[a-zA-Z]([a-zA-Z]|[0-9]|(_))*([a-zA-Z]|[0-9])$/g)) {
      return true;
    }
  }
  return false;
}
   
console.log(CodelandUsernameValidation("twenty_24"));

//////////////
function FindIntersection(strArr) { //stringarray of nuumbers

  var a = strArr[0].split(', ')
  var b = strArr[1].split(', ')
  var result = a.filter(x => b.find(a => a === x))
  return result.length > 0 ? result.join(',') : 'false'

}   
console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]);





