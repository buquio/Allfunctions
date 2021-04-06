function CodelandUsernameValidation(str) { 
    // 1. The username is between 4 and 25 characters.
      if (str.length < 4 || str.length > 25) {
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
    