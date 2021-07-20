var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var text = "<ul>"; //openeing tag
    for (var i = 0; i < fruits.length; i++) {
      text += "<li>" + fruits[i] + "</li>";
    }
    text += "</ul>"; //closing tag
    
    console.log(fruits)
    console.log(text)