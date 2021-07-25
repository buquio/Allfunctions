
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


//b.//////////////////
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
console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));


//b./////////FindIntersection(strArr) 
// array of strings stored in strArr which will contain 2 elements:
// return a comma-separated string containing the intersecting numbers 
function FindIntersection(strArr) { 
    let newArr = [];
  let elem1 = strArr[0].split(', ');
  let elem2 = strArr[1].split(', ');
  
  for(let i = 0; i < elem1.length; i++ ) {
    if (elem2.includes(elem1[i])) {
      newArr.push(elem1[i]);
    }
  }
if (newArr.length === 0) {
  return false;
} 
else {
  return newArr.toString();
}
}
console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));

///c.//////////////////// 
function FindIntersection(strArr) {
  let newArr =[];
  let str1 = strArr[0].split(','); //array to string-no space
  let str2 = strArr[1].split(',');
  
  for(i=0; i<str1.length; i++){
    if (str2.includes(str1[i])) {
      newArr.push(str1[i]);
    }
  }
  
  if (newArr.length === 0) {
    return false;
  }else{
    return newArr.toString();// string to array-added space
  }
  }
  console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));
  
  
  
  
  /////////////For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because 
  // there are exactly 3 question marks between 6 and 4 which = 10, and 3 question marks between 5 and 5 which = 10 at the end of the string.
  function QuestionsMarks(str) { 
    res = false;
    for(let i=0; i<str.length; i++){ //iterating thru the array the 1st time
        for(let j=i+1; j<str.length; j++){ //iterating thru the array the 2nd time
            if(Number(str[i]) + Number(str[j])=== 10){ //if str[i] is covertible to Number than its a Number, not an alphabet
                res = true;
                if(str.slice(i,j).split("?").length -1 < 3){ //if ? is less than 3
                    return false;
                }
            }
        }
    }
    return res;
}
   
// QuestionsMarks(readline());
console.log(QuestionsMarks( "arrb6???4xxbl5???eee5"))
