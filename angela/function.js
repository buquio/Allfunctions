// 1
var tweet= prompt("compose your tweet:");
var tweetCount= tweet.length;
alert ("you have written" + tweetCount + "Characters, you have" + (140 - tweetCount) + "characters remaining");

// 2
var tweet=("compose your tweet");
var tweetUnder140=tweet.slice(0,140);
alert(tweetUnder140);

// 3
function multipleOfFive (num){
    const baseNumber=5;
    const result=5 * Number(num);
    console.log(result);
}
    // test 
    multipleOfFive(3)
    ans=15


// 4 
var dayAge =prompt("what is your dog's age")
var dogHumanAge= (dayAge-2) * 4 + 21;
alert( "your dog is" + dogHumanAge + "years old in human years");

// 5 
var name= prompt("what is your name");// create a variable that stores the name a users enters via prompt
var firstChar= name.slice(0,1);//isolate the first char/letter
var upperCaseFirstChar= firstChar.toUpperCase();//turn the first char to uppercase

var restOfName= name.slice(1, name.length);//isolate the rest of the name
restOfName= restOfName.toLowerCase();//change the rest of the name to lowercase

var capitalisedName= upperCaseFirstChar + restOfName;//concatenate the first char with the rest of name.
alert("hello, " + capitalisedName);

// 6 
function getMilk(money){
    var numberOfBottles= Math.floor(money/1.5);
    console.log("Buy" + numberOfBottles + "bottles of milk");
    return money%1.5 //which equals the remaing change
}
    // getMilk(5)
// or 
    var change= getMilk(5);
    console.log(change);

    // 7 
    function lifeInWeeks(age){
        var yearsRemaining= 120-age;
        var months= yearsRemaining *12;
        var weeks= yearsRemaining *52;
        var days= yearsRemaining *365;

        console.log("You have" + days + "days" + weeks + "weeks" + months + "months left");
    }
   // 8
   function bmiCalculator(weight,height){
    var bmi= weight/(height*height); //or var bmi= weight/Math.power(height*2);
    return bmi;
   }
    var bmi= bmiCalculator(65, 108);
    console.log(bmi)


// 9 
prompt("what is your name");
prompt("what is the other person's name");

var LoveScore= Math.random()*100;
LoveScore= Math.floor(LoveScore)+1;
alert("Your love score" + LoveScore + "%");

// 10
function isleap (year){
    if(year%4 === 0){
      if(year%100 === 0){
          if(year%400 === 0){
             return "leap year";}
              else{
                return "not leap year";}
                   else{
                     return "leap year";}
                     else{
                       return "not leap year";}
        };

    };
};

// 11 
function countDown (startingNumber, step) { //function name + parameters needed
    let countFromNum = startingNumber + step;//general formular
    return function decrease() {//to return decrease function
        countFromNum -= step;//formular for decrease function
        return countFromNum;//result for countDown function
    }
}
const countingDown = countDown(20,5);//calling countDown function and storing it.

console.log(countingDown()); //logging it to console
console.log(countingDown());








    

