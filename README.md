# Variables

After this task you should be able to have a better understanding of variables, constants, and string interpolation.

## Instructions

- Fork, and clone this repo to your development folder. 
- Open the repo in finder and double click on `index.html`.  
  This will open the website using Chrome.
- After every edit you must save, go to the browser, and refresh the page
- Only edit `index.js` file, don't touch any other files
- 🔴 DON'T MAKE ANY CHANGES ON `index.html`.  
  This is a lesson about variables not HTML.

### 1. Variable and Constants (Easy Peasy Lemon Squeezy 🍋)

In `index.js` you should define the following variables with these exact names:

1. `fullName`      -> assign it a value of your full name
2. `yearOfBirth`   -> assign it a value of your year of birth
3. `hobby`         -> assign it a value of your favorite hobby
4. `funFact`       -> assign it a value of some fun fact about yourself 
5. `image`         -> assign it a value of a url of your image or any image that represents you online


 
This what it should look like  

![screenshot](https://user-images.githubusercontent.com/8784343/133906548-0bf3f1f2-389d-4fd4-ae83-03cbcb2f6978.gif)



### 2. String Interpolation (Challenging 🤼‍♀️)

This website isn't very informative. It would be better if the information was displayed in a nicer way.  
Let's use the variables we already created to make some new fancy strings of text.

Create the following new variables with these exact names and containing these interpolated strings:

1. `fullNameString`      -> assign it to: "My name is {YOUR_FULL_NAME}"
2. `yearOfBirthString`   -> assign it to: "I am {YOUR_AGE}" (make sure you calculate your age from your year of birth)
3. `hobbyString`         -> assign it to: "My hobby is {YOUR_HOBBY}"


This what it should look like  

![screenshot](https://user-images.githubusercontent.com/8784343/133906790-3012aad2-4adc-489a-ae49-b80c74f8a7f7.gif)

### 3. Reassignment (Spciy 🌶)

You might have noticed the buttons and the stars at the bottom of the page. 
This is your hacker-score! Pressing the buttons should update it, but it's not working!

In `index.js` we've defined a `stars` variable:
```js
let star = 0;
```

We've also deifned four functions (more on functions later) called `incrementBy1`, `incrementBy2`, `decrementBy1`, and `decrementBy2`.

Your job is to write the code inside those functions that will update the value of `stars`! Good luck!

