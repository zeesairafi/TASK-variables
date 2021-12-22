/**
 * Part 1: Creating Variables and Constants
 * In this file you should define the following variables with the exact names
 *
 * 1. fullName      -> assign it a value of your full name
 * 2. yearOfBirth   -> assign it a value of your year of birth
 * 3. hobby         -> assign it a value of your favorite hobby
 * 4. funFact       -> assign it a value of some fun fact about yourself
 * 5. image         -> assign it a value of a url of your image or ant image that represents you online
 */

// Part 1 answer 👇🏻 ...
let fullName = "Zainab AlSairafi";
let yearOfBirth= 2021-1996;
let hobby= "Coding, Crochet, Diving, Martial Arts, Yoga";
let funFact = "I LOVE WATCHING FRIENDS AND EATING PASTA";
const image = "https://pbs.twimg.com/profile_images/1456600614012690435/Ds2QMBl4_400x400.jpg";





/**
 * Part 2: String Interpolation
 * Create the following new variables that interpolate
 * the variables defined above into strings.
 *
 * 1. fullNameString      -> assign it to: My name is {fullName}
 * 2. yearOfBirthString   -> assign it to: I am {YOUR_AGE}, and make sure you calculate your age from your year of birth
 * 3. hobbyString         -> assign it to: My hobby is {YOUR_HOBBY}
 * 
 * Uncomment the following lines and start interpolating.
 * You can uncomment a line by removing the // at the start
 */

const fullNameString = `My name is ${fullName}`;
const yearOfBirthString = `${yearOfBirth}`;
const hobbyString =` ${hobby}`;


const myStatus= `My Name is ${fullName}` `\n I am ${yearOfBirth}` `\n My hobby is {hobby}`;

console.log(myStatus);
/**
 * Part 3: Re-assignment
 * Increment your hacker score
 * */

let stars = 0;

function incrementBy1() {
  // Increment stars by 1 👇🏻
  stars++;
}
function decrementBy1() {
  // decrement stars by 1 👇🏻
  stars--;
}

function incrementBy2() {
  // Increment stars by 2 👇🏻
  stars+=2;
}
function decrementBy2() {
  // decrement stars by 2 👇🏻
  stars-=2;
}
