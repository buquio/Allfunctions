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

//////////////FOR LOOP & FOR OF
const names = ['Karl', 'John', 'Steve'];
const people = [{ name: 'Karl', location: 'UK' }, { name: 'Steve', location: 'US' }];

// looping over names using both for & for of
for (let i = 0; i < names.length; i++) {
    // console.log(names[i]);
}
// B. FOR OR
for (const name of names) {
    // console.log(name);
}



// looping through an array of objects using both for and for of
for (let i = 0; i < people.length; i++) {
    // console.log(people[i].name);
    // console.log(people[i].location);
}
// B. FOR OR
for (const person of people) {
    console.log(person.name);
    console.log(person.location);
}