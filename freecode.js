// var item = [first, second, third, fourth]
// ❗❌❓
function caseInSwitch(val) {  
    var answer = "";
  
    switch(val) {
    case 1:
      answer= "alpha";
      break;
    case 2:
       answer= "beta";
      break;
    case 3:
       answer= "gamma";
      break;
    case 4:
       answer= "delta";
      break;
  }
  
  
    // Only change code above this line
    return answer;
  }
  
  caseInSwitch(1);


  //////////
  function getLetter(s) {
    let letter;
    // Write your code here
    switch (true) {
      case "aeiou".includes(s[0]):
        letter = "A";
        break;
      case "bcdefg".includes(s[0]):
        letter = "B";
        break;
      case "hijklm".includes(s[0]):
        letter = "C";
        break;
      case "nopqrstuvwxyz".includes(s[0]):
        letter = "D";
        break;
    }
    return letter;
  }
  console.log(getLetter("abcdefghijk"))