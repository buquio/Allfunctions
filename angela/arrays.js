// 1a 
var guestList= ["angela", "jack" ,"pan" ,"james","lara" ,"jason"];
var guestName= prompt("what is your name?");

if(guestList.includes(guestName)){
    alert("welcome");
}
else{
    alert("sorry, maybe next time!!")
};


//1b
//xxxxx insert it inside a function
/* <html>
<head>
</head>
<body>
    <label> guest name </label>
    <input type="text" value="" placeholder="enter guest name here">
    <br><br>
    <button onclick="getGuestName">verify guest name</button>
    
    
    <script>
var guestList= ["angela", "jack" ,"pan" ,"james", "lara" ,"jason"];
function getGuestName() {
    var guestName= document.querySelector("[input]").text
    
    if(guestList.includes(guestName)){
    alert("welcome");
}
else{
    alert("sorry, maybe next time!!")
};
  
}
</script>
</body>
<html> */



// 2 
var output= [];
var count= 1;

function fizzBuzz(){
    output.push(count);
    count++;
    console.log(output)
}
fizzBuzz()

ans:[1,1,1,1]


    ///3
    var output= [];

function fizzBuzz(){
    for(var count=1;count<=100;count++){

    if (count%3 ===0 & count%5 ===0){
     output.push("fizzBuzz");
    }
    else if(count%3 ===0){
        output.push("Fizz");
    }
    else if(count%5 ===0){
        output.push("Buzz");
    }
    else {
        output.push("count");
    }
}
    console.log(output);
    // or 
   document.body.prepend(output)

}
// or 
    fizzBuzz()


    // 4a who is paying
    var guestList= ["angela" ,"ben", "jenny", "michal" ,"chloe"]

    function whosPaying(guestName){
        var numberOfPeople= guestList.length;
        var randomPersonPosition= Math.random()*numberOfPeople;
        var randomPerson= guestName(randomPersonPosition);
        return randomPerson + "is going to buy lunch today!"
    } 


    //4b
    var guestList= ["angela" ,"ben", "jenny", "michal" ,"chloe"]

    function whosPaying(guestList){

        var numberOfPeople= guestList.length;

        var randomPersonPosition= Math.random() * numberOfPeople;
        console.log(Math.floor(randomPersonPosition) + " - " + Math.ceil(randomPersonPosition) + " - " + randomPersonPosition)

        var randomPerson= guestList[Math.floor(randomPersonPosition)];
        return randomPerson + " is going to buy lunch today!"

    } 

console.log(whosPaying(guestList))


    // 5 Fibonacci series
    // xxx analysis
    // n= number of item in the Array
    // number of item=0, 1, 2, 3
    // f(n)= 0, 1, 3, 5
    // xxx starting from 1
    // if n= 1 output[0]
    // if n= 2 output[0, 1]
    // if n= 3 output[add last 2 values]
    // if n= length of no output[yes] or output [No]

    // solutionA
    function fibonacciGenerator (n) {
        var output= [];
        if (n===1) {
            output= [0];
        }
        else if (n===2) {
            output= [0,1];
        }
    else {
        output=[0,1];
    
    for (var i = 2; i < n; i++) {
        output.push(output[output.length-2] + output[output.length-1]);
    }
        }
        return output;
    }
        output= fibonacciGenerator(5);
        console.log(output)
    
    // NOTE:to run this function, copy & paste to Repl and click run
    // ans:[0,1,1,2,3]



    // solutionB
    function  fibonacci_series (n){
	if(n===1)
{
return[0,1];
}
	else
{ 
var s= fibonacci_series(n-1);
	s.push(s[s.length -1]+ s[s.length-2]);
	return s;
}
};
console.log(fibonacci_series(8));

