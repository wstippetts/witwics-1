// Having deciphered the message and knowing what she is planning to steal we need to figure who is helping her


// Criminals all have a wanted number and she will most likely work with the one with the highest wanted level
// Given two numbers, write a function that will return  the larger number

function largerNum(num1, num2) {
      // YOUR CODE HERE
}


// We also need to know how successful the criminals have been by grading their number of successes
// Given two numbers, amount successful and total heists, return the corresponding letter grade on percentage that were successful.
// 90 to 10 = "A", 80 to 89 = "B", 70 to 79 = "C", 60 to 69 = "D", 59 and under = "F"
// Example: 
// input: 23, 25
// output: "A"
// Example:
// input: 4, 10
// output: "F"

function crimeGrader(successful, total) {
      // YOUR CODE HERE
}



// To help us better catch the associate we need to know when they are most active.
// Given an integer that represents an hour in the day (1 - 24), write a function that returns "morning", "afternoon", "evening", or "night" based off of what hour it is. You'll need to think in military time.
//   morning is between 5am and 11am (5 - 11)
//   afternoon is between 12pm and 5pm (12 - 17)
//   evening is between 6pm and 9pm (18 - 21)
//   night is between 10pm and 4am (22 -24 and 1 - 4)
//   Make sure your ranges are inclusive
function timeOfDay(hour) {
      // YOUR CODE HERE
}

// Our surveillance team finds the closer we get to catching the associate the hotter the person gets, we can use this to narrow down the person

// Write a function that will take in a number and return 'suspicious' if it indicates the person is over 98.6° and if the person is at or above 103° 'very suspicious', if it is under return 'not suspicious', (hint: try this with string concatenation)
function isSuspicious(temp) {
      // YOUR CODE HERE
}

// We think we might have found the associate, and have added a tracker to their car, to find where the associate is hiding we need to know when their car is stopped

//Write a function that takes in a car object, if it is not moving then return true

// example of car object passed in
let exampleCar = {
    make: "Ford",
    model: "Mustang",
    color: "Red",
    moving: false
}

function isStopped(car) {
      // YOUR CODE HERE
}

// We have found everything we need to capture the associate, to make sure they don't elude us we want to make sure we only capture them when they are at home and their asleep.

// Write a function that returns true if associate is at home and asleep, or false if either one of the statements is false

// example of suspect object passed in
let suspect = {
    atHome: true,
    asleep: true
}

function attemptCapture(suspect) {
      // YOUR CODE HERE
}