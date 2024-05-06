// explore.js
window.addEventListener('DOMContentLoaded', init);
const synth = window.speechSynthesis;

function init() {
  // Wait for voices to come
  if(synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = () => populateVoices();
  }

  // Get face image
  const face = document.querySelector("img");
  // Get the input text
  const inputText = document.getElementById("text-to-speak");
  // Get button that plays the voice
  const talkButton = document.querySelector("button");
  // add event listener to the button
  talkButton.addEventListener('mouseup', playText);
  // Instanciate voice player
  const voicePlayer = new SpeechSynthesisUtterance();
  // Get select element 
  let voiceSelector = document.getElementById("voice-select");
  
  // Play the text
  function playText(e) {
    // Give input text to voice
    voicePlayer.text = inputText.value;
    // Map the input's language to the voice
    voicePlayer.lang = voiceSelector.value; // the value of the select element EQUALS what's currently selected bro
    // play text
    speechSynthesis.speak(voicePlayer);
  }

  // Simultaneously, open and close mouth accordingly:
  voicePlayer.onstart = () => {
    face.src = "assets/images/smiling-open.png"; 
  };
  voicePlayer.onend = () => {
    face.src = "assets/images/smiling.png"; 
  };
}


function populateVoices() {
  // Set up an array to store voices (will use to populate select's options)
  const voices = synth.getVoices(); // array
  
  // Get select element 
  let voiceSelector = document.getElementById("voice-select");

  // populate select object with voice options
  voices.forEach(voice => {
    console.log("inside");
    const option = document.createElement("option");
    option.textContent = `${voice.name} (${voice.lang})`;
    option.setAttribute("value", voice.lang);
    option.setAttribute("data-name", voice.name);
    voiceSelector.appendChild(option);
  });
}