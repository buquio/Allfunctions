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
