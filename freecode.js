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

  //////////////////
  function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    // Only change code below this line
    // for (let i = 0; i <= len; i++) { //wrong 5<=5? undefined, no 6th number
    for (let i = 0; i < len-1; i++) { //correct(0<5, 1<5, 2<5, 3<5, 4<5, 5<5?)
    // Only change code above this line
      console.log(firstFive[i]);
    }
  }
  
  countToFive();

  ///////////////Navigated to Use Caution When Reinitializing Variables Inside a Loop

  function zeroArray(m, n) {   // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    for (let i = 0; i < m; i++) {
          // Adds the m-th(3 rows) into newArray
      let row = []; /* <-----  row has been declared inside the outer loop. 
       Now a new row will be initialised during each iteration of the outer loop allowing 
       for the desired matrix. */
      for (let j = 0; j < n; j++) {
        row.push(0);
      }
      newArray.push(row);
    }
    return newArray;
  }
  let matrix = zeroArray(3, 2);   // Creates a 2-D array with 3 rows and 2 columns of zeroes

  console.log(matrix);
//ANSWER
// console output
// [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ]
// [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ]


  ////////////
  function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));


  ////////////
  function forecast(arr) {
    // Only change code below this line
  let newArray = arr.slice(2, 4); //the first is the index at which to begin extraction, and the second is the index at which to stop
    return newArray;
  }
  
  // Only change code above this line
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));


  /////////
  function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // Only change code below this line
  newArr.push([...arr]) 
      // Only change code above this line
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));

  /////////
  function quickCheck(arr, elem) {
    // Only change code below this line
      if (arr.indexOf(elem) >= 0) { //mushroom index is >0
      return true;
    }
    return false;
  
  // fruits.indexOf('dates');
  
    // Only change code above this line
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

  /////////////
  function filteredArray(arr, elem) {
    let newArr = [];
    // change code below this line
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(elem) == -1) { //means if the array-index is not up to 3 it removes it(i.e == -1) 
        //Checks every parameter for the element and if is NOT there continues the code
        newArr.push(arr[i]); //Inserts the element of the array in the new filtered array
      }
    }
  
    // change code above this line
    return newArr;
  }
  // change code here to test different cases:
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

  /////////////
  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };
  // change code below this line
  foods["bananas"] = 13;
  foods["grapes"] = 35;
  foods["strawberries"] = 27;
  // change code above this line
  console.log(foods);

  ////////////////
  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  // Only change code below this line
  delete foods.oranges;
  delete foods.plums;
  delete foods.strawberries;
  // Only change code above this line
  
  console.log(foods);

  /////////////////
  const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(usersObj) {
    // Only change code below this line
    let result = 0;
    for (let user in usersObj) {
      if (usersObj[user].online === true) {
        result++;
      }
    }
    return result;
    // Only change code above this line
  }
  
  console.log(countOnline(users));

  ///////////
  let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
  function addFriend(userObj, friend) {
    // Only change code below this line
  userObj.data.friends.push(friend);
    return userObj.data.friends;
    // Only change code above this line
  }
  
  console.log(addFriend(user, 'Pete'));
  


  