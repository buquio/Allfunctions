

var guestList= ["angela" ,"ben", "jenny", "michal" ,"chloe"]

    function whosPaying(guestList){

        var numberOfPeople= guestList.length;

        var randomPersonPosition= Math.random() * numberOfPeople;
        console.log(Math.floor(randomPersonPosition) + " - " + Math.ceil(randomPersonPosition) + " - " + randomPersonPosition)

        var randomPerson= guestList[Math.floor(randomPersonPosition)];
        return randomPerson + " is going to buy lunch today!"

    } 

console.log(whosPaying(guestList))