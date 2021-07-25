//////////////////////////
function hello() {
	return "hello edabit.com"
}
// or using arrow function
const hello = () => "hello edabit.com";

////////////// Return the Sum of Two Numbers 
// Create a function that takes two numbers as arguments and return their sum.
// Examples
// addition(3, 2) ➞ 5

function addition(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Sorry but you didn't pass two numbers.";
    }
    return a + b;
}
  addition( 2, 4 )
  console.log (addition( 2, 4 ))

// or 
function addition( a, b ) {
    sum = a + b
    return sum
  }

  addition( 2, 6 )
  console.log (addition( 2, 6 ))
//or
function addition( a, b ) {
    return a + b
  }
  console.log (addition( 2, 4 ))

//   or 
const addition = (a, b) => a + b;
console.log (addition( 2, 4 ))


//////////// Convert Minutes into Seconds 
function convert(minutes){
    seconds = minutes * 60
    return seconds
}
convert(2)
console.log(convert(2))

/////////Return the Next Number from the Integer Passed
// Create a function that takes a number as an argument, increments the number by +1 and returns the result.
function addition(num) {
	return ++num
}
addition(9)
console.log(addition(9))
// or 
function addition(num) {
	return num+1;
}
addition(9)
console.log(addition(9))

///////////////////
const triArea = (base, height) => (base * height) / 2;
// or 
function triArea(base, height) {
	var area = (base*height)/2;
	return area;
}



////// Convert Age to Days
// Create a function that takes the age in years and returns the age in days.
function calcAge(age) {
	let ageInDays = age >= 0 && typeof(age) == 'number' ? (age*365) : []
	return ageInDays
}
console.log(calcAge(3))

// or 
function calcAge(age) {
	return age < 0 ? null : age * 365
}
console.log(calcAge(3))

// or 
function calcAge(age) {
	// let ageInDays;
    if (age>=0 && typeof(age) == 'number') {
        return (age*365)
    }else {
         return []
    }
}

	let result= calcAge(3);
console.log(calcAge(3))

//////////bug
function cubes(a) {
	return Math.pow(a,3);
}
console.log(cubes(4))

// or 
function cubes(a) {
	return a ** 3
}
console.log(cubes(4))
// or 
function cubes(a) {
	cubes = a ** 3
	return cubes
}
console.log(cubes(4))


/////////Return the First Element in an Array
// Create a function that takes an array containing only numbers and return the first element.
function getFirstValue(arr) {
	let firstElemment = arr[0];
	return firstElemment;
}
console.log(getFirstValue([3,4,7]))



///////////Maximum Edge of a Triangle
// Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.
//note: (side1 + side2) - 1 = maximum range of third edge.
function nextEdge(side1, side2) {
	if(side1 > 0 && side2 > 0) {
		return (side1 + side2) - 1;
	}else {
		return;
	}
}
// or 
function nextEdge(side1, side2) {
	return side1 + side2 - 1;
}

///////////Return the Remainder from Two Numbers
//  Two numbers are passed as parameters. 
// The first parameter divided by the second parameter will have a remainder, Return that value.
function remainder(x, y) {
	reminder = x % y;
	return reminder
}
console.log(remainder(5, 2))

////////////Return Something to Me!
// Write a function that returns the string "something" joined with a space " " and the given argument a.
function giveMeSomething(a) {
	let result="something ".concat(a) 
	return result
};
console.log(giveMeSomething('goodnews'))
// or 
function giveMeSomething(a) {
    return `something ${a}`;
   }
console.log(giveMeSomething('goodnews'))
//or
function giveMeSomething(a) {
    return "something " + a;
    }
console.log(giveMeSomething('goodnews'))

/////////
function sumPolygon(n) {
	if (n>2){
		let sumOfInternalAngles= (n - 2) * 180
	return	sumOfInternalAngles
	}else{
return
	}
}
console.log(sumPolygon(9))

/////////Basketball Points
// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
function points(twoPointers, threePointers) {
	result = twoPointers *2 + threePointers *3
	return result
	
}
console.log(points(2, 4))

///////Basic Variable Assignment
// A student learning JavaScript was trying to make a function. His code should concatenate
//  a passed string name with string "Edabit" and store it in a variable called result.
function nameString(name){
    // result = name + "edabit"
    result = `${name}edabit`
    return result
    }
    console.log(nameString("bukola"))
    // or 
    function nameString(name){
        var b = "Edabit"
        var result = name + b
          return result
    }
    console.log(nameString("bukola"))
    