var buttonArray = document.querySelectorAll(".drum"); //load array with all drum buttons
var buttonArrayLength = buttonArray.length; //get length of array for for-loop use.

//add eventlistener to each drum button
for (var i = 0; i < buttonArrayLength; i++) {

  //detecting mouse clicks
  buttonArray[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });
} //end for

//detecting keyboard presses
document.addEventListener("keydown", function(event) {
  //pass event.key as a lowercase letter even if shift/caps lock is on
  makeSound(event.key.toLowerCase());
  buttonAnimation(event.key.toLowerCase());
});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    default:
      console.log(event);
  }//end switch
} //end makeSound()


function buttonAnimation(key) {

  var activeButton = document.querySelector("." + key);

  activeButton.classList.add("pressed");

  //After 0.1s removed pressed class
  setTimeout(function () {activeButton.classList.remove("pressed")}, 100);

}//end buttonAnimation()
