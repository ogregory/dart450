/*

Scroll Blasting
Pippin Barr

Using Blast.js with ScrollMagic to make the text in a div have a
staticy effect as you scroll past it.

*/

// Colours to change the background colour of words to


$(document).ready(function() {

  // Blast the content into words
  $('#title').blast({
    delimiter: 'word'
  });

  // Create our controller for ScrollMagic
  var controller = new ScrollMagic.Controller();

  // Make a new scene for handling scrolling in our #content element
  // Give it a duration based on its height
  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger",
    duration: $('#trigger').height(),
    //offset: 200,
  });


  scene.on("update", function (e) {

    var dir = e.target.controller().info("scrollDirection");

    if (dir == "FORWARD") {
      $('.blast').each(function () {

var fontSize = parseInt($(this).css("font-size"));
          fontSize = fontSize + 1 + "px";
          $(this).css({'font-size':fontSize});
      });
    }

    else if (dir == "REVERSE") {
      $('.blast').each(function () {
          var fontSize = parseInt($(this).css("font-size"));
          fontSize = fontSize - 1 + "px";
          $(this).css({'font-size':fontSize});
        });
    }

  });



  // We want to turn the effect off when the scrolling leaves our
  // content div, so we need a 'leave' event where we just reset
  // the background colour to white.
  scene.on("leave", function (e) {
    $('.blast').css({'font-size': 36});
  });

  // Moving the trigger hook toward the top of the scrollbar
  scene.triggerHook(0.1);

  // scene.addIndicators();

  // Add the scene to our controller so it does something
  scene.addTo(controller);

});


// getRandomElement (array)
//
// Helper function get pull a random element from an array
function getRandomElement(array) {
  return (array[Math.floor(Math.random() * array.length)]);
}
