// formula based on provided articles in modules
// using Math.log to represent the natural log (ln)
// parameter age will be used to represent the dogs age

// calling div and ip select
let inputDiv = document.getElementById("inputSelect");

// query selector incase elements within div are not called
let dogAgeInput = inputDiv.querySelector('#dogAgeInput');
let submitButton = inputDiv.querySelector('button');

// let dogAge = 6;
function calcDogAge(age) {
    var humanYears = 16 * Math.log(age) + 31;
    return humanYears;
}
// console.log(calcDogAge(dogAge));
// once user presses submit
function showDogAge() {
    let dogAge = document.getElementById('dogAgeInput').value;
    // If the dog age enter is more than 0, less than will result to else
    if(dogAge > 0) {
        let humanYears = calcDogAge(dogAge)
        document.getElementById('result').innerHTML=`I would be ${humanYears.toFixed(0.1)} years old`;
    } else {
        document.getElementById('result').innerHTML='Please enter a valid dog year';
    };
}