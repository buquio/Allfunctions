<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
var str = "Hello";
var arr = str.split("");
var text = "";
var i;
for (i = 0; i < arr.length; i++) {
  return text += arr[i] + "<br>"
}

console.log()
document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>

H
e
l
l
o



xxxxx
<!DOCTYPE html>
<html>
<body>

<p>Click "Try it" to display the first array element, after a string split.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
  var str = "a,b,c,d,e,f";
  var arr = str.split(",");
  document.getElementById("demo").innerHTML = arr[0];
}
</script>

</body>
</html>


xxxxxxx
var fruits = ["Banana", "Orange", "Apple", "Mango"];


var text = "<ul>";
for (var i = 0; i < fruits.length; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

console.log(fruits)
console.log(text)

// xxxxxx using .foreach 
var fruits = ["Banana", "Orange", "Apple", "Mango"];

var text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
  text += "<li>" + value + "</li>";
}

console.log(fruits)
console.log(text)


// function myFunction() {
//     var str = "a,b,c,d,e,f";
//     var arr = str.split(",");
//     // document.getElementById("demo").innerHTML = arr[0];
//     return arr
//   }
//   console.log (myFunction())

//////////////
// function myFunction(str) {
//     // var str = "a,b,c,d,e,f";
//         var arr = str.split(",");
//     return  arr
//   }
//   console.log (myFunction("abcdef"))

//////////////////////////
var str = "Hello";
var arr = str.split("");
var text = "";

for (var i = 0; i < arr.length; i++) {
  return text += arr[i] + "<br>"
}

console.log(text)

