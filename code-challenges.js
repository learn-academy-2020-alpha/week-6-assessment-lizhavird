// ASSESSMENT 6: Coding Practical Questions


// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = 
[{name: "ford prefect", occupation: "hitchhiker"}, 
{name: "zaphod beeblebrox", occupation: "president of the galaxy,"}, 
{name: "arthur dent", occupation: "radio employee"}]

// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is the president of the galaxy." "Arthus Dent is a radio employee."

//tried a few things. i think i need to destructure the array and i'm not sure how to do so, so i psuedocoded.

//destructure array
//use charAt index name && toUpperCase to capitalize first letter of each name


// function cap (array) {




// --------------------2) Create a function that takes in a mixed data array and returns an array of only the remainder of the numbers when divided by 3.
//returns undefined
var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
var newarray=[]

function remainder (array,value) {
for (let i=0;i<array.length;i++)
    if (Number.isInteger(value)===true) {
        return value % 3
    }
    else continue
}
console.log(remainder(testingArray1))





// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// // Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]
var twoAr= testingArray3.concat(testingArray4)
    function getUnique(array){
        var uniqueArray = [];
        for(i=0; i < array.length; i++){
            if(uniqueArray.indexOf(array[i]) === -1) {
                uniqueArray.push(array[i]);
            }
        }
        return uniqueArray;
    }
    
console.log(getUnique(twoAr))