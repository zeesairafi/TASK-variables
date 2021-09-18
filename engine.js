/**
 *   🔴🔴 DON'T TOUCH THIS FILE 🔴🔴 
 */

/**
 * `document.getElementById` function will access the elements in the HTML file. 
 * This is called DOM manipulation
 * We are manipulating the elements in the HTML file through JS
 * which is one of the reasons JS eas invented! 
 */
try{
  document.getElementById('_fullName').innerText = fullName
}
catch(error){console.error(error)}
try{
  document.getElementById('_image').src = image 
}catch(error){
  console.error(error)
  const placeholderAvatar = "https://user-images.githubusercontent.com/8784343/133905455-8b304ea7-815e-4729-af9c-c0252df29e52.jpg";
  document.getElementById('_image').src = placeholderAvatar;
}
try{
  document.getElementById('_dob').innerText = yearOfBirth
}catch(error){console.error(error)}
try{
  document.getElementById('_hobby').innerText = hobby
}catch(error){console.error(error)}
try{
  document.getElementById('_funFact').innerText = funFact
}catch(error){console.error(error)}

let current = 1
let height = $('.roles').height()
let numberDivs = $('.roles').children().length
let first = $('.roles div:nth-child(1)')



/**
 * This function makes the carousel effect every 2000 ms, which is 2 seconds.
*/
setInterval(function () {
  let number = current * -height
  first.css('margin-top', number + 'px')
  if (current === numberDivs) {
    first.css('margin-top', '0px')
    current = 1
  } else current++
}, 2000)
/**
 * Secret function
 */

try{
  let im = image 
  try{
    image = "https://user-images.githubusercontent.com/8784343/133905760-4e6adc27-e3ff-40ac-9999-f0c419b14311.png"
    setTimeout(function(){
      document.getElementById('_image').src = image;
      console.error("Hidden task!: Change the image to be constant not variable")
    }, 10000)
  }
  catch(error){
    console.log("✅ Great! you made the image constant")
  }
}
catch(error){}
