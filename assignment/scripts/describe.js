// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a string variable called name and assign 'Dane' as it's value.
// We compare the name variable to the string 'Mary'. If the value of the name variable equals the string 'Mary' we will console.log 'Hi, Mary'. Since the value of the name variable is not Mary, we will console log 'How do you do?'. 
// 
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create the variable secret but do not assign a value. We create a variable code and assign the number 123. 

// We compare the value of code to the number 123. Since the value of code equals 123 we will assign the word 'super' to the secret variable, multiply the value of code by 2, and console log 'super'.

// If the value of code had been more than 250 we would have assigned the word 'duper' to the secret variable and console log 'duper'. 
//

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create the variable isStudent and assign the true boolean value. We create the variable age and assign the number 34. We create a variable zip and assign the number 55407.
// We use a compound conditional to determine if the value of isStudent equals boolean true and if zip is more than 8000. We meet the first condition but not the second so we move on to the next condition. 
// The second compound conditioanl asks if isStudent equals false or if age is less than 30. Neither conditions are met so we move on to the next condition.
//The third condition just wants to know if isStudent equals boolean true. This condition is met and 'Welcome to Prime!' is logged to the console. 

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
//FIX - colorOne is red, but the instructions indicate it is blue. colorTwo is blue, but the instructions indicate the color is red.
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;
FIX - The code below uses the logical operator OR (||). The instructions indicate the logical AND (&&) should be used.
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

FIX - The code below used the less than or equal operator (<=) to determine if miniAge is less than or equal to age. The instructions indicate the greater than or equal operator (>=) should be used to determine if age is greater than or equal to minAge. 
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

