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
  document.getElementById('_fullName').innerText =  typeof fullNameString !== "undefined" ? fullNameString : fullName;
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
  document.getElementById('_dob').innerText =  typeof yearOfBirthString !== "undefined" ? yearOfBirthString : yearOfBirth
}catch(error){console.error(error)}
try{
  document.getElementById('_hobby').innerText =  typeof hobbyString !== "undefined" ? hobbyString : hobby
}catch(error){console.error(error)}
try{
  document.getElementById('_funFact').innerText = `Did you know that ${funFact}`
}catch(error){console.error(error)}

let current = 1
let height = $('.roles').height()
let numberDivs = $('.roles').children().length
let first = $('.roles div:nth-child(1)')


function mutateStars(inc){
  switch (inc) {
    case 1:
      incrementBy1()
      break;
    case 2:
      incrementBy2()
      break;
    case -1:
      decrementBy1()
      break;
    case -2:
      decrementBy2()
      break;
  }

  refreshStars()
}

function refreshStars(){
  try{
    const starsImages = [
      "https://user-images.githubusercontent.com/8784343/133987243-93896911-a3f4-4be5-8889-22b2896f8d79.png",  
      "https://user-images.githubusercontent.com/8784343/133987239-76d6b3ce-abe2-4172-965c-aedc7c313480.png",
      "https://user-images.githubusercontent.com/8784343/133987246-c4b26d78-974e-483e-ac5a-bc80367d7473.png",
      "https://user-images.githubusercontent.com/8784343/133987248-e9ec927f-5c10-4e33-bd6d-14ff0c945018.png",
      "https://user-images.githubusercontent.com/8784343/133987251-3fa63f1b-49d7-4a6e-8195-8165481339bd.png",
      "https://user-images.githubusercontent.com/8784343/133987252-e5f6935c-bb8f-4d4f-b314-3fc51b0e3e51.png"
    ]
    if(stars <= 0){
      stars = 0;
    }
    else if (stars > 5){
      stars = 5;
    }
    console.log("stars", stars, starsImages[stars])
    document.getElementById("stars").src = starsImages[stars];
  }catch(error){
    console.error("⚠️ Make sure you add stars ⭐️", error)
  }
}



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
