//This page is an evolution of my midterm personal page.
//Now not only do we allow users to choose from a random cycling assortment
//of facial features but we allow them to place and resize those features on the face.

// This page is going to be using a number of images
// which will be called up at random, this will be used as a limiter
const AVAILABLE_IMAGES = 7;

//As the page loads we allow our various facial features to be manipulated by the user.
$(document).ready(function() {
  $( function() {
    //We apply jquery UI's resizable functionality to all of the face parts.
    $( ".facepart" ).resizable();
  } );

  $( function() {
    //We also apply jquery UI's draggable functionality to all of the face parts.
      $( ".facepart" ).draggable();
    } );

    $('#left').click(selectRandomLeft);
    $('#right').click(selectRandomRight);
    $('#nose').click(selectRandomNose);
    $('#mouth').click(selectRandomMouth);

    // Each div is identifyied by what part of my face it represents
    // and each is activated on click

    // Left + Right for my left and right eyes are the
    // only questionable parts of this naming convention
    // I perhaps should have gone with leftEye rightEye for everything
});

function selectRandomLeft() {
  // This is using the ground work from our in-class exercise
  // We first create a number using another function  * see bottom *
  var imageNumber = randomIntegerInRange(0,AVAILABLE_IMAGES);

  // This variable uses the number generated previously to direct to an image
  var imageSource = "../images/left" + imageNumber + ".png";

  // Here we start by telling js we want to affect the left eye div
  // We are then going to alter its css properties
  // Specifically the 'backgroundImage' which is responsible for which image is shown
  // Finally using the previous variable we change the image to a new randomly generated image
  $('#left').css("backgroundImage", "url(" + imageSource + ")" ) ;
};

// These next three functions are carbon copies of the first
// only with the appropriate names changed in order to
// affect the right eye, nose and mouth seperately
function selectRandomRight() {

  var imageNumber = randomIntegerInRange(0,AVAILABLE_IMAGES);
  var imageSource = "../images/right" + imageNumber + ".png";

  $('#right').css("backgroundImage", "url(" + imageSource + ")" ) ;
};

function selectRandomNose() {

  var imageNumber = randomIntegerInRange(0,AVAILABLE_IMAGES);
  var imageSource = "../images/nose" + imageNumber + ".png";

  $('#nose').css("backgroundImage", "url(" + imageSource + ")" ) ;
};


function selectRandomMouth() {

  var imageNumber = randomIntegerInRange(0,AVAILABLE_IMAGES);
  var imageSource = "../images/mouth" + imageNumber + ".png";

  $('#mouth').css("backgroundImage", "url(" + imageSource + ")" ) ;
};




function randomIntegerInRange(min,max) {

  //Here I'm borrowing the pseudo-random number generating function from previous exercises
  return Math.floor(Math.random() * (max - min)) + min;

}
