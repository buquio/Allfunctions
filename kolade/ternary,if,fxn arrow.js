/////////kolade 
///A  -- normal expression
function check(a,b){
    return a + b > 100
}
check(9, 9)   //this call the function-this will run the function but it doesnt show it on console.
console.log(check(9, 9))   //this will show result in console.

///B  -- ternenary
function check(a,b){
    return a + b > 100 ? true : false
}
console.log(check(9, 5))   
   
///C ---if/else
function check(a,b){
    if(a+b > 100){
        return "true"
    }else{
        return "false"
    }
}
var result = check(9, 5) //store the call-function in result & console.log the result
console.log(result)

///D  ----arrow function
const check = (a,b) => a + b > 100

console.log(check(9, 5))   

