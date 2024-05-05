// expose.js
window.addEventListener('DOMContentLoaded', init);
// Globally Instanciate confetti
const jsConfetti = new JSConfetti();

function init() {
  // Get selector
  const select = document.getElementById("horn-select");
  // Get square that displays the pics
  const display = document.querySelector("img");
  // Event listener on dropdown menu (selector)
  select.addEventListener("input", updateImage);

  // Update the image according to dropdown choice
  function updateImage(e) {
    // If the dropdown (selector) choses the option with the value "air-horn"
    if(select.value === "air-horn") {
      // make the square display the corresponding image
      display.src = "assets/images/air-horn.svg";
    }
    if(select.value === "car-horn") {
      display.src = "assets/images/car-horn.svg";
    }
    if(select.value === "party-horn") {
      display.src = "assets/images/party-horn.svg";
    }    
  }

  // Get sound slider 
  const sound = document.getElementById("volume");
  // Get volume's icon
  const soundImg = document.getElementById("volume-controls").querySelector("img");
  // Add event listener to update the volume variables
  sound.addEventListener("mouseup", updateVolume);

  // Update volume variables
  function updateVolume(e) {
    // Updates value (how much volume to play the audio with)    
    // Depending on the value, update volume ICON
    if(sound.value == 0) {
      soundImg.src = "assets/icons/volume-level-0.svg";
    }
    if(sound.value > 0 && sound.value < 33) {
      soundImg.src = "assets/icons/volume-level-1.svg";
    }
    if(sound.value >= 33 && sound.value < 67) {
      soundImg.src = "assets/icons/volume-level-2.svg";
    }
    if(sound.value >= 67) {
      soundImg.src = "assets/icons/volume-level-3.svg";
    }
  }

  // Get play sound button
  const butt = document.querySelector("button");
  // Get the audio (to access and change its src)
  const audi = document.querySelector("audio");
  // Add an event listener so that it does smth on click
  butt.addEventListener("click", playSound);

  // Play sound according to the dropdown menu
  function playSound(e) {
    // update volume (1 == 100%, so divide volume's value (that ranges from 0-100) by 100).
    audi.volume = (sound.value)/100;

    if(select.value === "air-horn") {
      // update audi's src
      audi.src = "assets/audio/air-horn.mp3";
      // play it
      audi.play();
    }
    if(select.value === "car-horn") {
      audi.src = "assets/audio/car-horn.mp3";
      audi.play();
    }
    if(select.value === "party-horn") {
      audi.src = "assets/audio/party-horn.mp3";
      audi.play();
      // SHOOT CONFETTI
      jsConfetti.addConfetti();
    }    
  }
}